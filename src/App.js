import './App.css';
import NotFound from "./view/NotFound"
import {Login} from "./view/Login"
import {Home} from "./view/Home"
import { useRoutes, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let element = useRoutes([
          {path: '/', element: <Login loggedIn="false" />},
          {path: '/home', element: <Home />},
          {path: '/notfound', element: <NotFound />},
        ]);
  return element
}

export default App;