import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.less'


class homePage extends React.Component{
  constructor(props){
    super()
    this.state = {
      leftName: 'xxx',
      rightName: 'xxx'
    }
  }


  render(){
    return(
      <div className={style.content}>
          <main>
            <div className={style.main_topContent}>
            <div>
                <div className={style.portrait}></div>
                <p>{this.state.leftName}</p>
            </div>
            <div>
                <div className={style.midword}>
                <p>火炬</p>
                </div>
            </div>
            <div>
                <div className={style.portrait}></div>
                <p>{this.state.rightName}</p>
            </div>
            </div>
            <div className={style.main_bottomContent}>
              <p>五四青年节是为了纪念</p>
              <p>1919年爆发的五四运动而设立的。五四爱国</p>
              <p>运动是一次彻底的反对帝国主义和封建主义的爱国运动</p>
            </div>
          </main>
          <footer>
          <div className={style.btn}>
            <Link to="/choice">接过火炬</Link>
            </div>
          </footer>
      </div>
    )
  }
}

export default homePage