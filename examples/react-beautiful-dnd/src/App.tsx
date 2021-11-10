import React from 'react'
import { taskList } from './mock-data'
import TaskList from './task-list'
import './style.less'

const App: React.FC = () => {
  return (
    <>
      <TaskList taskList={taskList} />
      <TaskList taskList={taskList} />
    </>
  )
}

export default App
