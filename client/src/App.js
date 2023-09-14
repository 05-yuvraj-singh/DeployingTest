import { Route, Routes } from 'react-router-dom';

import NewUser from "./NewUser";
import Login from "./Login";
import Protected from "./Protected";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<NewUser/>} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/resource" element={<Protected/>} />
      </Routes>
    </>
    );
}

export default App;