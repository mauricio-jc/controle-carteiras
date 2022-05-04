import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faChevronLeft,
    faFloppyDisk,
    faHandHoldingDollar,
    faHandshakeSimple,
    faPen,
    faPlus,
    faRefresh,
    faSignOut,
    faTrashCan,
    faUsers,
    faWallet
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faUsers,
    faWallet,
    faSignOut,
    faHandHoldingDollar,
    faPlus,
    faChevronLeft,
    faFloppyDisk,
    faPen,
    faTrashCan,
    faRefresh,
    faHandshakeSimple
)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')