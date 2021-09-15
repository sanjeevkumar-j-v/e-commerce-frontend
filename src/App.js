import Landing from "./pages/Landing";
import Footer from "./parts/Footer";
import Header from "./parts/Header";
import Preloader from "./parts/Preloader";

function App() {
  return (
    <div>
      <Preloader />
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
