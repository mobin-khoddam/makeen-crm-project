import React, { useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const ReportCardChart = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        datasets: [
            {
                label: '',
                data: [2, 6, 5, 4, 5, 9, 8, 5, 6, 8, 2, 6, 5, 4, 5, 9, 8, 6],
                fill: true,
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) return null;

                    const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
                    gradient.addColorStop(0, '#3B82F6');
                    gradient.addColorStop(1, '#FFFFFF00');

                    return gradient;
                },
                borderColor: '#3B82F6',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(0, 0, 0, 0)',
                displayColors: false,
                padding: 10,
                callbacks: {
                    label: function (context) {
                        const value = context.raw;
                        return `${value}  ساعت`;
                    },

                    title: function () {
                        return '';
                    },
                },
                bodyFont: {
                    size: 18,
                },
                titleFont: {
                    size: 18,
                },
            },
            legend: {
                display: false,
            },
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            x: {
                ticks: {
                    display: true,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 2,
                },
            },
        },
    };

    return (
        <div dir="ltr" className="overflow-x-auto w-full mb-[117px]">
            <div  className="min-w-[650px] w-full h-[296px]">
                <Line dir="rtl" ref={chartRef} data={data} options={options} />
            </div>
        </div>
    );
};

export default ReportCardChart;
