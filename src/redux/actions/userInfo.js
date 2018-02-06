export const GET_USER_INFI_REQUEST = "userInfo/GET_USER_INFI_REQUEST"
export const GET_USER_INFI_SUCCESS = "userInfo/GET_USER_INFI_SUCCESS"
export const GET_USER_INFI_FAIL = "userInfo/GET_USER_INFI_FAIL"
export function getUserInfoRequest(){
    return{type:GET_USER_INFI_REQUEST}
}
export function getUserInfoSuccess(userInfo){
    return{
        type:GET_USER_INFI_SUCCESS,
        userInfo:userInfo
    }
}
export function getUserInfoFail(){
    return{type:GET_USER_INFI_FAIL}
}

// export function getUserInfo(){
//     return function(dispatch){
//         dispatch(getUserInfoRequest());
//         return fetch('http://192.168.1.13:8000/api/users.json')
//         .then((r=>{return r.json()}))
//         .then((d=>{
//             dispatch(getUserInfoSuccess(d))
//         }))
//         .catch(()=>{
//             dispatch(getUserInfoFail());
//         })
//     }
// }


export function getUserInfo(){
    return {
        types:[GET_USER_INFI_REQUEST,GET_USER_INFI_SUCCESS,GET_USER_INFI_FAIL],
        promise:client=>client.get(`http://192.168.1.13:9000/user`)

    }
}