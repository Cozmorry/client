import React, { useEffect, useState } from 'react';

const TestConnection = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/test');
                const data = await response.json();
                setMessage(data.message);
            } catch (error) {
                setMessage('Error connecting to backend');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Test Connection</h1>
            <p>{message}</p>
        </div>
    );
};

export default TestConnection;
