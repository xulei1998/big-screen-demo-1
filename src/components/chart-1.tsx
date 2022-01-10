import React ,{useEffect,useRef}from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart1=()=>{
  const divRef = useRef(null);
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      
      xAxis: {
        data: ['城关区', '七里河区', '西固区', '红谷区', '永登区', '皋兰区', '榆中区', '兰州新区', '兰州新区'],
        axisTick: {
          show: false  //刻度尖尖去掉
        },
        axisLine: {
          lineStyle: {color: '#083B70'}  //刻度轴的颜色
        },
        axisLabel: {
          formatter(val) {  //使'兰州新区'这种data里的长度>2   换行显示
            if (val.length > 2) {
              const array = val.split(''); //变成数组
              array.splice(2, 0, '\n');  //在第二个字符之后加一个换行
              return array.join(''); //拼接起来
            } else {
              return val;
            }
          }
        },
      },
      grid: {  //柱形图和外边框之间的距离
        x: px(40),  //px根据屏幕的大小变化
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      yAxis: {
        splitLine: {  //横轴条纹刻度
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
      },
      series: [{ //y轴刻度
        type: 'bar',
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
      }]
    }));
  }, []);
  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}