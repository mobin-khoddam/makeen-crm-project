import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const AlumniFinancialReportChart = () => {
    const dataValues = [
        {id: 1, label: "دریافتی", value: 40, backgroundColor: "#4318FF", markColor: "marker:text-[#4318FF]"  },
        {id: 2, label: "مانده", value: 60, backgroundColor: "#6AD2FF", markColor: "marker:text-[#6AD2FF]" },
    ];
    const backgroundColors = dataValues.map((item) => item.backgroundColor);

    const data = dataValues.map((item) => item.value);

    const chartData = {
        labels: dataValues.map((item) => item.label),
        datasets: [
            {
                data: data,
                backgroundColor: backgroundColors,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                bodyColor: "#ffffff",
                displayColors: false,
                callbacks: {
                    title: () => null,
                    label: function (context) {
                        const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                        const value = context.raw;
                        const percentage = ((value / total) * 100).toFixed(1) + "%";
                        return `${context.label}: ${percentage}`;
                    },
                },
            },
            datalabels: {
                formatter: (value, context) => {
                    const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                    const percentage = ((value / total) * 100).toFixed(1) + "%";
                    return percentage;
                },
                color: "#fff",
                font: {
                    size: 14,
                },
                anchor: "right",
                align: "right",
            },
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    };

    return (
        <div className='bg-white p-6 rounded-[20px] max-[1380px]:mx-auto max-w-full' style={{ width: "328px" }}>
            <div className='flex justify-between items-center mb-10'>
                <span className='font-semibold max-sm:text-sm'>گزارش مالی فارغ التحصیلان</span>
                <span className='text-[#A3AED0] text-sm'>ماهانه</span>
            </div>
            <Pie
                data={chartData}
                options={options}
                plugins={[ChartDataLabels]}
            />
            <ul className='flex justify-evenly'>
                {dataValues.map((item) => (
                    <li className={`list-disc ${item.markColor}`} key={item.id}>
                    <div className='text-[#A3AED0] flex flex-col'>
                        <span>{item.label}</span>
                        <span className='text-[#2B3674] font-semibold text-xl'>% {item.value}</span>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlumniFinancialReportChart;
