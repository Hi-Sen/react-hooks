import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "童鞋",
      userNumber: 'admin',
      userPsd: '123456'
    };
    this.inputChange = this.inputChange.bind(this)
  }

  componentWillUnmount () {
    clearInterval(this.timerID);
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.date.toLocaleTimeString()}</p>
          <p> {this.state.name} </p>
          <p>Welcome to React</p>
        </div>
        <div className="c">
          <p>账号：<input placeholder="admin" type="text" name="userNumber" onChange={this.inputChange} value={this.state.userNumber} /></p>
          <p>密码：<input placeholder="123456" type="password" name="userPsd" onChange={this.inputChange} value={this.state.userPsd} /></p>
          <button className="goBtn" onClick={() => this.go()}>GO 社区</button>
          <p style={{ margin: '1rem' }}>
            <button className="goBtn" onClick={() => this.goDemo()}>Go 学习 </button>
          </p>
        </div>
        <div style={{ color: 'green', fontWeight: 'bold' }}>
          <pre>
            {`
Go 学习 : 是一个快速学习 react 语法以及常用语法实践的样例，含代码和备注
Go 社区 : 是一个用 hooks 写的 demo , 主要为了实践 React hooks 新特性 ;

时隔两年 , 上一次写 React / React Native 的时候还是在2018年7月, 如今 Vue 一把梭 ， 一路梭到底啊 ~

未完 ! ! !
以后有空准备再加个评论,回复，收藏，编辑文章，汇总，再乐观一点的话，就用node写一个服务来实现一下功能

工作忙碌中 ...
`}
          </pre>
        </div>
      </div >
    );
  }

  tick () {
    this.setState({
      date: new Date()
    });
  }

  inputChange (event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    })
  }

  go () {
    if (this.state.userNumber === "admin" && this.state.userPsd === "123456") {
      this.props.history.replace("/home_two");
    } else {
      alert("账号密码错误")
    }
  }

  goDemo () {
    if (this.state.userNumber === "admin" && this.state.userPsd === "123456") {
      this.props.history.replace("/home");
    } else {
      alert("账号密码错误")
    }
  }

}

export default App;
