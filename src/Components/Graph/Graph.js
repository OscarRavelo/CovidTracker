import React from 'react';
import { LineChart, Line } from 'recharts';
import useFetch from '../../Hooks/useFetch';


const Graph = () => {
   const {data, isFetching} =  useFetch("https://covid2019-api.herokuapp.com/v2/timeseries/global");
   if(isFetching){
    console.log("graph", data);
   }
    return (
        
        <div>
        {
            
            isFetching ?  (<LineChart width={400} height={400} data={data.data} >

<Line type="monotone" dataKey="deaths"  stroke="#fff"/>

</LineChart>) : <div>...loading</div>
        }
        
        </div>
    )

}

export default Graph;

