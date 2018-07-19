import { injectGlobal } from 'styled-components'


injectGlobal`

:root {
    --green: #95B64F;
    --move-in-offset: 1rem;
}

@keyframes move-in {
    from {
        transform: translateY(var(--move-in-offset));
        opacity: 0;
    }
    to {
        transform: none;
        opacity: 1;
    }
}

html {
    font-size: 125%;
    font-family: Inconsolata, Consolas, monospace;
    line-height: 1.25;
    background-color: #080808;
}

body {
    display: flex;
    flex-flow: column nowrap;
    margin: 0;
    color: #BBB;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    opacity: 0;
    transform: translateY(var(--move-in-offset));
    animation: 1500ms 500ms forwards move-in;
}

::-moz-selection {
    color: white;
    background-color: var(--blue);
}

::selection {
    color: white;
    background-color: var(--blue);
}

`
