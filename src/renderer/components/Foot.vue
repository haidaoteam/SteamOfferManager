<!--  -->
<template>
  
    <div class="footer" >
      <div class="fticon">
        <a  @click="gitHubHaiDao" target="_blank">
          <img src="../../../static/imgs/Fill 1(1).png" alt />
        </a>
        <a @click="twitter" target="_blank">
          <img src="../../../static/imgs/weibo.png" alt />
        </a>
        <a @click="gongzhonghao" target="_blank">
          <img src="../../../static/imgs/Fill 1 Copy.png" alt />
        </a>
        <a @click="SteamDevelop" target="_blank">
          <img src="../../../static/imgs/Fill 1(2).png" alt />
        </a>
        <a @click="haidaoteam" target="_blank">
          <img src="../../../static/imgs/Fill 1(3).png" alt />
        </a>
      </div>
    </div>
  
</template>

<script>

const { shell } = require('electron')
export default {
  name:'foot',
  methods:{
    gitHubHaiDao(){
      shell.openExternal("http://wpa.qq.com/msgrd?v=3&uin=304926518&site=qq&menu=yes");
    },
     twitter(){
      shell.openExternal("https://weibo.com/u/6515252486?is_hot=1");
    },
     gongzhonghao(){
      shell.openExternal("https://haidaoteam.com/blog/gongzhonghao");
    },
     SteamDevelop(){
      shell.openExternal("https://twitter.com/SteamDevelop");
    },
     haidaoteam(){
      shell.openExternal("https://github.com/haidaoteam");
    },
  },
}
</script>
<style  scoped>
.footer {
  width: 100%;
  height: 71px;
  background-color: rgba(41, 40, 45, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ftconw {
  font-size: 12px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 17px;
  margin-bottom: 10px;
}

.fticon img {
  margin: 0 3px;
}
</style>
