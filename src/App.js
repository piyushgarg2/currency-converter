import CurrencyConverter from './component/CurrencyConverter'
import './App.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <div>
      <Toaster 
        position='top-center'
        toastOptions={{
          success:{
            theme:{
              primary:"#4aed88"
            },
          },
        }}
      
      ></Toaster>
   </div>
    <CurrencyConverter/>
    </>
  );
}

export default App;
