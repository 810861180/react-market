import * as constants from './contants'
import { fromJS } from 'immutable'

// 初始默认的state
const defaultState = fromJS({
    userInfo: null
})

const getData = (state, action) => {
    return state.set('userInfo', action.data)
}

export default (state = defaultState, action) => {
    // 由于state是引用型，不能直接修改，否则是监测不到state发生变化的。因此需要先复制一份进行修改，然后再返回新的state。
    // let newState = Object.assign({}, state)
    // 使用immutable则无需通过手动复制
    switch (action.type) {
        case constants.SET_DATA:
            // newState.userInfo = action.data
            // return newState
            return getData(state, action)
        default:
            return state
    }
}