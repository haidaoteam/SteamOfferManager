<!--  -->
<template>
  <div class="nav">
    
      <div>
        <a @click="linkHaiDao" ><img src="../../../static/imgs/logo.png" alt /></a>
      </div>
      <div>
        <select name="" @change="switchlanguage" class="lang">
          <option :value="zh_cn">{{this.zhCN}}</option>
          <option :value="en">{{EN}}</option>
        </select>
      </div>
    
  </div>
</template>

<script>
const { shell } = require('electron')
export default {
  name:'topnav',
  data() {
    return {
      zh_cn:'zh-cn',
      zhCN:'简体中文',
      en:'en',
      EN:'English',
    };
  },

  methods: {
    // Language switching
    switchlanguage(e) {
      window.localStorage.setItem("language", e.target.value);
      this.$i18n.locale = window.localStorage.getItem("language");
    },
    linkHaiDao() {
      shell.openExternal("https://www.haidaoteam.com/")
    }
  },

  created() {
    // The default language is Chinese
    if( window.localStorage.getItem("language") == null ){
      window.localStorage.setItem("language", 'zh-cn');  
    }
    this.$i18n.locale = window.localStorage.getItem("language");
    if(window.localStorage.getItem("language") === 'zh-cn'){
      this.zh_cn = 'zh-cn'
      this.zhCN = '简体中文'
      this.en ='en'
      this.EN = 'English'
    }else {
      this.zh_cn = 'en'
      this.zhCN = 'English'
      this.en ='zh-cn'
      this.EN = '简体中文'
    }
  },
  
};
</script>
<style  scoped>

.nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav img {
  width: 100px;
}
.lang {
  border: 0;
  color: rgba(119, 119, 119, 1);
}
</style>