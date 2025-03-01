'use client';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        &:not(:focus-visible){
            outline: 0;
        }

    }

    ul, ol {
  list-style-type: none; /* Remove os marcadores */
  padding: 0;           /* Remove o preenchimento padrão */
  margin: 0;            /* Remove a margem padrão */
}

li {
  margin: 0;            /* Remove a margem padrão do li, se necessário */
  padding: 0;           /* Remove o preenchimento padrão do li, se necessário */
}

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    body {
        background: #FFFFFF;
        -webkit-font-smoothings: antialiased;
        margin: none;
    }

    body, input, button {
        font-family: 'Inter', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong, p {
        font-weight: 500;
        margin: 0;
    }

    button {
        cursor: pointer;
    }

    /* input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
    box-shadow: 0 0 0px 1000px transparent inset ;
    -webkit-text-fill-color: #312e28 !important;
    transition: background-color 5000s ease-in-out 0s;
} */
`;
