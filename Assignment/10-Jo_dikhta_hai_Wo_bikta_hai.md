# _Chapter 10 - Jo dikhta hai, Wo bikta hai_

## 1. Explore all the ways of writing css.

There are different ways of using CSS in in our application:

- `Native CSS`: All components's styles in `.css` file.
- `SCSS`: Syntactical CSS - preprocessed then converted to css
- `Inline`: Style attribute inside HTML or JSX tags.
- `Component Library`: MaterialUI, Bootstrap, Base Web UI, Ant design, etc.
- `styled-components`
- `CSS Framework`: Tailwind css

## 2. How do we configure tailwind?

- Below command will install tailwindcss and its peer dependencies via npm, and then run the init command to _generate_ **tailwind.config.js**.

  ```sh
  npm i -D tailwindcss postcss
  npx tailwindcss init
  ```

- `Configure PostCSS`

  - Now, create a **.postcssrc** file in your project root, and **enable** the tailwindcss plugin.
    ```json
    {
      "plugins": {
        "tailwindcss": {}
      }
    }
    ```

- `Configure your template paths`
  - Now, **add** the paths to all of your template files in your tailwind.config.js file.
    ```js
    module.exports = {
      content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```
- `Add the Tailwind directives` to your CSS
  - Now, **create** a ./`index.css` file and **add** the `@tailwind directives` for each of Tailwind’s layers.
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
- Start your build process
  ```sh
  npx parcel index.html
  ```
- Now, you are ready to start using Tailwind in your project.

## 3. In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

The `tailwind.config.js` file contains the configurations for the our application.
Following are the configurations we require to setup tailwind.

- `content` : This configuration of the file formats, on which the styles are applied.

  ```js
  content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  ```

  This configuration means that in files extensions of `html, js, ts, tsx, jsx` files will use the stylings of Tailwind.

- `theme` : Theme is where we design our own custom configurations for our project like colors and font-families for our application.

  ```js
  module.exports = {
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
      },
    },
  };
  ```

- `extend` : Here we can extend more properties for Tailwind like adding values that does not exist for tailwind or overriding the existing the values for tailwind.

  ```js
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }
  }
  ```

- `plugins`: We can use to inject new style in our project using JavaScript instead of css.

```js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
  ],
};
```

## 4. Why do we have `.postcssrc` file?

- PostCSS is a Node.js tool that transforms your styles using JavaScript plugins.
- Despite its name, it is neither a post-processor nor a pre-processor, **it is just a transpiler** that **turns** a special PostCSS plugin syntax **into** a Vanilla CSS. You can think of it as the Babel tool for CSS.
- So, we used `PostCSS` to transpile the tailwind css code into Vanilla CSS.
- Remember, while installing tailwind, we install postcss as its peer dependency. So, we create a '.postcssrc' file in project root, and **enable** the tailwindcss plugin.
  ```json
  {
    "plugins": {
      "tailwindcss": {}
    }
  }
  ```
