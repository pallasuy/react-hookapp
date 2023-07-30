import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


import { MainApp } from '../09-useContext/MainApp';

//import { TodoApp } from '../08-useReducer/TodoApp';
//import { Padre } from '../07-tarea-memo/Padre'
//import '../08-useReducer/intro-reducer';
//import { CallbackHook } from '../06-memos/CallBackHook'
//import { MemoHook } from '../06-memos/MemoHook'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from '../01-useState/CounterApp'
//import { CounterWithCustomHook } from '../01-useState/counterWithCustomHook'
//import { SimpleForm } from '../02-useEffect/SimpleForm'
//import { FormWithCustomHook } from '../02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
//import { FocusScreen } from '../04-useRef/FocusScreen'
//import { Layout } from '../05-useLayoutEffect/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <React.StrictMode> */}
        <MainApp />
        {/* </React.StrictMode> */}

    </BrowserRouter>

) 
