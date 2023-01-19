import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import { routesConfig } from './config/routesConfig';

const App = () => {
  return (
    <>
        <NavBar />
        <Routes>
      {routesConfig.map(route => <Route key={route.id} path={route.path} element={route.element} />)}
      </Routes>
    </>

  );
}

export default App;