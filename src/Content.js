import React, { Component } from "react";
import { render } from "react-dom";


class Content extends Component {
  state = {
    count: 0,
    seconds: 0,
    showSeconds:false,
  };

  counterIncrement = () => {
    clearInterval(this.timer);
    this.setState({ count: this.state.count + 1 });
    this.setState({ seconds: this.state.seconds + 60 });
    this.timer = setInterval(this.countSeconds, 1000);
  };

  counterDecrement = () => {
    clearInterval(this.timer);
    this.timer = setInterval(this.countSeconds, 1000);
    this.setState({ count: this.state.count - 1 });
    if (this.state.seconds > 59) {
      this.setState({ seconds: this.state.seconds - 60 });
    } else {
      this.setState({ count: 0 });
    }
  };

  componentDidMount() {
    this.timer = setInterval(this.countSeconds, 1000);
  }

  countSeconds = () => {
    if (this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 });
      this.setState({ count: Math.floor(this.state.seconds / 60) });
    } else {
      clearInterval(this.timer);
    }
  };

  showSecondsHandler = () => {
    const doesShow = this.state.showSeconds;
    this.setState({ showSeconds: !doesShow });
  }




  render() {

    const style = {
      backgroundColor: '#232323',
      margin:'0px',
      marginBottom:'580px',
      height:'100%',
      padding:'50px',
    };
    const secondStyle = {
      
      position:'absolute',
      margin:'420px',
      textAlign:'center',
    };

    let secondsContainer = null;

    if (this.state.showSeconds) {

      secondsContainer= (
        <div className="row"  >
          <b className="col-6  text-light text-center p-lg-5" style={secondStyle}>
            <h1>
              <span className="">
                {this.state.seconds}
              </span> <b></b>
              {this.state.seconds === 1 ? "Second" : "Seconds"}
            </h1>
          </b>
        </div>
      );

    }


    return (
      <div style={style}>

        <div className="row">

          <div className="col-12 text-light text-center p-lg-5" >

            <button
              disabled={this.state.count === 1}
              onClick={this.counterDecrement}
              className="btn btn-light p-4 mr-5"
            >-</button>

            <span className="col-4 mr-5">
              {this.state.count} <b /> <b />
              {this.state.count === 1 ? "Minute" : "Minutes"}{" "}
            </span>

            <button
              disabled={this.state.count === 5}
              onClick={this.counterIncrement}            
              className="btn btn-light p-4 mr-2"
            >+</button>

          </div>

        </div>
        <div className="row"  >
          <b className="col-6  text-light text-center p-lg-5" style={secondStyle}>
            <h1>
              <span className="">
                {this.state.seconds}
              </span> <b></b>
              {this.state.seconds === 1 ? "Second" : "Seconds"}
            </h1>
          </b>
        </div>
        <div style={style}></div>
        

      </div>

    );
  }
}


export default Content;
