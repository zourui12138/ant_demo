import React, {Component} from 'react'

import './Home.less'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import {Button} from 'antd'

class Home extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }
    chartBar() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.chartRef.current);
        // 配置选项
        let option = {
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        // 绘制图表
        myChart.setOption(option);
    }
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <div className='chart' ref={this.chartRef}/>
            </div>
        )
    }
    componentDidMount(){
        this.chartBar();
    }
}

export default Home;