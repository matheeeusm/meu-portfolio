import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer (){
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/matheeeusm_/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/matheus-martins-013/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/matheeeusm'><FaGithub size={30}/></a></li>
            </ul>
            <p>matheus_martins@icloud.com</p>
            <p>Matheus Martins © 2024</p>
        </div>
    )
}  export default Footer