import { createStore, combineReducers } from "redux"

import reducer from './reducer'
import reducer_list from './reducer_list'

// 合并多个 reducer 
const Reducers = combineReducers({
  reducer,
  reducer_list
})

// createStore 创建一个仓库 ， 并需要管理的state及方法注入到仓库 
export default createStore(Reducers);

