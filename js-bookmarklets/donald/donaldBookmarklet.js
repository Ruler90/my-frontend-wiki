javascript:const darkThemeHandler=()=>{const style=document.createElement("style");style.innerHTML=`\n        html {\n            background-color: #123;\n        }\n\n        html *:not(button) {\n            color: #fff !important;\n        }\n\n        .paragraph > div:not(.text-with-emoji),  div[data-selected], div[data-selected]::after {\n            background-color: #24476b;\n        }\n    `,document.body.appendChild(style)};darkThemeHandler();