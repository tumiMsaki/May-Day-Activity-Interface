import React from 'react'
import style from './style.less'
import coordinate from './coordinate'
const icon = require('../../assets/image/fire.png')

class Map extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      width: window.innerWidth,
      height: window.innerWidth*(11/16),
      canvaswidth: window.innerWidth,
      canvasheight: window.innerWidth*(11/16),
      x: null,
      y: null,
      num :null
    }
    this.initCanvas = this.initCanvas.bind(this)
  }
  initCanvas(image) {
    let ele = document.getElementById("time_graph_canvas")
    let canvas = ele.getContext("2d");
    let drawimage = new Image()
    let drawIcon = new Image()
    drawimage.src = image
    drawimage.onload = () => {
      canvas.drawImage(drawimage,0,-10,this.state.canvaswidth,this.state.canvasheight)
      drawIcon.src = icon
      drawIcon.onload = () => {
        canvas.drawImage(drawIcon,this.state.canvaswidth*`${this.state.x}`,this.state.canvasheight*`${this.state.y}`)
      }
    }
  }

  componentDidMount() {
    const city = this.props.city
    let item = null
    for(item of coordinate){
      if(item.city === city){
        this.setState({
          x: item.coordinate.x,
          y: item.coordinate.y,
          num: item.coordinate.num
        },() => {
          const image = require(`../../assets/image/${this.state.num || 1}.png`)
          this.initCanvas(image)
        })
      }
    }
  }
  componentDidUpdate() {
    this.initCanvas()
  }
  render() {
    const { width, height, canvaswidth, canvasheight } = this.state
    return (
      <div style={{ width: width, height: height}} className={style.map}>
        <canvas id="time_graph_canvas" width={canvaswidth} height={canvasheight}></canvas>
      </div>
    )
  }
}

export default Map