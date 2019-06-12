import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class Login extends React.Component {


       render() {
         return (
           <section className="login">
               <div className="header">
                   <p className="headerText">Welcome to <span className="titleDesign">Traffle Draw</span></p>
                   <p className="headerCaption">The first transparent online draw application in the world</p>
               </div>
               <p>
                   <Link to ='/Home'>
                    <Button>
                        Signin with twitter
                    </Button>
                   </Link>
                </p>
           </section>
         )
       }
  }
