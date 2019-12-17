# Broken `mini-css-extract-plugin` test case

This repo contains a small test case which demonstrates an issue introduced with [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) v0.8.1 whereby the `context` property for instances of `CssModule` is set to `null` resulting in errors like:

```
TypeError: TypeError: Cannot read property 'match' of null
```


## Installation

After cloning this repository:

1. Run `npm install` to install of the required dependencies
2. Build the test file with `npm run build` or `npx webpack`
3. This should fail
4. Install the previous version of the `mini-css-extract-plugin`:
    ```sh
    npm i mini-css-extract-plugin@0.8.0
    ```
5. Run the build again
