import React from 'react'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Button, Row, Col } from 'react-bootstrap'

const provider = new firebase.auth.TwitterAuthProvider();

export default class Login2 extends React.Component {



        componentDidMount(){

            try {
                firebase.auth().getRedirectResult().then(function(result) {
                    if (result.credential) {
                      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                      // You can use these server side with your app's credentials to access the Twitter API.
                      var token = result.credential.accessToken;
                      var secret = result.credential.secret;
                      // ...
                    }
                    // The signed-in user info.
                    var user = result.user;
    
                    console.log(token)
                    console.log(secret)
                    console.log(user)
                  }).catch(function(error) {
                    console.log(error.code)
                    console.log(error.message)
                    console.log(error.credential)
                    // ...
                  });

            }catch{

            }
            

        }


        mobileTwitterSignin(){
            firebase.auth().signInWithRedirect(provider)

            firebase.auth().getRedirectResult().then(function(result) {
                if (result.credential) {
                  // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                  // You can use these server side with your app's credentials to access the Twitter API.
                  var token = result.credential.accessToken;
                  var secret = result.credential.secret;
                  // ...
                }
                // The signed-in user info.
                var user = result.user;

                console.log(token)
                console.log(secret)
                console.log(user)
              }).catch(function(error) {
                console.log(error.code)
                console.log(error.message)
                console.log(error.credential)
                // ...
              });
        }


        twitterSignin() {
           firebase.auth().signInWithPopup(provider)
            
          .then(function(result) {
              var token = result.credential.accessToken;
              var secret = result.credential.secret;
              var user = result.user;
                
              console.log(token)
              console.log(secret)
              console.log(user)
           }).catch(function(error) {
              console.log(error.code)
              console.log(error.message)
           });
        }
        
        twitterSignout() {
           firebase.auth().signOut()
           
           .then(function() {
              console.log('Signout successful!')
           }, function(error) {
              console.log('Signout failed!')
           });
        }
        
  
       render() {
        
         return (
           <section className="login">
               <div className="header">
                   <p className="headerText">Welcome to <span className="titleDesign">Traffle Draw</span></p>
                   <p className="headerCaption">The first transparent online draw application in the world</p>
               </div>
              
          <header className="App-header">
         
        <Row>
            <Col smHidden xsHidden>
             <Button onClick = {() => this.mobileTwitterSignin()}>Twitter Signin</Button>
          <Button onClick = {() => this.twitterSignout()}>Twitter Signout</Button>
            </Col>

            <Col lgHidden mdHidden>
             <Button onClick = {() => this.mobileTwitterSignin()}>Twitter Signin</Button>
          <Button onClick = {() => this.twitterSignout()}>Twitter Signout</Button>
            </Col>
        </Row>
          
        </header>
           </section>
         )
       }
  }






  /*oauth_timestamp : 1560905613814

  consumer_key: v5YdSajZcBWmmmiJeL0Gd9OoB

  signature_method: HMAC-SHA1

  oauth_token: 743877620706779136-nCo3eMZAllncWRu2X07zFAByofgyxKH

  oauth_version: 1.0

  oauth_nonce: kYjzVj8Y0ZFabxSWbWvbY3uYSQ2pTgmZeNu2VS4cg

  include_entities:	true

  status: Nothing is difficult everything is a challenge!
  

  oauth_signature: c51x8u/b95v47354N8TwTu/G0dc=

  OAuth oauth_consumer_key=v5YdSajZcBWmmmiJeL0Gd9OoB&oauth_nonce=tRpYHID9TR7WkPABVdnSwwikZESpsrCXQk3MnJ7OQg&oauth_signature=nCeSAAZWtaj7%252BjcDlffaw1N%252FTGs%253D&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1560982522&oauth_token=ZI932wAAAAAA_Bi9AAABa3HPCMs&oauth_version=1.0

  
import tweepy

auth = tweepy.OAuthHandler('v5YdSajZcBWmmmiJeL0Gd9OoB', 'chXjsE3QRcZU0FuuQul6gBFYAwF7yAHpeDZZEtPuWsJ2bH5M1G')
auth.set_access_token('743877620706779136-nCo3eMZAllncWRu2X07zFAByofgyxKH ', 'SMpdyGXjgwQeskKp0BqJRDPWnqfocTTQ90ElRvvn0Ja94')

api = tweepy.API(auth)

public_tweets = api.home_timeline()
for tweet in public_tweets:
    print(tweet.text)

  'POST&https%3A%2F%2Fapi.twitter.com%2F1.1%2Fstatuses%2Fupdate.json&include_entities%3Dtrue%26oauth_consumer_key%3Dv5YdSajZcBWmmmiJeL0Gd9OoB%26oauth_nonce%3DkYjzVj8Y0ZFabxSWbWvbY3uYSQ2pTgmZeNu2VS4cg%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp=1560905613814%26oauth_token%3D743877620706779136-nCo3eMZAllncWRu2X07zFAByofgyxKH%26oauth_version%3D1.0%26status%3DNothing%2520is%2520difficult%2520Everything%2520is%2520a%2520challenge'

*/
  