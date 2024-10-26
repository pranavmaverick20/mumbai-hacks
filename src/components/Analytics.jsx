import React from 'react'
import HollowPie from './ui/hollow-pie';
import StackedGraph from './ui/stacked-graph';

const Analytics = () => {
  return (
    <>
        <div className="flex flex-wrap justify-center items-center mx-auto">
            <HollowPie desc="Transactions" />
            <HollowPie desc="Carbon Footprint" />
            <HollowPie desc="Predicted Carbon Footprint" />
        </div>
        <div className="flex flex-wrap justify-center items-center mx-auto gap-5">
            <StackedGraph desc="Last Week" />
            <StackedGraph desc="Last to Last Week" />
        </div>
    </>
  )
}

export default Analytics
