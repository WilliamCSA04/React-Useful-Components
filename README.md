# React Useful Components

[![](https://data.jsdelivr.com/v1/package/npm/react-useful-components/badge)](https://www.jsdelivr.com/package/npm/react-useful-components)

This library is meant to add some components that uses generic logic to render,
those are some that I use myself on almost all of my React projects.

## Usage

You can use this lib installing it with NPM or Yarn:

`npm i react-useful-components` or `yarn add react-useful-components`

Or you can use [CDN link](https://cdn.jsdelivr.net/npm/react-useful-components@0.2.3/lib/cjs/index.min.js):

`<script src="https://cdn.jsdelivr.net/npm/react-useful-components@0.2.3/lib/cjs/index.min.js"></script>`

## Components

Currently, these are all components that this lib provides:

- [Conditional Renderer](https://github.com/WilliamCSA04/React-Useful-Components/tree/master/src/components/ConditionalRenderer): This component receive a `condition`, if it is a `truthy` value,
  this components renders `onSuccess` function, otherwise, renders `onFailure`;

  Example:

  ```javascript
  import { ConditionalRenderer } from "react-useful-components";

  export default function SuccessOrError() {
    return (
      <ConditionalRenderer
        condition={false}
        onSuccess={() => <p>Success</p>}
        onFailure={() => <p>Error</p>}
      />
    );
  }
  ```

- [Iterator](https://github.com/WilliamCSA04/React-Useful-Components/tree/master/src/components/Iterator):
  This component is useful to interate over a list of data and render a list of `JSX.Element`.

  Example:

  ```javascript
  import { Iterator } from "react-useful-components";

  export default function SuccessOrError() {
    return (
      <Iterator
        list={["one", "two"]}
        onRender={(prop, index) => <p>{prop}</p>}
      />
    );
  }
  ```

- [Repeater - Beta](https://github.com/WilliamCSA04/React-Useful-Components/tree/master/src/components/Repeater):

  ***

  :warning: **This component is currently on its beta version**

  ***

  Repeater is a componente which is meant to create X times of the same component. Currently
  this component does not have an update function, but it will have on its final version.

  Example:

  ```javascript
  import { Repeater } from "react-useful-components";

  export default function RepeatParagraph() {
    return (
      <Repeater htmlTag="p" startsWith={3} />,
    );
  }
  ```

## Bugs or extra info

If you find any bug, or have any questions to make, do it on the [issue section](https://github.com/WilliamCSA04/React-Useful-Components/issues). Feel free to contributing as well by forking and open a PR, just open a issue before to request it, if you have an idea but don't want or can't implement it, also write a issue describing it.
