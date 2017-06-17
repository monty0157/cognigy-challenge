import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;
const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;

const menuItems = [
  {
    label: 'Flow',
    key: 'flow',
    icon: 'switcher',
  },
  {
    label: 'Lexicon',
    key:   'lexicon',
    icon: 'select',
  },
];

const TopBar = function TopBar() {

  return(
    <Header className="darkBlue">
      <Menu
        theme="dark"
        className="flex justify-between items-center h-100"
      >
      <h1 className="white">COGNIGY</h1>

      <MenuItemGroup className="displayFlex__childUL flex">
        {menuItems.map((item) =>
          <MenuItem
            key={item.key}
          >
            <Icon type={item.icon} />
              {item.label}
          </MenuItem>
        )}
      </MenuItemGroup>

      <MenuItem className="white">Log out</MenuItem>
      </Menu>
    </Header>
  )
}

export default TopBar;
