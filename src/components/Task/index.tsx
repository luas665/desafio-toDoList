import { Trash } from 'phosphor-react';
import { MouseEvent } from 'react';
import styles from './Task.module.css';

interface TaskProps {
    id: number;
    content: string;
    done?: boolean;
    onChangeStatus: (taskId: number) => void
    onDeleteTask: (taskId: number) => void
}

export function Task({ id, content, done = false, onChangeStatus, onDeleteTask}: TaskProps) {

    function handleChangeStatus(e: MouseEvent<HTMLInputElement>) {
        onChangeStatus(id)
    }

    function handleDeleteButton(e: MouseEvent<HTMLButtonElement>) {
        onDeleteTask(id)
    }

    return (
        <div className={ styles.task }>
            <span
            title='Terminar tarefa'
            role="checkbox"
            aria-checked={ done }
            aria-labelledby="chk1-label"
            onClick={ handleChangeStatus }></span>
            <label>{ content }</label>
            <button type='button' title='deletar tarefa' onClick={ handleDeleteButton }>
                <Trash size={ 24 }/>
            </button>
        </div>
    )
}