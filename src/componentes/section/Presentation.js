import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA'



function Presentation (){
    return (
        <div className={styles.presentation} id='Presentation'>
           <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
           <h1>Olá, eu sou o Matheus Martins!</h1>
           <p>Sou um amante da tecnologia/programação e idéias inovadoras! Como desenvolvedor Full Stack,<br/>
               tenho como compromisso resolver problemas complexos e trazer resultados maravilhosos para os<br/>
               projetos e negócios, sempre em busca de novos desafios! Possuo uma forte capacidade de aprendizado,<br/>
               sou organizado e tenho facilidade em trabalhar em equipe, habilidades que acredito serem essenciais<br/>
               para uma carreira bem-sucedida como desenvolvedor.
            </p>
            <ButtonA link='https://github.com/matheeeusm' text='Conecte-se comigo!'/>
           
            

        </div>
    )
}

export default Presentation