import React from 'react'
import { Link } from 'react-router-dom'
import {  Col, Row, Glyphicon, Navbar } from 'react-bootstrap'
import Traffle from './neighborhoods/Traffle'
import Draw from './neighborhoods/Draw'
import Winner from './neighborhoods/Winner'
import { StickyContainer, Sticky } from 'react-sticky';


export default class Home extends React.Component {

  state = {
    switch_code: 1,
    traffle_code: true,
    draw_code: false, 
    winner_code: false
  }


  switch_method(code){

    switch (code) {
      case 1:
          this.state.traffle_code = true
          this.state.winner_code = false
          this.state.draw_code = false
        break;
      
      case 2:
          this.state.draw_code = true
          this.state.winner_code = false
          this.state.traffle_code = false
        break;
      
      case 3:
          this.state.winner_code = true
          this.state.traffle_code = false
          this.state.draw_code = false
        break;
    
      default:
        break;
    }

    this.forceUpdate();
    
  }

      render() {
            return (
                 
                <StickyContainer>
                   <Sticky>{({ style }) =>
                   <header style={style}>

                    <div className="navigation">
                    <Row>
                    <Col lg={6} md={6} sm={8} xs={8}>
                      <p className="app-name"><img src= { require ('./neighborhoods/blocks/houses/images/icon.png') } height="30" width="30" alt="logo"/>Traffle Draw</p>
                    </Col>
                    <Col lg={6} md={6} sm={4} xs={4} className="list">
                      <Link to='/menu_list'>
                          <p><img src= {'https://pbs.twimg.com/profile_images/865699756793896960/U_RlDKQ9_normal.jpg'} height="30" width="30" alt="logo"/><Glyphicon glyph="option-vertical" style={{ fontSize: 20, color: '#1da1f2' }}/></p>
                      </Link>
                    </Col>
                    </Row>
                    <Row className="tabs">
                      
                      <Col lg={4} md={4} sm={4} xs={4}>
                        <p onClick={() => this.switch_method(1)}>
                          {this.state.traffle_code ? (
                              <div className="active-tab">Traffles</div>
                          ) : (
                            <p>Traffles</p>
                          )}
                          
                        </p>
                      </Col>
                      <Col lg={4} md={4} sm={4} xs={4}>
                      <p onClick={() => this.switch_method(2)}>
                        {this.state.draw_code ? (
                              <div className="active-tab">Draws</div>
                          ) : (
                            <p>Draws</p>
                          )}
                          
                        </p>
                      </Col>
                      <Col lg={4} md={4} sm={4} xs={4}>
                      <p onClick={() => this.switch_method(3)}>
                        {this.state.winner_code ? (
                              <div className="active-tab">Winners</div>
                          ) : (
                              <p>Winners</p>
                          )}
                          
                        </p>
                      </Col>
                    </Row>
                  </div>
                   
                  </header>
                     
                   }</Sticky>

                  <Row>
           
                    {this.state.traffle_code && (
                      <Traffle/>
                    )}

                    {this.state.draw_code && (
                      <Draw/>
                    )}

                    {this.state.winner_code && (
                      <Winner/>
                    )}

                  </Row>
                  
                  </StickyContainer>
               
                )
              }
         }
      
