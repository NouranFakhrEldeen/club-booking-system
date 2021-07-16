import React  from 'react'
import { capitalizeFirstWord } from '../../helpers';
import './Gallery.scss';
import bg from '../../images/bg.png';
import blueImage from '../../images/aboutUs.png';
import { withTranslation } from 'react-i18next';
import createClass from 'create-react-class';
import Images from '../../styles/images/Images';
import i18n from '../../i18n';
const PHOTODATA = [{
  id: 1,
  category: i18n.t('activity.football'),
  imageUrl:Images.football.default
},{
  id: 2,
  category:  i18n.t('activity.football'),
  imageUrl: Images.football2.default
},
{
  id: 3,
  category:  i18n.t('activity.glee'),
  imageUrl: Images.glee.default
},{
  id: 4,
  category:  i18n.t('activity.glee'),
  imageUrl: Images.books.default
},{
  id: 5,
  category:  i18n.t('activity.glee'),
  imageUrl: Images.cross.default
},{
  id: 6,
  category:  i18n.t('activity.crossfit'),
  imageUrl: Images.crossfit.default
},{
  id: 7,
  category: i18n.t('activity.camping'),
  imageUrl: Images.camping.default
}

];
 
var FilterPanel = createClass({

  render: function(){
    return (
      <a onClick={this.props.onClick}>{this.props.category}</a>
  
    )
  }
  
});

var Photo =  createClass({

  render: function(){
    return (
      <div className="photo-container" 
      
        data-category={this.props.category} >
        <img src={this.props.imageUrl} />
        
        
      </div>
    );
  }
  
  
});

  
const PhotoGallery = createClass({

  getInitialState: function() {
    return {
      displayedCategories: PHOTODATA,
      active: false
    };
  },
  toggleActive: function() {
    this.setState({
      active: !this.state.active
    });
  },
  
  selectCategory: function(element){
    console.log('element is: '+ element);
    var categoryName = element.toLowerCase();
    var displayedCategories = PHOTODATA.filter(function(el) {
                      
      var searchValue = el.category.toLowerCase();
      return searchValue.indexOf(categoryName) !== -1;
    });
  
    this.setState({
      displayedCategories: displayedCategories
  
    });
  
  },
  resetFilter: function(element){
    this.setState({
      displayedCategories: PHOTODATA
  
    });
  },
    
      
  
  render: function(){
    var buttonClass = this.state.active ? 'active' : '';
    var categoryToSelect = this.selectCategory;
    var getUniqueCategories=[];
    PHOTODATA.forEach(function(el){
      if(getUniqueCategories.indexOf(el.category) === -1 ) getUniqueCategories.push(el.category);
    })
      
    return (
      <div className= "container">
      
        <div className="overlay-photogallery">
          <h1 className="title"> <b>{i18n.t('Gallery.title')}</b></h1>
          <div className="filter-panel">
            <a className="resetBtn" onClick={this.resetFilter}> {i18n.t('Gallery.all')} </a>
            {
              getUniqueCategories.map(function(el,i){
                var boundClick = categoryToSelect.bind(null,el);
                return <FilterPanel onClick={boundClick} category={el} key={i} />
              })
  
            }   
           
          </div>
          <div className="PhotoGallery">
            <div className="row"> 
              <div className="column">
                {
  
                  this.state.displayedCategories.map(function(el){
                    return (
                  
              
                      <Photo key={el.id} imageUrl={el.imageUrl} category={el.category} />
                     
                  
                    )

                  })
  
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
  
  }
    
    
  
});

export const Gallery = (withTranslation()(PhotoGallery));

