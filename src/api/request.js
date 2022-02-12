import axios from 'axios'
import {showMessage} from '@/utils'

const request = axios.create()

request.interceptors.response.use((res) => {
    if(res.data.code !== 0) {
        showMessage({
            content: res.data.msg,
            type: 'error'
        })
        return null
    }else {
        return res.data.data
    }
})

export default request