import React from "react";
import { Chart as ChartJS,
ArcElement,
// CategoryScale,
// LinearScale,
Tooltip,
Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
ChartJS.register(
  ArcElement,
  // CategoryScale,
  // LinearScale,
  Tooltip,
  Legend  
)

const DonutChart = () => {
  const data ={
      labels: ['#10', '#20', '#30', '#40', '#50', '#60'],
      datasets: [
          {
              label: '369',
              title: 'Frontline',
              data: [2,4,5,9,4,2.9],
              backgroundColor:['#B3F941','#0034FF', '#FF8C00', '#F9C74F', '#18FFC8', '#90BE6D', '#655B96', '#EFF32C', '#F94144', '#0034FF'],
              
          }
      ]
  }
  const options = {

  }
return (
  <div className="">
      <Doughnut
      data = {data}
      options = {options}
      />
  </div>
);
}

export default DonutChart