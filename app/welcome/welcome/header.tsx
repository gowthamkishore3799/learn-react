import { DesktopOutlined } from "@ant-design/icons";
import {
    Layout, Menu
} from "antd";
import type { MenuItem } from "~/interface/interfaces";

const { Sider } = Layout;

export default function Header(){
    const items: MenuItem[] = [{
        label: (
            <a href="/image" target="_self">
             Image
            </a>
          ),
        key: 1,
        icon: <DesktopOutlined />,
    },{
        label:  (
            <a href="/form" target="_self">
             Form
            </a>
          ),
        key: 2,
        icon: <DesktopOutlined />
    },{
        label:  (
            <a href="/tic-tac-toe" target="_self">
             Tic Tac Toe
            </a>
          ),
        key: 3,
        icon: <DesktopOutlined />
    },{
        label:  (
            <a href="/home" target="_self">
             Button
            </a>
          ),
        key: 4,
        icon: <DesktopOutlined />
    },{
        label:  (
            <a href="/home" target="_self">
             Modal
            </a>
          ),
        key: 5,
        icon: <DesktopOutlined />
    },{
        label:  (
            <a href="/home" target="_self">
             Table
            </a>
          ),
        key: 6,
        icon: <DesktopOutlined />
    }]
    return(
        <>
        <div className="bg-black-950 lg:py-[1%] sm:py-[3%]">
            <div className="flex flex-row gap-4">
                <p className="text-rose-400 px-[50%] basis-2/3">Adobe</p>
            </div>
        </div>
        <Layout className="h-screen" hasSider>
        <Sider className="py-[30px]"> <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/> </Sider>
        <Layout>
        
        </Layout>
        </Layout>
        </>
    )
}