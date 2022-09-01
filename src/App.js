import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
import './style.css';

function App() {
  const cardElements = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className='App'>
      <Navbar />
      {cardElements}
    </div>
  );
}

export default App;
