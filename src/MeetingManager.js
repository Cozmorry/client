import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MeetingManager = () => {
    const [meetings, setMeetings] = useState([]);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const fetchMeetings = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/meetings', {
            headers: { Authorization: `Bearer ${token}` },
        });
        setMeetings(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:5000/api/meetings', { title, date }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        setTitle('');
        setDate('');
        fetchMeetings(); // Refresh the meeting list
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:5000/api/meetings/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        fetchMeetings(); // Refresh the meeting list
    };

    useEffect(() => {
        fetchMeetings();
    }, []);

    return (
        <div>
            <h2>Manage Meetings</h2>
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
            <ul>
                {meetings.map((meeting) => (
                    <li key={meeting.id}>
                        {meeting.title} - {new Date(meeting.date).toLocaleString()}
                        <button onClick={() => handleDelete(meeting.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MeetingManager;
