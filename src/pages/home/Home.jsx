import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css";
import {userData} from "../../dummyData";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title={`사용자 분석`} data={userData} dataKey={`Active User`} grid/>
        </div>
    )
}
