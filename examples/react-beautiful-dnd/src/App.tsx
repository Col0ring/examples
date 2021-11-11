import React, { useState } from 'react'
import { DragDropContext, DragDropContextProps } from 'react-beautiful-dnd'
import Column from './column'
import { columns as initialColumns } from './mock-data'
import './style.less'

const App: React.FC = () => {
  const [columns, setColumns] = useState(initialColumns)
  const onDragEnd: DragDropContextProps['onDragEnd'] = ({
    destination,
    source,
  }) => {
    if (!destination) {
      return
    }
    if (source.droppableId === destination.droppableId) {
      if (source.index === destination.index) {
        return
      }
      const columnIndex = columns.findIndex(
        (column) => column.title === source.droppableId
      )!
      const tasks = [...columns[columnIndex].tasks]
      const draggedTask = tasks[source.index]
      const targetTask = tasks[destination.index]
      tasks[source.index] = targetTask
      tasks[destination.index] = draggedTask
      const newColumns = [...columns]
      newColumns[columnIndex] = {
        ...newColumns[columnIndex],
        tasks,
      }
      setColumns(newColumns)
      return
    }
    const oldColumnIndex = columns.findIndex(
      (column) => column.title === source.droppableId
    )!
    const oldTasks = [...columns[oldColumnIndex].tasks]
    const draggedTask = oldTasks[source.index]
    oldTasks.splice(source.index, 1)
    const newColumnIndex = columns.findIndex(
      (column) => column.title === destination.droppableId
    )!
    const newTasks = [...columns[newColumnIndex].tasks]
    newTasks.splice(destination.index, 0, draggedTask)
    const newColumns = [...columns]
    newColumns[oldColumnIndex] = {
      ...newColumns[oldColumnIndex],
      tasks: oldTasks,
    }
    newColumns[newColumnIndex] = {
      ...newColumns[newColumnIndex],
      tasks: newTasks,
    }
    setColumns(newColumns)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        {columns.map((column) => (
          <Column key={column.title} {...column} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default App
