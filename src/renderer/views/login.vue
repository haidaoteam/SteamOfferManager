<template>
  <div id="wrapper">
    <topnav></topnav>
     <div class="lnformation-acceptanceGifts" >
          <el-checkbox v-model="checked" @change="accept">{{$t('steam.acceptanceGifts')}}</el-checkbox>
        </div>
    <div class="content">
      
      <div class="content-left">
        <div class="lale userclass">{{$t('steam.user')}}</div>
        <div class="lale">{{$t('steam.password')}}</div>
        <div class="lale">{{$t('steam.maFilesP')}}</div>
        <div class="lale agent">{{$t('steam.agent')}}</div>
      </div>
      <div>
        <div>
          <input type="text" v-model="username" class="input" />
        </div>
        <div>
          <input type="password" v-model="password" class="input" />
        </div>
        <div class="upfile">
          <div class="upfile-top">
            <input type="file" @change="fileup" :title="$t('steam.loadFile')" />
          </div>
          <div class="upfile-but">
            <input type="text" :value="filename" disabled placeholder class="upfile-but-file" />
            <input type="button" :value="$t('steam.browse')" class="upfile-but-choice" />
          </div>
        </div>
        <div>
          <input type="text" v-model="proxy" class="input" :placeholder="$t('steam.example')" />
        </div>
        <div>
          <p style="color:red">{{err}}</p>
        </div>
        <button @click="loGin" class="login">{{$t('steam.login')}}</button>
      </div>
    </div>
    <div class="footer">
      <footnav></footnav>
    </div>
  </div>
</template>

<script>
import topnav from "@/components/Topnav";
import footnav from "@/components/Foot";
import steam from "@/steam/storehouse-steam";
export default {
  name: "login",
  components: {
    topnav,
    footnav
  },

  data() {
    return {
      err: "",
      username: "",
      password: "",
      sharedSecret: "",
      identitySecret: "",
      proxy: "",
      logininformation: {
        username: "",
        password: "",
        sharedSecret: "",
        identitySecret: "",
        proxy: ""
      },
      information: "",
      filename: "",
      as: null,
      checked: false,
    };
  },
  methods: {
    // login
    loGin() {
      this.username != "" && this.password != ""
        ? this.readFiles()
        : (this.err = "Account password is not empty");
    },
    // Read parsing files
    readFiles() {
      let _this = this;
      let fileselect = document.querySelector("input[type=file]").files[0];
      if (fileselect) {
        let reader = new FileReader();
        if (typeof FileReader === "undefined") {
          _this.err = "Your browser does not support the FileReader interface";
          return
        }
        reader.readAsText(fileselect, "gb2312");
        reader.onload = e => {
          _this.information = JSON.parse(e.target.result);
          _this.logininformation.username = _this.username;
          _this.logininformation.password = _this.password;
          _this.logininformation.sharedSecret = _this.information.shared_secret;
          _this.logininformation.identitySecret =_this.information.identity_secret;
          _this.logininformation.proxy = _this.proxy;
          window.sessionStorage.setItem("val",JSON.stringify(_this.logininformation));
          this.$router.push({ path: "/home" });
        };
      } else {
        _this.err = "Please enter the file";
      }
    },
    fileup(e) {
      // Get the name of the file
      let url = e.target.value;
      this.filename = e.target.value.split("\\").pop();
    },
    accept(e) {
      // Do you need to turn on the acceptance function?
      if (e) {
        window.sessionStorage.setItem('accept',true);
      } else {
        window.sessionStorage.setItem('accept',false);
      }
    }
  },
  created() {
    // Initialize to null before login
    window.sessionStorage.removeItem("val");
    window.sessionStorage.removeItem("accept");
    this.$store.dispatch("login", 'nologin');
    this.$store.dispatch("sendQuotation", '');
    this.$store.dispatch("sendtime", '');
    this.$store.dispatch("newOffer", '');
    this.$store.dispatch("offerTime", '');
    this.$store.dispatch("tradeConfirmed", '');
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.content {
  width: 100%;
  padding: 20px 0;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
}
.content > div > div {
  margin: 10px 0;
}
.content-left {
  margin-right: 10px;
}
.lale {
  /* display: block; */
  font-family: PingFangSC-Regular;
  font-weight: 400;
  font-size: 14px;
  color: rgba(61, 61, 61, 1);
}
.upfile {
  position: relative;
  display: flex;
  justify-content: center;
  height: 20px;
}
input {
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(214, 214, 214, 1);
}
.input {
  width: 200px;
}
.upfile-but {
  position: absolute;
  display: flex;
}
.upfile-top {
  position: absolute;
  z-index: 10;
  opacity: 0;
}
.login {
  width: 200px;
  padding: 4px 0;
  color: white;
  background-color: rgba(37, 140, 227, 1);
  border: 0;
  cursor: pointer;
}
.wrapper {
  position: relative;
}
.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.upfile-but-file {
  width: 120px;
  margin-right: 10px;
}
.upfile-but-choice {
  width: 70px;
}
.content-left>.userclass{
  margin-top: 15px;
}
.lnformation-acceptanceGifts{
    display: flex;
    justify-content: space-around;
    padding: 20px 0 10px 0;
    margin-left: 14px;

}
</style>
