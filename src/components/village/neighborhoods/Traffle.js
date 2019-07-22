import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert, Row, Col } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import Retweet from './blocks/Retweet'
import Countdown from './blocks/Countdown'

export default class Traffle extends React.Component {


    state = {
        tweet_list: [],
        is_retweet: false,
        isLoading: false,
        isLoading2: false,
        traffle_ticket: 12345,
    }


    duration(date_object){ return Math.floor(new Date(date_object).getTime()) }


    async componentDidMount() {

        this.setState({ isLoading: true})
        const auth_code = localStorage.getItem('auth_code')

        var formData = new FormData()
        formData.append('auth_code', auth_code)
    
        try {
          const res = await fetch('https://iwansell.com/api/traffle_list/', {
            body : formData,
            method: 'POST',
          });
          const tweet_list = await res.json();
          this.setState({
            tweet_list
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
                        <Spinner color="#0f0c29" size={22}/>
                    </div>
                 </div>
                   
                ) : (
                    <section>
               {this.state.tweet_list.map( item => 
                
                <div className="traffle-box">

                   <div className="company">
                        <p>Title: {item.title}</p>
                        <p>Organizer: {item.about_organizer}</p>     
                   </div>

                  <div>
                  <p>Draw Duration:</p>
                   <Alert>
                        <p>Due Date: {item.duration}</p>
                        <Countdown duration={this.duration(item.duration)}/>
                   </Alert>
                  </div>
                   
                   

                   <div>
                   <p style={{ textAlign: "center"}}><b>Tweet:</b></p>
                   <div className="company">
                        <p>{item.tweet}</p>
                    </div>
                    </div>

                    <Alert>
                        <p>Number of winners: {item.winners} </p>
                        <p>Terms and Conditions:</p>
                        <p>{item.terms_conditions}</p>
                    </Alert>

                  <div className="tweet">
                      <Link to={`/retweet_view/${item.tweet_id}`}><Button><img src= { require ('./blocks/houses/images/t-logo.png') } height="30" width="30" alt="twitter-logo" responsive/>View Retweets</Button></Link>
                  </div>

                  <Retweet
                   id = {item.id}
                   tweet_id = {item.tweet_id}
                  />

                  
              
               </div>

                )}
                    </section>
                
                )}
           </section>
         )
       }
  }
