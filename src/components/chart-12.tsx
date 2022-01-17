import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart12 = () => {
  const divRef = useRef(null);
  const data = [
    {value: 0.20, name: '美国'},   //62661272/311036635
    {value: 0.12, name: '印度'},   //35875790/311036635
    {value: 0.06, name: '巴西'},   //22558695/311036635
    {value: 0.047, name: '英国'},  //14617314/311036635
    {value: 0.0392, name: '法国'}, //12205114/311036635
    {value: 0.0342, name: '俄罗斯'}, //10666679/311036635
    {value: 0.0004, name: '中国'}, //134365/311036635
    {value: 0.49, name: '其他'},
  ];
  useEffect(() => {
    let myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      title:{
        show:true,
        text:'累计确诊',
        x: px(40),
        y: px(40),
        textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
          fontFamily: 'Arial, Verdana, sans...',
          fontStyle: 'normal',
          fontWeight: 'normal',
          color: 'white',
        },
      },
      xAxis: {show: false},
      yAxis: {show: false},
      grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        textStyle: {
          color: 'white',
          fontSize: px(25)
        },
        itemWidth: px(20),
        itemHeight: px(10),
        formatter(name) {
          const value = data.find(i => i.name === name)?.value * 100 + '%';
          return name + ' ' + value;
        }
      },
      series: [
        {
          center: ['60%', '50%'],
          type: 'pie',
          radius: '60%',
          label: {show: false},
          labelLine: {show: false},
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }));
  }, []);

  return (
    <div className="chart12">
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
    </div>
  );
};