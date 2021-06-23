import './cssGlobal.css';

import {
  DacinFooter,
  BoasVindas,
  DaContatos,
  SobreDA,
  NossasAcoes,
  DaDepoimentos,
} from './pages';

function App() {
  return (
    <>
      <BoasVindas />
      <SobreDA />
      <NossasAcoes />
      <DaDepoimentos/>
      <DaContatos/>
      <DacinFooter />
    </>
  );
}

export default App;
