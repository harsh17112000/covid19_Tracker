import React, { useEffect, useState } from "react";
import axios from "axios";

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch("https://api.covid19india.org/data.json")
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    };

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"> <span className="font-weight-bold">INDIA</span>  COVID-19 Dashboard</h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th> State </th>
                                <th> Confirmed </th>
                                <th> recovered </th>
                                <th> deaths </th>
                                <th> active </th>
                                <th> updated Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curElement, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> {curElement.state} </td>
                                            <td> {curElement.confirmed} </td>
                                            <td> {curElement.recovered} </td>
                                            <td> {curElement.deaths} </td>
                                            <td> {curElement.active} </td>
                                            <td> {curElement.lastupdatedtime} </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Statewise;