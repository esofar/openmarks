import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import PropTypes from 'prop-types';

class LeftMenu extends Component {
    render() {
        const menus = this.props.menus;

        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {menus.map((menu, index) => {
                    return (
                        <Menu.Item key={index}>
                            <Link to={menu.path}>
                                <Icon type={menu.icon} />
                                <span>{menu.name}</span>
                            </Link>
                        </Menu.Item>
                    );
                })}
            </Menu>
        );
    };
}

LeftMenu.propTypes = {
    menus: PropTypes.array
};

export default LeftMenu;