// import React, { useState } from 'react';
// import { BrowserRouter as Routes,Router, Route } from 'react-router-dom';
// import './App.css';
// import HomePage from './component/HomePage';
// import LovePage from './component/LovePage';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* The Routes component wraps all Route components */}
//         <Routes>
//           {/* Define the routes inside Routes */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/love" element={<LovePage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import LovePage from './component/LovePage';
import './App.css'

function App() {
  return (
    <Router> {/* Wrap the whole app with Router */}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/love" element={<LovePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


