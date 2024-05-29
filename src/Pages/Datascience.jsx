import React from 'react';
import Card from '../Components/Card/Card';

const Datascience = ({data}) => {
    const datascience=data.filter((ele)=>ele.Catagory==="DATA SCIENCE")
    return (
        <div>
            <Card data={datascience}/>
        </div>
    );
};

export default Datascience;