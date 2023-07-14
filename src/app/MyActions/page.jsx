"use client"
import React, { Suspense, useEffect, useState} from "react";
import styles from "./myActions.module.css";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { getAllActions } from "@/Redux/Actions/AllActions";
// import Navbar from "@/components/Navbar/Navbar";

// const apiData = fetchData(
//   "https://api.twelvedata.com/stocks?source=docs&exchange=NYSE"
// );



function MyActions() {
  const [data,setData] = useState()
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllActions(setData));
    console.log(data)
}, [])

  return (
    <>
      <div className={styles.containerPrincipal}>
        {/* <Navbar /> */}
        <div className={styles.ContainerTablet}>
          <div>
            <h2 className={styles.title}>Mi Lista de acciones:</h2>
          </div>
          <div className={styles.boxFiltro}>
            <label className={styles.subtitulo}>Simbolo</label>
            <input className={styles.inputFiltrado} />
            <button className={styles.buttonAgregar}>Agregar a mi lista</button>
          </div>
          <div className={styles.containerTable}>
            <Suspense fallback={<div>Loading...</div>}>
              <table id="customers">
                <tbody>
                <tr>
                    <th>Símbolo</th>
                    <th>Nombre</th>
                    <th>Moneda</th>
                    <th></th>
                  </tr>
                  {/* {data?.data.map((item) => (
                    <tr key={item.symbol}>
                      <td>
                        <Link
                          className={styles.linkDetalles}
                          href="ActionDetails"
                        >
                          {item.symbol}
                        </Link>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.currency}</td>
                      <td>
                        <button className={styles.buttonEliminar}>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyActions;
