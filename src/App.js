import React from 'react';
import HelloMessage from './HelloMessage';
import PeopleList from './PeopleList';

function App() {
    return (
        <div className="App">
            <h1>Привет, React!</h1>
            <p>Это мой первый компонент.</p>
            <HelloMessage />
            <PeopleList />
        </div>
    );
}

export default App;