import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class Traffle extends React.Component {


    state = {
        tweet_list: [],
        is_retweet: false,
        isLoading: false,
    }

    retweeted(){
        this.setState({ is_retweet: true})
    }


    async componentDidMount() {

        this.setState({ isLoading: true})
    
        try {
          const res = await fetch('https://demo1587820.mockable.io/tweets');
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
                    <Spinner color="#ff0000" size={32}/>
                ) : (
                    <section>
               {this.state.tweet_list.map( item => 
                
                <div className="traffle-box">

                   <div className="company">
                        <p>{item.title}</p>
                        <p>{item.about_organizer}</p>
                        <p>Draw Duration: {item.duration}</p>
                   </div>
                    <Alert>
                        <p><b>Tweet:</b> </p>
                        <p>{item.tweet}</p>
                    </Alert>
                    <Alert>
                        <p>Number of winners: {item.winners} </p>
                        <p>Terms and Conditions:</p>
                        <p>{item.terms_conditions}</p>
                    </Alert>
                  
                  {this.state.is_retweet ? (
                       <div className="ticket">
                            <p>Traffle ticket:</p>
                        </div>
                  ) : (
                    <div className="tweet"  onClick={() => this.retweeted.bind(this)}>
                    <p>Retweet to contest</p>
                  </div>
                   
                )}
                    
                        
               </div>

                )}
                    </section>
                
                )}
            
               

             
           </section>
         )
       }
  }
