import React, { Component } from 'react';
import axios from 'axios';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import YouTube from 'react-youtube';

class Home extends Component {
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
        for(let i = 0; i < response.data.length; i++) {
          const someList = [
            ...this.state.somethingCray,
            {
              id: response.data[i].id,
              date: response.data[i].date,
            }
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
        <FaAngleLeft 
          size={"10em"} 
          color={iterator === 0 ? 'grey' : 'inherit'} 
          onClick={() => this.changeIterator(-1)} 
        />
        {somethingCray.length > 0 ? (
            <YouTube
              key={somethingCray[iterator].id}
              onEnd={() => {this.changeIterator(1)}}
              opts={opts}
              videoId={somethingCray[iterator].id}
            />
          ) :
          (<span>Loading...</span>)
        }
        <FaAngleRight 
          size={"10em"} 
          color={iterator === somethingCray.length - 1 ? 'grey' : 'inherit'} 
          onClick={() => this.changeIterator(1)} 
        />
        <div>
          {somethingCray.length ?
            (<span>{somethingCray[iterator].date}</span>)
            :
            (<span></span>)
          }
        </div>
      </div>
    );
  }
}

export default Home;