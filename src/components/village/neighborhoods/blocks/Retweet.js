import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class Retweet extends React.Component {


    state = {
        is_retweet: false,
        isLoading: false,
        traffle_ticket: 12345,
    }


    async retweet() {

        this.setState({ isLoading: true})
        const auth_code = localStorage.getItem('auth_code')
    
        var formData = new FormData()
        formData.append('auth_code', auth_code)
    
        try {
          const res = await fetch('http://127.0.0.1:8000/api/retweet/' + this.props.id + '/' + this.props.tweet_id + '/', {
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
   
      
        this.setState({ isLoading: false, is_retweet: true})

    }

    


       render() {
         return (
           <section>

                  {this.state.isLoading ? (
                    <div>   
                      <p>Sending retweet... <Spinner color="#0f0c29" size={20}/></p>
                    </div>
                    
                  ) : (
                  <section>
                    {this.state.is_retweet ? (
                      <div className="ticket">
                           <p>Traffle ticket: {this.state.traffle_ticket}</p>
                       </div>
                    ) : (
                   <div className="tweet"  onClick={() => this.retweet()}>
                    <Button><img src= { require ('./houses/images/t-logo.png') } height="30" width="30" alt="twitter-logo" responsive/>Retweet to contest</Button>
                  </div>
                )}
                 </section>

                )}

             
           </section>
         )
       }
  }
