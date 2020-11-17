import React, {
  useState,
  Fragment,
  useEffect
} from "react"
import { Modal, Form, Input, message } from 'antd';

// 校验输入值 
function check (email, name, psd, props) {
  let checkIsOk = false;
  let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  if (!reg.test(email) && props.content.title === "注册") {
    message.warning('邮箱格式不正确', 1);
  } else if (!name || !psd) {
    message.warning('请输入完整注册信息', 1);
  } else {
    message.success('创建新用户成功', 1);
    checkIsOk = true;
  }
  return checkIsOk;
}

// 登录  or  注册
function doSomething (props, email, name, psd) {
  let e = email ? email : null;
  let c = check(e, name, psd, props);
  let obj = {};
  obj["email"] = e;
  obj["name"] = name
  obj["psd"] = psd
  c && props.close(obj);
}

// 监听输入框输入  => 修改 state
function onValuesChange (values, allValues, setEmail, setName, setPsd) {
  allValues.Email && setEmail(allValues.Email)
  allValues.username && setName(allValues.username)
  allValues.password && setPsd(allValues.password)
}

// 注册添加邮箱输入框
function GetEmailInp (props, email) {
  if (!props.content.email) return;
  return (
    <Form.Item
      label={props.content.email}
      name="Email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input value={email} />
    </Form.Item>
  )
}

// Hook  
function useHookComp (props) {
  const [visible, setViseble] = useState();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [psd, setPsd] = useState("");

  useEffect(() => {
    setViseble(props.isShow);
  })

  return (
    <Fragment>
      <Modal
        title={props.content.title}
        visible={visible}
        okText={props.content.okBtn}
        cancelText={props.content.cancelBtn}
        onCancel={() => props.close()}
        onOk={() => doSomething(props, email, name, psd)}
      >

        <Form name="basic"
          onValuesChange={(v, vs) => onValuesChange(v, vs, setEmail, setName, setPsd)}
        >
          {GetEmailInp(props, email)}
          <Form.Item
            label={props.content.label}
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input value={name} />
          </Form.Item>

          <Form.Item
            label={props.content.psdLabel}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password value={psd} />
          </Form.Item>
        </Form>

      </Modal>
    </Fragment >
  )
}

export default useHookComp;