import React, {useState} from 'react'
import {Form, Button } from 'semantic-ui-react'

function FormExampleField () {
const {subCount, setSubCount}  = useState(0)
//const {subList, setSubList}  = useState(new Array())
let subList = new Array();
for(let i = 0; i<subCount; i++) { 
subList.push("<Form.Field><label>Subject: {i+1}</label><input /></Form.Field>") 
   }
   console.log(subList)

 return (
  <Form>
  <Form.Field onChange={(e) => setSubCount(e.target.value)}>
  <label>Enter the number of subjects:</label>
  <input/>
  </Form.Field>
 {subCount}
 <Button>Submit</Button>
 </Form>
  )
}

export default FormExampleField
