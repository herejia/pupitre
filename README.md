# pupitre

extends [page.js](https://github.com/visionmedia/page.js). Show or hide path's views. Views may be fetched asynchronously using HTML imports (WebComponents' `link rel="import"`)

requires page.js, possibly html import [polyfills](https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports)

## how to

### define routes
```html
  <a href="" pup-path="/index">Get to the index</a>
```

### define views
```html
  <section pup-when='/index' pup-href="path/to/index-partial.html"></section>
```
