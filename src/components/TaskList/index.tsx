import styles from './TaskList.module.css';

import { Task } from '../Task';
import { NoTaskToShow } from '../noTaskToShow';
import { TaskInfoProps } from '../../App'


interface TaskListProps {
    tasks: TaskInfoProps[];
    onChangeStatus: (taskId: number) => void;
    onDeleteTask:(taskId: number) => void;
}

export function TaskList({ tasks, onChangeStatus, onDeleteTask }: TaskListProps) {
    return (
        <div className={ styles.taskList }>
            {tasks.length > 0 ? tasks.map(task => {
                return <Task 
                    key={ task.id }
                    id={ task.id }
                    content={ task.content } 
                    done={ task.done } 
                    onChangeStatus={ onChangeStatus }
                    onDeleteTask={ onDeleteTask }
                />
            }) :
            <NoTaskToShow />
        }
        </div>
    )
}