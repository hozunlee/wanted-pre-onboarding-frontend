import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

// pages
import Main from './page/Main';
import Todo from './page/Todo';

import { UserInfoProvider } from './hooks/userInfo-context';

function App() {
  return (
    <>
      <UserInfoProvider>
        <Router>
          <Routes>
            <Route index path='/' element={<Main />} />
            <Route path='/todo' element={<Todo />} />
          </Routes>
        </Router>
      </UserInfoProvider>
    </>
  );
}
export default App;
