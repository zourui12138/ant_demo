import {news_getTableData} from '../api/getData'
// action也是函数
export const setPageTitle = (data) => {
    return (dispatch, getState) => {
        // 分发一个任务
        dispatch({ type: 'SET_PAGE_TITLE', data: data })
    }
};

export const setInfoList = () => {
    return async (dispatch, getState) => {
        let data = await news_getTableData();
        dispatch({ type: 'SET_INFO_LIST', data: data.data });
    }
};