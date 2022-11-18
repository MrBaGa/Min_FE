
import { LaptopOutlined, PieChartOutlined, LineChartOutlined } from '@ant-design/icons';
import LayoutBanner from '../Layout';
import QianKunPage from '../qiankunPage';


/**
 * @description: 微服务注册
 */
export const qinkunMenu = [
    {
        name: 'myApp1', // app name registered
        entry: '//localhost:3001', // 访问的端口号
        container: '#myApp1', // 在页面上的容器id
        activeRule: '/#/management/app1', // 路径
        props: {
            name: 'fs',
            age: 90
        }
    },
    {
        name: 'myApp2',
        entry: '//localhost:3002',
        container: '#myApp2',
        activeRule: '/#/management/app2',
    },
];


/**
 * @description: 侧边栏的菜单
 */
export const appMenu = [
    {
        name: '管理',
        key: '/',
        icon: LaptopOutlined,
        children: [
            {
                key: 'app1',
                name: '监控板',
                icon: PieChartOutlined,
                url: '/management/app1'
            },
            {
                key: 'app2',
                name: '数据表',
                icon: LineChartOutlined,
                url: '/management/app2'
            },
        ]
    }
]

/**
 * @description: 路由配置
 */
export const router = [
    {
        id: 'layout',
        path: '/',
        element: LayoutBanner,
        children: [
            {
                id: 'disbald',
                path: '/management/app1',
                element: QianKunPage
            },
            {
                id: 'list',
                path: '/management/app2',
                element: QianKunPage
            },
        ]
    },
]