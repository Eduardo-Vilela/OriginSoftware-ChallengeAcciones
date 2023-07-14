"use client";
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { useRef, useState, useEffect } from "react";
const inter = Inter({ subsets: ['latin'] })


//config redux redux-saga
import { Provider } from 'react-redux';
import rootReducer from '../../src/Redux/Reducers/index';
import rootSaga from '../../src/Redux/Sagas/index';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  const containerRef = useRef(null);
  const sagasMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagasMiddleware))
  sagasMiddleware.run(rootSaga)

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </Provider>
  )
}
