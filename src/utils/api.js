const debug = true
const host = debug ? 'http://localhost:3000/api' : 'https://api.schoolclubs.cn'
import { TOKEN } from '@/utils/config'

export const userLogin = host + '/users/login'
export const getUserInfo = host + '/users/getInfo'
export const editUserInfo = host + '/users/edit'
const saveBlobImage = host + '/image/saveBlobUpload'

export const request = (method, url, data = {}, header = {}) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            method: method.toUpperCase(),
            header: Object.assign({
                'x-access-token': wx.getStorageSync(TOKEN)
            }, header),
            data,
            success({data}) {
                console.log(data)
                resolve(data)
            }
        })
    })
}

export const uploadBlobImage = (tempfile, formData = {}) => {
    return new Promise((resolve, reject) => {
        wx.uploadFile({
            url: saveBlobImage,
            filePath: tempfile.path,
            header: {
                'x-access-token': wx.getStorageSync(TOKEN)
            },
            name: 'image',
            formData: formData,
            success({data}) {
                console.log(data)
                if (typeof data === 'string') data = JSON.parse(data)
                resolve(data)
            }
        })
    })
}
