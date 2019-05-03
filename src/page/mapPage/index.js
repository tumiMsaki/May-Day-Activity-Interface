import React from 'react'
import Map from '../../components/map/index'
import style from './style.less'
import Shelter from '../../components/shelter/index'



class mapPage extends React.Component{
  constructor(props){
    super()
    this.state ={
      show: false
    }
  }

  show(){
    this.setState({
      show:true
    })
  }

  render(){
    return(
      <div className={style.content}>
      {
        this.state.show?<Shelter></Shelter>:null
      }
        <main>
        <div className={style.main_topContent}>
        <Map city={this.props.location.state}></Map>
        </div>
      </main>
      <footer>
      <div className={style.main_bottomContent}>
              <p>我们一定不忘谆谆教诲，牢记殷殷嘱托，积极拥抱新时代、奋进新时代，让青春在为祖国、为人民、为名族、为人类的奉献中换发更加灿烂的光彩。</p>
            </div>
      <div className={style.btn}>
        <div className={style.button} onClick={() => this.show()}>传递成功</div>
        </div>
      </footer>
      </div>
    )
  }
}

export default mapPage