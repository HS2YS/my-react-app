import React, { useState } from 'react';
import HelloMessage from './HelloMessage';
import PeopleList from './PeopleList';
import Form from './form';



function App() {
    const [people, setPeople] = useState(["Вова", "Анна", "Иван", "Фео"]);

    const addPerson = () => {
        const newPerson = prompt("Введите имя нового человека:");
        if (newPerson) {
            setPeople([...people, newPerson]);
        }
    };

    const removeLastPerson = () => {
        setPeople(people.slice(0, -1));
    }

    const changePersonName = (index) => {
        const newName = prompt("Введите новое имя для человека:");
        if (newName) {
            const updatedPeople = [...people];
            updatedPeople[index] = newName;
            setPeople(updatedPeople);
        }
    };

    const sortPeople = () => {
        const sortedPeople = [...people];

        setPeople(sortedPeople.sort());
    };
    const reverseSortPeople = () => {
        const sortedPeople = [...people.sort()];
        const reversedPeople = sortedPeople.reverse();
        setPeople(reversedPeople);
    };

    return (
        <div className="App">
            <h1>Привет, React!</h1>
            <p>Это мой первый компонент.</p>
            <HelloMessage />
            <PeopleList people={people} onChangeName={changePersonName} />
            <button onClick={addPerson}>Добавить человека</button><br />
            <button onClick={removeLastPerson}>Удалить последнего человека</button><br />
            <button onClick={sortPeople}>Сортировать от А до Я</button><br />
            <button onClick={reverseSortPeople}>Сортировать от Я до А</button><br /><br /><br />
            <Form />
        </div>
    );
}

export default App;
