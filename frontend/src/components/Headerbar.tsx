import React, { Component } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import DemoModel from '../models/DemoModel'

const Wrapper = styled.div`
  background-color: #333;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
`

const Title = styled.span`
`

const Demo = styled.span`
`

interface IProps {
  demo?: DemoModel,
  children: any,
}

@inject('demo')
@observer
class Headerbar extends Component<IProps> {


  render(){
    return (
      <Wrapper>
        <Title>{this.props.children}</Title>
        <Demo>{this.props.demo.demostring}</Demo>
      </Wrapper>
    )
  }
}

export default Headerbar
