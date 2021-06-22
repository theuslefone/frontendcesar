import styles from './styles.module.scss';

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p>© Copyright 2021-2021 CESAR Processos Developed by Programadores HTML</p>
            <p>Algum problema? <a href="#"> <strong>Relate aqui!</strong> </a>  </p>
        </footer>
    );
}