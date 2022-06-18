const darkThemeHandler = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .wall-bg .wall-bg-inner {
            padding-top: 0;
        }

        body, .extend-critical-top-header-divider, article {
            background-color: #123;
        }

        .heading-bezprawnik-post-wrapper__outer, .heading-ecommerce-post-wrapper__outer {
            position: relative;
            z-index: 1;
        }

        .heading-bezprawnik-post-categories__category-link, .heading-ecommerce-post-categories__category-link {
            background-color: transparent;
            border: 1px solid #fff;
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

        .ad_slot_height_manager_wrapper_bp_sdh1, .ad_slot_height_manager_wrapper_bp_sdh2 {
            display: none;
        }
    `
    document.body.appendChild(style);
}
darkThemeHandler()