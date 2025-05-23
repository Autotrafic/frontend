import './styles/App.css';
import { initGA } from './config/analytics';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TransferencePage from './pages/TransferencePage';
import UploadDocsLaterPage from './pages/messages/UploadDocsLaterPage';
import NotFoundPage from './pages/404';
import FloatingWhatsappIcon from './components/FloatingWhatsappIcon';
import NavbarContainer from './containers/NavbarContainer';
import FooterContainer from './containers/FooterContainer';
import UploadedDocsPage from './pages/messages/UploadedDocsPage';
import AvisoLegal from './pages/legal/AvisoLegal';
import CondicionesUso from './pages/legal/CondicionesUso';

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <>
      <NavbarContainer />

      <Router />

      <FooterContainer />

      <FloatingWhatsappIcon />
    </>
  );
}

function Router() {
  return (
    <Routes>
      <Route path="/" element={<TransferencePage />} />
      <Route path="/referral/:referralId" element={<TransferencePage />} />
      <Route path="/documentacion-pendiente/:orderId" element={<UploadDocsLaterPage />} />
      <Route path="/gracias-documentacion/:orderId" element={<UploadedDocsPage />} />

      <Route path="/condiciones" element={<CondicionesUso />} />
      <Route path="/aviso-legal" element={<AvisoLegal />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
