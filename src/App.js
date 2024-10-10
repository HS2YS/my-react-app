import React from 'react';
import HelloMessage from './HelloMessage';

function App() {
    return (
        <div className="App">
            <h1>Привет, React!</h1>
            <p>Это мой первый компонент.</p>
            <HelloMessage />
        </div>
    );
}

export default App;