import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import zhCNLocale from './zhCN'


Vue.use(VueI18n)

const messages = {
  'en': {
    ...enLocale,
  },
  'zh-cn': {
    ...zhCNLocale,
  }
 
}

const i18n = new VueI18n({

  locale: 'zh-cn',

  messages
})

export default i18n
