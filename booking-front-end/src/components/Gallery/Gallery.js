import React  from 'react'
import { capitalizeFirstWord } from '../../helpers';
import './Gallery.scss';
import bg from '../../images/bg.png';
import blueImage from '../../images/aboutUs.png';
import { withTranslation } from 'react-i18next';
import createClass from 'create-react-class';

const PHOTODATA = [{
  id: 1,
  category: 'Football Yard ',
  imageUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true'
},{
  id: 2,
  category: 'Football Yard ',
  imageUrl: 'https://blistogreen.com.ua/180-home_default/grusha-noyabrskaya-11-13-m.jpg'
},
{
  id: 3,
  category: 'Football Yard ',
  imageUrl: 'http://3.imimg.com/data3/RD/MF/MY-8642081/juicy-red-apples-250x250.jpg'
},{
  id: 4,
  category: 'Glee Arts ',
  imageUrl: 'http://portamur.ru.opt-images.1c-bitrix-cdn.ru/upload/iblock/60f/kartofell.jpg?146035093210522'
},{
  id: 5,
  category: 'Glee Arts ',
  imageUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true'
},{
  id: 6,
  category: 'another',
  imageUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true'
},{
  id: 7,
  category: 'Crossfit ',
  imageUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true'
},{
  id: 8,
  category: 'Camping Area ',
  imageUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true'
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
          <h1 className="title">Gallery</h1>
          <div className="filter-panel">
            <a className="resetBtn" onClick={this.resetFilter}> All </a>
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

