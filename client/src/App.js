import React, { Component } from 'react';
import ChartForm from './components/ChartForm';
import ChartList from './components/ChartList';
import SongList from './components/SongList';

class App extends Component {
  state = { charts: [] }

  componentDidMount() {
    fetch('/api/charts')
      .then( res => res.json() )
      .then( charts => this.setState({ charts }) )
  }

  createChart = (name) => {
    const chart = { name }
    fetch ('/api/charts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(chart)
    }).then( res => res.json() )
      .then( chart => {
        const { charts } = this.state;
        this.setState({ charts: [...charts, chart] })
      })
  }

  updateChart = (id) => {
    fetch(`/api/charts/${id}`, { method: 'PUT' })
      .then( res => res.json() )
      .then( chart => {
        let charts = this.state.charts.map( c => {
          if (c.id === id )
            return chart;
          return c;
        });
        this.setState({ charts });
      })
  }

  deleteChart = (id) => {
    fetch(`/api/charts/${id}`, { method: 'DELETE' })
      .then( () => {
        const { charts } = this.state;
        this.setState({ charts: charts.filter( c => c.id !== id ) })
      })
  }

  render() {
    return (
      <div className="container center">
        <h1>Charts</h1>
        <ChartForm addChart={this.createChart} />
        <ChartList
          charts={this.state.charts}
          updateChart={this.updateChart}
          deleteChart={this.deleteChart}
        />
        <SongList />
      </div>
    );
  }
}

export default App;
