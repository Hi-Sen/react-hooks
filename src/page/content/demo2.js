

/**
 * Context 
 * 错误边界 
 * Refs  
 */
import React, { Component } from 'react'
import { prestyle, divstyle } from './style'

/**
 * 引入顶层父组件的 Consumer  
 * 中间组件 content 不做任何操作  
 */
import { ContextObj } from '../home'


/**
 * 错误边界 
 * error.js ：错误边界带啊吗
 * error_demo.js ：  错误边界 demo ， 测试开启改组件第 10 行代码  
 */
import ErrorCom from "./error"
import ErrorDemo from "./error_demo"


class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        /**
         * ref 主要是为了获取 dom 元素 或者 react 元素 (组件)
         * 并且可以转发，传递下去
         * 这里的打印即是  {myRefErrorCom: ErrorBoundary, myRefDom: div} 
         */
        console.log(this.refs);
    }

    render() {
        return (
            <div style={divstyle}>
                <div>
                    <ContextObj.Consumer>
                        {
                            (value) =>
                                <p>Consumer 接收到的参数 ： {value}</p>
                        }
                    </ContextObj.Consumer>

                    <ErrorCom ref="myRefErrorCom">
                        错误边界测试结果：<ErrorDemo />
                    </ErrorCom >

                    <div ref="myRefDom">
                        <p>我是 ref dom元素</p>
                    </div>
                </div>
                <div style={prestyle}>
                    <p style={{ textAlign: "center", fontSize: "2rem", marginBottom: 0 }}>部分实践代码</p>
                    <pre>
                        {'\n/**\n * Context \n * 错误边界 \n * Refs  \n */\nimport React, { Component } from \'react\'\n\n/**\n * 引入顶层父组件的 Consumer  \n * 中间组件 content 不做任何操作  \n */\nimport { ContextObj } from \'../home\'\n\n/**\n * 错误边界 \n * error.js ：错误边界带啊吗\n * error_demo.js ：  错误边界 demo ， 测试开启改组件第 10 行代码  \n */\nimport ErrorCom from "./error"\nimport ErrorDemo from "./error_demo"\n\nclass Demo2 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {}\n  }\n\n  componentDidMount () {\n    /**\n     * ref 主要是为了获取 dom 元素 或者 react 元素 (组件)\n     * 并且可以转发，传递下去\n     * 这里的打印即是  {myRefErrorCom: ErrorBoundary, myRefDom: div} \n     */\n    console.log(this.refs);\n  }\n\n  render () {\n    return (\n      \n        <div>\n          <ContextObj.Consumer>\n            {\n              (value) =>\n                <p>Consumer 接收到的参数 ： {value}</p>\n            }\n          </ContextObj.Consumer>\n\n          <ErrorCom ref="myRefErrorCom">\n            错误边界测试结果：<ErrorDemo />\n          </ErrorCom >\n\n          <div ref="myRefDom">\n            <p>我是 ref dom元素</p>\n          </div>\n        </div>\n\n    );\n  }\n}\n\nexport default Demo2; \n          '}
                    </pre>
                </div>

            </div>
        );
    }
}

export default Demo2; 