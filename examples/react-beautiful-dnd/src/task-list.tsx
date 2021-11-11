import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Task from './task'
import { Task as TaskOptions } from './type'

export interface TaskListProps {
  tasks: TaskOptions[]
  droppableId: string
}

const TaskList: React.FC<TaskListProps> = ({ droppableId, tasks }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          className="task-list"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {tasks.map((task, index) => (
            <React.Fragment key={task.id}>
              <Task task={task} index={index} />
            </React.Fragment>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default TaskList
