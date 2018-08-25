import React, { Component } from 'react';
import axios from 'axios';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import YouTube from 'react-youtube';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      somethingCray: [],
      iterator: 0,
    };
    this.changeIterator = this.changeIterator.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:3000")
      .then((response) => {
        let i = 0;
        for(; i < response.data.length; i++) {
          const someList = [
            ...this.state.somethingCray,
            response.data[i].id
          ]
          this.setState({ somethingCray: someList });
        }
      })
      .catch((err) => {
        console.log("there was an error", err);
      });
  }
  changeIterator(value) {
    if(this.state.iterator === this.state.somethingCray.length - 1) return;
    this.setState({iterator: this.state.iterator + value})
  }


  render() {
    const {somethingCray, iterator} = this.state;
    const opts = {
      playerVars: {
        autoplay: 1
      }
    }
    return (
      <div className="App">
        <FaAngleLeft size={"10em"} color={iterator === 0 ? 'grey' : 'inherit'} onClick={() => this.changeIterator(-1)} />
        {somethingCray ? (
            <YouTube
              key={somethingCray[iterator]}
              onEnd={() => {this.changeIterator(1)}}
              opts={opts}
              videoId={somethingCray[iterator]}
            />
          ) :
          (<p>Loading...</p>)
        }
        <FaAngleRight size={"10em"} color={iterator === somethingCray.length - 1 ? 'grey' : 'inherit'} onClick={() => this.changeIterator(1)} />
      </div>
    );
  }
}

export default App;
