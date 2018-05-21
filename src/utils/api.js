const debug = true
const host = debug ? 'http://localhost:3000/api' : 'https://api.schoolclubs.cn'
import { TOKEN } from '@/utils/config'

export const userLogin = host + '/users/login'
export const getUserInfo = host + '/users/getInfo'
export const editUserInfo = host + '/users/edit'
export const createClub = host + '/club/create'
export const createActivity = host + '/activity/create'
export const getActivities = host + '/activity/list'
export const applicate = host + '/activity/participate'
export const applicated = host + '/activity/participated'
export const getActivity = host + '/activity/one'
export const getClubList = host + '/club/list'
export const getClubsRelateSelf = host + '/users/clubsRelateSelf'
export const getClubsRecommend = host + '/users/clubsRecommend'
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
                if (typeof data === 'string') data = JSON.parse(data)
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

export const chooseImageAndUpload = () => {
    return new Promise((resolve, reject) => {
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: (res) => {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                // this.avatar = res.tempFilePaths[0]
                let tempFile = res.tempFiles[0]

                uploadBlobImage(tempFile).then((res) => {
                    if (res.code !== 200) {
                        wx.showToast({title: '图片上传失败,' + res.msg})
                    } else {
                        resolve(res.data)
                    }
                })
            }
        })
    })
}
