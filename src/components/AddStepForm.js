import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import FormStyled from './styled/FormStyled'

function dateValidation(date) {
    const reg = /^\s*(3[01]|[12][0-9]|0[1-9])\.(1[012]|0[1-9])\.(\d{2})\s*$/g
    return reg.test(date)
}

function passedKmValidation(passedKm) {
    return passedKm > 0
}

const AddStepForm = ({ addItem }) => {

    const defaultForm = {
        date: { value: '', isValid: true },
        passedKm: { value: '', isValid: true },
    }

    const [form, setForm] = useState(defaultForm)

    function handleSubmit(event) {
        event.preventDefault()
        if (!dateValidation(form.date.value)) {
            event.target.elements['date'].focus()
            setForm((prevForm) => ({ ...prevForm, date: { value: '', isValid: false } }))
            return
        }
        if (!passedKmValidation(form.passedKm.value)) {
            event.target.elements['passedKm'].focus()
            setForm((prevForm) => ({ ...prevForm, passedKm: { value: '', isValid: false } }))
            return
        }

        addItem(form)
        setForm(defaultForm)
    }

    function handleChange({ target }) {
        const { name, value } = target;

        setForm(prevForm => ({
            ...prevForm, [name]: { value: value.trim(), isValid: true }, id: nanoid()
        }));
    }

    return (
        <FormStyled>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <input
                        id="date"
                        type="text"
                        name="date"
                        value={form.date.value}
                        className={form.date.isValid ? '' : 'invalid'}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="passedKm">Пройдено (км)</label>
                    <input
                        id="passedKm"
                        type="text"
                        name="passedKm"
                        value={form.passedKm.value}
                        className={form.passedKm.isValid ? '' : 'invalid'}
                        onChange={handleChange}
                    />
                </div>
                <button>OK</button>
            </form>
        </FormStyled>
    )
}

export default AddStepForm
