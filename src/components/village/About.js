import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class Login extends React.Component {


       render() {
         return (
           <section className="login">
               <div className="menu-box">
                   <p className="headerText">Due to a need for <span className="titleDesign" style={{ color: 'white'}}>Transparent Raffle Draws</span></p>
                   <p className="headerCaption">A Gregs Production</p>
               </div>
           </section>
         )
       }
  }
