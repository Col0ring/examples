import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Task as TaskOptions } from './type'

export interface TaskProps {
  task: TaskOptions
  index: number
}

const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="task"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className="task-drag-handle" {...provided.dragHandleProps} />
            <div>{task.title}</div>
          </div>
        )
      }}
    </Draggable>
  )
}

export default Task
