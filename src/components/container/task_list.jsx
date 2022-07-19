import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

const Task_listComponent = () => {

  const default_task = new Task('Ayrton', 'default description', false, LEVELS.URGENT)
  
  //** estado del componente
  const [tasks, set_tasks] = useState(default_task)
  const [loading, set_loading] = useState(true)

  //** control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified')
    set_loading(false)
    
    return () => {
      console.log('Task List component is going to unmount...')
    };
  }, [tasks])


  const change_completed = (id) => {

  }
  return (
    <div>
      <h1>The task number 1: </h1>
      <TaskComponent task={default_task}/>
    </div>
  )
}

export default Task_listComponent
