import React, {Component} from 'react'

import './Platform.scss'
import {Button} from 'antd'
// 引入组件
import TestComponent from '../../components/Test'

class Platform extends Component {
    render() {
        return (
            <div id='platform' className='clear'>
                <aside className='aside fl'>
                    <TestComponent />
                </aside>
                <section className='section fl'>
                    <header className='header'>header</header>
                    <div className='main'><Button type="primary">Primary</Button></div>
                </section>
            </div>
        )
    }
}

export default Platform