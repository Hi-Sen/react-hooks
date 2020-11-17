import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: ''
    };
  }

  static getDerivedStateFromError (error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true, error: error };
  }

  componentDidCatch (error, info) {
    // 打印错误日志 
    console.log('ErrorBoundary:', error, info);
  }

  render () {
    if (this.state.hasError) {
      return <h1>{this.state.error.toString()}</h1>;
    } else {
      /*
        子元素  this.props.children  
        有异常返回异常字符串 
        否则返回剩余的 react 元素内容
        移步到 error_demo.js 第 10 行 ，异常抛出位置 if || else 
      */
      return this.props.children;
    }
  }
}

//导出组件
export default ErrorBoundary; 