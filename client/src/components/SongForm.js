import React from 'react';

class SongForm extends React.Component {
  state = { title: '', artist: ''}

  handleChange = (e) => {
    this.setState({ title: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.title);
    this.setState({ title: '', artist: ''})
  }

  render() {
    return(
      <h4 className="center">Add A New Song</h4>
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Song Title"
          required
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br />
        <input
          placeholder="Artist"
          required
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }



}
