import React, { Component } from 'react';
import { Router, Route, browserHistory, Redirect } from 'react-router';

// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// Provider在根组件外面包了一层，这样一来，TestComponent的所有子组件就默认都可以拿到state了。
import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from '../store/index.js'

import Platform from "../modules/platform/Platform";
import Login from "../modules/login/Login";

export default class MyRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    // onEnter钩子还可以用来做认证。
    enter() {
        console.log('用户进入');
        console.log(this.state.date);
    }
    leave() {
        console.log('用户离开');
        console.log(this.state.date);
    }
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Redirect from="/" to="/platform" />
                    <Route path="/platform" component={Platform} onEnter={this.enter.bind(this)} onLeave={this.leave.bind(this)}/>
                    <Route path="/login" component={Login}/>
                </Router>
            </Provider>
        );
    }
}