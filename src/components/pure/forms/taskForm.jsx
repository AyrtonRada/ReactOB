import React, { useRef } from 'react'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

const Task_form = ({add, length}) => {
  
  const name_ref = useRef('')
  const description_ref = useRef('')
  const level_ref = useRef(LEVELS.NORMAL)
  
  function add_task(e){
      e.preventDefault()
      const new_task = new Task(
          name_ref.current.value,
          description_ref.current.value,
          false,
          level_ref.current.value
      )
      add(new_task)
  }
  
    return (
    <div>
      <form onSubmit={add_task} className="d-flex justify-content-center align-items-center mb-4">
        <div className='form-outline flex-fill'>
            <input ref={name_ref} id="input_name" type='text' className='form-control form-control-lg' require autoFocus placeholder='Task Name'/>
            <input ref={description_ref} id="input_description" type='text' className='form-control form-control-lg' require placeholder='Task description'/>
            <select ref={level_ref} defaultValue={LEVELS.NORMAL} id='select_level' className='form-control form-control-lg'>
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.URGENT}>Urgent</option>
                <option value={LEVELS.BLOCKING}>Blocking</option>
            </select>           
        <button type='submit' className='btn btn-success btn-lg ms-2'>
          {length > 0 ? 'Add your new task' : 'Create your first task'}
        </button>
        </div>
      </form>
    </div>
  )
}

export default Task_form
