import myAxios from './config'
//导航数据
export  const reqNavList = ()=>myAxios.get('/NavList')
export const reqNavCateList = ()=>myAxios.get('/NavCateList')
//分类
export const reqCateNavData = ()=>myAxios.get('/cateNavData')