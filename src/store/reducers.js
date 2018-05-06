// reducers.js
// 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from 'redux'
// 默认值
import defaultState from './state.js'

// 一个reducer就是一个函数
const pageTitle = (state = defaultState.pageTitle, action) => {
    // 不同的action有不同的处理逻辑
    switch (action.type) {
        case 'SET_PAGE_TITLE':
            return action.data;
        default:
            return state
    }
};

const infoList = (state = defaultState.infoList, action) => {
    switch (action.type) {
        case 'SET_INFO_LIST':
            return action.data;
        default:
            return state
    }
};

const currentNav = (state = defaultState.currentNav, action) => {
    // 不同的action有不同的处理逻辑
    switch (action.type) {
        case 'TOGGLE_CURRENT_NAV':
            return action.data;
        default:
            return state
    }
};

// 导出所有reducer
export default combineReducers({pageTitle, infoList, currentNav});