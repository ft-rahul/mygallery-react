import "./styles/Imagecard.css"
import Header from "./components/header";
import Gallery from "./components/Gallery";
function App() {
  return (
    <>
    {/* Parent  */}
    <div className="p-6">
      <Header/>
      <Gallery/>
    </div>
    </>
  );
}

export default App;