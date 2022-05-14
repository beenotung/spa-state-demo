# SPA State Management Demo

This repo demo how to do simple state update (and trigger re-render) with varies of SPA framework.

The example used is simply getting two numbers from input, then display the sum.

## Comparison

| Framework / Tool | # Significant Expression* | Required LoC* | Size** of node_modules | Size** of Built File*** |
|---|--:|--:|--:|--:|
| [Svelte](#svelte)   | 7  | 19 |  22M |  17.4K |
| [Angular](#angular) | 7  | 38 | 242M | 155.8K |
| [Vue](#vue)         | 10 | 43 | 101M |  49.3K |
| [Stencil](#stencil) | 11 | 48 |  16M |  13.7K |
| [React](#react)     | 14 | 32 | 205M | 144.6K |
| [Vanilla](#vanilla) | 10 | 16 |   0B |   0.3K |

*: the lower, the better

**: file size are in unit of MB or KB (powers of 1024), measured with `du -sh --apparent-size node_modules`

***: excluded *.map files

LoC: line of code

Remark: the vanilla html file is minified with [minify](https://www.npmjs.com/package/minify)

### Svelte
- [App.svelte](./svelte-calc/src/App.svelte)

### Angular
- [app.component.ts](ng-calc/src/app/app.component.ts)
- [app.component.html](ng-calc/src/app/app.component.html)
- [app.component.css](ng-calc/src/app/app.component.css)
- [app.module.ts](ng-calc/src/app/app.module.ts)

### Vue
- [App.vue](./vue-calc/src/App.vue)

### Stencil
- [my-component.tsx](./stencil-calc/src/components/my-component/my-component.tsx)
- [my-component.css](./stencil-calc/src/components/my-component/my-component.css)

### React
- [App.tsx](./react-calc/src/App.tsx)
- [App.css](./react-calc/src/App.css)

### Vanilla
- [index.html](./vanilla-calc/index.html)
