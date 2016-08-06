'use strict';

var PUP = {
    pages: []
};

function show(el) {
    el.style.display = '';
}

function hide(el) {
    el.style.display = 'none';
}

function defineRoute(path, element) {
    page(path, function () {
        PUP.pages.forEach(function (page) {
            return hide(page);
        });
        show(element);
    });
}

function htmlImport(element) {
    var link = document.createElement('link');
    link.rel = 'import';
    link.href = element.getAttribute('pup-href');
    link.onload = function (event) {
        event.target.import.querySelectorAll('body > *').forEach(function (child) {
            return element.appendChild(child);
        });
    };
    document.head.appendChild(link);
}

Array.from(document.querySelectorAll('[pup-when]')).forEach(function (element) {
    PUP.pages.push(element);
    var path = element.getAttribute('pup-when');
    hide(element);
    defineRoute(path, element);
    htmlImport(element);
});
Array.from(document.querySelectorAll('[pup-path]')).forEach(function (element) {
    element.addEventListener('click', function () {
        return page(element.getAttribute('pup-path'));
    });
});
