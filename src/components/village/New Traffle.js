import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, FormControl, FormGroup, ControlLabel, HelpBlock, Glyphicon, Image  } from 'react-bootstrap'
import NewTraffle2 from './neighborhoods/New Traffle2'

export default class NewTraffle extends React.Component {


    state = {
        description_err: false,
        next_form : false,
        title_err: false,
        winner_err: false,
        prize_err: false,
        title: null,
        winners: null,
        prizes: null,
        terms_conditions: null,
        about_organizer: null,
    }

    next_form(){
        
        this.setState({ 
          title_err: false,
          winner_err: false,
          prize_err: false
        })
        
        var title = document.getElementById("title").value
        var winners = document.getElementById("winners").value
        var prizes = document.getElementById("prizes").value
        var terms_conditions = document.getElementById("terms_conditions").value
        var about_organizer = document.getElementById("about_organizer").value
        

          if(title){
    
            if(winners){
    
              if(prizes){
                this.setState({
                  title: title,
                  winners: winners,
                  prizes: prizes,
                  terms_conditions: terms_conditions,
                  about_organizer: about_organizer,
                  next_form: true,
                })

    
              }else{
                this.setState({prize_err: true})
              }
    
            }else{
              this.setState({winner_err: true})
            }
    
          }else{
            this.setState({title_err: true})
          }
     
    
    }


       render() {

        function FieldGroup({ id, label, help, ...props }) {
            return (
              <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
              </FormGroup>
          );
        }


         return (
           <section>
                <div className="navigation">
                    {this.state.is_list && (
                      <div className="list">
                      </div>
                    )}
                    <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <Link to='/home'>
                            <p className="app-name">Traffle Draw</p>
                        </Link>
                     
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="list">
                    <Link to='/home'>
                      <Glyphicon glyph="remove" style={{ fontSize: 20, color: '#1da1f2' }}/>
                    </Link>
                    </Col>
                    </Row>
                    <Row className="tabs">
                      
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <p onClick={() => this.switch_method(1)}>
                          Create New Traffle
                        </p>
                      </Col>
                    </Row>
                  </div>
            <Row>
            <Col lg={3} lgOffset={1} md={3} mdOffset={1} smHidden xsHidden>
                        <Image src= { require ('./neighborhoods/blocks/houses/images/bg1.jpg') } style={{ flex: 1, height: undefined, width: undefined }} resizeMode="auto" alt="twitter-logo" responsive/>
                        <Image src= { require ('./neighborhoods/blocks/houses/images/bg1.jpg') } style={{ flex: 1, height: undefined, width: undefined }} resizeMode="auto" alt="twitter-logo" responsive/>
                    </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
            <div className="titleDesign" style={{ fontSize: 25, margin: 20, color: 'white'}}>
               <p>Create New Transparent Raffle</p>
             </div>

             <div className="traffle-box">

               {this.state.next_form ? (
                   <NewTraffle2
                    title = {this.state.title}
                    winners = {this.state.winners}
                    prizes = {this.state.prizes}
                    terms_conditions = {this.state.terms_conditions}
                    about_organizer = {this.state.about_organizer}
                    />
               ) : (

                <form>
                <Row>
                 <Col lg={6} md={6} sm={12} xs={12}>
                  <FieldGroup
                    id="title"
                    type="text"
                    label="Title of Draw *"
                    name="title"
                    placeholder="e.g Iwansell search for a hero!"
                  />
                  </Col>
              
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <FieldGroup
                      id="winners"
                      type="number"
                      label="Set number of winners *"
                      name="winners"
                      cols="5"
                      placeholder="winners"
                    />
                  </Col>
                </Row>
              
              
              <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Prizes *
                    {this.state.prize_err ? (
                    <span className="err-msg">
                     * description required 
                    </span>
                  ) : (
                    <div/>
                  )}
                    </ControlLabel>
                    <FormControl
                      componentClass="textarea"
                      placeholder="Prizes to be won *"
                        id="prizes"
                        name="prizes"
                        rows={3}
                        />
                  </FormGroup>
               </Col>
              
               <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Terms and Condition *
                    {this.state.description_err ? (
                    <span className="err-msg">
                     * description required 
                    </span>
                  ) : (
                    <div/>
                  )}
                    </ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        placeholder="Terms and  conditions goes here "
                        id="terms_conditions" 
                        name="terms_conditions"
                        rows={3}/>
                  </FormGroup>
               </Col>
              
                </Row>
              
                <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>About Organizer(s) *
                    {this.state.description_err ? (
                    <span className="err-msg">
                     * description required 
                    </span>
                  ) : (
                    <div/>
                  )}
                    </ControlLabel>
                    <FormControl 
                    componentClass="textarea" 
                    placeholder="About draw organizer(s)" 
                    id="about_organizer" 
                    name="about_organizer"
                    rows={3}/>
                  </FormGroup>
               </Col>
              
                  <Col lg={6} md={6} sm={3} smOffset={4} xs={3} xsOffset={4}>
                      <br /><Button bsStyle="primary" onClick={() => this.next_form()}>Continue</Button>
                  </Col>
              
                </Row>
                </form>

               )}
               </div>
            </Col>
            </Row>
              
             
             
           </section>
         )
       }
  }
