import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/bruno07dev.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Cardoso</strong>
                            <time title='16 de Agosto às 16:33' dateTime='2022-05-11  16:33:30'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button title='Deletar comentário'>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}