import React, {Component} from 'react';
import { AppProps } from '../../model/app-props';

export interface SubjectProps {
  id: string;

  name: string;
}

export class Subject extends Component<Subject, any> {

  constructor(props) {
    super(props);
  }

  render() {
    const {name} = this.props;
    return (
    <div>
      Môn học : {name}
    </div>
    );
  }

}