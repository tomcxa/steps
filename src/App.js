import React, { useState } from 'react';
import AppContainerStyled from './components/styled/AppContainerStyled'
import AddStepForm from './components/AddStepForm';
import StepsContainer from './components/StepsContainer';

function App() {
    const [items, setItem] = useState([{
        date: "22.22.22",
        passedKm: '14.5',
        id: 12345
    }])

    function addItem(item) {
        setItem(prevItems => [...prevItems, item])
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
