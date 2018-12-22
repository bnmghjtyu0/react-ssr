import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Home extends Component {
  render () {
    return (
      <div>
        <h1>Page Home.</h1>
        <Link to="/about">Link to Post</Link>
    </div>
    )
  }
}

export default Home