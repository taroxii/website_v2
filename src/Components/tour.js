import React, { Component } from 'react';
import {Switch, Route} from 'react-router'
import {Link} from 'react-router-dom'

export default class Tour extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {match} = this.props
        return (
            <div className="container">
            <h2>Tour</h2>
            <ul>
              <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
              </li>
              <li>
                <Link to={`${match.url}/components`}>Components</Link>
              </li>
              <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
              </li>
            </ul>
        
            <Route path={`${match.url}/:tourId`} component={Canvas} />
            <Route
              exact
              path={match.url}
              render={() => <h3>Please select a topic.</h3>}
            />
          </div>
        )
    }
}


const Canvas = ({ match }) => (
<div>
      <h2>Topics</h2>
      {match.params.tourId}
    </div>
  )

