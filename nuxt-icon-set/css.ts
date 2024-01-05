import { aliases, nuxtIcon } from './common'

const defaultSet = 'cssNuxtIcon'
const cssNuxtIcon = nuxtIcon(true)

const icons = {
  defaultSet,
  aliases,
  sets: { cssNuxtIcon },
} satisfies import('vuetify').IconOptions

export { icons }
