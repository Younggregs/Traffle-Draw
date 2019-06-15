import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import Countdown from './blocks/Countdown'

export default class Traffle extends React.Component {

     state = {
          draw_list: [],
          isLoading: false,
      }
 
      async componentDidMount() {
  
          this.setState({ isLoading: true})
      
          try {
            const res = await fetch('https://demo1587820.mockable.io/draw_list');
            const draw_list = await res.json();
            this.setState({
              draw_list
            });
          } catch (e) {
            console.log(e);
          }
  
  
          this.setState({ isLoading: false })
  
  
      }
  


       render() {
         return (
           <section className="traffle">
                 {this.state.isLoading ? (
                    <Spinner color="#00ff00" size={22}/>
                ) : (

                    <section>
                         {this.state.draw_list.map(item =>

                         <div className="traffle-box">

                    <div className="company">
                        <p>Title: {item.title}</p>
                        <p>Company: {item.about_organizer}</p>
                        
                    </div>

                    <div>
                    <p>Draw Duration:</p>
                    <Alert>
                        <p>Start Date: </p>
                        <Countdown/>
                    </Alert>
                    </div>

                    <div className="tweet">
                         <p>My Traffle Ticket: {item.traffle_ticket}</p>
                    </div>

                    <div>
                        <p style={{ textAlign: "center"}}><b>Tweet:</b> </p>
                     <Alert>
                        <p>{item.tweet}</p>
                     </Alert>
                    </div>

                     <Alert>
                         <p>Number of winners: {item.winners} </p>
                        <p>Terms and Conditions:</p>
                        <p>{item.terms_conditions}</p>
                     </Alert>
                          
                </div>
                         
                         )}
                    
                </section>

                )}
             
           </section>
         )
       }
  }
