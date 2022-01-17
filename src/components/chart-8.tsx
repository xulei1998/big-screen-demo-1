import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart8 = () => {
  const divRef = useRef(null);
  const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#82111f','#2e317c','#2376b7'];
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      color: colors,
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['75%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
            formatter(options) {
              return (options.value * 100).toFixed(0) + '%';
            }
          },
          labelLine: {show: false},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: [
            {value: 0.20, name: '美国'},   //62661272/311036635
            {value: 0.12, name: '印度'},   //35875790/311036635
            {value: 0.06, name: '巴西'},   //22558695/311036635
            {value: 0.03, name: '俄罗斯'}, //10666679/311036635
            {value: 0.05, name: '英国'},  //14617314/311036635
            {value: 0.04, name: '法国'}, //12205114/311036635
            {value: 0.50, name: '其他'},
          ]
        }
      ]
    }));
  }, []);

  return (
    <div className="年龄段-图2">
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text">累计确诊</div>
      </div>
      <div className="legend">
        <span style={{background: colors[0]}} />美国
        <span style={{background: colors[1]}} />印度
        <span style={{background: colors[2]}} />巴西
        <span style={{background: colors[3]}} />俄罗斯
        <span style={{background: colors[4]}} />英国
        <span style={{background: colors[5]}} />法国
        <span style={{background: colors[6]}} />其他

      </div>
    </div>
  );
};