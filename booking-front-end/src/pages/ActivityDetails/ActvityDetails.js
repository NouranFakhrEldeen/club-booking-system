import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next';
import { Redirect, useLocation , useParams } from "react-router-dom";
import { Header, Footer , Activity , DatePickerComp} from '../../components'
import {ListGroup, ListGroupItem} from 'react-bootstrap'


import ActivityItems from "../Activities/ActivityItems";
const ActivityDetail=()=>{
   
const  match= useParams()
 const data = (ActivityItems.filter(a=>a.activityId  == match.id)).[0];
 console.log("data",data )
  const [active , setActive] = useState("Photos")
  console.log("active",active ) 
  const [date, setDate] = useState({
    from: '',
    to: '',
  
  });
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
const  datePickerFromOnChange = (e) => {
    const formatFromDate = e;
    setDate({ ...date, from: formatFromDate });
    setFromDate(formatFromDate);
  };

const  datePickerToOnChange = (e) => {
    const formatToDate = e;
    setDate({ ...dateFilteration, to: formatToDate });
    setToDate(formatToDate);
  };

  const renderSubscriptionPrices=()=>{
    return (
      <Activity
      
        title={data.title}
        image={data.img}
        description={data.description}
        isActivityScreen={false}
        cost={data.cost}
        time={data.time}
        
      />

    )
  }
return (
    <div>
    <Header/>
    <div className= "container">
        <img src={data.img} className= " img-fluid mx-auto d-block"></img>
        <div className="row mt-5 mb-5">

        
        <div className= "col-3"
        //   style={{
        //      padding: "10px",
        //     width: "30%",
        //      background: "#f0f0f0",
        //   }}
        >
      
        <ListGroup style={{ background: "#f0f0f0",}}>
  <ListGroup.Item onClick={()=> setActive("Photos")}>Photos</ListGroup.Item>
  <ListGroup.Item onClick={()=> setActive("Details")}>Details</ListGroup.Item>
  <ListGroup.Item onClick={ ()=>setActive("Price")}>Price </ListGroup.Item>
  <ListGroup.Item onClick={()=> setActive("Booking")}>Booking</ListGroup.Item>

</ListGroup>
        </div>
        <div  className="col-9">
             {active ==="Photos" && ( data.Images?data.Images.map(( item )=>{
                return(
<img src={item.default} className= "p-2"></img>
                )
            }) :null)}
               {active ==="Details" &&
              <div>
                 <h3 className="p-29" style={{color:"black"}}>
                     {data.title}
                 </h3>
                 <p>{data.description}</p>
                  </div>
            }
                 {active ==="Price" &&
              <div >
              {renderSubscriptionPrices()}
            </div>
            }
          {active ==="Booking" &&
              <div >
                  <form>
                     <input placeholder="firstName"></input> 
                     <input placeholder="lastName"></input> 
                     <input placeholder="email"></input> 
                     <input placeholder="mobileNumber"></input>
                     <DatePickerComp
        classesWrapper={'form-group datePickerFromTo padding-0 d-flex'}
        fromDate={fromDate}
        toDate={toDate}
        datePickerFromOnChange={datePickerFromOnChange}
        datePickerToOnChange={datePickerToOnChange}
      />
                     
                  </form>
            </div>
            }
        
        </div>
    </div>
    </div>
 <Footer/>
    </div>
   
)

}
export const ActivityDetails = (withTranslation()(ActivityDetail))
