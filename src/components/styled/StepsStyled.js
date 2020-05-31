import styled from 'styled-components'

const StepsStyled = styled.div`
    margin-top: 10px;
    text-align: center;

    & header {
        margin-bottom: 10px; 
    }

    & h3 {
        margin: 0;
        display: inline-block;
        width: 33%;
    }

    & .steps-wrapper {
        border: 2px solid black;
        border-radius: 5px;
    }
`

export default StepsStyled