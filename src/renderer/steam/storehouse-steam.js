/**
 * SteamUser
 * Simply logs into Steam using account credentials, Automatic confirmation of quotation
 * @class 
 * @classdesc   Accept the required parameters, which include login, automatic confirmation of quotations sent, automatic confirmation of received quotations, and exit methods. 
 * @method [login] Login method
 * @param  {object} options - The parameter options are an object
 * options:{
 *    username: string,   Steam account name
 *    password: string,   Steam account password  
 *    sharedSecret: string, Verification password of maFiles file
 *    identitySecret: string, ID of maFiles file
 *    proxy: string, http proxy (Optional)
 * }
 * @method [confirm] Automatic confirmation of quotation
 * @method [accept] Automatically confirm the quotation received and exchange for your own goods
 * @method [login] Log out
 * 
 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import store from '../store'
const SteamUser = require('steam-user'); // Replace this with `require('steam-user');` if used outside of the module directory
const SteamTotp = require('steam-totp');
const SteamCommunity = require('steamcommunity');
const TradeOfferManager = require('steam-tradeoffer-manager'); // use require('steam-tradeoffer-manager') in production
const FS = require('fs');


class steam {
  constructor(options) {
    this.username = options.username
    this.password = options.password
    this.sharedSecret = options.sharedSecret
    this.identitySecret = options.identitySecret
    this.proxy = options.proxy
    this.client = new SteamUser({ httpProxy: this.proxy, dataDirectory: null });
    this.community = new SteamCommunity()
    this.manager = new TradeOfferManager({
      "steam": this.client,
      "domain": "",
      "language": "en"
    });

    this.logOnOptions = {}
  }
  
  login() {
    this.logOnOptions = {
      "accountName": this.username,
      "password": this.password,
      "twoFactorCode": SteamTotp.getAuthCode(this.sharedSecret),
    };
    
    if (FS.existsSync(this.username + ".json")) {
      this.manager.pollData = JSON.parse(FS.readFileSync(this.username + ".json").toString('utf8'));
    }
    // Log in to step account
    this.client.logOn(this.logOnOptions);

    this.client.on('loggedOn', (details, parental) => {
      store.dispatch("loginId", details.client_supplied_steamid);
    });
    // Display error message
    this.client.on('error', (e) => {
      store.dispatch("login", e);
    });

    this.client.on('steamGuard', (domain, callback) => {
      var code = getCodeSomehow();
      callback(code);
    });

    this.client.on('webSession', (sessionID, cookies) => {
      store.dispatch("login", 'login');
      this.manager.setCookies(cookies, function (err) {
        if (err) {
          store.dispatch("login", err);
          // process.exit(1); // Fatal error since we couldn't get our API key
          return;
        }
      });
      this.community.setCookies(cookies);
    });
  }


  confirm() {
    this.manager.on('unknownOfferSent', (offer) => {
      // Get the Transaction Quotation issued
      if (offer['state'] === TradeOfferManager.ETradeOfferState.CreatedNeedsConfirmation) {
        // Confirm to issue quotation
        this.community.acceptConfirmationForObject(this.identitySecret, offer.id, function (err) {
          if (err) {
            store.dispatch("sendQuotation", 'error ' + err.message);
          } else {
            store.dispatch("sendQuotation", 'Send quotation' + offer.id + 'confirmed');
            store.dispatch("sendtime", offer.created);
          }
        });
      }

    })
    this.manager.on('pollData', function (pollData) {
      FS.writeFileSync(this.username + ".json", JSON.stringify(pollData));
    });
  }

  accept() {
    this.manager.on('newOffer', (offer) => {

      store.dispatch("newOffer", "New offer #" + offer.id + " from " + offer.partner.getSteamID64());
      store.dispatch('offerTime', offer.created)
      // Transaction quotation received and one's own transaction is empty
      if (offer.itemsToGive.length === 0 && offer.isOurOffer == false) {
        offer.accept((err, status) => {
          if (err) {
            store.dispatch("tradeConfirmed", "error:" + err.message);
          } else {
            if (status == "pending") {
              community.acceptConfirmationForObject(this.identitySecret, offer.id, function (err) {
                if (err) {
                  store.dispatch("tradeConfirmed", "error:" + err.message);
                } else {
                  store.dispatch("tradeConfirmed", "Trade offer " + offer.id + " confirmed");
                }
              });
            }
          }
        });
      }


    });
    this.manager.on('pollData', function (pollData) {
      FS.writeFileSync(this.username + ".json", JSON.stringify(pollData));
    });
  }

  logOff() {
    // Log out
    this.client.logOff();
  }

}


export default steam


