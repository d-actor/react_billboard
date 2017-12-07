import React from 'react';
import Chart from './Chart';

const ChartList = ({ charts, updateChart, deleteChart}) => (
  <div className="row">
    { charts.map( chart =>
        <Chart
          key={chart.id}
          {...chart}
          updateChart={updateChart}
          deleteChart={deleteChart}
        />
      )
    }
  </div>
)

export default ChartList;
