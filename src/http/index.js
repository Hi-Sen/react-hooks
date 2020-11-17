import Axios from 'axios'

const baseUrl = '';

const axiosServer = Axios.create({
  baseURL: baseUrl,
  timeout: '15000',
  headers: { 'X-Custom-Header': 'foobar' }
})

const axiosApi = {
  // 获取精选专区所有分类 
  get_list: "json/music.json",
  // 获取热门推荐分类
  get_recommend: "json/remen.json",
}

// const axiosFun = {
//   get: function (url, sucess, error) {
//     return axiosServer.get(url).then(res => sucess(res)).catch(err => error(err))
//   }
// }

export default { axiosServer, axiosApi } 
