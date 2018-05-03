// Test.jsx
import React, { Component } from 'react'

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
// connect的意思，就是将这两种组件连起来。
import { connect } from 'react-redux'

// 引入action
import { setPageTitle, setInfoList } from '../store/actions.js'

// mapStateToProps：将state映射到组件的props中
// 负责输入逻辑
// mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
// mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
        infoList: state.infoList
    }
};

// mapDispatchToProps：将dispatch映射到组件的props中
// 负责输出逻辑
// 用来建立 UI 组件的参数到store.dispatch方法的映射
// 用户对 UI 组件的操作映射成 Action
// 可以是一个函数，也可以是一个对象
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setPageTitle (data) {
            // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
            dispatch(setPageTitle(data))
            // 执行setPageTitle会返回一个函数
            // 这正是redux-thunk的所用之处:异步action
            // 上行代码相当于
            /*dispatch((dispatch, getState) => {
             dispatch({ type: 'SET_PAGE_TITLE', data: data })
            )*/
        },
        setInfoList (data) {
            dispatch(setInfoList(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount () {
        let { setPageTitle, setInfoList } = this.props;
        console.log(this.props);
        // 触发setPageTitle action
        setPageTitle('新的标题');
        setInfoList();
    }
    render () {
        // 从props中解构store
        let { pageTitle } = this.props;

        // 使用store
        return (
            <div>
                <h1>{pageTitle}</h1>
            </div>
        )
    }
}