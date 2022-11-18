import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './AddNewTask.module.css';


interface AddNewTaskProps {
    onNewTask: (newTaskText: string) => void;
}

export function AddNewTask({ onNewTask }: AddNewTaskProps) {
    const [newTaskText, setNewTaskText] = useState("")

    function handleChangeTaskText(e: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(e.target.value)
    }
    
    function handleNewTask() {
        onNewTask(newTaskText)
        setNewTaskText("")
    }

    function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            handleNewTask()
        }
    }

    return (
        <div className={ styles.newTask }>
          <input 
            type="text" 
            title='Digite uma nova tarefa' 
            placeholder='Adicione uma nova tarefa' 
            onChange={ handleChangeTaskText }
            onKeyPress={ handleKeyPress } 
            value={ newTaskText }
          />
          <button type='submit' onClick={ handleNewTask }>
            Criar
            <PlusCircle size={ 16 }/>
          </button>
        </div>
    )
}