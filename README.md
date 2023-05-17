# Orbis components "without" a framework

This example uses Vite + direct React and React DOM calls to render Orbis components.

It exports an example function which can be used from DOM directly to mount/unmount the React root and the Orbis Discussion component.

Ideally you'd use app.js (and others) to do write your Javascript, this way Vite can do its work and you don't have to bind anything to `window`.

Note: Vite is set up to use <a href="https://github.com/davidmyersdev/vite-plugin-node-polyfills" target="_blank">vite-plugin-node-polyfills</a> plugin to automatically polyfill all core Node modules

# Using the repo

## Installing

```console
npm install
```
  
## Development - hot reload

```console
npm run dev
```
  
## Production - build

```console
npm run build
```
  
## Production - preview build

```console
npm run preview
```
