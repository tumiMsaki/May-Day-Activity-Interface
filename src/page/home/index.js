import React from 'react'
import style from './style.less'


class Home extends React.Component{
  render(){
    return(
      <div className={style.content}>
        <div>
          <header>
            <div className={style.flag}></div>
            <div className={style.title}></div>
          </header>
          <main>
            <div className={style.mid}>
              <div className={style.secondTitle}></div>
              <div className={style.borad}>
                <p className={style.borad_word}></p>
              </div>
            </div>
            <div className={style.bottom}>
              <div className={style.thridTitle}></div>
              <div className={style.iconGroup}>
                <div>
                  <div className={style.oneIcon}></div>
                  <div className={style.one}></div>
                </div>
                <div>
                  <div className={style.twoIcon}></div>
                  <div className={style.two}></div>
                </div>
                <div>
                  <div className={style.threeIcon}></div>
                  <div className={style.three}></div>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <p className={style.footWord}>@红岩网校工作站</p>
          </footer>
        </div>
      </div>
    )
  }
}

export default Home