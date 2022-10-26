import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import "./bootstrap.min.css";
import Landing from "./pages/LandingPage/Landing";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
      </main>
      <Footer />
    </>
  );
}

export default App;
