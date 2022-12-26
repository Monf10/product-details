import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { Home } from './pages/Home';
import { Products } from './pages/Products';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
  {/* თითოეული დივისთვის ცალცალკე რომ არ დავწეროთ როუტები, შეგიძიათ : ით შეცვალოთ მისამართი დინამიურად */}
          <Route path='/product/:productId' element={<Products/>}/>
        </Routes>
      </BrowserRouter>
     </QueryClientProvider>
    
  );
}

export default App;
