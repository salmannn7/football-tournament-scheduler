# ndefined

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
        /*
        teamService.getOne(this.$route.params.id)
        .then((teams) => {
          this.teams = teams
          playerService.getAll(this.$route.params.id)
          .then((players) => {
            this.players = players
          })
          .catch((error) => this.error = error)
          
          playerService.getOne(this.$route.params.id)
          .then((players) => {
            this.players = players
          })
          .catch((error) => this.error = error)
        })
        .catch((error) => this.error = error)
        */

        eval('this.p' + i + '===""') || eval('this.p' + i + '===null') ||