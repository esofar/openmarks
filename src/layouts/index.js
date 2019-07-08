import styles from './index.less';
import logo from '../assets/logo.png';
import miniLogo from '../assets/logo_mini.png';
import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
import GitHubCorners from '../components/GitHubCorners';
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
          width={256}
          style={{ minHeight: '100vh' }}>
          <div className={styles.logo}>
            <img src={this.state.collapsed ? miniLogo : logo} alt="" />
            <div>{this.state.collapsed ? '' : '开发者优质资源导航' }</div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/recommends">
                <Icon type="fire" />
                <span>热门推荐</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/interface">
                <Icon type="pie-chart" />
                <span>用户界面</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/2">
                <Icon type="pie-chart" />
                <span>编程语言</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/3">
                <Icon type="pie-chart" />
                <span>渗透测试</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/4">
                <Icon type="pie-chart" />
                <span>在线工具</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
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