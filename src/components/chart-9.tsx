import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: '#F7A110',
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['11-12','11-17',' 11-22','11-27','12-02',
               '12-07','12-12','12-17','12-22','12-27',
               '01-01','01-06','01-11'],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val;
          }
        }
      },
      series: [{
        type: 'line',
        data: [
          3200,3250,3000,2800,3000,
          3200,3500,3800,4050,4400,
          5500,6200,6641
        ],
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#F7A110'
          }, {
            offset: 1,
            color: '#1B1D52'
          }]),
        }
      }]
    }));
  }, []);

  return (
    <div className="年龄段-图3">
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};