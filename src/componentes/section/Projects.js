import ButtonB from './elements/ButtonB'
import styles from './Projects.module.css'
import Card from './elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import portifolio from '../../Image/projects/portifolio.svg'
import previsao from '../../Image/projects/previsao.svg'

function Projects (){
    return (
        <div className={styles.projects} id='Projects'>
            <h1> Projetos </h1>
            <Card
            img={lpdnc}
            title="Landing Page - DNC"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
            repo="https://github.com/matheeeusm/projeto-landing-page"
            site="https://www.figma.com/proto/ZpH9zHhUABIpLwli1Xp3z3/[TECH]-Case-Mentorias---Landing-Page-DNC-School?node-id=1227-37"
                />
            
            <Card
            img={portifolio}
            title="Página TESLA 2024"
            tech="HTML, CSS e JS"
            description="Site da Tesla desenvolvido"
            repo="https://github.com/matheeeusm/pagina-teste-tesla"
            site="https://www.tesla.com"
                />
            <Card
            img={previsao}
            title="Previsão do Tempo"
            tech="HTML, CSS e JS"
            description="Site para conferir previsão em tempo real através do CEP e Latitude/Longitude"
            repo="https://github.com/matheeeusm/desafio-dnc2"
            site="https://desafio2dnc2024.netlify.app"
               />
            
        </div>
    )
}

export default Projects