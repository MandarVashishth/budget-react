import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEnteryForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input icon='tags' width={12} label='Description' placeholder='New shinny things' />
        <Form.Input icon='dollar' iconPosition='left' width={12} label='Value' placeholder='100.00' />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  )
}

export default NewEnteryForm