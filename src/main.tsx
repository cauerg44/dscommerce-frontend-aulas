import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import React from 'react'

window.React = React

createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)
