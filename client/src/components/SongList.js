import React, { Component } from 'react';
import axios from 'axios';
import Chart from './Chart';
import Song from './Song';

class SongList extends Component {
  state = { songs: [] }

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

  displaySongs = () => {
    return this.state.songs.map ( song => {
      return(<Song key={song.id} song={song} />);
    });
  }

  render() {
    return(
      <div>
      <h1>Songs</h1>
        <ul>
          { this.displaySongs() }
        </ul>
      </div>
    )
  }

}

export default SongList;
