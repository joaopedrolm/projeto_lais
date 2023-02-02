/*Chart Types: topology e pie */

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Map = ({ type, data, color = null, minColor = null, maxColor = null }) => {

  var pieColors = (function () {
    var colors = ['#f3f3f3','#D2202C','#707070','#2F2E41'],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
  }());

  const options = {
    chart: {
      type,
      backgroundColor: '#ffffff00',
    },
    title: {
      text: '',
    },
    colorAxis: {
      minColor,
      maxColor,
    },
    plotOptions: {
      pie: {
          colors: pieColors,
      }
    },
    series: [
      {
        data,
        states: {
          hover: {
            color,
          },
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Map;
