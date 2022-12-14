import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

// GA URL 변경을 감지하는 컴포넌트
import RouteChangeTracker from './utils/RouteChangeTracker';
// pages
import Main from './page/Main';
import Todo from './page/Todo';

import { UserInfoProvider } from './hooks/userInfo-context';
import Admin from './page/Admin';

function App({ repository }) {
  // RouteChangeTracker();
  return (
    <>
      <UserInfoProvider>
        <Router>
          <RouteChangeTracker />
          <Routes>
            <Route index path='/' element={<Main />} />
            <Route path='/todo' element={<Todo repository={repository} />} />
            <Route path='/admin' element={<Admin repository={repository} />} />
          </Routes>
        </Router>
      </UserInfoProvider>
    </>
  );
}
export default App;
