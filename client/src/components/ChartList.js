import React from 'react';
import Chart from './Chart';
import SongList from './SongList'
import Song from './Song'

const ChartList = ({ charts, updateChart, deleteChart}) => (
  <div className="row">
    { charts.map( chart =>

        <a href='./SongList' key={SongList.chart_id}>
          <Chart
            key={chart.id}
            {...chart}
            updateChart={updateChart}
            deleteChart={deleteChart}
          />
        </a>
      )
    }
  </div>
)

export default ChartList;
