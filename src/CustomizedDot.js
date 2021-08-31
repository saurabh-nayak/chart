import React from "react";
export default class CustomizedDot extends React.Component {
    render() {
        const { x, y, orientation } = this.props;
        const newY = orientation === "bottom" ? y - 35 : y + 35;
        return (
            <svg width="100" height="100">
                <circle cx={x} cy={newY} r="20" stroke="tomato" fill="none"/>
               <circle cx={x} cy={newY} r="25" stroke="gold" fill="none"/>
            </svg>
    //     const {x, y, orientation} = this.props;
    // const newY = orientation === "bottom" ? y - 35 : y + 35;
    // return (
    //   <g>
    //     <circle cx={x} cy={newY} r="20" stroke="tomato" fill="none"/>
    //     <circle cx={x} cy={newY} r="25" stroke="orange" fill="none"/>
    //     <circle cx={x} cy={newY} r="30" stroke="gold" fill="none"/>
    //   </g>
        )
      }
    }

