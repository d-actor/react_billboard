import React from 'react';

const styles = {
  pointer : {
    cursor: 'pointer'
  },
}

const Chart = ({ id, name, updateChart, deleteChart }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={styles.pointer}>
        { name }
      </div>
    </div>
    <div
      style={styles.pointer}
      className="col m2"
      onClick={() => deleteChart(id)}
    >
      X
    </div>
  </div>
)

export default Chart;
