import React from 'react';
import './style.css';
import { Button, Select } from 'antd';
const Option = Select.Option;

const Main = ({ voices }) => {

  const OptionView = voices.map((data, i) => (
    <Option value={data.name}>{data.name}</Option>
  ));

  return (
    <div className="main_layout">
      <div className="main_title">Today Sentence</div>
        <Select defaultValue={voices[0]} style={{ width: 120 }}>
        {OptionView}
      </Select>
      <Button className="main_play_btn">Play</Button>
    </div>
  );
}

export default Main;
