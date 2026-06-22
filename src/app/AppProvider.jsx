import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import Store from './Store';
import QueryClient from "./QueryClient";
import { ToastContainer } from 'react-toastify';

export default function AppProvider({ children }) {
       return (
              <QueryClientProvider client={QueryClient}>
                     <BrowserRouter>
                            <Provider store={Store}>
                                   <ToastContainer />
                                   {children}
                            </Provider>
                     </BrowserRouter>
              </QueryClientProvider>
       )
}
