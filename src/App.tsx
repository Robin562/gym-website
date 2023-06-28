import Navbar from "./components/navbar/Navbar";
import NavProvider from "./context/useNavContext";
import Home from "./components/Home";
import Benefits from "./components/benefits/Benefits";
import OurClasses from "./components/ourclasses/OurClasses";
import Contactus from "./components/contactus/Contactus";

function App() {
  return (
    <div className="h-full">
      <NavProvider>
        <Navbar />
        <Home />
        <Benefits />
        <OurClasses />
        <Contactus />
      </NavProvider>
    </div>
  );
}
export default App;
