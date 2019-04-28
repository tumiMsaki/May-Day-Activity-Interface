import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.less'


class choicePage extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      Name: 'xxx',
      city:[
        {
          name: '重庆'
        },
        {
          name: '上海'
        },
        {
          name: '新疆维吾尔自治区'
        },
        {
          name: '拉萨'
        },{

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

  render(){
    return(
      <div className={style.content}>
      <main>
        <div className={style.main_topContent}>
            <div className={style.portrait}></div>
            <p>{this.state.Name}</p>
        </div>
        <div className={style.main_bottomContent}>
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
      <div className={style.btn}>
      {
        this.state.choiceCity == null ? 
        <a  onClick={() => this.noChoice()}>接过火炬</a> :
        <Link to={{
          pathname: "/map",
          state: this.state.choiceCity
        }}>接过火炬</Link>
      }
        </div>
      </footer>
  </div>
    )
  }
}

export default choicePage