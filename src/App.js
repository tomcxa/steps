import React, { useState } from 'react';
import moment from 'moment'
import AppContainerStyled from './components/styled/AppContainerStyled'
import AddStepForm from './components/AddStepForm';
import StepsContainer from './components/StepsContainer';

function App() {
    const [items, setItem] = useState([{
        date: {value: "22.02.22", isValid: true},
        passedKm: {value: '14.5', isValid: true},
        id: 12345
    }])

    function addItem(item) {
        const index = items.findIndex((o) => item.date.value === o.date.value)
        // console.log(moment('22.12.22', 'DD.MM.YY'))
        if (index !== -1) {
            setItem(prevItems => prevItems.map((el) => {
                if (el.date.value === item.date.value) {
                    el.passedKm.value = +item.passedKm.value + +el.passedKm.value
                }
                return el
            }))
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

    function deleteItem(id) {
        setItem(prevItems => prevItems.filter(item => item.id !== id))
    }

    return (
        <AppContainerStyled className="App">
            <AddStepForm addItem={addItem} />
            <StepsContainer items={items} deleteItem={deleteItem} />
        </AppContainerStyled>
    );
}

export default App;
