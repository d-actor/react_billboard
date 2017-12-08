import React from 'react';
import Chart from './Chart';

const ChartList = ({ charts, updateChart, deleteChart}) => (
  <div className="row">
    { charts.map( chart =>

        <a href='./SongList'>
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
