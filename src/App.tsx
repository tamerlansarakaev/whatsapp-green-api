import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Chat />} path="/chat" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

