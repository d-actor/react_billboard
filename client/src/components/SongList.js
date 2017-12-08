import React from 'react';
import Chart from './Chart';
import Song from './Song';

const createSong = (title) => {
  const song = { title }
  fetch ('/api/songs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(song)
  }).then( res => res.json() )
    .then( song => {
      const { songs } = this.state;
      this.setState({ songs: [...songs, song] })
    })
}

const updateSong = (id) => {
  fetch(`/api/songs/${id}`, { method: 'PUT' })
    .then( res => res.json() )
    .then( song => {
      let songs = this.state.songs.map( s => {
        if (s.id === id )
          return songs;
        return s;
      });
      this.setState({ songs });
    })
}

const deleteSong = (id) => {
  fetch(`/api/songs/${id}`, { method: 'DELETE' })
    .then( () => {
      const { songs } = this.state;
      this.setState({ songs: songs.filter( s => s.id !== id ) })
    })
}

const SongList = ({ songs, updateSong, deleteSong, createSong }) => (
  <div className="row">

      { songs.map( songs =>
          <Song
            key={songs.id}
            {...songs}
            updateSong={updateSong}
            createSong={createSong}
            deleteSong={deleteSong}
          />
      )
    }
  </div>
)

export default SongList;
