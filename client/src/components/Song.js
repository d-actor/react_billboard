import React, { Component } from 'react';
import axios from 'axios';

class Song extends Component {

  state = { song: { title: '', artist: '' }}

  componentDidMount() {
    axios.get('/api/songs')
      .then( res => {
        this.setState({ songs: res.data })
        console.log(res.data)
      })
      .catch( res => {
        console.log(res.data);
      });
  }

  render() {
    return(
      <li>
        { this.title } - { this.artist }
      </li>
    )
  }

}

export default Song;
