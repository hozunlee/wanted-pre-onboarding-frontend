import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

// pages
import Main from './page/Main';

function App() {
  return (
    <>
      <div className='App'>hello</div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
