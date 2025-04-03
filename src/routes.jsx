import App from "./pages/App";
import NotFoundPage from "./pages/NotFound";
import Game from "./pages/Game";
import AppBody from "./components/AppBody";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [{ path: "/", element: <AppBody /> }],
  },
  {
    path: "/game",
    element: <Game />,
  },
];
