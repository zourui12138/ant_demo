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

class Platform extends Component {
    render() {
        return (
            <div id='platform' className='clear'>
                <aside className='aside fl'>
                    <h1><img src={logo} alt=""/>数据流通平台</h1>
                    <PerfectScrollbar className='nav'>
                        <ul>
                            <li className='current'>平台总揽</li>
                            <li>环境管理</li>
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

export default Platform