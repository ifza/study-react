import { GET_USER_INFI_REQUEST, GET_USER_INFI_SUCCESS, GET_USER_INFI_FAIL } from "actions/userInfo";

const initState = { isLoading: false, userInfo: {}, errorMsg: '' }
export default function reducer(state = initState, action) {    
    console.log(action.type)
    switch (action.type) {
        case GET_USER_INFI_REQUEST:
            return { ...state, isLoading: true, userInfo: {}, errorMsg: '' }
            break;
        case GET_USER_INFI_SUCCESS:
            return { ...state, isLoading: false, userInfo: action.result.data, errorMsg: '' }
            break;
        case GET_USER_INFI_FAIL:
            return { ...state, isLoading: false, userInfo: {}, errorMsg: '请求错误' }
            break;
        default:
            return state
            break;
    }
}