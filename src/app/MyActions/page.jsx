import React, { Suspense } from "react";
import { useFetch } from "../../useFetch";
import { fetchData } from "../../fetchData";
import styles from "./myActions.module.css";
import Link from "next/link";
// import Navbar from "@/components/Navbar/Navbar";

const apiData = fetchData(
  "https://api.twelvedata.com/stocks?source=docs&exchange=NYSE"
);

function MyActions() {
  const data = apiData.read();

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
                  {data?.data.map((item) => (
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
                  ))}
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
