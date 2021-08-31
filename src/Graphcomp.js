import React, { Component } from 'react'
import {AreaChart, XAxis, YAxis, Tooltip, Area, Rectangle, Line} from 'recharts';
import CustomizedDot from './CustomizedDot';


export default class Graphcomp extends Component {

    constructor(){
      super();
      this.data=[
        {name: '01-01 10:00',value: 5000,},
        {name: '01-01 10:01',value: 2000,},
        {name: '01-01 10:02',value: 6000,},
        {name: '01-01 10:03',value: 2780,},      
        {name: '01-01 10:04',value: 9000,},
        {name: '01-01 10:05',value: 7000,},
        {name: '01-01 10:06',value: 7000,},
        {name: '01-01 10:07',value: 3000,},
        {name: '01-01 10:08',value: 7000,},
        {name: '01-01 10:09',value: 1000,},
        {name: '01-01 10:10',value: 700,},
        {name: '01-01 10:11',value: 7000,},
        {name: '01-01 10:12',value: 3000,},
        {name: '01-01 10:13',value: 7000,},
        {name: '01-01 10:14',value: 4500,},
        {name: '01-01 10:15',value: 7000,},
        {name: '01-01 10:16',value: 7800,},
        {name: '01-01 10:17',value: 7600,},
        {name: '01-01 10:18',value: 7000,},
        {name: '01-01 10:19',value: 7000,},
        {name: '01-01 10:20',value: 7700,},
        {name: '01-01 10:21',value: 7100,},
        {name: '01-01 10:22',value: 7000,},
        {name: '01-01 10:23',value: 7300,},
        {name: '01-01 10:24',value: 7000,},
        {name: '01-01 10:25',value: 7400,},
        {name: '01-01 10:26',value: 3400,},
        {name: '01-01 10:27',value: 7000,},
        {name: '01-01 10:28',value: 7000,},
        {name: '01-01 10:29',value: 9000,},
        {name: '01-01 10:30',value: 5000,},
        {name: '01-01 10:31',value: 2000,},
        {name: '01-01 10:32',value: 6000,},
        {name: '01-01 10:33',value: 2780,},      
        {name: '01-01 10:34',value: 7000,},
        {name: '01-01 10:35',value: 8000,},
        {name: '01-01 10:36',value: 700,},
        {name: '01-01 10:37',value: 5000,},
        {name: '01-01 10:38',value: 7000,},
        {name: '01-01 10:39',value: 5000,},
        {name: '01-01 10:40',value: 4000,},
        {name: '01-01 10:41',value: 7500,},
        {name: '01-01 10:42',value: 7200,},
        {name: '01-01 10:43',value: 7300,},
        {name: '01-01 10:44',value: 900,},
        {name: '01-01 10:45',value: 8000,},
        {name: '01-01 10:46',value: 12000,},
        {name: '01-01 10:47',value: 700,},
        {name: '01-01 10:48',value: 7000,},
        {name: '01-01 10:49',value: 7000,},
        {name: '01-01 10:50',value: 7000,},
        {name: '01-01 10:51',value: 7000,},
        {name: '01-01 10:52',value: 9000,},
        {name: '01-01 10:53',value: 1000,},
        {name: '01-01 10:54',value: 7000,},
        {name: '01-01 10:55',value: 3000,},
        {name: '01-01 10:56',value: 7000,},
        {name: '01-01 10:57',value: 7000,},
        {name: '01-01 10:58',value: 7000,},
        {name: '01-01 10:59',value: 9000,},
        {name: '01-01 11:00',value: 9000,},
      ];
    this.state= {data:this.data}}
    render() {
        return (
      <div className="App">
      <button onClick={()=>{
      this.setState(this.state.data=this.data.filter(element => element.name > "01-01 10:00" && element.name < "01-01 10:16"))
      }}>First 15M</button>
      <button onClick={()=>{
        this.setState(this.state.data=this.data.filter(element => element.name > "01-01 09:59" && element.name < "01-01 10:31"))
      }}>First 30M</button>
      <button onClick={()=>{
        this.setState(this.state.data=this.data.filter(element => element.name > "01-01 10:00" && element.name < "01-01 11:01"))
      }}>1H</button>
      <button onClick={()=>{
        this.setState(this.state.data=this.data.filter(element => element.name > "01-01 10:29" && element.name < "01-01 11:01"))
      }}>Last 30M</button>
      <button onClick={()=>{
      this.setState(this.state.data=this.data.filter(element => element.name > "01-01 10:44" && element.name < "01-01 11:01"))
      }}>Last 15M</button>
      <AreaChart activeLabel={<CustomizedDot x={50} y={50}/>} renderCursor={<CustomizedDot x={50} y={50}/>} renderActiveDot={<CustomizedDot x={50} y={50}/>} cursor="pointer" 
      margin={{ top: 0, left: 0, right: 0, bottom: 500 }} width={1336} height={250} data={this.state.data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv">
      <stop offset="100%" stopColor="rgba(255,208,88,255)"/>
    </linearGradient>
  </defs>
  {/* <Legend /> */}
  <XAxis dataKey="name" tick={{ fontSize:"10px", size:"200px", paddingTop:"100px" }}  interval={1} angle={-23} />
  <YAxis dy={-5}/>
  <Tooltip /*renderDots={<CustomizedDot x={50} y={50}/>} activeDot={<CustomizedDot x={5000} y={5000}/>}*//> 
  {/* cursor={<CustomCursor />} */}
  {/* <Line activeDot={<CustomizedDot x={50} y={50}/>} type="monotone" dataKey="pv" stroke="#8884d8" dot={<CustomizedDot x={50} y={50}/>} /> */}
 {/* <CustomizedDot/> */}
  <Area /*renderDots={<CustomizedDot x={50} y={50}/>}*/ activeDot={<CustomizedDot x={50} y={50}/>} /*renderDotItem={<CustomizedDot x={50} y={50}/>}*/ type="monotone" dataKey="value"  fillOpacity={1} fill="url(#colorUv)" />
</AreaChart>
    </div>
        )
    }
}

function CustomTooltip({active, payload, label}){
    var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes();
    if(active){
      return <div>
  <p>{label+", "+time}PM</p>
  </div>
    }
  return null;
  }


// const CustomizedDot = (props) => {
//   const { cx, cy, stroke, payload, value } = props;
//      return (
//   <svg width="20" height="20">
//   <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
// </svg>
// );
// };
const CustomCursor = props => {const { x, y, width, height, stroke } = props;return <Rectangle fill="green" stroke="red" x={5} y={5} width={6} height={7} />}

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip">
//         <p className="label">{`${label} : ${payload[0].value}`}</p>
//         {/* <p className="intro">{getIntroOfPage(label)}</p> */}
//         <p className="desc">Anything you want can be displayed here.</p>
//       </div>
//     );
//   }


