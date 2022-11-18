import Clipboard from '../../assets/Clipboard.svg';
import styles from './NoTaskToShow.module.css';

export function NoTaskToShow() {
    return (
        <div className={ styles.noTasks }>
            <img src={ Clipboard } alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}