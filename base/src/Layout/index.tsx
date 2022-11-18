import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { qinkunMenu, appMenu } from '../router';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const LayoutBanner = () => {
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const [breadcrumb, setBreadcrumb] = useState<string[]>([]);
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={openKeys}
                        defaultOpenKeys={openKeys}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {appMenu.map(item => (
                            <Menu.SubMenu
                                key={item.key}
                                icon={<item.icon />}
                                title={item.name}
                                onTitleClick={() => setBreadcrumb([item.name])}
                            >
                                {item.children.map(e => (
                                    <Menu.Item
                                        key={e.key}
                                        icon={<e.icon />}
                                        onClick={() => {
                                            setOpenKeys([`${e.name}`]);
                                            setBreadcrumb([item.name, `${e.name}`]);
                                        }}
                                    >
                                        <Link to={e.url}>{e.name}</Link>
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        ))}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {breadcrumb.map(item => (
                            <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <>
                            {qinkunMenu.map(item => (
                                <div key={item.name} id={item.name}></div>
                            ))}
                        </>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default LayoutBanner;
