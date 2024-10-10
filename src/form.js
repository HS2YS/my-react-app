import React, { useState } from "react";

function Form({ onAddPerson }) {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name) {
            onAddPerson(name);
            setName("");
        }
    }
    return (
        <div class="form">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Введите имя!"
                    value={name}
                    onChange={handleChange} 
                /><br /><br />
                <button type="onSumbit">Принять</button>
            </form>
        </div>
    );
};

export default Form;