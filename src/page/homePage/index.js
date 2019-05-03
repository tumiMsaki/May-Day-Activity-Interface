import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.less'

class homePage extends React.Component{
  constructor(props){
    super()
    this.state = {
      nickname: null,
      headimg:null
    }

    this.getUrlParams = this.getUrlParams.bind(this)
  }

  componentDidMount(props){
    const nickname  = decodeURI(this.getUrlParams('nickname'))
    const headimg = this.getUrlParams('headimgurl')
    this.setState({
      nickname,
      headimg,
    })
  }

 getUrlParams(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = decodeURI(window.location.search).substr(1).match(reg);  
    if (r != null) return unescape(r[2]); 
  return null; 
}

  render(){
    return(
      <div className={style.content}>
          <main>
            <div className={style.main_topContent}>
            <div className={style.right}>
                <div className={style.tuantuan}></div>
                <p className={style.nameL}>团团</p>
            </div>
            <div>
                <div className={style.fire}>
                </div>
            </div>
            <div className={style.left}>
                <div className={style.portrait} style={{ background: `#e8795a url(${this.state.headimg}) no-repeat center`}}></div>
                <p className={style.nameR}>{this.state.nickname || 'xxx'}</p>
            </div>
            </div>
          </main>
          <footer>
          <div className={style.main_bottomContent}>
              <p style={{fontSize: '0.38rem'}}>{this.state.nickname}，你好！我是团团。今年是五四运动100周年。让我们一起传递五四火炬，发扬五四精神，以实现中华民族伟大复兴为己任,不辜负党的期望、人民期待、民族重托,不辜负我们这个伟大时代。 </p>
          </div>
          <div className={style.btn}>
            <Link to={{
          pathname: "/choice",
          state: {
            nickname:this.state.nickname,
            headimg:this.state.headimg
          }
            }}>接过火炬</Link>
            </div>
          </footer>
      </div>
    )
  }
}

export default homePage