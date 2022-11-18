import styles from './TaskInfo.module.css';

interface TaskInfoProps {
    numberOfTasks: number;
    numberOfCompletedTasks: number;
}

export function TaskInfo({ numberOfTasks, numberOfCompletedTasks }: TaskInfoProps) {
    return (
        <div className={ styles.taskInfo }>
            <strong>Tarefas criadas<span>{ numberOfTasks }</span></strong>
            <strong>Concluidas<span>{numberOfTasks > 0 ? `${numberOfCompletedTasks} de ${numberOfTasks}` : 0}</span></strong>
        </div>
    )
}