import React from 'react';
import ReactDOM from 'react-dom';
import {SearchUserPage, UserPage, MainPage, NotFoundPage} from './components/Pages';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import {Example} from './playground/hooks/useCallback';
import './index.css';
// import {TestToggler} from './playground/hooks/useEffect';



ReactDOM.render(
  <Example/> ,
  document.getElementById('root')
);


// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path='/' element={<MainPage/>} />
//       <Route path='/search' element={<SearchUserPage/>}/>
//       <Route path='/user/:userId' element={<UserPage/>} />
//       <Route path='*' element={<NotFoundPage/>}/>
//     </Routes>
//   </Router>
//   ,
//   document.getElementById('root')
// );


