import React, { useState } from 'react';
import moment from 'moment'
import { nanoid } from 'nanoid'
import AppContainerStyled from './components/styled/AppContainerStyled'
import AddStepForm from './components/AddStepForm';
import StepsContainer from './components/StepsContainer';

function dateValidation(date) {
    const reg = /^\s*(3[01]|[12][0-9]|0[1-9])\.(1[012]|0[1-9])\.(\d{2})\s*$/g
    return reg.test(date)
}

function passedKmValidation(passedKm) {
    return passedKm > 0
}

function App() {
    let isChanging = false;
    const defaultForm = {
        date: { value: '', isValid: true },
        passedKm: { value: '', isValid: true },
    }

    const [changing, setChanging] = useState(isChanging)

    const [items, setItem] = useState([{
        date: { value: "22.02.22", isValid: true },
        passedKm: { value: '14.5', isValid: true },
        id: 12345
    }])

    const [form, setForm] = useState(defaultForm)

    function addItem(item) {
        console.log('add start')
        const index = items.findIndex((o) => item.date.value === o.date.value)
        if (index !== -1) {
            console.log('add if check')
            const newItems = items.map((el) => {
                if (el.date.value === item.date.value) {
                    el.passedKm.value = (+item.passedKm.value) + (+el.passedKm.value)
                }
                return el
            })

            setItem([...newItems])
            return
        }
        setItem(prevItems => [...prevItems, item]
            .sort((a, b) => {
                const aDate = moment(a.date.value, 'DD.MM.YY')
                const bDate = moment(b.date.value, 'DD.MM.YY')
                return bDate.diff(aDate)
            })
        )
    }

    function changeItem(newItem) {
        setItem(prevItems => prevItems.map((item) => {
            if (item.id === newItem.id) {
                item = newItem
            }
            return item;
        }))
        setChanging(false)
    }

    function deleteItem(id) {
        setItem(prevItems => prevItems.filter(item => item.id !== id))
    }

    function fillFormInput(id) {
        const item = items.filter(el => el.id === id).pop()
        setForm(item)
        setChanging(true)
    }

    function setInvalidInput(name, event) {
        event.target.elements[name].focus()
        setForm((prevForm) => ({ ...prevForm, [name]: { value: '', isValid: false } }))
    }

    function onSubmit(event) {
        if (!dateValidation(form.date.value)) {
            setInvalidInput('date', event)
            return
        }
        if (!passedKmValidation(form.passedKm.value)) {
            setInvalidInput('passedKm', event)
            return
        }

        if (!changing) {
            addItem(form)
        } else {
            changeItem(form)
        }

        setForm(defaultForm)
    }

    function onChange({ target }) {
        const { name, value } = target;

        setForm(prevForm => ({
            ...prevForm,
            [name]: { value: value.trim(), isValid: true },
            id: changing ? prevForm.id : nanoid()
        }));
    }


    return (
        <AppContainerStyled className="App">
            <AddStepForm form={form} submit={onSubmit} change={onChange} />
            <StepsContainer items={items} changeItem={fillFormInput} deleteItem={deleteItem} />
        </AppContainerStyled>
    );
}

export default App;
