const darkThemeHandler = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --bg-color-page: #19223e;
            --bg-color-line: #364784;
            --color-black: #cecece;
            --color-brand-primary: #829CE8;
            --bg-footer-1: #040606;
            --bg-footer-2: #123844;
        }

        html {
            background-color: var(--bg-color-page);
        }

        .c-logo span, .post-content blockquote {
            background-color: var(--bg-color-line) !important;
        }

        .post-header__date {
            color: var(--color-brand-primary);
        }

        .footer-copyrights, .social-title {
            color: #fff;
        }
    `
    document.body.appendChild(style);
}
darkThemeHandler()