import React from 'react'
import ReactDOM from 'react-dom'


import Pai from './components/Pai'
import Filho from './components/Filho';

ReactDOM.render(
   <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro"/>
      
   </Pai>
, document.getElementById('root'))
/*
import BomDia from './components/BomDia'

import Mult, { BoaNoite } from './components/Multiplos'

ReactDOM.render(
    <div>
        <Mult.BoaTarde nome="Ana"/>
        <Mult.BoaNoite nome="Wellington"/>
    </div>
, document.getElementById('root'))
*/