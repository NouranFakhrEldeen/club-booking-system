import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next';
import { Redirect, useLocation , useParams } from "react-router-dom";
import { Header, Footer , Activity , DatePickerComp} from '../../components'
import {ListGroup, ListGroupItem, Form , Row , Button } from 'react-bootstrap'
import DatePicker from 'react-datepicker';

import ActivityItems from "../Activities/ActivityItems";
const ActivityDetail=()=>{
   
  const  match= useParams()
  const data = (ActivityItems.filter(a=>a.activityId  == match.id)).[0];
  console.log("data",data )
  const [active , setActive] = useState("Photos")
  console.log("active",active ) 

  const [dayDate, setDayDate] = useState('');
  
  const  datePickerDayOnChange = (e) => {
    const formatDayDate = e;

    setDayDate(formatDayDate);
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

        
          <div className= "col-md-3 col-sm-12"
     
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
                <Form>
                  <Row>
                    <Form.Group className="col-md-6 col-sm-12" controlId="formGroupFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="firstName"/>
                    </Form.Group>
                    <Form.Group  className="col"controlId="formGroupLastName">
                      <Form.Label>last Name</Form.Label>
                      <Form.Control type="text" placeholder="lastName"/>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="col" controlId="formGroupPhone">
                      <Form.Label>Mobile nubmer</Form.Label>
                      <Form.Control type="number" placeholder="Mobile nubmer"/>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group  className="col"  controlId="formGroupEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Email Address"/>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="col" controlId="formGroupDay">
                      <Form.Label>Day</Form.Label>
                      <DatePickerComp
                        classesWrapper={'form-group datePickerFromTo  d-flex'}
                        dayDate={dayDate}
        
                        datePickerDayOnChange={datePickerDayOnChange}
                      />
                    </Form.Group>
                    <Form.Group  className="col"controlId="formGroupFrom">
                      <Form.Label>From</Form.Label>
                      <Form.Control  as="select" defaultValue="Choose..." placeholder="firstName"/>
                    </Form.Group>
                    <Form.Group  className="col"controlId="formGroupTo">
                      <Form.Label>To</Form.Label>
                      <Form.Control as="select" defaultValue="Choose..." placeholder="firstName"/>
                    </Form.Group>
                  </Row>
                  <Button type="submit" >submit</Button>
                </Form>
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
