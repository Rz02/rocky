// src/App.js (React frontend)
import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/data');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Hello from React</h1>
            <p>Data from Flask: {data.message}</p>
        </div>
    );
}

export default App;

