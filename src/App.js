import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';

function App() {
  return (
    <div class="customBackground">
      <Firstcomponent/>
      <Secondcomponent name="FromSecondComponent"/>
      <div class="customAppDiv">
        <Thirdcomponent name="Moodle"/>
        <Fourthcomponent/>
        <Fifthcomponent group={209} student={["Владислав Левченко", "Владислав Левченко", "Владислав Левченко", "Владислав Левченко", "Владислав Левченко", "Владислав Левченко", "Владислав Левченко", "Владислав Левченко",]}/>
      </div>
    </div>
  );
}

export default App;
