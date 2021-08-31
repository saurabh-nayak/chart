import React, { Component } from 'react'
import { VictoryArea, VictoryAxis, VictoryChart, VictoryContainer, VictoryZoomVoronoiContainer, VictoryTheme, VictoryTooltip, createContainer, VictoryBar } from 'victory'
import CustomizedDot from './CustomizedDot';

export class Victorcomp extends Component {
   
    constructor(props) {
        super(props)
        this.VictoryZoomVoronoiContainer = createContainer( "cursor","voronoi");
        this.data=[
            {x: '01-01 10:00',y: 5000,label: "A"},
            {x: '01-01 10:01',y: 2000,label: "A"},
            {x: '01-01 10:02',y: 6000,label: "A"},
            {x: '01-01 10:03',y: 2780,label: "A"},      
            {x: '01-01 10:04',y: 9000,label: "A"},
            {x: '01-01 10:05',y: 7000,label: "A"},
            {x: '01-01 10:06',y: 7000,label: "A"},
            {x: '01-01 10:07',y: 3000,label: "A"},
            {x: '01-01 10:08',y: 7000,label: "A"},
            {x: '01-01 10:09',y: 1000,label: "A"},
            {x: '01-01 10:10',y: 700,label: "A"},
            {x: '01-01 10:11',y: 7000,label: "A"},
            {x: '01-01 10:12',y: 3000,label: "A"},
            {x: '01-01 10:13',y: 7000,label: "A"},
            {x: '01-01 10:14',y: 4500,label: "A"},
            {x: '01-01 10:15',y: 7000,label: "A"},
            {x: '01-01 10:16',y: 7800,label: "A"},
            {x: '01-01 10:17',y: 7600,label: "A"},
            {x: '01-01 10:18',y: 7000,label: "A"},
            {x: '01-01 10:19',y: 7000,label: "A"},
            {x: '01-01 10:20',y: 7700,label: "A"},
            {x: '01-01 10:21',y: 7100,label: "A"},
            {x: '01-01 10:22',y: 7000,label: "A"},
            {x: '01-01 10:23',y: 7300,label: "A"},
            {x: '01-01 10:24',y: 7000,label: "A"},
            {x: '01-01 10:25',y: 7400,label: "A"},
            {x: '01-01 10:26',y: 3400,label: "A"},
            {x: '01-01 10:27',y: 7000,label: "A"},
            {x: '01-01 10:28',y: 7000,label: "A"},
            {x: '01-01 10:29',y: 9000,label: "A"},
            {x: '01-01 10:30',y: 5000,label: "A"},
            {x: '01-01 10:31',y: 2000,label: "A"},
            {x: '01-01 10:32',y: 6000,label: "A"},
            {x: '01-01 10:33',y: 2780,label: "A"},      
            {x: '01-01 10:34',y: 7000,label: "A"},
            {x: '01-01 10:35',y: 8000,label: "A"},
            {x: '01-01 10:36',y: 700,label: "A"},
            {x: '01-01 10:37',y: 5000,label: "A"},
            {x: '01-01 10:38',y: 7000,label: "A"},
            {x: '01-01 10:39',y: 5000,label: "A"},
            {x: '01-01 10:40',y: 4000,label: "A"},
            {x: '01-01 10:41',y: 7500,label: "A"},
            {x: '01-01 10:42',y: 7200,label: "A"},
            {x: '01-01 10:43',y: 7300,label: "A"},
            {x: '01-01 10:44',y: 900,label: "A"},
            {x: '01-01 10:45',y: 8000,label: "A"},
            {x: '01-01 10:46',y: 12000,label: "A"},
            {x: '01-01 10:47',y: 700,label: "A"},
            {x: '01-01 10:48',y: 7000,label: "A"},
            {x: '01-01 10:49',y: 7000,label: "A"},
            {x: '01-01 10:50',y: 7000,label: "A"},
            {x: '01-01 10:51',y: 7000,label: "A"},
            {x: '01-01 10:52',y: 9000,label: "A"},
            {x: '01-01 10:53',y: 1000,label: "A"},
            {x: '01-01 10:54',y: 7000,label: "A"},
            {x: '01-01 10:55',y: 3000,label: "A"},
            {x: '01-01 10:56',y: 7000,label: "A"},
            {x: '01-01 10:57',y: 7000,label: "A"},
            {x: '01-01 10:58',y: 7000,label: "A"},
            {x: '01-01 10:59',y: 9000,label: "A"},
            {x: '01-01 11:00',y: 9000,label: "A"},
          ];
        this.state = {
             data:this.data
        }
    }
    
    render() {
        return (
            <div>
<VictoryChart theme={VictoryTheme.material} width={1336} height={250} containerComponent={<VictoryContainer responsive={false}/>}>
<VictoryAxis dependentAxis={false} invertAxis={1} style={{ grid: { stroke: "grey" }, fontSize:"10px" , tickLabels:{angle: -40}}}/>
<VictoryAxis dependentAxis={true} style={{ grid: { stroke: "grey" }}}/>
  {/* <VictoryArea labelComponent={<VictoryTooltip flyoutComponent={<CustomizedDot/>}/>} style={{
              data: {fill: "tomato", width: 20},
              labels: { fill: "tomato"}
            }} data={this.state.data}/> */}
            {/* <VictoryArea labelComponent={<VictoryTooltip flyoutComponent={<CustomizedDot/>}/>} data={this.state.data}/> */}
            <VictoryBar labelComponent={<VictoryTooltip flyoutComponent={<CustomizedDot/>}/>} data={this.state.data}/>
</VictoryChart>
            </div>
        )
    }
}

export default Victorcomp
