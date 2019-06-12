import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert } from 'react-bootstrap'

export default class Traffle extends React.Component {


       render() {
         return (
           <section className="traffle">
              <div className="traffle-box">

                   <div className="company">
                        <p>Icebox Movie Premiers</p>
                        <p>Draw Duration: Started --  Countdown --</p>
                   </div>
                   <div className="tweet">
                        <p>My Traffle Ticket: </p>
                   </div>
                    <Alert>
                        <p>Control reached the box</p>
                    </Alert>
                    <Alert>
                        <p>Number of winners: </p>
                        <p>Terms and Conditions</p>
                    </Alert>
                  
                    
                        
               </div>


               <div className="traffle-box">
                        <p>Control reached the Draw box</p>
               </div>
               <div className="traffle-box">
                        <p>Control reached the Draw box</p>
               </div>
               <div className="traffle-box">
                        <p>Control reached the Draw box</p>
               </div>
           </section>
         )
       }
  }
