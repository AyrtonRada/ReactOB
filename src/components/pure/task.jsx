import React from 'react'
import PropTypes from 'prop-types'
import {Task} from '../../models/task.class'

const TaskComponent =({task}) => {
  return (
    <div>
      <h1>
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
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent

