import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {AuthContextProvider} from './context/AuthContext'
import { ChatContextProvider } from './context/ChatContext'

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
    
      <AuthContextProvider>
      <ChatContextProvider>
      <BrowserRouter>
       <App />
      </BrowserRouter>
      </ChatContextProvider>
      </AuthContextProvider>
      
    
    </React.StrictMode>

)
