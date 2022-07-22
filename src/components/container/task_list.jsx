import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import Task_form from '../pure/forms/taskForm'
import TaskComponent from '../pure/task'

const Task_listComponent = () => {

  const default_task1 = new Task('Ayrton', 'description1', true, LEVELS.NORMAL)
  const default_task2 = new Task('Ayrton', 'description2', false, LEVELS.URGENT)
  const default_task3 = new Task('Ayrton', 'description3', false, LEVELS.BLOCKING)
  
  //** estado del componente
  const [tasks, set_tasks] = useState([default_task1, default_task2, default_task3])
  const [loading, set_loading] = useState(true)

  //** control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified')
    set_loading(false)
    
    return () => {
      console.log('Task List component is going to unmount...')
    };
  }, [tasks])


  function complete_task(task){
    console.log('Complete this Task:', task)
    const index = tasks.indexOf(task)
    const temp_tasks = [...tasks]
    temp_tasks[index].complete = !temp_tasks[index].complete
    // We update the state of the component with the new list of tasks and it will update the
    // Iteration of the tasks in order to show the task updated.
    set_tasks(temp_tasks)
  }

  function delete_task(task) {
    const index = tasks.indexOf(task)
    const temp_tasks = [...tasks]
    temp_tasks.splice(index, 1) //**desde donde partimos (index), cuantos queremos borrar (1) 
    set_tasks(temp_tasks) 
  }

  function add_task(task){
    const index = tasks.indexOf(task)
    const temp_tasks = [...tasks]
    temp_tasks.push(task)
    set_tasks(temp_tasks)
  }

  return (
    <div className='col-12'>
      <div className='card'>
        {/* Card Header (title) */}
        <div className='card-header p-3'>
          <h5>
            Your Tasks: 
          </h5>
        </div>
        {/*  Card Body (content) */}
        <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'}}>
          <table>
            <thead>
            {/* tr significa fila en ingles, ponemos todo el contenido en fila*/}
              <tr> 
                {/* th significa encabezado en ingles, es el encabezado de las columnas */}
                {/* td es como se realiza las celdas, las columnas uno al lado del otro */}
                <th scrope= 'col'>Title</th>
                <th scrope= 'col'>Description</th>
                <th scrope= 'col'>Priority</th>
                <th scrope= 'col'>Actions</th>
              </tr>
            </thead>
            <tbody>
            { tasks.map( (task2, index) => {
              return (
                <TaskComponent key={index} task={task2} complete={complete_task} remove={delete_task}/>
              )

            })}
                
            </tbody>
          </table>

        </div>
      </div>
      <Task_form add={add_task}/>
      {/* <h1>The task number 1: </h1> */}
      {/* <TaskComponent task={default_task}/> */}
    </div>
  )
}

export default Task_listComponent
