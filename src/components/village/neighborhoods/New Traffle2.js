import React from 'react'
import { Redirect } from 'react-router-dom'
import { Alert, Button, Row, Col, FormControl, FormGroup, ControlLabel, HelpBlock  } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';



//Date object
let current_datetime = new Date()
let day = current_datetime.getDate()
let month = (current_datetime.getMonth() + 1)
let year = current_datetime.getFullYear()

if(month < 10)
   month = '0' + month.toString();

if(day < 10)
   day = '0' + day.toString();

let formatted_date =  year + "-" + month + "-" + day
//A Gregs production!



export default class NewTraffle2 extends React.Component {

    state = {
        description_err: false,
        isLoading: false,
        isLoading2: false,
        show_response: false,
        tweet: false,
        tweet_id: null,
        show_tweet: false,
        tweet_url: null,
        draw_fee: null,
        draw_amount: null,
        draw_days: null,
        duration: null
    }
    
    draw_fee_calculator(){
      var d = new Date()

      var duration = document.getElementById("duration").value
      var dt = new Date(duration)

      var draw_date = dt.getDate()
      var current_date = d.getDate()

      var draw_days = draw_date - current_date
      var draw_amount = draw_days * 5

      this.setState({ draw_amount, draw_days, duration})

    }




    async verify_tweet(){

      this.setState({ show_tweet: true, isLoading2: true})
      const auth_code = localStorage.getItem('auth_code')

      var tweet_url = document.getElementById("tweet_url").value
      var tweet_array = tweet_url.split("/")

      var tweet_id = tweet_array[5]

      var formData = new FormData()
      formData.append('auth_code', auth_code)

      try {
        const res = await fetch('https://iwansell.com/api/get_tweet/' + tweet_id + '/', {
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


      this.setState({ isLoading2: false, tweet_url: tweet_url, tweet_id: tweet_id})



    }


    async submit(){

      this.setState({ isLoading: true})
      const auth_code = localStorage.getItem('auth_code') 

      var formData = new FormData()

      formData.append('auth_code', auth_code)
      formData.append('title', this.props.title)
      formData.append('winners', this.props.winners)
      formData.append('prizes', this.props.prizes)
      formData.append('terms_conditions', this.props.terms_conditions)
      formData.append('about_organizer', this.props.about_organizer)
      formData.append('duration', this.state.duration)
      formData.append('amount', this.state.draw_amount)
      formData.append('tweet_id', this.state.tweet_id)
      formData.append('tweet', this.state.tweet)

      console.log(
        'title: ' + this.props.title + '/n' + 
        'winners: ' + this.props.winners + '/n' +
        'prizes: ' + this.props.prizes + '/n' +
        'terms_conditions: ' + this.props.terms_conditions + '/n' +
        'about_organizer: ' + this.props.about_organizer + '/n' +
        'duration: ' + this.state.duration + '/n' +
        'amount: ' + this.state.draw_amount + '/n' +
        'tweet_id: ' + this.state.tweet_id + '/n' +
        'tweet: ' + this.state.tweet + '/n' 
      )
    

      try {
        const res = await fetch('https://iwansell.com/api/new_traffle/', {
         body : formData,
         method: 'POST',
        })
        const message = await res.json();
          this.setState({
            message
          });

      } catch (e) {
        console.log(e);
      }

      this.setState({ isLoading: false, show_response: true})

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
              <form>
  <Row>
   <Col lg={6} md={6} sm={12} xs={12}>
    <FieldGroup
      id="duration"
      type="date"
      min={formatted_date}
      label="Duration of Draw * (from now)"
      name="duration"
      placeholder="Duration of draw"
      onChange={this.draw_fee_calculator.bind(this)}
    />
    <HelpBlock>Draw starts immediately</HelpBlock>
    </Col>

    <Col lg={6} md={6} sm={12} xs={12}>
      <p>Draw fee $5 per day </p>
      <Alert>
          <p>= ${this.state.draw_amount} for {this.state.draw_days}day(s)</p>
      </Alert>
    </Col>
</Row>

<Row>
    <Col lg={12} md={12} sm={12} xs={12}>
      <FieldGroup
        id="tweet_url"
        type="text"
        label="Copy and paste link of tweet here *"
        name="tweet_url"
        placeholder={this.state.tweet_url}
        onChange={this.verify_tweet.bind(this)}
      />
      <HelpBlock>tweet url eg. https://twitter.com/TheWrap/status/1142515578369978372</HelpBlock>
    </Col>

    {this.state.show_tweet ? (
      <div>
      {this.state.isLoading2 ? (
      <div className="loading">
          <p>Verifying tweet...<Spinner color="#0f0c29" size={22}/></p>
      </div>
    ) : (
      <div>
        {this.state.tweet ? (
        <div className="traffle">
        <div className="tweet-box">
          <p>This is the tweet right?</p>
          <div className="company">{this.state.tweet}</div>
        </div>
        </div>
        ) : (
          <p className="err-msg">Invalid tweet, please enter a valid tweet url</p>
        )}
        
      </div>
    )}
      </div>

    ) : (
      <div/>
    )}

  </Row>


<Row>
    <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={10} smOffset={2} xs={10} xsOffset={2}>    
    <br />
    {this.state.isLoading ? (
      <div className="loading">
          <p>Submitting draw...<Spinner color="#0f0c29" size={22}/></p>
      </div>
    ) : (
      <Button bsStyle="primary" onClick={this.submit.bind(this)}>Pay Draw fee ${this.state.draw_amount} and Finish</Button>
    )}        
    </Col>
  </Row>
  <Row>

    {this.state.show_response ? (

      <div>
        {this.state.message? (
          <Redirect to="/home"/>
         ) : (
          <p className="err-msg">Oops something broke, please refresh the page and try again</p>
        )}
      </div>

    ) : (
      <div/>
    )}
  
  </Row>
  </form>
           </section>
         )
       }
  }
