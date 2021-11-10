import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { TaskOptions } from './type'

export interface TaskProps {
  task: TaskOptions
  index: number
}

const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        return <div className="task">task</div>
      }}
    </Draggable>
  )
}

export default Task
