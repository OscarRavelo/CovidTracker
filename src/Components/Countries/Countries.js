import React from 'react';
import useFetch from '../../Hooks/useFetch';

const Countries = () => {
  const {data, isFetching} =   useFetch("https://covid19.mathdro.id/api/deaths")
    return(<div>
        <h1>Countries/Regions</h1>
        {
            isFetching ? (<div>
                <p>{data.length}</p>
            </div>) : (<div>...loading</div>)
        }
    </div>);
}

export default Countries;