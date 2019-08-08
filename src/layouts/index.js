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
          width={200}
          style={{ minHeight: '100vh' }}>
          <div className={styles.logo}>
            <img src={this.state.collapsed ? miniLogo : logo} alt="" />
            <div>{this.state.collapsed ? '' : '开发者优质资源导航'}</div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/recommended">
                <Icon type="fire" />
                <span>推荐 | 精选 | 常用</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/interface">
                <Icon type="star" />
                <span>界面 | 设计 | 素材</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/development">
                <Icon type="thunderbolt" />
                <span>编程 | 开发 | 运维</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/3">
                <Icon type="safety-certificate" />
                <span>测试 | 渗透 | 安全</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/software">
                <Icon type="folder-open" />
                <span>软件 | 工具 | 插件</span>
              </Link>
            </Menu.Item>
          </Menu>
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