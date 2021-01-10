import React, { Component } from 'react'
import { musicList } from './../component/Music'

class MusicList extends Component {
  state = {
      musicList
  }

  get musics() {
    return this.state.musicList.map((item, index) => {
        return (
          <li key={index}>
            <p>Title: {item.title}</p>
            <p>Name: {item.name}</p>
            <p>Time: {item.time}</p>
          </li>
        )
      })
    }

  render() {
    return(
      <>
        {this.musics}
      </>
    )
  }
}

export default MusicList
