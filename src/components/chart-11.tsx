import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart11 = () => {
  const divRef = useRef(null);
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#9b1e64','red','blue','green'];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: colors,
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          startAngle: -40,
          type: 'pie',
          radius: ['25%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
            distanceToLabelLine: 0,
            formatter(options) {
              return options.value * 100 + '%';
            }
          },
          labelLine: {show: true, length: 0},
          roseType: 'area',
          itemStyle: {
            shadowBlur: px(200),
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          data: [
            {value: 0.20, name: '美国'},
            {value: 0.12, name: '印度'},
            {value: 0.06, name: '巴西'},
            {value: 0.047, name: '英国'},
            {value: 0.0392, name: '法国'},
            {value: 0.0342, name: '俄罗斯'},
            {value: 0.0004, name: '中国'},
            {value: 0.49, name: '其他国家和地区'},
          ]
        }
      ]
    }));
  }, []);

  return (
    <div className="chart11">
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
      <div className="legend">
        <span style={{background: colors[0]}} />美国
        <span style={{background: colors[1]}} />印度
        <span style={{background: colors[2]}} />巴西
        <span style={{background: colors[3]}} />英国
        <span style={{background: colors[4]}} />法国
        <span style={{background: colors[5]}} />俄罗斯
        <span style={{background: colors[6]}} />中国
        <span style={{background: colors[7]}} />其他国家和地区

      </div>
    </div>
  );
};