import React from 'react'
import style from './style.less'


class Shelter extends React.Component{

  render(){
    return(
      <div className={style.content}>
      <div className={style.arrow}></div>
      <p className={style.word}>火炬传递成功！赶紧分享，让更多的青年朋友加入吧~</p>
      </div>
    )
  }
}

export default Shelter;