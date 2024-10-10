import React from "react";

function PeopleList({ people, onChangeName }) {
    return (
        <div>
            <h3>Список людей с возможностью изменения имени:</h3>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>
                        <span>{index + 1}. </span>
                        {person}
                        <button onClick={() => onChangeName(index)}>Изменить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PeopleList;
