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
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: `Expenses`,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Q1', 'Q2', 'Q3', 'Q4'];

const data = {
  labels,
  datasets: [
    {
      label: 'Net Loss',
      data: 100,
      backgroundColor: '#901919',
    },
    {
      label: 'R&D',
      data: 300,
      backgroundColor: '#db3511',
    },
    {
      label: 'SG&A',
      data: 186,
      backgroundColor: '#d57070',
    },
    {
      label: 'Total Opex',
      data: 186,
      backgroundColor: '#e45757',
    }
  ],
};


const Expenses = ({}) => {
  return (
    <div>
   
   <Bar options={options} data={data} />;

    </div>
  )
}

export default Expenses