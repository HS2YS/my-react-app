import React, { useState } from 'react';
import HelloMessage from './HelloMessage';
import PeopleList from './PeopleList';

function App() {
    const [people, setPeople] = useState(["Вова", "Анна", "Иван", "Фео"]);

    const addPerson = () => {
        const newPerson = prompt("Введите имя нового человека:");
        if (newPerson) {
            setPeople([...people, newPerson]);
        }
    };

    return (
        <div className="App">
            <h1>Привет, React!</h1>
            <p>Это мой первый компонент.</p>
            <HelloMessage />
            <PeopleList people={people} />
            <button onClick={addPerson}>Добавить человека</button>
        </div>
    );
}

export default App;
