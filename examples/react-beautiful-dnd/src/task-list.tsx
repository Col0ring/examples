import React from 'react'
import { DragDropContext, DragDropContextProps } from 'react-beautiful-dnd'
import Task from './task'
import { TaskOptions } from './type'

export interface TaskListProps {
  taskList: TaskOptions[]
}

const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
  const onDragEnd: DragDropContextProps['onDragEnd'] = () => {
    console.log('drag end here!')
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-list">
        {taskList.map((task, index) => (
          <Task key={task.id} task={task} index={index} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default TaskList
