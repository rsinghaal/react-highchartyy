import React from 'react';
import ReactDOM from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './style.css';

class App8 extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick = () => {
    console.log(this.refs.highCharts);
    if (this.refs.highCharts) {
      this.refs.highCharts.chart.series[0].update({
        type: 'line',
      });
    } else {
      console.log('not working');
    }
  };

  onClickBar = () => {
    this.refs.highCharts.chart.series[0].update({
      type: 'bar',
    });
    this.refs.highCharts.chart.series[1].update({
      type: 'bar',
    });
  };

  render() {
    const options = {
      title: {
        text: 'Test',
      },
      xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'John',
          data: [5, 3, 4, 7, 2],
          type: 'column',
        },
        {
          name: 'Jane',
          data: [2, -2, -3, 2, 1],
          type: 'column',
        },
        {
          name: 'Joe',
          data: [3, 4, 4, -2, 5],
          type: 'column',
        },
      ],
    };
    return (
      <div>
        <button onClick={this.onClick}>Line</button>
        <button onClick={this.onClickBar}>Bar</button>

        <HighchartsReact
          ref="highCharts"
          highcharts={Highcharts}
          options={options}
        />
      </div>
    );
  }
}

export default App8;
