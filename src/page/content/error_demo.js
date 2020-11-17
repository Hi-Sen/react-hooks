import React from 'react';

class ErrorDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    // throw new Error('Error： 子组件错误边界，不影响程序继续运行');
    return (
      <div>No Error</div>
    );
  }
}

export default ErrorDemo;