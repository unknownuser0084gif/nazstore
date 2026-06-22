import { createRoot } from 'react-dom/client'
import AppProvider from './app/AppProvider.jsx';
import App from './app/App.jsx';
import "./main.css";


createRoot(document.getElementById('root')).render
       (
              <AppProvider>
                     <App />
              </AppProvider>
       )
