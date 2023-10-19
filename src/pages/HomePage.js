// client/src/pages/HomePage.js
import React from 'react';
import ChatRoom from '../components/ChatRoom';
import TaskBoard from '../components/TaskBoard';
import '../App.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="chatroom">
        <ChatRoom />
      </div>
      <div className="taskboard">
        <TaskBoard />
      </div>
    </div>
  );
};

export default HomePage;
