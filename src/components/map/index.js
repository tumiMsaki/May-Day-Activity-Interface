import React from 'react'
const image = require('../../assets/image/test.jpg')
const icon = require('../../assets/image/icon.jpg')

class Map extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      width: window.innerWidth,
      height: window.innerWidth*(10/16),
      canvaswidth: window.innerWidth,
      canvasheight: window.innerWidth*(10/16)
    }
    this.initCanvas = this.initCanvas.bind(this)
  }
  initCanvas() {
    let ele = document.getElementById("time_graph_canvas")
    let canvas = ele.getContext("2d");
    let drawimage = new Image()
    let drawIcon = new Image()
    drawimage.src = image
    drawIcon.src = icon
    drawimage.onload = () => {
      canvas.drawImage(drawimage,0,0,this.state.canvaswidth,this.state.canvasheight)
    }

    drawIcon.onload = () => {
      canvas.drawImage(drawIcon,this.state.canvaswidth*0.2,this.state.canvasheight*0.4,this.state.canvaswidth*0.25,this.state.canvasheight*0.45)
    }
  }

  componentDidMount() {
    this.initCanvas()
  }
  componentDidUpdate() {
    this.initCanvas()
  }
  render() {
    const { width, height, canvaswidth, canvasheight } = this.state
    return (
      <div style={{ width: width, height: height}}>
        <canvas id="time_graph_canvas" width={canvaswidth} height={canvasheight}></canvas>
      </div>
    )
  }
}

export default Map