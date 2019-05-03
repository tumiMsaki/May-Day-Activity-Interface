import React from 'react'
import style from './style.less'


class head extends React.Component{
  render(){
    return(
      <div className={style.content}>
      <div className={style.icon}></div>
          <header>
            <div>
              <p className={style.one}>传</p>
              <p className={style.two}>递</p>
              <p className={style.three}>五</p>
              <p className={style.four}>四</p>
              <p className={style.five}>火</p>
              <p className={style.six}>炬</p>
            </div>
            <div>
              <p className={style.one}>弘</p>
              <p className={style.two}>扬</p>
              <p className={style.three}>五</p>
              <p className={style.four}>四</p>
              <p className={style.five}>精</p>
              <p className={style.six}>神</p>
            </div>
          </header>
      </div>
    )
  }
}

export default head