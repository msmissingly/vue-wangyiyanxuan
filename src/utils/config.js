import axios from 'axios'
import qs from 'querystring'
import { Toast } from 'vant';
import Vue from 'vue'
Vue.use(Toast);

axios.defaults.baseURL = 'http://localhost:3001'
//请求拦截器
axios.interceptors.request.use((config)=>{
  let {method,data} = config
  if(method.toLowerCase()==="post"&& data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})
//响应拦截器
axios.interceptors.response.use(
	response => {
    // Toast.success('请求成功')
		return response.data
	},
	err => {
    Toast.fail(err)
    return new Promise(()=>{})
	
  }
		
	
		
	
)

export default axios