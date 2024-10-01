import styles from "../Header/Header.module.css";
import fundo from "../../assets/LOGOTIPO 4.png";
import {FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
import { TbBackground } from "react-icons/tb";
import { MdCheckBox } from "react-icons/md";

function Header() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Username:", username);
      console.log("Password:", password);
      alert("Enviando Os Dados:" + username  + password);
    };




    return(

    <div className={styles.fundo}>

        <div className={styles.form}>
            <header>
                <form onSubmit={handleSubmit} className={styles.vidro}>
                        <h1>Acesse o Sistema</h1>
                        <div>
                            <input className={styles.user}
                                type="email" 
                                placeholder="E-mail" 
                                onChange={(e) => setUsername(e.target.value)}>
                            </input>
                            <FaUser className={styles.icon2}></FaUser>
                        </div>
                        <div>
                            <input className={styles.user}
                                type="password" 
                                placeholder="Senha" 
                                onChange={(e) => setPassword(e.target.value)}>
                            </input>
                            <FaLock className={styles.icon}></FaLock>
                        </div>
                        <input type= "checkbox" className= {styles.recal} ></input> Lembre de mim

                    <button className={styles.botao}>Entrar</button>

                    <div className= {styles.recal}>
                    <p className= {styles.recal} >Não tem uma conta ?<a href="#" className= {styles.recal}> Registrar </a></p>
                        
                        <p><a href="#" className= {styles.recal}> Esqueci a senha </a></p>

                    </div>
                </form>

            </header>
        </div>

    </div>

    )
    

}

export default Header;