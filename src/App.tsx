import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Nav from "./components/nav/Nav";
import "./App.css";
import Footer from "./components/footer/Footer";
function App() {
  const route = useRoutes(routes);
  return (
    <div className="app">
      <Nav />
      {route}
      <Footer />
    </div>
  );
}

export default App;
