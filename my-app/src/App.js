import React, { Fragment } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <div className="container bg-light">
        <Header />
        <Content />
      </div>
    </Fragment>
  )
}

export default App;
