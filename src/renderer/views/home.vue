<!--  -->
<template>
  <div class>
    <topnav></topnav>
    <div class="home" v-loading="loading">
      <div class="lnformation">
        <div class="lnformation-id">
          {{$t('steam.user')}}：
          <span v-if="this.logintype">{{loginId}}</span>
        </div>
        <div class="lnformation-online" v-if="this.logintype">
          <span class="green"></span>
          {{$t('steam.online')}}
        </div>
        <div class="lnformation-switch" @click="goHome">{{$t('steam.switch')}}</div>
      </div>

      <div class="tips">
        <i class="el-icon-warning"></i>
        <span>{{$t('steam.tips')}}</span>
      </div>
      <div>{{loginError}}</div>

      <el-collapse v-model="activeNames">
        <el-collapse-item :title="$t('steam.sendOffer')" name="1">
          <div class="newoffer">
            <div v-if="this.logintype" class="offerColor">{{sendOffer}}</div>
            <div v-if="this.logintype">{{$t('steam.time')}}{{sendTime}}</div>
          </div>
        </el-collapse-item>
        <el-collapse-item :title="$t('steam.latestQuotation')" name="2" v-if="this.acceptoffer">
          <div class="newoffer">
            <div v-if="this.logintype" class="offerColor">{{newOfferMsg}}</div>
            <div v-if="this.logintype">{{$t('steam.time')}}{{offerTime}}</div>
          </div>
        </el-collapse-item>
        <el-collapse-item :title="$t('steam.latestOrder')" name="3" v-if="this.acceptoffer">
          <div v-if="this.logintype" class="newoffer offerColor">{{tradeConfirmedMsg}}</div>
        </el-collapse-item>
      </el-collapse>

      <div style="display:none">{{loginType}}</div>
    </div>
    <div class="footer">
    <footnav></footnav>
    </div>
  </div>
</template>

<script>
import steam from "@/steam/storehouse-steam";
import store from "@/store";
import topnav from "@/components/Topnav";
import footnav from "@/components/Foot";
export default {
  name:'home',
  components: {
    topnav,
    footnav
  },
  data() {
    return {
      logininformation: [],
      activeNames: ["1",'2','3'],
      online: "success",
      offline: "info",
      logintype: false,
      loginError: "",
      checked: false,
      acceptoffer: false,
      info: "",
      infos: null,
      loading: true
    };
  },
  computed: {
    loginType() {
      if (this.$store.getters.loginType === "login") {
        this.logintype = true;
        this.loginError = "";
        this.loading = false;
      } else {
        this.logintype = false;
        this.loginError = this.$store.getters.loginType;
      }
      return this.$store.getters.loginType;
    },

    loginId() {
      return this.$store.getters.getloginid;
    },

    newOfferMsg() {
      return this.$store.getters.newOfferMsg;
    },

    tradeConfirmedMsg() {
      return this.$store.getters.tradeConfirmedMsg;
    },

    offerTime() {
      return this.$store.getters.gettime;
    },

    sendOffer() {
      return this.$store.getters.sendoffer;
    },

    sendTime() {
      return this.$store.getters.sendtime;
    }
  },

  methods: {
    goHome() {
      this.infos.logOff();
      this.$router.push({ path: "/" });
    },
  },

  created() {
    this.$i18n.locale = window.localStorage.getItem("language");
    console.log( window.sessionStorage.getItem("val"))
    // Log in to confirm quotation
    this.infos = new steam(JSON.parse(window.sessionStorage.getItem("val")));
    this.infos.login();
    this.infos.confirm();
    if(window.sessionStorage.getItem('accept')){
      this.infos.accept();
      this.acceptoffer =true;
    }
  },
  
  mounted() {
    // Close programs or refresh pages to disconnect links
    window.onbeforeunload = e => {
      this.infos.logOff();
    }
  }
};
</script>
<style  scoped>
.home {
  width: 100%;
  padding: 20px 10px;
  margin: 0 auto;
  text-align: center;
}
.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.lnformation {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.lnformation-id {
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-right: 100px;
}
.lnformation-online {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(111, 187, 35, 1);
  margin-right: 20px;
}
.lnformation-acceptanceGifts {
  margin-left: 50px;
}
.green {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: rgba(111, 187, 35, 1);
  display: block;
  margin-right: 3px;
}
.lnformation-switch {
  width: 130px;
  height: 28px;
  border: 1px solid rgba(37, 140, 227, 1);
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(37, 140, 227, 1);
  line-height: 28px;
  cursor: pointer;
}
.tips {
  color: red;
  margin: 20px 0;
  font-size: 14px;
}
.newoffer {
  display: flex;
  justify-content: space-between;
}
.offerColor {
  color: rgba(153, 153, 153, 1);
}
</style>