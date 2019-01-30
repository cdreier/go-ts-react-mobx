import React from 'react'
import { observer, inject } from 'mobx-react'
import DemoModel from '../models/DemoModel'


interface IProps {
  demo?: DemoModel,
}


@inject('demo')
@observer
export default class Editor extends React.Component<IProps> {

  change(val: string){
    this.props.demo.demostring = val
  }

  render(){
    return (
      <input value={this.props.demo.demostring} onChange={e => this.change(e.target.value)} />
    )
  }

}

