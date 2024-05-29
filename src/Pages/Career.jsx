import React from 'react';
import Card from '../Components/Card/Card';

const Career = ({data}) => {
    const career=data.filter((ele)=>ele.Catagory==="CAREER");
    return (
        <div>
            <Card data={career}/>
        </div>
    );
};

export default Career;