import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import ItemsProvider from './components/Context/ItemsContext';
import ItemsSelectedProvider from './components/Context/ItemsSelectedContext';
import UserProvider from './components/Context/UserContext';
import Header from './components/Header';
import Profile from './components/Profile';
import InventoryProvider from './components/Context/InventoryContext';

function App() {
  return (
    <ItemsProvider>
      <ItemsSelectedProvider>
        <UserProvider>
          <InventoryProvider>
            <div className="App">
              <Header/>
              <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/profile" element={<Profile/>}/>
              </Routes>
            </div>
          </InventoryProvider>
        </UserProvider>
      </ItemsSelectedProvider>
    </ItemsProvider>
  );
}

export default App;
