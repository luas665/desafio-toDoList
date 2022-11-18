import { MouseEvent, useState } from 'react';

import { Header } from './components/Header';
import { TaskInfo } from './components/TaskInfo';
import { AddNewTask } from './components/AddNewTask';
import { TaskList } from './components/TaskList';

import styles from './App.module.css';


export interface TaskInfoProps {
  id: number;
  done: boolean;
  content: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskInfoProps[]>([ {id: 1, done: false, content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."}, {id: 2, done: false, content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."} ])
  

  const numberOfTasks = tasks.length
  const numberOfCompletedTasks = tasks.filter(task => task.done).length

  

  function handleChangeTaskStatus(taskId:number) {
    setTasks(taskList => taskList.map(task => {
      if(task.id === taskId) {
        return {...task, done: !task.done}
      }
      return task
    }))
  }

  function handleNewTask(newTaskText:string) {
    if (!newTaskText) {
      return
    }
    const lastTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0
    const newTaskId = lastTaskId + 1

    const newTask = {
      id: newTaskId,
      done: false,
      content: newTaskText
    }

    setTasks((taskList: TaskInfoProps[]) => {
      if (taskList.length > 0) {
        return [...taskList, newTask]
      }
      return [newTask]
    })
  }

  function handleDeleteTask(taskId: number) {
    setTasks((taskList: TaskInfoProps[]) => taskList.filter(task => task.id !== taskId))
  }

  return (
    <div >
      <Header/>
      <div className={ styles.wrapper }>
        <AddNewTask onNewTask={ handleNewTask }/>
        <main>
          <TaskInfo 
            numberOfTasks={ numberOfTasks } 
            numberOfCompletedTasks={ numberOfCompletedTasks }
          />
          <TaskList 
            tasks={ tasks }
            onChangeStatus={ handleChangeTaskStatus }
            onDeleteTask={ handleDeleteTask }
          />
        </main>
      </div>
    </div>
  )
}

export default App
