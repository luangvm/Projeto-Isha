import styles from "../Header/Header.module.css";
import fundo from "../../assets/LOGOTIPO 4.png";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { TbBackground } from "react-icons/tb";
import { MdCheckBox } from "react-icons/md";

function Header() {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    alert("E-mail enviado ao e-mail informado: " + username);
  };

  return (
    <div className={styles.fundo}>
      <div className={styles.form}>
        <header>
          <form onSubmit={handleSubmit} className={styles.vidro}>
            <h1>Recuperação de Senha</h1>
            <div>
              <input
                className={styles.user}
                type="email"
                placeholder="E-mail Da Conta"
                onChange={(e) => setUsername(e.target.value)}
              />
              <FaUser className={styles.icon2}></FaUser>
            </div>
            <button className={styles.botao} type="submit">
              Recuperar
            </button>

            <div className={styles.recal}>
              <p className={styles.recal}>
                Não tem uma conta?{" "}
                <a href="#" className={styles.recal}>
                  Registrar
                </a>
              </p>
              <p>
                <a href="#" className={styles.recal}>
                  Esqueci a senha
                </a>
              </p>
            </div>
          </form>
        </header>
      </div>
    </div>
  );
}

export default Header;