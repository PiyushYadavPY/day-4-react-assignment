
import './App.css';
import Navbar from './Navbar/navbar';
import  Heroic from './Heroic/heroic';
import  Card from './Card/card'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Heroic/>
     <div className="card-section">
        <Card title="Card 1" content="This is the content of Card 1." />
        <Card title="Card 2" content="This is the content of Card 2." />
        <Card title="Card 3" content="This is the content of Card 3." />
      </div>
    </div>
  );
}

export default App;
