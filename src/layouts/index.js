import styles from './index.less';
import logo from '../assets/logo.png';
import miniLogo from '../assets/logo_mini.png';
import { Component } from 'react';
import { Layout } from 'antd';
import GitHubCorners from '../components/GitHubCorners';
import LeftMenu from '../components/LeftMenu';
import menus from '../datas/menus';

const { Sider, Content, Footer } = Layout;

class BasicLayout extends Component {
  state = {
    collapsed: false,
    contentMarginLeft: 200
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
    this.setState({ contentMarginLeft: collapsed ? 80 : 200 });
  };

  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          theme="dark"
          width={200}
          className={styles.sider}
        >
          <div className={styles.logo}>
            {
              this.state.collapsed ? <img className={styles.miniLogo} src={miniLogo} alt="" /> : <img src={logo} alt="" />
            }
          </div>
          <LeftMenu menus={menus} />
        </Sider>
        <Layout style={{ marginLeft: this.state.contentMarginLeft, minHeight: '100vh' }}>
          <GitHubCorners href='https://github.com/esofar/openmarks' />
          <Content className={styles.content}>
            {this.props.children}
          </Content>
          <Footer className={styles.footer}>Openmarks ©2019 Created by Esofar</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;