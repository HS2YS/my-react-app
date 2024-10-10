import React from "react";

function PeopleList({ people }) {
    return (
        <div>
            <h3>Список людей из `props`:</h3>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person}</li>
                ))}
            </ul>
        </div>
    );
}

export default PeopleList;