import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);


class Login extends React.Component {

  state = {
    auth: false,
  }

  show(user){
    console.log(user);
  }

  

       render() {

        const {
          user,
          signOut,
          signInWithTwitter,
        } = this.props;

        
         return (
           <section className="login">
               <div className="header">
                   <p className="headerText">Welcome to <span className="titleDesign">Traffle Draw</span></p>
                   <p className="headerCaption">The first transparent online draw application in the world</p>
               </div>
              
          <header className="App-header">
         
          {
            user
              ? <div>
                  <p><img src= {user.photoURL} alt="thumbnail"/></p>
                  <p>Hello, {user.displayName}</p>
                </div>
              : <p>Please sign in.</p>
          }

          {
            user
              ? <Link to='/home'>
                    <Button>
                    <img src= { require ('./neighborhoods/blocks/houses/images/t-logo.png') } height="30" width="30" alt="twitter-logo" responsive/>Continue as {user.displayName} {this.show(user)}
                    </Button> 
                </Link>
              : <Button onClick={signInWithTwitter}><img src= { require ('./neighborhoods/blocks/houses/images/t-logo.png') } height="30" width="30" alt="twitter-logo" responsive/>Sign in with Twitter</Button>
          }
        </header>
           </section>
         )
       }
  }

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  twitterProvider: new firebase.auth.TwitterAuthProvider(),
};



  export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Login);
