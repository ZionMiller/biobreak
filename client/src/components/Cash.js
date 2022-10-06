import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  // CategoryScale,
  // LinearScale,
  // BarElement,
  // Title,
  // Tooltip,
  // Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Cash',
    },
  },
  // responsive: true,
  // scales: {
  //   x: {
  //     stacked: true,
  //   },
  //   y: {
  //     stacked: true,
  //   },
  // },
};

const labels = ['Q1', 'Q2', 'Q3', 'Q4'];

const data = {
  labels,
  datasets: [
    {
      label: 'Total Assets',
      // data: 100,
      backgroundColor: '#45f248',
    },
    {
      label: 'Cash & Equivelants',
      // data: 300,
      backgroundColor: '#2db83d',
    },
    {
      label: 'Revenue',
      // data: 186,
      backgroundColor: '#4cd038',
    },
  ],
};



const Cash = ({onCashExClick}) => {

  console.log(onCashExClick)

  return (
    <div>
      <Bar options={options} data={data} />;
    </div>
  )
}

export default Cash