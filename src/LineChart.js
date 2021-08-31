import React, { Component } from 'react'

import { Bar } from 'react-chartjs-2';

export class LineChart extends Component {
    
    constructor(){
        super();
        this.yourImage = new Image()
        this.yourImage.src ='C:/Users/saurabh.nayak/Desktop/lands-endslide__800x600.jpg';
        this.data = {
            labels: ['January', 'February', 'March',
                     'April', 'May'],
            datasets: [
              {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56],
                pointRadius: [10, 0, 10, 10],
                pointHoverRadius: 20,
                pointHitRadius: 20,
                pointStyle:['rect', CustomizedDot, 'triangle', 'circle'],
                pointBackgroundColor: "rgba(0,191,255)",
              }
            ]
          }
          this.options = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          };
    }
    
    render() {
        return (
            <div>
              <Bar
          data={this.data}
          options={this.options}
        />  
            </div>
        )
    }
}

const CustomizedDot = (props) => {
    const { x, y, orientation } = this.props;
    const newY = orientation === "bottom" ? y - 35 : y + 35;
     return (
        <svg width="100" height="100">
        <circle cx={x} cy={newY} r="20" stroke="tomato" fill="none"/>
       <circle cx={x} cy={newY} r="25" stroke="gold" fill="none"/>
    </svg>
);
};

export default LineChart
