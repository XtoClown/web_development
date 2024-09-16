import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import ItemsList from './components/ItemsList';

let items_list = ["Juice", "Water", "Tea", "Coffe"]

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Body children={<ItemsList componentItemsList={items_list}/>}/>
      <Footer/>
    </div>
  );
}

export default App;
