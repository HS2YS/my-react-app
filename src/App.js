import React from 'react';
import HelloMessage from './HelloMessage';
import PeopleList from './PeopleList';

function App() {
    const people = ["Вова","Анна", "Иван", "Фео"];


    return (
        <div className="App">
            <h1>Привет, React!</h1>
            <p>Это мой первый компонент.</p>
            <HelloMessage />
            <PeopleList people={people} />
        </div>
    );
}

export default App;