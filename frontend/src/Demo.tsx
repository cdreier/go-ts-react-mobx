import React from 'react'
import Headerbar from './components/Headerbar'
import Editor from './components/Editor'

interface IProps {}


export default class Demo extends React.Component<IProps> {
  render(){
    return (
      <>
        <Headerbar >Awesome title!</Headerbar>
        <h2>happy coding!</h2>
        <Editor />
      </>
    )
  }
}
