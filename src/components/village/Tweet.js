import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import { Base64 } from 'js-base64';

export default class Retweet extends React.Component {


    state = {
        is_retweet: false,
        isLoading: false,
        traffle_ticket: 12345,
        tweet_stats: []
    }


    async retweet() {

      try {
        const res = await fetch('https://api.twitter.com/1.1/statuses/lookup.json?id=1141043254315618304');
        const draw_list = await res.json();
        this.setState({
          draw_list
        });
        console.log(draw_list)
      } catch (e) {
        console.log(e);
      }


    try {
      const res = await fetch('https://api.twitter.com/1.1/statuses/update.json?status=hello', {
       method: 'POST',
       headers:{
        'authorization': 'OAuth oauth_consumer_key="v5YdSajZcBWmmmiJeL0Gd9OoB", oauth_nonce="kYjZFabxSWbWvbY3uYSQ2pTgmZeNu2VS4cg", oauth_signature="c51x8u/b95v47354N8TwTu/G0dc=", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1560905613814", oauth_token="743877620706779136-nCo3eMZAllncWRu2X07zFAByofgyxKH", oauth_version="1.0"' ,
        'content-type': 'application/json'
       }
      })
      const tweet_stats = await res.json();
      console.log(tweet_stats)
    } catch (e) {
      console.log('control reached here ' + e);
    }
   
      
        this.setState({ isLoading: false, is_retweet: true})

    }
    //https://twitter.com/goal/status/1141043254315618304

 
    hmacX(){

      const k = 'chXjsE3QRcZU0FuuQul6gBFYAwF7yAHpeDZZEtPuWsJ2bH5M1G&SMpdyGXjgwQeskKp0BqJRDPWnqfocTTQ90ElRvvn0Ja94'
      const tS = 'POST&https%3A%2F%2Fapi.twitter.com%2F1.1%2Fstatuses%2Fupdate.json&include_entities%3Dtrue%26oauth_consumer_key%3Dv5YdSajZcBWmmmiJeL0Gd9OoB%26oauth_nonce%3DkYjzVj8Y0ZFabxSWbWvbY3uYSQ2pTgmZeNu2VS4cg%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp=1560905613814%26oauth_token%3D743877620706779136-nCo3eMZAllncWRu2X07zFAByofgyxKH%26oauth_version%3D1.0%26status%3DNothing%2520is%2520difficult%2520Everything%2520is%2520a%2520challenge'
      
       
      var CryptoJS = require("crypto-js");
      var hash = CryptoJS.HmacSHA1(tS, k)

      var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
      console.log(hashInBase64)

      return hashInBase64
    }


    getT(){
      var d = new Date();
      return d.getTime()
    }
   

    


       render() {

        

         return (
           <section>
                  {this.state.isLoading ? (
                    <div>
                      
                      <p>Sending Tweet... <Spinner color="#00ff00" size={20}/></p>
                    </div>
                    
                  ) : (
                  <section>
                    {this.state.is_retweet ? (
                      <div className="ticket">
                           <p>Traffle ticket: {this.state.traffle_ticket}</p>
                       </div>
                    ) : (
                   <div className="tweet"  onClick={() => this.retweet()}>
                    <Button><img src= { require ('./neighborhoods/blocks/houses/images/t-logo.png') } height="30" width="30" alt="twitter-logo" responsive/>Send Tweet to contest</Button>
                  </div>
                )}
                 </section>

                )}

             
           </section>
         )
       }
  }
