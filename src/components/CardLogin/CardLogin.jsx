"use client"
import React, {useState, useEffect} from "react";
import styles from "./cardLogin.module.css";
import Link from "next/link";
import Image from "next/image";
import LogoWhite from "../../../public/logo-white.png";
import apiInstance from "@/Redux/Api";
import { useDispatch, useSelector } from "react-redux";

function CardLogin() {
  // function getApiInst(params) {

  //   apiInstance.get('/api/TestService')
  //   .then(function(res){
  //       console.log(res)
  //   })
  // }
  
  const dispatch = useDispatch();  
  const token = useSelector((state) => state.reducerLogin.user_data);
  // const userLogin = localStorage.getItem('token');
  // const datosUser = useSelector((state) => state.reducerUsuarioDatos.data);
  const [errorLogin, setErrorLogin] = useState(false);
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState({
    nameuser: '',
    clave: ''
  });

  const handleLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value});
  }


  const handleSubmitLogin = () => {    
    setLoadingButton(true);
    const user = {
      username: login.nameuser,
      password:login.clave
    }
    dispatch(resultVerificar(user));
    setTimeout(() => {
      setLoadingButton(false);
      if (userLogin === null || userLogin === "undefined") {
        setErrorLogin(true);
      }
    }, 1000);
  }

  // useEffect(() => {
  //   dispatch(getDatosUsuario());
  // }, [token])


//   if (userLogin && datosUser != null){ 
    
//     if(datosUser.userData.roles[0] === "ROLE_USER"){
//       return(
//           <>  
//             <Routes>
//               <Route path="/" element={<Navigate to="/User" />}/> 
//             </Routes>
//           </>
//       );
//     }  
// }


  return (
    <div className={styles.container}>
      <form className={styles.card}>
        <div className={styles.containerButton}>
          {/* <h1 className={styles.titleCard}>ORIGIN SOLUTIONS</h1> */}
          <Image alt="logo" src={LogoWhite} className={styles.logoWhite} />
        </div>
        <input
          placeholder="Usuario"
          name="nameuser"
          value={login.nameuser} 
          className={styles.inputLogin}
          onChange={handleLogin}
        />
        <input
          placeholder="Contraseña"
          type={visible ? 'text' : 'password'}
          name="clave"
          value={login.clave} 
          className={styles.inputLogin}
          onChange={handleLogin}
        />
        <div className={styles.containerButton}>
          {/* <button className={styles.buttonLogin}>Ingresar</button> */}
          <Link href="MyActions" className={styles.buttonLogin} onClick={handleSubmitLogin}>
            Ingresar
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CardLogin;
