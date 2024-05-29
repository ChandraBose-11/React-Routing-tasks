import React from 'react';
import Card from '../Components/Card/Card';

const Fullsatack = ({data}) => {
    const fullstack=data.filter((ele)=>ele.Catagory==="FULL STACK DEVELOPMENT")
    return (
        <div>
            <Card data={fullstack}/>
        </div>
    );
};

export default Fullsatack;