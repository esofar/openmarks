import styles from './index.less';
import logo from '../assets/logo.png';
import miniLogo from '../assets/logo_mini.png';
import { Component } from 'react';
import { Layout, Icon } from 'antd';
import GitHubCorners from '../components/GitHubCorners';
import LeftMenu from '../components/LeftMenu';
import menus from '../datas/menus';

const { Header, Sider, Content } = Layout;

class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={200}
          style={{ minHeight: '100vh' }}>
          <div className={styles.logo}>
            <img src={this.state.collapsed ? miniLogo : logo} alt="" />
            <div>{this.state.collapsed ? '' : '开发者优质资源导航'}</div>
          </div>
          <LeftMenu menus={menus} />
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <GitHubCorners href='https://github.com/esofar/openmarks' />
          </Header>
          <Content
            style={{
              margin: 15,
              padding: 15,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;