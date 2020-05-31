import styled from "styled-components"

const StepCardStyled = styled.div`
    padding: 1rem;
    & .step-card_info {
        display: inline-block;
        width: 66%;

        & span {
            display: inline-block;
            width: 50%;   
        }
    }

    & .step-card_actions {
        display: inline-block;
        width: 33%;
        vertical-align: middle;
        & a {
            color: inherit;
            text-decoration: none;
        }
    }
`

export default StepCardStyled