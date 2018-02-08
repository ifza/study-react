export const GET_USER_INFI_REQUEST = "userInfo/GET_USER_INFI_REQUEST"
export const GET_USER_INFI_SUCCESS = "userInfo/GET_USER_INFI_SUCCESS"
export const GET_USER_INFI_FAIL = "userInfo/GET_USER_INFI_FAIL"

export function getUserInfo(){    
    return {
        types:[GET_USER_INFI_REQUEST,GET_USER_INFI_SUCCESS,GET_USER_INFI_FAIL],
        promise:client=>client.get(`http://192.168.1.13:9000/user`),
        afterSuccess:r=>{
            console.log('执行成功')
        }
    }
}