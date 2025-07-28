import React from 'react'
import Card from '../components/Card'
import Subha from '../src/assets/subha.jpg'
import Prem from '../src/assets/prem.jpg'
import Rahul from '../src/assets/rahul.jpg'
import Om from '../src/assets/om.jpg'

function App () {
  return (
    <div id='container'>
      {/* <h1 className='text-2xl font-bold '> Card gallery by react </h1> */}

      <Card name="Subha" prof=" Ui & Frontend Developer" image={Subha} age="19"/> 
      <Card name="Prem" prof=" AI/Automation Specialist"  image={Prem} age="20"/> 
      <Card name="Rahul" prof="Researcher" image={Rahul} age="18"/> 
      <Card name="Om" prof="Gamer" image={Om} age="19"/>

    </div>
  )
}

export default App