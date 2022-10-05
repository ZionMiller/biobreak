import React from 'react'
import { Message } from 'semantic-ui-react'

const LandingPage = () => {
  return (
    <Message style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60vh',
    }}>
    <Message.Header>Coming soon!</Message.Header>
    <Message.List>
      <Message.Item>Complete data base of bioteech stocks including;</Message.Item>
      <Message.Item>Current and historical 10Q details through novel data visualizations</Message.Item>
      <Message.Item>Ownership of company</Message.Item>
      <Message.Item>Area to store personal notes and other due diligence relevant to the company</Message.Item>
      <Message.Item>Pipeliine information including phase, upcominig catalyst and more</Message.Item>
      <Message.Item>Catalyst calendar</Message.Item>
    </Message.List>
  </Message>
  )
}

export default LandingPage