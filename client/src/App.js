import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
function App() {
  return (
    <div className=' bg-[#dadbd3] h-screen flex justify-center ' >
      <div className=' bg-[#FAF9F6] h-[90vh] w-[90vw] mt-5 flex shadow-lg rounded-sm '>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
