import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { AppProps } from './model/app-props';

import {fromFetch} from 'rxjs/fetch';
import { map, switchMap } from 'rxjs/operators';

import {Subject} from './component/subject/subject.component';
import { from, Observable } from 'rxjs';

function parseSubjectComponent({id, name}): Subject {
  return <Subject key={id} name={name} />
}

function get(): Observable<Subject[]> {
  return fromFetch('https://my-json-server.typicode.com/lequangphi0611/JsonAPI/subjects',
  {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json'
    }
  }).pipe(
    map(res => res.json()),
    switchMap(v => from(v)),
    map(values =>  values.map(parseSubjectComponent))
  );
}

class App extends Component<AppProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      subjects: []
    };

    get().subscribe(values => {
      this.setState({
        subjects: values
      })
    })
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        {this.state.subjects}


        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
