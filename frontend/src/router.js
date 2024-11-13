import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Menu from './routes/Menu';
import Contact from './routes/Community';

export const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/menu', element: <Menu/>},
    {path: '/about', element: <About/>},
    {path: '/community', element: <Community/>},
  ]);