import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Col, Row, Glyphicon} from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';



export default class RetweetView extends React.Component {

     state = {
          winner_list: [],
          isLoading: false,
          retweet_list: [],
          rank: 0,
          tweet: ''
      }


    duration(date_object){ return Math.floor(new Date(date_object).getTime()) }
 
    async componentDidMount() {
  
          this.setState({ isLoading: true}) 
      
          const auth_code = localStorage.getItem('auth_code')

          var formData = new FormData()
          formData.append('auth_code', auth_code)

          try {
            const res = await fetch('https://iwansell.com/api/get_retweet/' + this.props.match.params.tweet_id + '/', {
             body : formData,
             method: 'POST',
            })
            const retweet_list = await res.json();
              this.setState({
                retweet_list
              });
    
          } catch (e) {
            console.log(e);
          }

      try {
        const res = await fetch('https://iwansell.com/api/get_tweet/' + this.props.match.params.tweet_id + '/', {
         body : formData,
         method: 'POST',
        })
        const tweet = await res.json();
          this.setState({
            tweet
          });

      } catch (e) {
        console.log(e);
      }
  
          this.setState({ isLoading: false })
  
    }


      set_url(screen_name){
          return "https://twitter.com/" + screen_name + "/"
      }



      rank(){
        this.state.rank = this.state.rank + 1
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
                  Retweet List
                </p>
              </Col>
            </Row>
          </div>


          
          
          <div style={{ background: 'white', paddingLeft: 20}}>
          <Row>
          <Col lg={3} lgOffset={1} md={3} mdOffset={1} sm={12} xs={12}>
              <div>
                   <p style={{ textAlign: "center"}}><b>Tweet:</b> </p>
                   <div className="company">
                        <p>{this.state.tweet}</p>
                    </div>
              </div>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
                {this.state.isLoading ? (
                 <div className="loading-view">
                    <div className="loading">
                        <Spinner color="#0f0c29" size={22}/>
                    </div>
                 </div>
                   
                ) : (
                <div>
                  <p><b>Recorded Retweets: {Object.keys(this.state.retweet_list).length}</b></p>
                

                <Table striped bordered hover>
                  <thead>
                  <tr>
                      <td><b>Rank</b></td>
                      <td><b>Profile Image</b></td>
                      <td><b>Name</b></td>
                      <td><b>Location</b></td>
                      <td><b>Traffle Ticket</b></td>
                  </tr>
                  </thead>
                  <tbody>
                {this.state.retweet_list.map(item =>(
                      <tr>
                         {this.rank()}
                          <td>{this.state.rank}</td>
                          <td><p><img src={item.profile_image} alt="thumbnail"/></p></td>
                          <td><a href={this.set_url(item.screen_name)}><p><b>{item.name}</b></p>@{item.screen_name}</a></td>
                          <td>{item.location}</td>
                          <td>{item.user_id}</td>
                      </tr>
                ))}
                </tbody>
                </Table>
                </div>
                )}
            </Col>
           
          </Row>
          </div>

          
           
           </section>
         )
       }
  }
