import React from 'react';
import Card from '../Components/Card/Card';

const Cyber = ({data}) => {
    const cyber=data.filter((ele)=>ele.Catagory==="CYBER SECURITY")
    return (
        <div>
            <Card data={cyber}/>
        </div>
    );
};

export default Cyber;