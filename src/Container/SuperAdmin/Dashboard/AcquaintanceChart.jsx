import { useEffect, useRef, useMemo } from "react";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";

const AcquaintanceChart = () => {
    const chartData = useMemo(() => [
        {
            id: 1,
            title: 'معرف',
            data: [40],
            backgroundColor: "#9B59B6",
            markerColor: "marker:text-[#9B59B6]",
            barPercentage: 1.0,
            categoryPercentage: 1.0,
        },
        {
            id: 2,
            title: 'تلگرام',
            data: [20],
            backgroundColor: "#FAD7D7",
            markerColor: "marker:text-[#FAD7D7]",
            barPercentage: 1.0,
            categoryPercentage: 1.0,
        },
        {
            id: 3,
            title: 'کاریابی',
            data: [20],
            backgroundColor: "#FF77A9",
            markerColor: "marker:text-[#FF77A9]",
            barPercentage: 1.0,
            categoryPercentage: 1.0,
        },
        {
            id: 4,
            title: 'اینستاگرام',
            data: [20],
            backgroundColor: "#F5B041",
            markerColor: "marker:text-[#F5B041]",
            barPercentage: 1.0,
            categoryPercentage: 1.0,
        },
    ], []);

    const chartRef = useRef(null);

    useEffect(() => {
        Chart.register(BarElement, CategoryScale, LinearScale);

        const ctx = chartRef.current.getContext("2d");

        new Chart(ctx, {
            type: "bar",
            data: {
                labels: [""],
                datasets: chartData
            },
            options: {
                responsive: true,
                indexAxis: "y",
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: true,
                        position: 'nearest',
                        titleColor: "#fff",
                        bodyColor: "#fff",
                        borderColor: "#4318FF",
                        borderWidth: 1,
                        padding: 2,
                        displayColors: false,
                        callbacks: {
                            label: function (context) {
                                return `${context.dataset.title}: ${context.raw}%`;
                            },
                        }}
                },
                scales: {
                    x: {
                        stacked: true,
                        display: false,
                    },
                    y: {
                        stacked: true,
                        display: false,
                    },
                },
            },
        });
    }, [chartData]);

    return (
        <div className='bg-white p-6 rounded-[20px] relative w-full'>
            <canvas ref={chartRef} style={{ width: "100%", maxHeight: "20px", minHeight: "20px", borderRadius: "10px" }} />
            <ul className={`list-disc grid grid-cols-2 gap-4 mt-14 shadow-[0px_18px_40px_0px_#7090B01F] w-fit p-6 rounded-lg mx-auto max-sm:text-sm max-[400px]:grid-cols-1`}>
                {chartData.map(item => (
                    <li key={item.id} className={`list-inside text-[#A3AED0] text-start ${item.markerColor}`}>
                        {item.title} {' '}
                        <span className='text-black'>%{item.data}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AcquaintanceChart;
