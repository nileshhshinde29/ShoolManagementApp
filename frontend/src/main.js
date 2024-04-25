import { createApp } from 'vue'
import App from './App.vue'
import router from './components/routes/router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

let app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
