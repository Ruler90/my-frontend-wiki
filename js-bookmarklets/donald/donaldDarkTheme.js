const darkThemeHandler = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        html {
            background-color: #123;
        }

        html *:not(button) {
            color: #fff !important;
        }

        .paragraph > div:not(.text-with-emoji),  div[data-selected], div[data-selected]::after {
            background-color: #24476b;
        }
    `
    document.body.appendChild(style);
}
darkThemeHandler()