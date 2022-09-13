import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'PT Mono', monospace;
    }

    :root{
        --blue: 36, 104, 177;
        --yellow: 252, 207, 0;
        --dark: 0, 23, 48;
        --light: 235, 244, 255;
        --white: 255, 255, 255;
    }

    html{
        width: 100%;
        background: url("${process.env.PUBLIC_URL}/images/background.png");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export { Global };
