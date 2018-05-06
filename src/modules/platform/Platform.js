import React, {Component} from 'react'

import './Platform.less'
// 引入滚动条
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
// 引入图片
import logo from '../../assets/img/platform/logo.png'
import portrait from '../../assets/img/platform/portrait.png'
import message from '../../assets/img/platform/message.png'
import system from '../../assets/img/platform/system.png'
import logout from '../../assets/img/platform/logout.png'
// 引入react-redux
import {connect} from 'react-redux'
import {toggleCurrentNav} from "../../store/actions"
import {browserHistory} from 'react-router'

class Platform extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        switch (this.props.location.pathname){
            case '/platform/home' : this.props.toggleCurrentNav('home');break;
            case '/platform/environment' : this.props.toggleCurrentNav('environment');break;
        }
    }
    href(path) {
        this.props.toggleCurrentNav(path);
        browserHistory.push('/platform/'+path);
    }
    render() {
        return (
            <div id='platform' className='clear'>
                <aside className='aside fl'>
                    <h1><img src={logo} alt=""/>数据流通平台</h1>
                    <PerfectScrollbar className='nav'>
                        <ul>
                            <li
                                className={this.props.currentNav === 'home' ? 'current' : ''}
                                onClick={this.href.bind(this,'home')}>平台总揽</li>
                            <li
                                className={this.props.currentNav === 'environment' ? 'current' : ''}
                                onClick={this.href.bind(this,'environment')}>环境管理</li>
                            <li>流通管理</li>
                            <li>用户管理</li>
                            <li>数据目录</li>
                            <li>平台监控</li>
                            <li>数据统计</li>
                        </ul>
                    </PerfectScrollbar>
                </aside>
                <section className='section fl'>
                    <header className='header clear'>
                        <ul className="fr">
                            <li className="fl">您好！admin</li>
                            <li className="fl"><img src={portrait} alt=""/></li>
                            <li className="fl"><img src={message} alt=""/></li>
                            <li className="fl"><img src={system} alt=""/></li>
                            <li className="fl"><img src={logout} alt=""/></li>
                        </ul>
                    </header>
                    <PerfectScrollbar className='main'>{this.props.children}</PerfectScrollbar>
                </section>
            </div>
        )
    }
}
// 将state绑定到组件的props中
const mapStateToProps = (state) => {
    return {
        currentNav: state.currentNav
    }
};
// 将dispatch封装起来绑定到组件props中
const mapDispatchToProps = (dispatch) => {
    return {
        toggleCurrentNav (data) {
            dispatch(toggleCurrentNav(data))
        }
    }
};
// 将state和组件Platform联系起来，并且将组件暴露出去
export default connect(mapStateToProps,mapDispatchToProps)(Platform);