import React from 'react'
import { Button } from 'react-bootstrap'
import left from "../../Img/left.png"
import right from "../../Img/right.png"
export const ButtonGrubDef = () => {
  return (
    <div id='button-grub'>
        <Button variant="outline-secondary"><img src={left}/></Button>  
        <Button variant="outline-secondary">1</Button>  
        <Button variant="outline-secondary">2</Button>  
        <Button variant="outline-secondary">3</Button>  
        <Button variant="outline-secondary">...</Button>    
        <Button variant="outline-secondary">9</Button>  
        <Button variant="outline-secondary"><img src={right}/></Button>
    </div>
  )
}
