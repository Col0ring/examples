import React from 'react'
import TaskList from './task-list'
import { Column as ColumnProps } from './type'

const Column: React.FC<ColumnProps> = ({ title, tasks }) => {
  return (
    <div className="column">
      <h3>{title}</h3>
      <TaskList droppableId={title} tasks={tasks} />
    </div>
  )
}

export default Column
