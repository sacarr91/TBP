import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/palette.scss';


function App() {

  return (
    <>
      <StrictMode>
        <Header />
        <main className="mx-3 p-3">
          <Outlet />
        </main>
        <Footer />
      </StrictMode>
    </>
  )
}

export default App;
