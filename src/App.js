import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      detail: [],
      name: "",
      namecode: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://ip-api.com/json/?fields=message,query,regionName,city,district,country,currency,countryCode,zip,continent,lat,lon,timezone,isp,org,mobile,proxy,hosting"
      )
      .then((response) => {
        // handle success
        let newdetail = [];
        for (var i in response.data) {
          newdetail.push({ name: i, value: response.data[i] });
        }

        this.setState({
          detail: newdetail,
          name: response.data.country,
          namecode: response.data.countryCode,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="hello">
            <h6>Hello</h6>
          </div>
          <div className="welcome-msg">
            <div className="country">
              <h3>{this.state.name},</h3>
            </div>
            <div className="country-code">
              <h6>({this.state.namecode})</h6>
            </div>
          </div>
          <div className="container">
            <h1>What is IP?</h1>
            <p>
              What? You don't know what an IP address is used for? Don't worry.
              Most of the billions of computer users don't know either, and to
              tell you the truth, that's perfectly alright. Because even though
              it's your passport to the Internet, you never have to think about
              it above is some in depth details about your ip
            </p>
          </div>
          <div className="container">
            <h1>Your IP Detail</h1>
            <div className="list-item">
              <ul>
                {this.state.detail.map((itm, key) => (
                  <li>
                    <span className="name">{itm.name}:</span>{" "}
                    <span className="namevalue">{itm.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <footer>
            <hr />
            Designed & Developed by
            <a href="https://www.instagram.com/jabi_jaleel/">Jabir Jaleel</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
