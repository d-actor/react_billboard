import React from 'react';
import Song from './Song';

createSong = (title) => {
  const song = { title }
  fetch ('/api/songs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(chart)
  }).then( res => res.json() )
    .then( song => {
      const { songs } = this.state;
      this.setState({ songs: [...songs, song] })
    })
}

updateChart = (id) => {
  fetch(`/api/charts/${id}`, { method: 'PUT' })
    .then( res => res.json() )
    .then( chart => {
      let songs = this.state.songs.map( s => {
        if (s.id === id )
          return song;
        return s;
      });
      this.setState({ songs });
    })
}

deleteSong = (id) => {
  fetch(`/api/songs/${id}`, { method: 'DELETE' })
    .then( () => {
      const { songs } = this.state;
      this.setState({ songs: songs.filter( s => s.id !== id ) })
    })
}

const SongList = ({ songs, updateSong, deleteSong, createSong }) => (
  <div className="row">
      { songs.map( song =>
          <Song
            key={song.id}
            {...song}
            updateSong={updateSong}
            createSong={createSong}
            deleteChart={deleteChart}
          />
      )
    }
  </div>
)

export default SongList;
