import React from 'react'
import { Link } from 'react-router-dom'
import {  Col, Row, Glyphicon } from 'react-bootstrap'
import Traffle from './neighborhoods/Traffle'
import Draw from './neighborhoods/Draw'


export default class Home extends React.Component {

  state = {
    switch_code: 1,
  }


  switch_method(code){
    if(this.state.switch_code == code){
      
    }else{
      this.setState({ switch_code: code})
    }
    
  }

      render() {
            return (
                 
                <section>
                  <div className="navigation">
                    <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                      <p className="app-name">Traffle Draw</p>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="list">
                      <Link to='/menu_list'>
                          <Glyphicon glyph="option-vertical" style={{ fontSize: 20 }}/>
                      </Link>
                    </Col>
                    </Row>
                    <Row className="tabs">
                      
                      <Col lg={6} md={6} sm={6} xs={6}>
                        <p onClick={() => this.switch_method(1)}>
                          Traffle
                        </p>
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={6}>
                      <p onClick={() => this.switch_method(0)}>
                          Draw
                        </p>
                      </Col>
                    </Row>
                  </div>

                  <Row>
                    {this.state.switch_code ? (
                      <Traffle/>
                    ) : (
                      <Draw/>
                    )}
                  </Row>
                </section>
               
                )
              }
         }
      
