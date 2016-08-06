const PUP = {
    pages: []
};

function show(el) {
    el.style.display = '';
}

function hide(el) {
    el.style.display = 'none';
}

function defineRoute(path, element) {
    page(path, () => {
        PUP.pages.forEach(page => hide(page));
        show(element);
    });
}

function htmlImport(element) {
    let link = document.createElement('link');
    link.rel = 'import';
    link.href = element.getAttribute('pup-href');
    link.onload = (event) => {
        event.target.import.querySelectorAll('body > *')
            .forEach(child => element.appendChild(child));
    };
    document.head.appendChild(link);
}

Array.from(document.querySelectorAll('[pup-when]'))
    .forEach(element => {
        PUP.pages.push(element);
        const path = element.getAttribute('pup-when');
        hide(element);
        defineRoute(path, element);
        htmlImport(element);
    });
Array.from(document.querySelectorAll('[pup-path]'))
    .forEach(element => {
        element.addEventListener('click', () => page(element.getAttribute('pup-path')));
    });
