import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
import useFetch from "../../Hooks/useFetch";
import Loader from '../Loading/Loading';

const Graph = () => {
  const { data, isFetching } = useFetch(
    "https://covid2019-api.herokuapp.com/v2/timeseries/global"
  );
  const dataGrap = () => {
    const header = data.data.map((r) => {
        return {
          ...r[Object.keys(r)[0]],
          
          name: Object.getOwnPropertyNames(r)[0],
        };

    });
    return header;

  }

 
  return (
    <div className="graph-container">
      {isFetching ? (
        <ResponsiveContainer minHeight={300}  >

        

        <BarChart
        width={800}
        height={300}
        data={dataGrap()}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="right" dataKey="deaths" fill="red" />
        <Bar yAxisId="left" dataKey="recovered" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="confirmed" fill="#82ca9d" />
      </BarChart>
      
        
        </ResponsiveContainer>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Graph;
