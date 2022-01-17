import React from 'react';

export const Chart5 = () => {
  return (
    <div className="战果">
      <table>
        <thead>
          <tr><th>城市（区）</th><th>省市区</th><th>新增确诊</th><th>现有确诊</th><th>区域风险</th></tr>
        </thead>
        <tbody>
          <tr><td>许昌</td><td>河南</td><td className='red'>+74</td><td>235</td><td>部分中高风险</td></tr>
          <tr><td>安阳</td><td>河南</td><td className='red'>+58</td><td>76</td><td>部分中风险</td></tr>
          <tr><td>津南区</td><td>天津</td><td className='red'>+15</td><td>38</td><td>部分中高风险</td></tr>
          <tr><td>西安</td><td>陕西</td><td className='red'>+13</td><td>1618</td><td>部分中高风险</td></tr>
          <tr><td>郑州</td><td>河南</td><td className='red'>+11</td><td>122</td><td>部分中风险</td></tr>
          <tr><td>西青区</td><td>天津</td><td className='red'>+1</td><td>1</td><td>全部低风险</td></tr>
          <tr><td>深圳</td><td>广东</td><td>0</td><td>4</td><td>部分中风险</td></tr>
          <tr><td>宁波</td><td>浙江</td><td>0</td><td>110</td><td>部分中风险</td></tr>
          <tr><td>金华</td><td>浙江</td><td>0</td><td>2</td><td>部分中风险</td></tr>
          <tr><td>洛阳</td><td>河南</td><td>0</td><td>10</td><td>部分中风险</td></tr>
          
        </tbody>
      </table>
    </div>
  );
};