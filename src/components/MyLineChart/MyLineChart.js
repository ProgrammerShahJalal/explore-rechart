import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            name: "Company A",
            mobile: 4000,
            laptop: 2400,
            amt: 2400
        },
        {
            name: "Company B",
            mobile: 3000,
            laptop: 1398,
            amt: 2210
        },
        {
            name: "Company C",
            mobile: 2000,
            laptop: 9800,
            amt: 2290
        },
        {
            name: "Company D",
            mobile: 2780,
            laptop: 3908,
            amt: 2000
        },
        {
            name: "Company E",
            mobile: 1890,
            laptop: 4800,
            amt: 2181
        },
        {
            name: "Company F",
            mobile: 2390,
            laptop: 3800,
            amt: 2500
        },
        {
            name: "Company G",
            mobile: 3490,
            laptop: 7300,
            amt: 2100
        }
    ];
    return (
        <LineChart
            width={800}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
                type="monotone"
                dataKey="laptop"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="mobile" stroke="#82ca9d" />
        </LineChart>
    );
};

export default MyLineChart;