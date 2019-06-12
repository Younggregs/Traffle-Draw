import React from 'react'
import { Link } from 'react-router-dom'
import {  Col, Row, Glyphicon, Alert } from 'react-bootstrap'
import Traffle from './neighborhoods/Traffle'
import Draw from './neighborhoods/Draw'


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
                      <Glyphicon glyph="remove" style={{ fontSize: 20 }}/>
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

                  <Row className="traffle">
                      <div className="menu-box">
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
                   
                  </Row>
                </section>
               
                )
              }
         }
      
