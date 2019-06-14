import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import Retweet from './blocks/Retweet'

export default class Traffle extends React.Component {


    state = {
        tweet_list: [],
        is_retweet: false,
        isLoading: false,
        isLoading2: false,
        traffle_ticket: 12345,
    }

    async retweet(){

    this.setState({ isLoading2: true})

    var formData = new FormData()

    formData.append('traffle_id', 21)
    formData.append('auth_code', 'eindRdhoa3444')

    try {
      const res = await fetch('https://demo1587820.mockable.io/retweet', {
       body : formData,
       method: 'POST',
      })
      const traffle_ticket = await res.json();
        this.setState({
          traffle_ticket
        });
    } catch (e) {
      console.log(e);
    }
        this.setState({ isLoading2: false, is_retweet: true})
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

                  <Retweet/>
              
               </div>

                )}
                    </section>
                
                )}
            
               

             
           </section>
         )
       }
  }
