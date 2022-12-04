import './src/styles/theme.css'
import './src/styles/primevue.min.css'
import './src/styles/icons.css'

export function setupVue3({ app }) {
  app.provide('test', 'hello')
  // app.use(...)
}
