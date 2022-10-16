import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import PrivateRoute from './routes/PrivateRoute';
import Orders from './Components/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/register", element: <Register></Register> },
        { path: "/login", element: <Login></Login> },
        { path: "/orders", element: <PrivateRoute><Orders></Orders></PrivateRoute> }

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
