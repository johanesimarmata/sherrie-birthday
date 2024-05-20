import './App.css';
import BirthdayCakePage from './pages/cake';
import IntroPage from './pages/intro';
import WishPage from './pages/wish';
import MemoriesPage from './pages/memories';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage/>,
  },
  {
    path: "/birthday-wish",
    element: <WishPage/>,
  },
  {
    path: "/birthday-cake",
    element: <BirthdayCakePage/>,
  },
  {
    path: "/memories",
    element: <MemoriesPage/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
