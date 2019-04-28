import React from 'react'
import Map from '../../components/map/index'
import style from './style.less'



class mapPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={style.content}>
        <Map city={this.props.location.state}></Map>
        <footer>
        <div className={style.word}>
          <p>火炬传递成功!</p>
          <p>点击右上角分享给更多好友吧</p>
        </div>
      </footer>
      </div>
    )
  }
}

export default mapPage