import React from 'react'
import style from './style.less'


class head extends React.Component{
  render(){
    return(
      <div className={style.content}>
          <header>
            <p>传递五四火炬</p>
            <p>弘扬五四精神</p>
          </header>
      </div>
    )
  }
}

export default head