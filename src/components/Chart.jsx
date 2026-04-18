import React from 'react';
import { Bar, CartesianGrid, ComposedChart, LabelList, XAxis, YAxis } from 'recharts';


const Chart = ({ ratings }) => {
    console.log(ratings);

    return (
      <ComposedChart
    layout="vertical"
    style={{ width: '100%', maxHeight: '50vh', aspectRatio: 1 / 1.618 }}
    data={ratings}
    margin={{
        top: 20,
        right: 30,
        bottom: 0,
        left: 0,
    }}
>
    <XAxis type="number" hide />
    <YAxis 
    dataKey="name" 
    type="category" 
    scale="band" 
    reversed={true} 
/>


    <Bar 
    dataKey="count" 
    barSize={32} 
    fill="#FF8811"
    isAnimationActive={true}      
    animationDuration={2500}       
    animationBegin={1000}            
    animationEasing="ease-in-out" 
>
    <LabelList dataKey="count" position="right" />
</Bar>
</ComposedChart>

    );
};

export default Chart;