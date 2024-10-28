import React, {useCallback, useState} from 'react'
import { Form, Modal, Input, Button, Alert, Flex } from 'antd'
import { gray } from '@ant-design/colors'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import style from './Button.module.css'
import { useSetUser, useUser } from '../User/UserContext';
import { useLoginContext } from '../User/LoginContext';
import userAvatar from '../../image/avatar.jpg'
import { useThemeContext } from '../ThemeContext/ThemeContext';

export default function LoginButton() {

  const [form] = Form.useForm()

  const [modal, setModal] = useState(false);

  const modalOpen = useCallback( () => {
    setModal(true);
  })

  const modalClose = useCallback( () => {
    setModal(false);
  })

  const user = useUser();
  const setUser = useSetUser();
  const __correctName = user.username != "Anon" ? user.username : null;
  const __correctPassword = user.password != "Anon" ? user.password : null;

  const login = useLoginContext();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  function handlerError(){
    setError(true);
  }

  function handleLogin(event){
    setLoading(true);
    console.log(event)
    setTimeout(() => {
      setLoading(false);
      if(__correctName === null && __correctPassword === null){
        setUser.handleSetUser(event.username);
        setUser.handleSetPassword(event.password);
        setUser.handleSetAvatar(userAvatar);
        login.handleLoggedInChange(true);
        modalClose();
      }
      else if(__correctName !== "Anon" && __correctPassword !== "Anon" && __correctName === event.username && __correctPassword === event.password){
        login.handleLoggedInChange(true);
        modalClose();
      }
      else{
        handlerError();
      }
    }, 1000);
  }

  const theme = useThemeContext();

  return (
    <div className={style.customButton}>
      <button onClick={modalOpen} style={{ backgroundColor: theme.secondaryColor, color: theme.decorColor }}>Login</button>
      <Modal title="Auth" 
      open={modal}
      footer={null}
      onCancel={modalClose}
      >
        <Form form={form} name="authorizationForm" onFinish={handleLogin}>
          <Form.Item 
          name="username" 
          rules={[{ required: true, message: 'Please input your username!'}]}>
            <Input prefix={<UserOutlined/>} placeholder="Username"/>
          </Form.Item>
          <Form.Item 
          name="password" 
          rules={[{ required: true, message: 'Please input your password!'}]}>
            <Input.Password prefix={<LockOutlined/>} placeholder="Password"/>
          </Form.Item>
          {error && (
            <Alert message="Incorrect username or password" type="error" closable style={{ marginBottom: "2vmin" }}/>
          )}
          <Form.Item >
            <Flex justify="center" align="center" gap="middle">
              <Button color="primary" variant="solid" key="submit" loading={loading} onClick={handleLogin} htmlType="submit">Submit</Button>
              <Button color="danger" variant="solid" onClick={modalClose}>Cancel</Button>
            </Flex>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
