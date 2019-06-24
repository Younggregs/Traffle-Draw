import React, { Component } from "react";

export default class Countdown extends Component {

    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: this.props.duration,
        status: true
      };

      componentDidMount(){
          this.setState({ timerTime: this.props.duration})
          this.forceUpdate()

          this.startTimer()
      }

      startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
          const newTime = this.state.timerTime - 10;
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            });
          } else {
            clearInterval(this.timer);
            this.setState({ timerOn: false });
            //alert("Countdown ended, draw finished");
            this.setState({ status: false })
          }
        }, 10);
      };

      


  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="Countdown">
      {this.state.status ? (
        <div className="Countdown-time">
          Countdown: {hours} : {minutes} : {seconds}
        </div>
      ) : (
          <div> <p>Duration over, Draw ended!</p></div>
      )}
      </div>
    );
  }
}
