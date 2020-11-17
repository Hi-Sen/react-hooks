/**
 * Hook 是一个可以让你在函数组件里“钩入” React state 及生命周期等特性的函数 
 * Hook 不能在 class 组件中使用 
 */

import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef
} from "react"
import { ContextObj } from "../home"
import { prestyle, divstyle } from './style'

// 惰性初始化 count 
function GetA () {
  return 0;
}

// reducer 初始化 state 和定义逻辑的方法 
const initState = { count: 0 }

function reducer (state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 }
    case "jian":
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

// useCallbackFn 回调函数 
function useCallbackFn (count) {
  return count * 2;
}

// 修改count的外部函数 
function setCountFun (count) {
  return count + 1;
}

function Example (props) {

  // useState 定义初始化和修改state的方法 
  // 直接默认初始化 count , const [count, setCount] = useState(0); 
  // 惰性初始化 count ，通过一个函数获取初始的 state count
  const [count, setCount] = useState(() => {
    const a = GetA();
    return a;
  });

  const [count2, setCount2] = useState(0);

  // useEffect 
  // 相当于 class 类组件的生命周期  
  // componentDidMount     挂载完成 
  // componentDidUpdate    更新完成 
  // componentWillUnmount  销毁前   
  // 第二那个参数是依赖值，空数组则只执行一次 ，依赖值发生变化，则执行 useEffect hook
  useEffect(() => {
    console.log("hook - useEffect() 打印 count ：", count, props);
    setCount2(count * 10)
  }, [count]) // [] ：不触发

  // useContext , 类组件 ： const Context = React.createContext(); Context.Provider ; Context.Consumer ;  
  // 父...级创建了 Context 上下文  const ContextObj = React.createContext() 
  // ContextObj 必须是整个上下文 
  const value = useContext(ContextObj);

  // useReducer 
  // 类似初始化 state 和对应的修改方法
  // reducer , 接收两个参数，state  和修改管理修改state的方法 dispatch 
  // initState , 初始化state值，这里是惰性的初始化  
  const [state, dispatch] = useReducer(reducer, initState);

  // useCallback => useMemo 的语法糖
  // useCallbackFn ,执行的逻辑
  // array , 依赖, 传依赖对应的值，值发生变化才执行 
  const memoCallback = useCallback(useCallbackFn, []);

  // useMemo 用法跟 useCallback 差不多 
  // fn ,创建逻辑函数 ， 这里直接写内联 
  // array , 依赖  
  const memoValue = useMemo(() => { return count * 3 }, [count]);

  // useRef 返回一个可变的 ref 对象    
  // 父组件通过ref调用子组件属性和方法：使用 useImperativeHandle(ref,fun) 
  // ref 则是传过来的ref , fun则是定义的被调用方法和属性
  // 然后导出组件用  export default forwardRef(子组件) 
  // 具体样例看 menu.jsx 
  const inpRef = useRef(null);

  return (
    <div style={divstyle}>
      <div>
        <p> 接收的 props random 值 {props.random} </p>
        <h3> useState 计数器 count : {count}  </h3>
        <h3> useEffect 监听 count x 10 = {count2} </h3>
        <button onClick={() => setCount(setCountFun(count))}> click + </button>
        &nbsp;
      <button onClick={() => setCount(count - 1)}> click - </button>

        <hr />
        <h3>useContext 上下文 ： {value} </h3>
        <h3>useCallback 依赖计算 count * 2  =  {memoCallback(count)}</h3>
        <h3>useMemo 依赖计算 count * 3 = {memoValue}</h3>
        <h3>
          useRef 获取一个可变的对象 - 输入框  &nbsp;
        <input type="text" ref={inpRef} />  &nbsp;
        <button onClick={() => { inpRef.current.focus() }}>获取焦点</button>
        </h3>
        <h3>useLayoutEffect 类似 useEffect , 区别 : useLayoutEffect 是同步渲染 堵塞 ，useEffect 非堵塞</h3>
        <h3>useDebugValue 不常用 </h3>
        <hr />

        <h3>useReducer Count:{state.count} </h3>
        <button onClick={() => { dispatch({ type: "add" }) }}>useReducer +</button>
        &nbsp;
        <button onClick={() => { dispatch({ type: "jian" }) }}>useReducer -</button>

      </div>
      <div style={prestyle}>
        <p style={{ textAlign: "center", fontSize: "2rem", marginBottom: 0 }}>部分实践代码</p>
        <pre>
          {'\n            /**\n             * Hook 是一个可以让你在函数组件里“钩入” React state 及生命周期等特性的函数 \n             * Hook 不能在 class 组件中使用 \n             */\n            \n            import React, {\n              useState,\n              useEffect,\n              useContext,\n              useReducer,\n              useCallback,\n              useMemo,\n              useRef\n            } from "react"\n            import { ContextObj } from "../home"\n            \n            // 惰性初始化 count \n            function GetA () {\n              return 0;\n            }\n            \n            // reducer 初始化 state 和定义逻辑的方法\n            const initState = { count: 0 }\n            \n            function reducer (state, action) {\n              switch (action.type) {\n                case "add":\n                  return { count: state.count + 1 }\n                case "jian":\n                  return { count: state.count - 1 }\n                default:\n                  throw new Error()\n              }\n            }\n            \n            // useCallbackFn 回调函数 \n            function useCallbackFn (count) {\n              return count * 2;\n            }\n            \n            // 修改count的外部函数 \n            function setCountFun (count) {\n              return count + 1;\n            }\n            \n            function Example (props) {\n            \n              // useState 定义初始化和修改state的方法 \n              // 直接默认初始化 count , const [count, setCount] = useState(0); \n              // 惰性初始化 count ，通过一个函数获取初始的 state count\n              const [count, setCount] = useState(() => {\n                const a = GetA();\n                return a;\n              });\n            \n              const [count2, setCount2] = useState(0);\n            \n              // useEffect \n              // 相当于 class 类组件的生命周期  \n              // componentDidMount     挂载完成 \n              // componentDidUpdate    更新完成 \n              // componentWillUnmount  销毁前   \n              // 第二那个参数是依赖值，空数组则只执行一次 ，依赖值发生变化，则执行 useEffect hook\n              useEffect(() => {\n                console.log("hook - useEffect() 打印 count ：", count, props);\n                setCount2(count * 10)\n              }, [count]) // [] : 不触发\n            \n              // useContext , 类组件 ： const Context = React.createContext(); Context.Provider ; Context.Consumer ;  \n              // 父...级创建了 Context 上下文  const ContextObj = React.createContext() \n              // ContextObj 必须是整个上下文 \n              const value = useContext(ContextObj);\n            \n              // useReducer \n              // 类似初始化 state 和对应的修改方法\n              // reducer , 接收两个参数，state  和修改管理修改state的方法 dispatch \n              // initState , 初始化state值，这里是惰性的初始化  \n              const [state, dispatch] = useReducer(reducer, initState);\n            \n              // useCallback => useMemo 的语法糖\n              // useCallbackFn ,执行的逻辑\n              // array , 依赖, 传依赖对应的值，值发生变化才执行 \n              const memoCallback = useCallback(useCallbackFn, []);\n            \n              // useMemo 用法跟 useCallback 差不多 \n              // fn ,创建逻辑函数 ， 这里直接写内联 \n              // array , 依赖  \n              const memoValue = useMemo(() => { return count * 3 }, [count]);\n            \n              // useRef 返回一个可变的 ref 对象    \n              // 父组件通过ref调用子组件属性和方法：使用 useImperativeHandle(ref,fun) \n              // ref 则是传过来的ref , fun则是定义的被调用方法和属性\n              // 然后导出组件用  export default forwardRef(子组件) \n              // 具体样例看 menu.jsx \n              const inpRef = useRef(null);\n            \n              return (\n            \n                  <div>\n                    <p> 接收的 props random 值 {props.random} </p>\n                    <h3> useState 计数器 count : {count}  </h3>\n                    <h3> useEffect 监听 count x 10 = {count2} </h3>\n                    <button onClick={() => setCount(setCountFun(count))}> click + </button>\n                    &nbsp;\n                  <button onClick={() => setCount(count - 1)}> click - </button>\n            \n                    <hr />\n                    <h3>useContext 上下文 ： {value} </h3>\n                    <h3>useCallback 依赖计算 count * 2  =  {memoCallback(count)}</h3>\n                    <h3>useMemo 依赖计算 count * 3 = {memoValue}</h3>\n                    <h3>\n                      useRef 获取一个可变的对象 - 输入框  &nbsp;\n                    <input type="text" ref={inpRef} />  &nbsp;\n                    <button onClick={() => { inpRef.current.focus() }}>获取焦点</button>\n                    </h3>\n                    <h3>useLayoutEffect 类似 useEffect , 区别 : useLayoutEffect 是同步渲染 堵塞 ，useEffect 非堵塞</h3>\n                    <h3>useDebugValue 不常用 </h3>\n                    <hr />\n            \n                    <h3>useReducer Count:{state.count} </h3>\n                    <button onClick={() => { dispatch({ type: "add" }) }}>useReducer +</button>\n                    &nbsp;\n                    <button onClick={() => { dispatch({ type: "jian" }) }}>useReducer -</button>\n            \n                  </div>\n                \n              )\n            }\n            \n            export default Example;    \n            \n          '}
        </pre>
      </div>

    </div>
  );
}

export default Example;    
