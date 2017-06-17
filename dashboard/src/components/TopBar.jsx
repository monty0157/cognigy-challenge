import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const TopBar = function TopBar() {

  return(
    <Header  className="darkBlue">
      <h1 className="white">COGNIGY</h1>
    </Header>
  )
}

export default TopBar;
