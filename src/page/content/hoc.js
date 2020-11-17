

/**
 *   HOC 高阶组件实现 
 *  类似 vue  mixin 混入 ， 在 react 里 ，前身也是 mixin ， 目前是 Hoc
 *  Hoc 是一个纯函数编程 ， 相当于增强原有组件的功能  
 */

import React, { Component } from "react"

/* 
  模拟一份数据 
  真是场景可以写动态获取 ， 脱离组件需求， 纯函数编程  
*/
const data = {
  dataA: {
    text: "我是 A 组件",
    fun: function () {
      return [1, 2, 3, 4, 5];
    }
  },
  dataB: {
    text: "我是 B 组件",
    fun: function () {
      return ['a', 'b', 'c', 'd', 'e'];
    }
  }
}

const Hoc = (Com, value) => {
  return class extends Component {
    /*  
      共享的逻辑写在这里  
      如：componentWillMount 里获取一个缓存的值，然后写入 state 传入Hoc组件    
      后续使用 Hoc 的组件直接使用   
    */

    componentWillMount () {
      localStorage.setItem("num", "缓存结果。只获取一次")
      let num = localStorage.getItem("num");
      this.setState({
        num
      })
    }

    /*
      传入共享的数据及方法     
    */
    render () {
      return (
        <Com hocClick={this.hocClick} data={data[value]} num={this.state.num} {...this.props} />
      )
    }

    /*
      可以做一个工具方法，公用函数     
    */
    hocClick = () => {
      alert(data[value].text);
    }

  }
}

export default Hoc;

