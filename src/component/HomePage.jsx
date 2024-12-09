import React from "react";
import { Link} from 'react-router-dom';

function HomePage() {
    return (
      <div className="home-container">
        <h1>Hello</h1>
        <Link to="/love" className="click-me-btn">
          Click Me
        </Link>
      </div>
    );
  }
export default HomePage