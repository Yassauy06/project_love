import React, {useState} from "react";
import { useLocation } from 'react-router-dom';
function LovePage() {
    const location = useLocation();
    console.log(location.pathname); 
  
const messages = [
    "Жаным жаным",
    "Кіскентай кутенайым",
    "Булочка моя",
    "Очеееень сильно люблююю тебя",
    "Зүрегім кіскентай ғана",
    "Ты у меня большая умничка "
];
  const images = [
    "https://via.placeholder.com/150/FFB6C1/000000?text=Photo1", 
    "https://via.placeholder.com/150/FF69B4/000000?text=Photo2",
    "https://via.placeholder.com/150/FFC0CB/000000?text=Photo3",
    "https://via.placeholder.com/150/FFD700/000000?text=Photo4",
  ];
  
    
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
    const showNextMessage = () => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    };
  
  
  
    return (
      <div className="love-page-container">
        <h1>Жаным</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKQjrLcZ7R6daUkwE6NPzhD5GUWXt8XuOJaMe_r_0XvYzncmfaRdIjkKKPpHHQ-HYxJE&usqp=CAU" alt="Hello Kitty" className="hello-kitty-img" />
        
        <div className="message-container">
          <p className="love-message">{messages[currentMessageIndex]}</p>
        </div>
        
        <div className="buttons-container">
          <button onClick={showNextMessage} className="next-btn">сюда</button>
        </div>
  
        <div className="cards-container">
          {images.map((image, index) => (
            <div key={index} className="card">
              <img src={image} alt={`Photo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default LovePage;