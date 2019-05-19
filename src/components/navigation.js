import React, { Component } from 'react'
import {Link} from "gatsby"

export default class Navigation extends Component {
  render() {
    return (
      this.props.nav.map((navItem) => {
          return (
              <>
              <Link to={navItem}>{navItem}</Link>
              <br />
            </>
          )
      })
    )
  }
}
