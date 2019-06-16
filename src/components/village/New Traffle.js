import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, FormControl, FormGroup, ControlLabel, HelpBlock  } from 'react-bootstrap'
import NewTraffle2 from './neighborhoods/New Traffle2'

export default class NewTraffle extends React.Component {


    state = {
        description_err: false,
        next_form : false
    }



    next_form(){
        this.setState({ next_form: true })
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
           <section className="traffle">

             <div className="titleDesign" style={{ fontSize: 25, margin: 20, color: 'white'}}>
               <p>Create New Transparent Raffle</p>
             </div>

             <div className="traffle-box">

               {this.state.next_form ? (
                   <NewTraffle2/>
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
                      placeholder="Prizes to be won *"
                       id="description"
                        name="description"
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
                        id="description" 
                        name="description"
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
                    id="description" 
                    name="description"
                    rows={3}/>
                  </FormGroup>
               </Col>
              
                  <Col lg={6} md={6} sm={3} smOffset={4} xs={3} xsOffset={4}>
                      <br /><Button bsStyle="success" onClick={() => this.next_form()}>Continue</Button>
                  </Col>
              
                </Row>
                </form>

               )}
               </div>
             
           </section>
         )
       }
  }
