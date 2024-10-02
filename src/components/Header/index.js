import styles from "../Header/Header.module.css";
import fundo from "../../assets/LOGOTIPO 4.png";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { TbBackground } from "react-icons/tb";
import { MdCheckBox } from "react-icons/md";

function Header() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Estado para confirmação de senha
  const [cpf, setCpf] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      alert("As senhas não correspondem!");
      return;
    }
    
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("CPF:", cpf);
    
    alert("Enviando os dados: " + username + " " + password + " " + cpf);
  };

  const handleCpfChange = (e) => {
    const formattedCpf = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    setCpf(formattedCpf);
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
            <div>
              <input
                className={styles.user}
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className={styles.icon3}></FaLock>
              <input
                className={styles.user}
                type="password"
                placeholder="Confirme a Senha"
                onChange={(e) => setConfirmPassword(e.target.value)} // Estado de confirmação de senha
              />
              <FaLock className={styles.icon}></FaLock>
            </div>
            {/* Campo para CPF */}
            <div>
              <input
                className={styles.user}
                type="text"
                placeholder="CPF (000.000.000-00)"
                value={cpf}
                onChange={handleCpfChange}
                maxLength="14"
                required
              />
            </div>
            <FaUser className={styles.icon4}></FaUser>
            <button className={styles.botao} type="submit">Recuperar</button>
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
