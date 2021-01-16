import React, { Component } from 'react'
import { render } from 'react-dom'

class User extends Component {

  state = {
    editingUser: {...this.props.user}
  }

  get display() {
    const {user} = this.props

    return(
      <tr>
          <td>
            <input type="checkbox"></input>
          </td>
          <td>{user.id}</td>
          <td>{user.fullName}</td>
          <td>{user.gender === 'male' ? 'female': 'male'}</td>
          <td>{user.age}</td>
          <td>
            <button className="btn btn-primary" onClick={() => this.props.editRow(user.id, true)}>Edit</button>
            <button className="btn btn-danger">Edit</button>
          </td>
        </tr>
    )
  }

  ChangeName = event => {
    const  value = event.target.value
    const editingUser = this.state.editingUser
    this.setState({
      editingUser: {
        ...this.state.editingUser,
        fullName: value
      }
    })
  }

  get editingRow() {
    const user = {...this.props.editingUser}
  
      return(
        <tr>
          <td>
            <input type="checkbox"/>
          </td>
          <td>{user.id}</td>
          <td>
            <input type="text" value={user.fullName} onChange =  {this.ChangeName} className="form-control"/>
          </td>
          <td>
            <input type="text" value={user.age} className="form-control"/>
          </td>
          <td>
            <select className="form-control" defaultValue={user.gender}>
              <option  value="male">Male</option>
              <option  value="female">Female</option>
            </select>
          </td>
          <td>
            <button className="btn btn-primary" onClick={() => this.props.editRow(user.id, false)}>cancel</button>
          </td>
          <td></td>
        </tr>
      )
  }

  render() {
    const {user} = this.props
    
    return(
      <>
        { user.isEdit ? this.editingRow : this.display }
      </>
    )
  }
}

export default User