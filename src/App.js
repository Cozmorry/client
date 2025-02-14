import React from 'react';
import MeetingForm from './MeetingForm';
import Register from './Register';
import Login from './Login';
import MeetingManager from './MeetingManager';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Meeting Scheduler</h1>
      <Register />
      <Login />
      <MeetingManager />
      <MeetingForm />
    </div>
  );
}

export default App;
