import React from 'react'
import { Link } from 'react-router-dom'
import {  Col, Row, Glyphicon, Alert, Image } from 'react-bootstrap'



export default class Home extends React.Component {

  state = {
    switch_code: 1,
  }

      render() {
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
                          Menu List
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
                      <div className="traffle-box">
                          <Link to='/new_traffle'>
                              <Alert>
                                <p>Create New Draw</p>
                              </Alert>
                          </Link>
                          <Link to='/about'>
                              <Alert>
                                <p>About</p>
                              </Alert>
                          </Link>
                          <Link to='/privacy_policy'>
                              <Alert>
                                <p>Privacy Policy</p>
                              </Alert>
                          </Link>
                          <Link to='/disclaimer'>
                              <Alert>
                                <p>Disclaimer</p>
                              </Alert>
                          </Link>
                          <Link to='/logout'>
                              <Alert>
                                <p>Logout</p>
                              </Alert>
                          </Link>
                      </div>
                      </Col>
                   
                  </Row>
                </section>
               
                )
              }
         }
      
