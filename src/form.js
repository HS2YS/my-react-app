import { render } from "@testing-library/react";
import React from "react";

function Form() {
    return (
        <div class="form">
            <form>
                <input type="text" placeholder="Введите имя!" /><br /><br />
                <button type="onSumbit">Принять</button>
            </form>
        </div>
    );
};

export default Form;