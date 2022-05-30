const darkThemeHandler = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .off-canvas-content, #banner-after-excerpt, section, ul, .page-like .like-links-block, .tabs-content {
            background-color: #123 !important;
        }
        
        h1, h2, h3, h4, h5, h6, p, span, li, article, a:not(.wesprzyj):not(.ScrollToComment) {
            background: none !important;
            color: #fff !important;
        }
        
        #nav-icon2 span {
            background-color: #9e1c1c !important;
        }
        
        iframe {
            background-color: #fff;
        }
        
        section.break-1 .after-break .content-wrapper {
            background: none;
        }

        .banner-after-excerpt {
            background-color: #24476b;
        }
    `
    document.body.appendChild(style);
}
darkThemeHandler()