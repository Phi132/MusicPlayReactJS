import React from "react";
import { Line } from 'react-chartjs-2';
const Chart = () => {
    const data = {
        labels: ['7:00', '12:00', '13:00', '15:00', '20:00', '23:00'],
        yAxes: false,
        datasets: [
            {
                label: 'Top 1',

                tension: 0.4,
                hoverRadius: 8,
                radius: 6,
                data: [12, 19, 3, 5, 2, 16],
                backgroundColor: 'white',
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 2
            },
            {
                label: 'Top 2',
                tension: 0.4,
                hoverRadius: 8,
                radius: 6,
                data: [1, 14, 16, 3, 9, 8],
                backgroundColor: "white",
                borderColor: ["rgba(54, 162, 235, 1)"],
                borderWidth: 2
            },
            {
                label: 'Top 3',
                tension: 0.4,
                hoverRadius: 8,
                radius: 6,
                data: [2,3,12,7,6,4],
                backgroundColor: "white",
                borderColor: ["rgba(40, 192, 193, 1)"],
                borderWidth: 2
            }
        ]
    }

    return (
        <>
            <div className="home-container">
                <div className="home-intro-container">

                    <Line

                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        
                    >

                    </Line>

 
                </div>
            </div>
        </>
    )
}


export default Chart;
