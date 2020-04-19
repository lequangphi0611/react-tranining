import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

import SubjectDataComponent from './component/subject-data';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container col-8">
        <SubjectDataComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
