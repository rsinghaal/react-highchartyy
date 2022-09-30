import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Chart from './Chart';

const firstData = [
  {
    date: '2020/11/04',
    buy: 622,
    buyRatio: 62.955465587044536,
    neutral: 10,
    neutralRatio: 1.0121457489878543,
    sell: 356,
    sellRatio: 36.032388663967616,
  },
  {
    date: '2020/11/02',
    buy: 570,
    buyRatio: 58.282208588957054,
    neutral: 16,
    neutralRatio: 1.6359918200409,
    sell: 392,
    sellRatio: 40.081799591002046,
  },
  {
    date: '2020/10/30',
    buy: 528,
    buyRatio: 53.987730061349694,
    neutral: 14,
    neutralRatio: 1.4314928425357873,
    sell: 436,
    sellRatio: 44.580777096114524,
  },
  {
    date: '2020/10/29',
    buy: 493,
    buyRatio: 49.949341438703144,
    neutral: 15,
    neutralRatio: 1.5197568389057752,
    sell: 479,
    sellRatio: 48.530901722391086,
  },
];

const secondData = [
  {
    date: '2020/10/28',
    buy: 479,
    buyRatio: 48.33501513622603,
    neutral: 15,
    neutralRatio: 1.513622603430878,
    sell: 497,
    sellRatio: 50.15136226034309,
  },
  {
    date: '2020/10/27',
    buy: 457,
    buyRatio: 46.44308943089431,
    neutral: 17,
    neutralRatio: 1.7276422764227644,
    sell: 510,
    sellRatio: 51.829268292682926,
  },
  {
    date: '2020/10/26',
    buy: 500,
    buyRatio: 50.658561296859176,
    neutral: 22,
    neutralRatio: 2.2289766970618032,
    sell: 465,
    sellRatio: 47.11246200607903,
  },
  {
    date: '2020/10/23',
    buy: 514,
    buyRatio: 52.44897959183673,
    neutral: 14,
    neutralRatio: 1.4285714285714286,
    sell: 452,
    sellRatio: 46.12244897959184,
  },
];

const const1 = () => {
  const [chartData, setChartData] = useState(firstData);
  const [query, setQuery] = useState(0);

  const onClick = () => {
    if (query === 0) {
      setQuery(query + 1);
    }
    if (query === 1) {
      setQuery(query - 1);
    }
  };

  const checkQuery = () => {
    if (query === 0) {
      return firstData;
    }
    if (query === 1) {
      return secondData;
    }
  };

  useEffect(() => {
    setChartData(checkQuery());
  }, [query]);

  return (
    <>
      <button onClick={() => onClick()}>update</button>
      <span>{query}</span>
      <Chart data={chartData} />
    </>
  );
};
export default const1;
