import React, { useState } from 'react';
import axios from 'axios';

const MeetingForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:5000/api/meetings', { title, date }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            onSubmit({ title, date });
            setTitle('');
            setDate('');
        } catch (error) {
            console.error('Error creating meeting:', error);
            alert('Failed to create meeting: ' + error.response?.data?.message || error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Meeting Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button type="submit">Schedule Meeting</button>
        </form>
    );
};

export default MeetingForm;
