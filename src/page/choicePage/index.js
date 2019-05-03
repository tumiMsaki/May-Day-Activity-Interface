import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.less'


class choicePage extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      nickame: null,
      city:[
        {
          name: '重庆'
        },{
          name: '上海'
        },{
          name: '新疆'
        },{
          name: '西藏'
        },{
          name: '青海'
        },{
          name: '甘肃'
        },{
          name: '内蒙古'
        },{
          name: '黑龙江'
        },{
          name: '江苏'
        },{
          name: '宁夏'
        },{
          name: '山西'
        },{
          name: '陕西'
        },{
          name: '四川'
        },{
          name: '云南'
        },{
          name: '吉林'
        },{
          name: '辽宁'
        },{
          name: '北京'
        },{
          name: '天津'
        },{
          name: '河北'
        },{
          name: '河南'
        },{
          name: '山东'
        },{
          name: '湖北'
        },{
          name: '贵州'
        },{
          name: '湖南'
        },{
          name: '江西'
        },{
          name: '安徽'
        },{
          name: '浙江'
        },{
          name: '福建'
        },{
          name: '广西'
        },{
          name: '广东'
        },{
          name: '澳门'
        },{
          name: '香港'
        },{
          name: '海南'
        },{
          name: '台湾'
        }
      ],
      choiceCity: null
    }
  }

  select(e){
    this.setState({
      choiceCity: e.target.value
    })
  }

  noChoice(){
    alert('请选择所在城市')
  }

  componentDidMount(){
    this.setState({
      nickname:this.props.location.state.nickname,
      headimg:this.props.location.state.headimg
    })
    
  }

  render(){
    return(
      <div className={style.content}>
      <main>
        <div className={style.main_topContent}>
          <div>
              <div className={style.portrait} style={{ background: `#e8795a url(${this.state.headimg}) no-repeat center`}}></div>
              <p className={style.name}>{this.state.nickname || 'xxxxxxxxxxxxxxxxxxxxxxxxx'}</p>
          </div>
            <select className={style.select} onChange={(e)=>this.select(e)}>
            <option value="" disabled selected hidden className={style.firstOption}>选择你所在省份</option>
              {
                this.state.city.map((item,key) => {
                  return <option key={key}>{item.name}</option>
                })
              }
            </select>
        </div>
      </main>
      <footer>
      <div className={style.main_bottomContent}>
              <p>作为新时代青年，我们一定要树立远大理想、热爱伟大祖国、担当时代责任，敢于砥砺奋斗，练就过人本领，锤炼品德修为。</p>
            </div>
      <div className={style.btn}>
      {
        this.state.choiceCity == null ? 
        <div  onClick={() => this.noChoice()} className={style.button}>传递火炬</div> :
        <Link to={{
          pathname: "/map",
          state: this.state.choiceCity
        }}
        >传递火炬</Link>
      }
        </div>
      </footer>
  </div>
    )
  }
}

export default choicePage