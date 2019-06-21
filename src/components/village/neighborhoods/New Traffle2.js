import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, FormControl, FormGroup, ControlLabel, HelpBlock  } from 'react-bootstrap'

export default class NewTraffle2 extends React.Component {


    state = {
        description_err: false
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
   <Col lg={12} md={12} sm={12} xs={12}>
    <FieldGroup
      id="duration"
      type="date"
      label="Duration of Draw *"
      name="duration"
      placeholder="Duration of draw"
    />
    </Col>

    <Col lg={12} md={12} sm={12} xs={12}>
      <FieldGroup
        id="tweet"
        type="text"
        label="Copy and paste link of tweet here *"
        name="tweet"
        placeholder="Tweet link"
      />
    </Col>
  </Row>


<Row>
    <Col lg={6} md={6} sm={12} xs={12}>
      <p>Draw fee $5 per day</p>
    </Col>

    <Col lg={6} md={6} sm={3} smOffset={4} xs={3} xsOffset={4}>
        <br /><Button bsStyle="success">Pay Draw fee and Finish</Button>
    </Col>

  </Row>
  </form>
           </section>
         )
       }
  }
