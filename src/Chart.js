import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const Chart = (props) => {
  const data = props.data;

  const date = data.map((d) => {
    return d.date.split('/')[1] + '/' + d.date.split('/')[2];
  });
  const buy = data.map((d) => {
    return d.buy;
  });
  const neutral = data.map((d) => {
    return d.neutral;
  });
  const sell = data.map((d) => {
    return d.sell;
  });

  const options = {
    chart: {
      type: 'areaspline',
      backgroundColor: '#141414',
      height: 390,
      spacing: [25, 5, 15, 5],
      plotBorderWidth: 1,
    },
    legend: {
      align: 'top',
      verticalAlign: 'left',
      x: 10,
      y: -28,
      itemStyle: {
        color: '#FFFFFFDE',
      },
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: date,
      tickmarkPlacement: 'on',
      gridLineWidth: 1,
      gridLineColor: '#A0A0A0',
      gridLineDashStyle: 'ShortDash',
      tickPixelInterval: 40,
      tickWidth: 0,
    },
    yAxis: {
      labels: {
        format: '{value}%',
      },
      title: {
        enabled: false,
      },
      opposite: true,
      gridLineWidth: 1,
      gridLineDashStyle: 'ShortDash',
      gridLineColor: '#A0A0A0',
    },
    tooltip: {
      // split: true
    },
    plotOptions: {
      series: {
        fillOpacity: 0.5,
      },
      areaspline: {
        stacking: 'percent',
        lineColor: '#ffffff',
        lineWidth: 1,
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: 'Programme',
        data: buy,
        color: '#EF9A9A',
      },
      {
        name: '中立',
        data: neutral,
        color: '#E3E3E3',
      },
      {
        name: '売り',
        data: sell,
        color: '#9FA8DA',
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        oneToOne={true}
      />
    </div>
  );
};

export default Chart;
