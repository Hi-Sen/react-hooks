import React from 'react';

/*
  componentFactory是一个函数, 返回一个promise
  promise完成后会resolve一个对象 { default:组件 }
  so : let {default : component} =   ↑  （上边这个对象，也就是路由里边 （） => require() 的结果） 
*/
export default function (componentFactory) {
  class AsyncComponent extends React.Component {
    constructor() {
      super();
      this.state = { component: null };
    }
    async componentDidMount () {
      let { default: component } = await componentFactory();
      this.setState({ component });
    }
    render () {
      let Comp = this.state.component;
      return Comp ? <Comp {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}

