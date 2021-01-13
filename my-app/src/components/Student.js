import React, { Component } from 'react'
import { StudentsData } from './../components/StudentsData'

class studentsData extends Component {
  state = {
    StudentsData
  }

  get student() {
    return this.state.StudentsData.map((item, index) => {
      return(
        <li>
          <p>{item.id}</p>
        </li>
      )
    })
  }

  render () {
    return(
      <>{this.StudentsData}</>
    )
  }
}

export default StudentsData