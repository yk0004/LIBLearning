import React from 'react';
import './style.css';
import { Button } from 'antd';

const Main = () => {
  return (
    <div className="main_layout">
      <div className="main_title">Today Sentence</div>
      <Button className="main_play_btn">Play</Button>
    </div>
  );
}

export default Main;
