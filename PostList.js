import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostDetail from "./PostDetail"

function DataDisplay() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/data', {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setData(response.data);
            } catch (error) {
                setError('Failed to fetch data.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [loading]);
    
    if (loading) return <div>Loading data...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <ul>
                {data.map((item, index) => (
                    <PostDetail props={item}/>
                ))}
            </ul>
        </div>
    );
}

export default DataDisplay;