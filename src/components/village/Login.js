import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button, Row, Col, Image } from 'react-bootstrap'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import login from './neighborhoods/blocks/houses/store/Store'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.TwitterAuthProvider();


class Login extends React.Component {

  state = {
    auth: false,
    token: null,
    secret: null,
    user: [],
    logged_in: false,
    isLoading: false,
  }


  logged_on(token, secret, user){

      this.setState({ user })
      login(token, secret, user.displayName, user.photoURL)

      
  
  }


  componentDidMount(){
            const that = this

            try {
                 firebase.auth().getRedirectResult().then(function(result) {
                   
                    var success = false
                    if (result.credential) {
                      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                      // You can use these server side with your app's credentials to access the Twitter API.
                      var token = result.credential.accessToken;
                      var secret = result.credential.secret;
                      
                    }
                    // The signed-in user info.
                    var user = result.user;

                    
                    that.logged_on(token, secret, user)
                    

                    console.log(token)
                    console.log(secret)
                    console.log(user)
                  }).catch(function(error) {
                    console.log(error.code)
                    console.log(error.message)
                    console.log(error.credential)
                    // ...
              })

              

            }catch{
              console.log("Control broke")
            }

        }


        mobileTwitterSignin(){
            firebase.auth().signInWithRedirect(provider)
        }


        twitterSignin() {

           const that = this
            
           firebase.auth().signInWithPopup(provider)
            
          .then(function(result) {

            var success = false
            if (result.credential) {
              // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
              // You can use these server side with your app's credentials to access the Twitter API.
              var token = result.credential.accessToken;
              var secret = result.credential.secret;
              success = true;
              
            }
             
              var user = result.user;
              if(success){
                that.logged_on(token, secret, user)
              }

                
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
             <Row>
               <Col lg={6} md={6} smHidden xsHidden>
                  <Image src= { require ('./neighborhoods/blocks/houses/images/bg1.jpg') } style={{ flex: 1, height: undefined, width: undefined }} resizeMode="auto" alt="twitter-logo" responsive/>
               </Col>
               <Col lg={6} md={6} sm={12} xs={12}>
               <section className="login-bg">
               <div className="header">
               <img src= { require ('./neighborhoods/blocks/houses/images/icon.png') } style={{ margin: 20}} height="50" width="50" alt="twitter-logo" responsive/>
                   <p className="headerText">Welcome to <span className="titleDesign">Traffle Draw</span></p>
                   <p className="headerCaption">The first transparent online draw application in the world</p>
               </div>

               {this.state.isLoading ? (
                     <div className="loading">
                         <Spinner color="#0f0c29" size={22}/>
                     </div>
                ) : (

                  <header className="App-header">
         
                  {
                    this.state.user
                      ? <div>
                          <p><img src= {this.state.user.photoURL} alt="thumbnail"/></p>
                          <p>Hello, {this.state.user.displayName}</p>
                        </div>
                      : <p>Please sign in.</p>
                  }
        
                  {
                    this.state.user
                      ? <Link to='/home'>
                            <Button>
                            <img src= { require ('./neighborhoods/blocks/houses/images/t-logo.png') } height="30" width="30" alt="twitter-logo"/>Continue as {this.state.user.displayName}
                            </Button> 
                        </Link>
                      : 
                      <Row>
                      <Col smHidden xsHidden>
                        <Button onClick = {() => this.twitterSignin()}><img src= { require ('./neighborhoods/blocks/houses/images/t-logo.png') } height="30" width="30" alt="twitter-logo" responsive/>Sign in with Twitter</Button>
                      </Col>
                      <Col lgHidden mdHidden>
                      <Button onClick = {() => this.mobileTwitterSignin()}><img src= { require ('./neighborhoods/blocks/houses/images/t-logo.png') } height="30" width="30" alt="twitter-logo" responsive/>Sign in with Twitter</Button>
                      </Col>
                      </Row>
             
             }
                </header>
                
                )}


              </section>

           </Col>
           </Row>
           </section>
         )
       }
  }


  const firebaseAppAuth = firebaseApp.auth();

  const providers = {
  googleProvider: new firebase.auth.TwitterAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);