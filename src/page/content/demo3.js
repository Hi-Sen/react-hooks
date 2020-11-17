/**
 *  Fragment 
 * 高阶组件 HOC 
 * 与第三方库协同就不多说了，主要是不同库之间的集成 ， 目前应该比较少这样做
 * 深入 Jsx 
 */

import React, { Component, Fragment } from 'react'
import { prestyle, divstyle } from './style'

/*
    Hoc 高阶组件实现，分别查看三个文件
    hoc.js 实现一个 Hoc 组件
    hocA.js ，hocB.js 使用 Hoc 组件来增强功能
*/
import A from "./hocA"
import B from "./hocB"


/*
  JSX 点语法 
*/
let Obj = {
  Com: function () {
    try {
      if (this.props.num) return "";
    } catch (error) {
      return <div>我是点语法</div>
    }
  }
};

class Demo3 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <div style={divstyle}>
        <div>
          // Fragment 隐式标签 ，审查元素可明白
          <Fragment>
            <div>我是 fragment 内部元素</div>
            <A />
            <B />

            {/*
          深入 JSX , 例举几个常规的例子 
          JSX 是 React.createElement(component, props, ...children) 函数的语法糖

            引用官方的案例，就是
              <MyButton color="blue" shadowSize={2}>
                Click Me
              </MyButton>
            被编译为：
              React.createElement(
                MyButton,
                {color: 'blue', shadowSize: 2},
                'Click Me'
              )
          */}

            {/* JSX  的点语法  */}
            <Obj.Com />

            {/* 
          JSX 中的 props  ， 支持表达式 
          在 Obj.Com 中 ， props.num 值就是 6 , 传递过去的也是 6 
        */}
            <Obj.Com num={1 + 2 + 3} />

            {/* 
          props 展开符 => ES6 

          function C1() {
            return <C name="hisen" age="27" />;
          }

          function C2() {
            const props = { name="hisen" age="27" };
            return <C {...props} />;
          }
          C1() || C2 是等价的

        */}

            {/* 
          JSX 的子元素 
          包含在开始和结束标签之间的 JSX 表达式内容将作为特定属性 props.children 传递给外层组件 
          移步到 error.js 文件查看
        */}

          </Fragment>
        </div>
        <div style={prestyle}>
          <p style={{ textAlign: "center", fontSize: "2rem", marginBottom: 0 }}>部分实践代码</p>
          <pre>
            {'\n              /**\n               *  Fragment \n               * 高阶组件 HOC \n               * 与第三方库协同就不多说了，主要是不同库之间的集成 ， 目前应该比较少这样做\n               * 深入 Jsx \n               */\n              \n              import React, { Component, Fragment } from \'react\'\n              \n              /*\n                  Hoc 高阶组件实现，分别查看三个文件\n                  hoc.js 实现一个 Hoc 组件\n                  hocA.js ，hocB.js 使用 Hoc 组件来增强功能\n              */\n              import A from "./hocA"\n              import B from "./hocB"\n              \n              /*\n                JSX 点语法 \n              */\n              const Obj = {\n                Com: function () {\n                  try {\n                    if (this.props.num) return "";\n                  } catch (error) {\n                    return <div>我是点语法</div>\n                  }\n                }\n              }\n              \n              class Demo3 extends Component {\n                constructor(props) {\n                  super(props);\n                  this.state = {}\n                }\n                render () {\n                  return (\n                        // Fragment 隐式标签 ，审查元素可明白\n                        <Fragment>\n                          <div>我是 fragment 内部元素</div>\n                          <A />\n                          <B />\n                          {/* JSX  的点语法  */}\n                          <Obj.Com />\n                        </Fragment>\n              \n                  );\n                }\n              }\n              \n              export default Demo3; \n            '}
          </pre>
        </div>
      </div>
    );
  }
}

export default Demo3; 
