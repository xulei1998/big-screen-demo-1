import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts';
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import { Chart3 } from '../components/chart-3';
import { Chart4 } from '../components/chart-4';
import { Chart5 } from '../components/chart-5';
import { Chart6 } from '../components/chart-6';
import { Chart7 } from '../components/chart-7';
import { Chart8 } from '../components/chart-8';
import { Chart9 } from '../components/chart-9';
import {Chart10} from '../components/chart-10';
import {Chart11} from '../components/chart-11';
import {Chart12} from '../components/chart-12';
import {Chart13} from '../components/chart-13';


export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className='home'>
      <header style={{backgroundImage:`url(${headerBg})`}}></header>
      <main>
        <section className="section1">
          <Chart1 /> 
          <Chart2 />
        </section>
        <section className="section2">

          <Chart4/>
        </section>
        <section className="bordered section3">
          <Chart3/>          
        </section>
        <section className="section4">
          <Chart6/>
          <div className="bordered 年龄段">
            <h2>国内现有确诊趋势</h2>
            <div className="charts">
              <Chart9/>
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="bordered row1 案发类型">
            <h2>海外重点国家疫情数据</h2>
            <div className="charts">
              <Chart8/>
            </div>
          </div>
          
          <div className="bordered row2 案发街道">
            <h2>近期国内风险地区疫情动态</h2>
            <div className="charts">
              <Chart5/>
            </div>
          </div>

          
        </section>
      </main>
      <footer>
        &copy;&nbsp;徐磊 &nbsp;&nbsp;2020&nbsp;-&nbsp;{year}
      </footer>
    </div>
  );
};
