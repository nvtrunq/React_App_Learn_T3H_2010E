import React, { Component } from 'react'
import {students} from './../../constants/student'
import User from './User'

class Users extends Component {
  state = {
    students
  }

  editRow = (id, isEdit) => {
    const user = this.state.students.find(user => user.id === id)
    if (!user) {
      return;
    }
    
    user.isEdit = isEdit

    this.setState({
      students: [...this.state.students]
    })
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col text-right pt-2">
            <div className="btn btn-info">Add</div>
            <div className="btn btn-danger">Delete</div>
          </div>
        </div>

        <div className="row pt-2">
          <div className="table table-bordered">
            <thead>
              <tr>
                <th><input type="checkbox"></input></th>
                <th>Id</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.students.map((user, index) => 
                <User 
                  key = {user.id} 
                  user={user}
                  editRow={this.editRow}
                />)
              }
            </tbody>
          </div>
        </div>
      </div>
    )
  }
}

export default Users
