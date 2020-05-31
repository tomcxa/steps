import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import FormStyled from './styled/FormStyled'

const AddStepForm = ({ addItem }) => {
    const defaultForm = {
        date: '',
        passedKm: '',
        id: 1
    }

    const [form, setForm] = useState(defaultForm)

    function handleSubmit(event) {
        event.preventDefault()
        if (form.date.trim() && form.passedKm.trim()) {
            addItem(form)
            setForm(defaultForm)
        }
    }

    function handleChange({ target }) {
        const { name, value } = target;

        setForm(prevForm => ({ ...prevForm, [name]: value.trim(), id: nanoid() }));
    }

    return (
        <FormStyled>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <input id="date" type="text" name="date" value={form.date} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="passedKm">Пройдено (км)</label>
                    <input id="passedKm" type="text" name="passedKm" value={form.passedKm} onChange={handleChange} />
                </div>
                <button>OK</button>
            </form>
        </FormStyled>
    )
}

export default AddStepForm
