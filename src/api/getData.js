import axios from 'axios'
// 统一配置请求时间限制
axios.defaults.timeout = 4000;

// news
export const news_getTableData = () => axios.get('http://localhost:3003/news');