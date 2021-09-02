/** 
* @author: Alexander Chi
* @description:
* @date: 02/Septiembre/2021
**/ 
import './App.scss';
import {CardFAQ} from './components/cards';
import questions from './utils/informations';

function App() {
  return (
    <div className="container">
      <CardFAQ 
        title={`FAQ`}
        items={questions}
      ></CardFAQ>
    </div>
  );
}

export default App;
