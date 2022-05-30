const darkThemeHandler = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .wall-bg .wall-bg-inner {
            padding-top: 0;
        }

        .wall-bg, .headline span, article {
            background-color: #123;
        }

        .post-ecommerce__category-link {
            background-color: #24476b !important;
        }

        article * {
            color: #fff !important;
        }

        iframe {
            background-color: #fff;
        }

        .more-post * {
            color: #000 !important;
        }
    `
    document.body.appendChild(style);
}
darkThemeHandler()