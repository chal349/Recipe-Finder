import Pages from "./pages/Pages"
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter> 
        <Navbar />
        <Search />
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
      
    </div>

    
  );
}

export default App;
