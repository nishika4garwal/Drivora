import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'//to perform routing
import UserContext from './context/UserContext.jsx';
import CaptainContext from './context/CaptainContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <UserContext>
  //     <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  //   </UserContext>
  // </StrictMode>,

  <CaptainContext>
    <UserContext>
      {/* <SocketProvider> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </SocketProvider> */}
    </UserContext>
  </CaptainContext>
)

