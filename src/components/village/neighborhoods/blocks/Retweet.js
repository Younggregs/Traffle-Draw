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
      
        this.setState({ isLoading: false, is_retweet: true})

    }

    


       render() {
         return (
           <section>

                  {this.state.isLoading ? (
                    <Spinner color="#ff0000" size={22}/>
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
