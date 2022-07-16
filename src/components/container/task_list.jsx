import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

const Task_listComponent = () => {

    const default_task = new Task('Ayrton', 'default description', false, LEVELS.URGENT)
  return (
    <div>
      <h1>The task number 1: </h1>
      <TaskComponent task={default_task}/>
    </div>
  )
}

export default Task_listComponent
