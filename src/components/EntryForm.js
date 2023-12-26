import React from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) {
  return (
    <>
      <Form.Group>
        <Form.Input
          icon='tags'
          width={12}
          label='Description'
          placeholder='New shinny things'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          icon='dollar'
          iconPosition='left'
          width={12}
          label='Value'
          value={value}
          placeholder='100.00'
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label='is Expense?'
          checked={isExpense}
          onChange={()=>setIsExpense((oldState) => !oldState)}/> 
      </Segment>
    </>
  )
}

export default EntryForm