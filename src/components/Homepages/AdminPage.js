import { Layout, Menu, Breadcrumb, Flex, Row, Col, Card, Statistic, Table, Tag, Collapse, Checkbox, Button, Rate, Typography } from 'antd'
import { PieChartOutlined, LineChartOutlined, FileOutlined, SettingOutlined, HddOutlined } from '@ant-design/icons';
import React from 'react'
import style from './AdminPage.module.css'
import { useState } from 'react';
import Meta from 'antd/es/card/Meta';

export default function AdminPage() {

    function getItem(label, key, icon = null, children = null){
        return { key, icon, children, label }
    }

    const items = [
        getItem("Dashboard", "1", <LineChartOutlined />),
        getItem("Pages", "2", <FileOutlined />),
        getItem("Admin", "3", <HddOutlined />, [ getItem("User Profiles", "4"), getItem("Admin Profiles", "5")]),
        getItem("Settings", "6", <SettingOutlined />, [ getItem("Server Settings", "7"), getItem("Page Settigns", "8"), getItem("Database Settings", "9"), getItem("Rights Settings", "10") ]),
        getItem("Media", "11", <FileOutlined />),
        getItem("Analytics", "12", <PieChartOutlined />)
    ]

    const [tab, setTab] = useState("1");

    function handleMenuChose(event){
        setTab(event.key)
    }

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role"
        },
        {
            title: "Solved Cases",
            dataIndex: "solvedCases",
            key: "solvedCases"
        },
        {
            title: "Reputation",
            dataIndex: "reputation",
            key: "reputation"
        }
    ]

    const dataSource = [
        {
            key: "1",
            name: "Admin",
            role: [<Tag key="owner" color="#5e1b3a">OWNER</Tag>, <Tag key="developer" color="#991c1a">DEVELOPER</Tag>, <Tag key="admin" color="#227a37">ADMIN</Tag>],
            solvedCases: `${(Math.random(100)*10000).toFixed(0)}`,
            reputation: `${(Math.random(100)*100000).toFixed(0)}`
        },
        {
            key: "2",
            name: "Brick",
            role: [<Tag key="moderator" color="#204c63">MODERATOR</Tag>],
            solvedCases: `${(Math.random(100)*1000).toFixed(0)}`,
            reputation: `${(Math.random(100)*10000).toFixed(0)}`
        },
        {
            key: "3",
            name: "Head",
            role: [<Tag key="developer" color="#991c1a">DEVELOPER</Tag>, <Tag key="admin" color="#227a37">ADMIN</Tag>],
            solvedCases: `${(Math.random(100)*10000).toFixed(0)}`,
            reputation: `${(Math.random(100)*100000).toFixed(0)}`
        },
        {
            key: "4",
            name: "John",
            role: [<Tag key="helper" color="#72c285">HELPER</Tag>],
            solvedCases: `${(Math.random(100)*10000).toFixed(0)}`,
            reputation: `${(Math.random(100)*100000).toFixed(0)}`
        },
        {
            key: "5",
            name: "Doe",
            role: [<Tag key="helper" color="#72c285">HELPER</Tag>],
            solvedCases: `${(Math.random(100)*10000).toFixed(0)}`,
            reputation: `${(Math.random(100)*100000).toFixed(0)}`
        }
    ]

    const collapseItems = [
        {
            key: "1",
            label: "Hotfix",
            children: <p>
                Fixed an issue where the cart would occasionally display incorrect item quantities.
            </p>
        }
    ]

 

    const checkboxList = [
        {
            label: <div style={{ display: "flex", alignItems: "center", gap: "5%", width: "15vw"}}>
                <span>John</span>
                <Rate defaultValue={0} allowClear={true} />
            </div>,
            value: "John"
        },
        {
            label: <div style={{ display: "flex", alignItems: "center", gap: "5%", width: "15vw"}}>
                <span>Head</span>
                <Rate defaultValue={0} allowClear={true} />
            </div>,
            value: "Head"
        },
        {
            label: <div style={{ display: "flex", alignItems: "center", gap: "5%", width: "15vw"}}>
                <span>Rudolf</span>
                <Rate defaultValue={0} allowClear={true} />
            </div>,
            value: "Rudolf"
        },
        {
            label: <div style={{ display: "flex", alignItems: "center", gap: "5%", width: "15vw"}}>
                <span>Adolf</span>
                <Rate defaultValue={0} allowClear={true} />
            </div>,
            value: "Adolf"
        },
        {
            label: <div style={{ display: "flex", alignItems: "center", gap: "5%", width: "15vw"}}>
                <span>Stepan</span>
                <Rate defaultValue={0} allowClear={true} />
            </div>,
            value: "Stepan"
        },
        {
            label: <div style={{ display: "flex", alignItems: "center", gap: "5%", width: "15vw"}}>
                <span>Roflan</span>
                <Rate defaultValue={0} allowClear={true} />
            </div>,
            value: "Roflan"
        },
        {
            label: <div style={{ display: "flex", alignItems: "center", gap: "5%", width: "15vw"}}>
                <span>JL</span>
                <Rate defaultValue={0} allowClear={true} />
            </div>,
            value: "JL"
        },
        {
            label: <div style={{ display: "flex", alignItems: "center", gap: "5%", width: "15vw"}}>
                <span>Aleksi</span>
                <Rate defaultValue={0} allowClear={true} />
            </div>,
            value: "Aleksi"
        },
        {
            label: <div style={{ display: "flex", alignItems: "center", gap: "5%", width: "15vw"}}>
                <span>Ivan</span>
                <Rate defaultValue={0} allowClear={true} />
            </div>,
            value: "Ivan"
        },
        {
            label: <div style={{ display: "flex", alignItems: "center", gap: "5%", width: "15vw"}}>
                <span>Wonderful</span>
                <Rate defaultValue={0} allowClear={true} />
            </div>,
            value: "Wonderful"
        },
        {
            label: <div style={{ display: "flex", alignItems: "center", gap: "5%", width: "15vw"}}>
                <span style={{ marginRight: "2vh" }}>Valerii</span>
                <Rate defaultValue={0} allowClear={true} />
            </div>,
            value: "Valerii"
        }
    ]

    const [checkedList, setCheckedList] = useState([]);
    const checkAll = checkboxList.length === checkedList.length;

    function onChange(list){
        setCheckedList(list);
    }

    function onCheckAllChange(){
        if(checkAll){
            setCheckedList([])
        }
        else{
            setCheckedList(checkboxList.map(item => item.value))
        }
    }


    function content(){
        if(tab === "1"){
            return (
                <Layout>
                    <Layout.Content>
                        <Flex gap="large" vertical="true">
                            <Row gutter={[8, 8]} style={{ width: "100%", height: "100%" }}>
                                <Col span={6}>
                                    <Card hoverable style={{ backgroundColor: "#4b33ab" }}>
                                        <Meta title={<span style={{ color: "#ffffff"}}>Users</span>} description={<span style={{ color: "#ffffff"}}>26.531 (-12.4%)</span>} color="#ffffff"/>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card hoverable style={{ backgroundColor: "#2498d6"}}>
                                        <Meta title={<span style={{ color: "#ffffff"}}>Income</span>} description={<span style={{ color: "#ffffff"}}>6.200$ (+40.9%)</span>} color="#ffffff"/>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card hoverable style={{ backgroundColor: "#edc24c"}}>
                                        <Meta title={<span style={{ color: "#ffffff"}}>Conversion Rate</span>} description={<span style={{ color: "#ffffff"}}>2.49% (+84.7%)</span>} color="#ffffff"/>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card hoverable style={{ backgroundColor: "#ed4f4c"}}>
                                        <Meta title={<span style={{ color: "#ffffff"}}>Sessions</span>} description={<span style={{ color: "#ffffff"}}>44972 (-23.6%)</span>} color="#ffffff"/>
                                    </Card>
                                </Col>     
                            </Row>
                            <Row style={{textAlign: "center"}}>
                                <Col span={4}>
                                    <Statistic title="Current users" value={Math.random(100)*10000} precision={0}/>
                                </Col>
                                <Col span={4}>
                                    <Statistic title="New users" value={Math.random(100)*10000} precision={0}/>
                                </Col>
                                <Col span={4}>
                                    <Statistic title="Pageviews" value={Math.random(100)*100000} precision={0}/>
                                </Col>
                                <Col span={4}>
                                    <Statistic title="Feedback" value={Math.random(100)*10000} precision={0}/>
                                </Col>
                                <Col span={4}>
                                    <Statistic title="Reports" value={Math.random(100)*10000} precision={0}/>
                                </Col>
                                <Col span={4}>
                                    <Statistic title="Solved Cases" value={Math.random(100)*10000} precision={0}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Table columns={columns} dataSource={dataSource}></Table>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Collapse accordion items={collapseItems}></Collapse>
                                </Col>
                            </Row>
                        </Flex>
                    </Layout.Content>
                </Layout>
            )
        }
        else if(tab === "2"){
            return <div>Welcome to Pages</div>
        }
        else if(tab === "3"){
            return <div>Welcome to Admin Tools</div>
        }
        else if(tab === "4"){
            return <div>Welcome to User Profiles</div>
        }
        else if(tab === "5"){
            return (
                <Layout>
                    <Layout.Content>
                        <Flex align='center' justify='center' vertical='true' gap='large'>
                            <Typography.Text code level={1} style={{ fontSize: "5vmin" }}>Admin Efficiency Rate</Typography.Text>
                            <Checkbox.Group options={checkboxList} value={checkedList} onChange={onChange} className={style.customCheckboxGroup}/>
                            <Button type="dashed" onClick={onCheckAllChange}>Check All</Button>
                        </Flex>
                    </Layout.Content>
                </Layout>
            )
        }
        else{
            return <div>Error</div>
        }
    }


    function tabs(){
        if(tab === 1){
            return (
                <Breadcrumb style={{ margin: "1%"}}>
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
            )
        }
        else if(tab === 2){
            return (
                <Breadcrumb style={{ margin: "1%"}}>
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item>Pages</Breadcrumb.Item>
                </Breadcrumb>
            )
        }
        else if(tab === 4){
            return (
                <Breadcrumb style={{ margin: "1%"}}>
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item>User Profiles</Breadcrumb.Item>
                </Breadcrumb>
            )
        }
        else if(tab === 5){
            return (
                <Breadcrumb style={{ margin: "1%"}}>
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item>Admin Profiles</Breadcrumb.Item>
                </Breadcrumb>
            )
        }
        else if(tab === 6){
            return (
                <Breadcrumb style={{ margin: "1%"}}>
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item>Settigns</Breadcrumb.Item>
                </Breadcrumb>
            )
        }
        else {
            return (
                <Breadcrumb style={{ margin: "1%"}}>
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item>Unknown</Breadcrumb.Item>
                </Breadcrumb>
            )
        }
    }

  return (
    <div className={style.appBody}>
      <Layout>
        <Layout.Sider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={handleMenuChose}/>
        </Layout.Sider>
        <Layout>
            <Flex style={{ width: "100%", height: "7%"}}>
                {tabs()}
            </Flex>
            <Layout.Content style={{ margin: "0% 2% 0% 2%"}}>
                <Flex justify="center" align="center">
                    {content()}
                </Flex>
            </Layout.Content>
        </Layout>
      </Layout>
    </div>
  )
}
