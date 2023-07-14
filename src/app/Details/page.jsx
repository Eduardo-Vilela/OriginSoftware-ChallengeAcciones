import React from "react";
import stylesActions from "./actionDetails.module.css";
import styles from "../MyActions/myActions.module.css"
import Chart from "@/components/Chart/CreateChart";
function ActionsDetails() {
  return (
    <>
      <div className={styles.containerPrincipal}>
        <div className={stylesActions.boxCheckbox}>
          <h2>title accion</h2>
          <div>
          <label className={stylesActions.container}>
            <input type="checkbox" />
            <div className={stylesActions.checkmark}></div>
            Tiempo real
          </label>
          </div>
          <div>
          <label className={stylesActions.container}>
            <input type="checkbox" />
            <div className={stylesActions.checkmark}></div>
            Historico
            <input type="date"/>
            <input type="date"/>
          </label>
          </div>
          <div>
          <label className={stylesActions.container}>
            <input type="checkbox" />
            <div className={stylesActions.checkmark}></div>
            Intervalo
            <select>
              <option value="1min">1 minuto</option>
              <option value="5min">5 minutos</option>
              <option value="15min">15 minutos</option>
            </select>
          </label>
          </div>
          <div>
            <button>Graficar</button>
          </div>
        </div>
        <div className={stylesActions.boxGraphic}>
         <Chart/>
        </div>
      </div>
    </>
  );
}

export default ActionsDetails;
