import React from "react";
import styles from "./cardLogin.module.css";
import Link from "next/link";
import Image from "next/image";
import LogoWhite from '../../../public/logo-white.png';

function CardLogin() {
  return (
    <div className={styles.container}>
      <form className={styles.card}>
        <div className={styles.containerButton}>
          {/* <h1 className={styles.titleCard}>ORIGIN SOLUTIONS</h1> */}
          <Image src={LogoWhite} className={styles.logoWhite}/>
        </div>
        <input
          placeholder="Usuario"
          name="email"
          className={styles.inputLogin}
        />
        <input
          placeholder="Contraseña"
          name="password"
          className={styles.inputLogin}
        />
        <div className={styles.containerButton}>
          {/* <button className={styles.buttonLogin}>Ingresar</button> */}
          <Link href="MyActions" className={styles.buttonLogin}>Ingresar</Link>
        </div>
      </form>
    </div>
  );
}

export default CardLogin;
