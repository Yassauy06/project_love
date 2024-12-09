import React from 'react';

function AudioComponent() {
  return (
    <div>
      <h2>Видео пример</h2>
      <video width="600" controls>
        <source src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7jFEAmEHa9rQoHV-e9hcDERDcCfuBa21efg&s" type="video/mp4" />
        Ваш браузер не поддерживает элемент video.
      </video>
    </div>
  );
}

export default AudioComponent;

