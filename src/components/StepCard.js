import React from 'react'

import StepCardStyled from './styled/StepCardStyled'
import StepCardControlPanel from './StepCardControlPanel'

const StepCard = ({ item, deleteItem, changeItem }) => {
    function handleClick(event) {
        event.preventDefault()
        if (event.target.classList.contains('delete-btn')) {
            deleteItem(item.id)
        }

        if (event.target.classList.contains('create-btn')) {
            changeItem(item.id)
        }
    }

    return (
        <StepCardStyled>
            <div className="step-card_info">
                <span>{item.date.value}</span>
                <span>{item.passedKm.value}</span>
            </div>
            <StepCardControlPanel onClick={handleClick} />
        </StepCardStyled>

    )
}

export default StepCard
