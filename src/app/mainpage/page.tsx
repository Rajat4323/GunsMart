import React from 'react'
import Header from '../../helpers/header';
import Upper from './upper';
import { CardSection } from './cardSection';
const page = () => {
  return (
    <div>
       <Header/>
       <Upper/>
       <CardSection/>
    </div>
  )
}

export default page