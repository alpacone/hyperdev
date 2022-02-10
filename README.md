# Hyperdev

## Install

Install [Redux DevTools](https://github.com/reduxjs/redux-devtools) extension first.

`npm i -S hyperdev` or `yarn add hyperdev`

## Usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="module">
      import { h, text, app } from 'https://unpkg.com/hyperapp';
      import { withReduxDevTools } from 'https://unpkg.com/hyperdev';

      const inc = state => ({ ...state, counter: state.counter + 1 });

      withReduxDevTools(app)({
        init: { counter: 0 },
        view: state => h('button', { onclick: inc }, text(`Click ${state.counter}`)),
        node: document.getElementById('app'),
      });
    </script>
  </head>

  <body>
    <div id="app"></div>
  </body>
</html>
```
