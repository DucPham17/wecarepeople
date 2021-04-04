import React, { useEffect, useState } from 'react';
function HomeScreen() {
    const [time, timeSet] = useState(new Date());
    //console.log(userInfo.userInfo.name);
    useEffect(() => {
        setInterval(() => timeSet(new Date()), 1000
        );
    })



    return (
        <div className="home-screen">
            <h1>Hello, _____ ! </h1>
            <h2 className="home-screen--container">{time.toLocaleTimeString()}</h2>
            <h3 className="home-screen--bottom-text">- let's Donate -</h3>
        </div>
    );
}

export default HomeScreen;