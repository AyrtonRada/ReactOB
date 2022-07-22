import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {Task} from '../../models/task.class'
import {LEVELS} from '../../models/levels.enum.js'

const TaskComponent =({task, complete, remove}) => {

  useEffect(() => {
    console.log('Created Task')

    return () => {
      console.log(`Task: ${task.name} is going to unmount`)
    };
  }, [task])

  function task_completed_icon(){
    if(task.complete) {
      return(<i onClick={ () => complete(task)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>)
    } else {
      return(<i onClick={ () => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey' }}></i>)
    }
  }
  
  function task_level(){
    switch (task.level) {
      case LEVELS.NORMAL:
        return( <h6 className='mb-0'>
        <span className='badge bg-primary'> {task.level} </span>
      </h6>)
      case LEVELS.URGENT:
        return( <h6 className='mb-0'>
          <span className='badge bg-warning'> {task.level} </span>
        </h6>)
      case LEVELS.BLOCKING: 
      return( <h6 className='mb-0'>
      <span className='badge bg-danger'> {task.level} </span>
    </h6>)
      default:
        break;
    }
    
  }

  return (
      <tr className='fw-normal'>
        <th>
          <span className='ms-2'>{task.name}</span>
        </th>
        <td className='align-middle'>
            <span>{task.description}</span>
        </td>
        <td className='align-middle'>
            { task_level() }
        </td>
        <td className='align-middle'>
            {task_completed_icon()}
            <i className='bi-trash task-action' style={{ color: 'tomato' }} onClick={ () => remove(task)}></i>
        </td>
      </tr>

  )
}

    {/* <div>
      <h1 className=''task-name>
          NAME: {task.name}
      </h1>
      <h2>
          DECRIPTION: {task.description}
      </h2>
      <h3>
          This stack is: {task.complete ? 'COMPLETED':'PENDING'}
      </h3>
      <h4>
          LEVEL: {task.level}
      </h4>
    </div> */}


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskComponent

