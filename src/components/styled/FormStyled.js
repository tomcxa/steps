import styled from 'styled-components'

const FormStyled = styled.div`
    & form {
        display: flex;
        align-items: flex-end;
    }

    & label {
        display: block;
    }

    & input {
        margin-right: 4px;
    }

    & button {
        background: none;
        cursor: pointer;
    }

    & input, & button {
        border: 2px solid black;
        border-radius: 5px;
        padding: 0.5rem;
        font-size: 1.2rem;
    }
`

export default FormStyled