import { useEffect, useState } from 'react';

function App() {
  const [currentColor, setCurrentColor] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prevLight) => {
        switch (prevLight) {
          case 'red':
            return 'yellow';
          case 'yellow':
            return 'green';
          case 'green':
            return 'red';
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='traffic-lights'>
      <div className={`light ${currentColor === 'red' ? 'red' : ''}`}></div>
      <div
        className={`light ${currentColor === 'yellow' ? 'yellow' : ''}`}
      ></div>
      <div className={`light ${currentColor === 'green' ? 'green' : ''}`}></div>
    </div>
  );
}

export default App;
