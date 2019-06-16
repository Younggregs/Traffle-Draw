import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert, Table } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class Winner extends React.Component {

     state = {
          winner_list: [],
          isLoading: false,
      }
 
      async componentDidMount() {
  
          this.setState({ isLoading: true})
      
          try {
            const res = await fetch('https://demo1587820.mockable.io/winner_list');
            const winner_list = await res.json();
            this.setState({
              winner_list
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
                    <div className="loading-view">
                     <div className="loading">
                         <Spinner color="#00ff00" size={22}/>
                     </div>
                  </div>
                ) : (

                    <section>
                        {this.state.winner_list.map(item =>
        
                         <div className="traffle-box">

                        <div className="company">
                            <p>Title: {item.title}</p>
                            <p>Company: {item.about_organizer}</p>
                        

                        </div>

                    <div>
                    <p>Draw Duration:</p>
                    <Alert>
                        <p>Start Date: </p>
                        <p>End Date: </p>
                    </Alert>
                    </div>


                    <div className="tweet">
                         <p>My Traffle Ticket: {item.traffle_ticket}</p>
                    </div>

                    <div>
                        <p style={{ textAlign: "center"}}><b>Winners list:</b> </p>
                     <Alert>
                        <p>{item.tweet}</p>
                     </Alert>
                     </div>


                     <Alert>
                         <p>Number of winners: {item.winners} </p>
                        <p>Terms and Conditions:</p>
                        <p>{item.terms_conditions}</p>
                     </Alert>

                     <div>
                        <p style={{ textAlign: "center"}}><b>Winners list:</b> </p>
                    <Alert>
                     <Table striped bordered hover>
                        <thead>
                        <tr>
                            <td><b>Rank</b></td>
                            <td><b>Name</b></td>
                            <td><b>Traffle Ticket</b></td>
                        </tr>
                        </thead>
                        <tbody>
                        {item.winners_list.map( item=>
                            <tr>
                                <td>{item.rank}</td>
                                <td>{item.displayName}</td>
                                <td>{item.ticket_no}</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                    </Alert>
                    </div>
                          
                </div>
                         
                         )}
                    
                </section>

                )}
             
           </section>
         )
       }
  }
