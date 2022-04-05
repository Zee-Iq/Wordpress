import Testapp from "./components/Testapp"
import AdminSidebar from '../src/components/AdminSidebar/AdminSidebar'
import { BrowserRouter } from "react-router-dom";
import AdminReadingList from "./components/AdminReadingList/AdminReadingList";





function App() {
  return (
   
      
      <BrowserRouter >
        <AdminSidebar />
        <Testapp />
        <AdminReadingList />
      </BrowserRouter>

     
      
   
  );
}

export default App;
