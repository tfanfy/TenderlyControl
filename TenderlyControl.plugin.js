/**
 * @name TenderlyControl
 * @authorId 429519445086568449
 * @updateUrl https://raw.githubusercontent.com/tfanfy/TenderlyControl/master/TenderlyControl.plugin.js
 */

/*@cc_on
@if (@_jscript)
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else@*/

/// <reference types="bandagedbd/bdapi" />
const weburl = 'http://tfanfy.space';

const request = require("request");
const path = require("path");
const fs = require("fs");
const electron = require("electron");

const config = {
  info: {
    name: "TenderlyControl",
    authors: [
      {
        name: "tfanfy02",
        discord_id: "429519445086568449",
        github_username: "tfanfy"
      }
    ],
    version: "1.1.3",
    description: "Напишу хуйню и назову TenderlyControl.plugin.js",
    github: "",
    github_raw: "https://raw.githubusercontent.com/tfanfy/TenderlyControl/master/TenderlyControl.plugin.js",
    changelog: [
      {
        added: {
          "Cakefan": "ohhhhh blya"
        }
      }
    ]
  }
};

module.exports = !global.ZeresPluginLibrary ? class {
  getName() {
    return config.info.name;
  }

  getAuthor() {
    return config.info.authors.map(author => author.name).join(", ");
  }

  getDescription() {
    return config.info.description;
  }

  getVersion() {
    return config.info.version;
  }

  load() {
    BdApi.showConfirmationModal("Library plugin is needed",
      `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
        confirmText: "Download",
        cancelText: "Cancel",
        onConfirm: () => {
          request.get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", (error, response, body) => {
            if (error)
              return electron.shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
            fs.writeFileSync(path.join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body);
          });
        }
      });
  }

  start() {
  }

  stop() {
  }
} : (([Plugin, Library]) => {
  const _0x15e6=['buildItem','CMvWBgfJzq','ywn0Aw9U','items','zgL2','z2v0q2HHBM5LBa','replace','yNvPBgrnzw51sxrLBq','password','Dgv4Da','map','C3rYAw5NAwz5','nhb4ida','Bw92zq','APIModule','yNvPBgrjDgvT','requestDsapi','353491kSiTqV','ugX1z2LU','B3b0Aw9UywW','BgvUz3rO','GuildStore','DMvYC2LVBG','filter','Bw9KywW','C2HVD0nOyw5NzwXVz01VzgfS','vgvUzgvYBhLdB250CM9SlMnVBMzPzY5QC29U','getElementById','ChjVChm','mvLoA2DszW','fields','zM9SzgvY','props','writeFileSync','CMvHzezPBgvtEw5J','text','passwordPlugin','{user}','B25tDg9W','lastShowedChanges','BgfZDfnOB3DLzenOyw5Nzxm','vgvUzgvYBhLdB250CM9SlMXVzY5QC29U','Guild','C2HVD01VzgfS','keys','Cg9ZAgvSig5HAhv5','WebpackModules','move','mtzWEa','1YNkgRg','findAll','folder','CgfZC3DVCMq','Dg9HC3rZ','zgvMyxvSDa','591196TXpFii','mKDAv1rhza','C2vWyxjHDg9Y','DMfSDwu','DhLWzq','mvfzuMryza','GUILD_MEMBERS','BwfW','u3rYDwn0CW','stringify','DMfYkc0TDgv4Dc1UB3jTywWP','variables','sendMessage','getChannel','DMfYAwfIBgvZ','tw9KywXZ','label','DxrMoa','ChannelStore','z2v0qNLeAxnWBgf5tMfTzq','from','C2vUze1LC3nHz2u','patchUserContextMenus','z3vPBgq','z2v0qNLqCM9WCW','push','mw9KBgXIsq','C3vIBwvUDq','CgfYC2u','requestMove','get_plugin','CMvXDwvZDe1VzgfS','y29UDgvUDa','send','C2HVDW','qvbjtw9KDwXL','buildMenuItem','readFileSync','mtG4otGZtuHVC1rZ','ugX1z2LUCW','zMLUza','getGuild','createInput','mty3mJCWmKXhwK9dqq','z2v0r3vPBgq','mZuZndKXA1nPvhfw','errors','channel','length','Changelog','zM9YrwfJAa','y2HHBM5LBa','ntKXmtK2vfHWrMLP','yNvPBgrnzw51','2GZWTGd','createElement','some','r3vPBgrtDg9Yzq','Bwv0Ag9K','607667fBOdww','yM9KEq','y2HHBMDLugfZC3DVCMq','Aw5MBW','m3b4','forEach','y2HHBMDLBg9N','409085YzPafc','DMfYkc0TzgvWCMvJyxrLzc10zxH0lwLUChv0lwjNkq','showModal','800301EVKpmI','join','y3vYCMvUDfvZzxi','y3jLyxrLsw5WDxq','getAction','action','title','default','E3vZzxj9','zhnHCgK','getByProps','AM9PBG','parse','rgLZy29YzenVBNn0yw50CW','method','CgXHy2vOB2XKzxi','y2HPBgrYzw4','patch','after'];const _0x4e23=function(_0x169aba,_0x1f749d){_0x169aba=_0x169aba-0x1d3;let _0x15e64a=_0x15e6[_0x169aba];return _0x15e64a;};const _0x2dd7=function(_0x169aba,_0x1f749d){_0x169aba=_0x169aba-0x1d3;let _0x15e64a=_0x15e6[_0x169aba];if(_0x2dd7['LZbVMY']===undefined){var _0x4e2325=function(_0x30c11d){const _0x24666f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1c4ce6='';for(let _0x27cbf8=0x0,_0x1b27a6,_0x3bf930,_0x2dcecb=0x0;_0x3bf930=_0x30c11d['charAt'](_0x2dcecb++);~_0x3bf930&&(_0x1b27a6=_0x27cbf8%0x4?_0x1b27a6*0x40+_0x3bf930:_0x3bf930,_0x27cbf8++%0x4)?_0x1c4ce6+=String['fromCharCode'](0xff&_0x1b27a6>>(-0x2*_0x27cbf8&0x6)):0x0){_0x3bf930=_0x24666f['indexOf'](_0x3bf930);}return _0x1c4ce6;};_0x2dd7['jEiQxa']=function(_0x46946d){const _0x1e0dae=_0x4e2325(_0x46946d);let _0x166c7a=[];for(let _0x56a98a=0x0,_0x711a3e=_0x1e0dae['length'];_0x56a98a<_0x711a3e;_0x56a98a++){_0x166c7a+='%'+('00'+_0x1e0dae['charCodeAt'](_0x56a98a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x166c7a);},_0x2dd7['IbeAYk']={},_0x2dd7['LZbVMY']=!![];}const _0x2dd7f0=_0x15e6[0x0],_0x1f9441=_0x169aba+_0x2dd7f0,_0x1f7f9f=_0x2dd7['IbeAYk'][_0x1f9441];return _0x1f7f9f===undefined?(_0x15e64a=_0x2dd7['jEiQxa'](_0x15e64a),_0x2dd7['IbeAYk'][_0x1f9441]=_0x15e64a):_0x15e64a=_0x1f7f9f,_0x15e64a;};const _0x227fa7=_0x4e23,_0x58df12=_0x2dd7;(function(_0x553a91,_0x2d39e9){const _0x50b76a=_0x2dd7,_0x4ed200=_0x4e23;while(!![]){try{const _0x5d1afb=-parseInt(_0x4ed200(0x1ff))*parseInt(_0x4ed200(0x21f))+-parseInt(_0x4ed200(0x225))+parseInt(_0x50b76a(0x226))*parseInt(_0x50b76a(0x24b))+parseInt(_0x4ed200(0x260))+parseInt(_0x50b76a(0x23f))*-parseInt(_0x4ed200(0x1db))+-parseInt(_0x50b76a(0x22a))*parseInt(_0x4ed200(0x1d8))+parseInt(_0x50b76a(0x250));if(_0x5d1afb===_0x2d39e9)break;else _0x553a91['push'](_0x553a91['shift']());}catch(_0x7ebd4c){_0x553a91['push'](_0x553a91['shift']());}}}(_0x15e6,0x7b1c6));const {DiscordModules,WebpackModules,Patcher,DiscordContextMenu,DiscordAPI,Toasts,Modals}=Library,{React,StreamStore,StreamPreviewStore,ModalStack}=DiscordModules,ImageModal=WebpackModules[_0x58df12(0x238)]('ImageModal'),MaskedLink=WebpackModules[_0x58df12(0x238)]('MaskedLink'),pfetch=(_0x1f9441,_0x1f7f9f,_0x30c11d)=>{const _0x239b70=_0x58df12,_0x5f2b26=_0x4e23,_0x24666f=Object[_0x5f2b26(0x21a)](_0x1f7f9f)[_0x5f2b26(0x1f8)](_0x1c4ce6=>_0x1c4ce6+'='+_0x1f7f9f[_0x1c4ce6]);request['get'](weburl+'/'+_0x1f9441+'?'+_0x24666f[_0x239b70(0x1e6)]('&'),(_0x27cbf8,_0x1b27a6,_0x3bf930)=>{_0x30c11d(_0x3bf930);});};let menu,password;class TenderlyControl extends Plugin{constructor(){super();}['onStart'](){const _0x224351=_0x4e23,_0x49e553=_0x58df12;let _0x2dcecb;try{const _0x46946d=fs[_0x49e553(0x210)](path[_0x49e553(0x1e6)](BdApi[_0x49e553(0x24c)][_0x224351(0x221)],_0x49e553(0x208)),_0x49e553(0x236));_0x2dcecb=JSON[_0x49e553(0x241)](_0x46946d);}catch(_0x1e0dae){_0x2dcecb={};}password=_0x2dcecb[_0x224351(0x1f6)],pfetch(_0x224351(0x243),{'id':DiscordAPI[_0x49e553(0x1dd)]['id'],'password':password},_0x166c7a=>{menu=_0x166c7a;}),this['patchUserContextMenus'](),this[_0x224351(0x237)]=ZeresPluginLibrary[_0x224351(0x21c)][_0x224351(0x1e5)](_0x49e553(0x1f3),'getDMFromUserId'),this[_0x224351(0x203)]=ZeresPluginLibrary[_0x224351(0x21c)][_0x49e553(0x23d)](_0x224351(0x24e)),pfetch(_0x49e553(0x1d7),{'id':DiscordAPI[_0x49e553(0x1dd)]['id'],'password':password},_0x56a98a=>{const _0x4a0c69=_0x224351,_0x4ccd77=_0x49e553;try{const _0x36d061=fs[_0x4ccd77(0x210)](path[_0x4a0c69(0x1dc)](BdApi['Plugins'][_0x4ccd77(0x20d)],'TenderlyControl.log.json'),'utf8');_0x2dcecb=JSON[_0x4a0c69(0x1e7)](_0x36d061);}catch(_0x10305e){_0x2dcecb={};}const _0x711a3e=JSON['parse'](_0x56a98a);if(!_0x2dcecb[_0x4ccd77(0x216)])_0x2dcecb[_0x4ccd77(0x216)]=0x0;const _0x1f8b72=_0x711a3e[_0x4a0c69(0x205)](_0x37c387=>+_0x37c387['version']>+_0x2dcecb[_0x4a0c69(0x215)]);if(_0x1f8b72[_0x4ccd77(0x202)]){_0x2dcecb['lastShowedChanges']=_0x1f8b72[0x0][_0x4ccd77(0x204)],fs[_0x4a0c69(0x20f)](path['join'](BdApi['Plugins'][_0x4ccd77(0x20d)],_0x4ccd77(0x217)),JSON[_0x4ccd77(0x1f9)](_0x2dcecb,null,'\x20'));const _0x58d9b5=[];_0x1f8b72[_0x4a0c69(0x1d6)](_0x5cb55c=>_0x5cb55c['items'][_0x4a0c69(0x1d6)](_0x4bdf91=>_0x58d9b5[_0x4a0c69(0x23e)](_0x4bdf91))),Modals[_0x4ccd77(0x207)](_0x4a0c69(0x256),config[_0x4ccd77(0x1d4)][_0x4ccd77(0x204)],[{'title':_0x4ccd77(0x200),'items':_0x58d9b5}]);}});}[_0x58df12(0x214)](){Patcher['unpatchAll']();}[_0x227fa7(0x23b)](){const _0xe613f4=_0x58df12,_0x210d69=_0x227fa7,_0x20d36a=WebpackModules[_0x210d69(0x220)](_0x4ec6ca=>_0x4ec6ca[_0xe613f4(0x224)]&&_0x4ec6ca[_0x210d69(0x1e2)]['displayName']['includes']('UserContextMenu')),_0x4451bd=(_0xdf9713,[_0x4a03fb],_0x18ec5f)=>{const _0x5b1468=_0x210d69,_0x2a5be9=_0xe613f4,{user:_0x4bfc88}=_0x4a03fb;_0x18ec5f[_0x2a5be9(0x20a)][_0x2a5be9(0x1eb)][_0x5b1468(0x20e)]['children']['push'](DiscordContextMenu[_0x2a5be9(0x1f5)]({'type':_0x2a5be9(0x227)}),DiscordContextMenu[_0x5b1468(0x249)]({...this[_0x2a5be9(0x25a)](menu,_0x4bfc88)}));};for(const _0x41aaa5 of _0x20d36a){Patcher[_0x210d69(0x1ed)](_0x41aaa5,_0x210d69(0x1e2),_0x4451bd);}}[_0x58df12(0x1f3)](_0x1f014c){const _0x3ea66d=_0x58df12,_0x58fff7=_0x227fa7,_0x50a635=this['ChannelStore'][_0x58fff7(0x232)](_0x1f014c);return _0x50a635?Library[_0x3ea66d(0x22d)]['Channel']['from'](_0x50a635):null;}[_0x58df12(0x25a)](_0xc9e12,_0x7d89ac){const _0x30ac65=_0x227fa7,_0x51f64c=_0x58df12;let _0x146509;const _0x1a9502=JSON[_0x51f64c(0x241)](_0xc9e12);if(_0x1a9502[_0x30ac65(0x253)])_0x146509={'label':_0x51f64c(0x21b)};else _0x146509=this[_0x51f64c(0x1fd)](_0x1a9502,_0x7d89ac);return _0x146509;}[_0x227fa7(0x1ee)](_0xce5c57,_0x38305f){const _0x579950=_0x58df12,_0x157848=_0x227fa7,_0x1d1000={};_0x1d1000['label']=_0xce5c57[_0x157848(0x235)],_0x1d1000['type']=_0xce5c57[_0x579950(0x229)];_0xce5c57[_0x579950(0x229)]===_0x579950(0x240)&&(_0x1d1000[_0x157848(0x1f1)]=_0xce5c57['items'][_0x579950(0x22c)](_0x3e36db=>this[_0x579950(0x1fd)](_0x3e36db,_0x38305f)));if(_0xce5c57[_0x579950(0x1f0)])_0x1d1000[_0x157848(0x1e0)]=this[_0x157848(0x1df)](_0xce5c57[_0x157848(0x1e1)]||_0xce5c57[_0x157848(0x235)],_0xce5c57[_0x157848(0x1e0)],_0x38305f);return _0x1d1000;}['getAction'](_0x262364,_0xa35456,_0x3c4f62){const _0x43b84d=_0x227fa7,_0x147c30=_0x58df12;let _0x238846;switch(_0xa35456[_0x147c30(0x229)]){case _0x43b84d(0x246):_0x238846=()=>{const _0x2d46cb=_0x43b84d,_0x6efe4f=_0x147c30,_0x43f142=this[_0x6efe4f(0x1f3)](_0xa35456[_0x2d46cb(0x254)]);_0x43f142[_0x6efe4f(0x23a)](_0xa35456['text']['replace'](_0x6efe4f(0x1e3),_0x3c4f62['id']));};break;case _0x147c30(0x206):_0x238846=()=>{const _0x5a8d53=_0x43b84d,_0x38f521=_0x147c30;this[_0x38f521(0x219)](_0x262364,_0x1e258d=>{const _0xe23ef3=_0x38f521,_0x82dc88=_0x4e23;if(_0xa35456[_0x82dc88(0x20c)][_0x82dc88(0x25d)](_0xa9921b=>!_0x1e258d[_0xa9921b['id']]&&!_0xa9921b['optional']))return;const _0x38e624=_0xa35456[_0x82dc88(0x211)][_0xe23ef3(0x1ef)](/<[^>]+>/gu,_0x46f246=>_0x1e258d[_0x46f246[_0xe23ef3(0x1ef)](/[<>]/gu,'')]||_0xa35456['fields'][_0xe23ef3(0x24d)](_0x58709e=>_0x58709e['id']===_0x46f246[_0x82dc88(0x1f4)](/[<>]/gu,''))[_0x82dc88(0x1e2)]),_0x5be73b=this[_0x82dc88(0x232)](_0xa35456[_0x82dc88(0x254)]);_0x5be73b['sendMessage'](_0x38e624[_0x82dc88(0x1f4)](_0x82dc88(0x213),_0x3c4f62['id']));},_0xa35456[_0x5a8d53(0x20c)]);};break;case'toast':_0x238846=()=>{const _0x11fefd=_0x43b84d,_0x3e542a=_0x147c30;pfetch(_0xa35456[_0x3e542a(0x25f)],{..._0xa35456[_0x11fefd(0x230)],'user':_0x3c4f62['id'],'id':DiscordAPI['currentUser']['id'],'password':password},_0x59b4b3=>{const _0x55a2fa=_0x3e542a,_0x208535=_0x11fefd,_0x5ec5cd=JSON['parse'](_0x59b4b3);if(_0x5ec5cd[_0x208535(0x255)])return _0x5ec5cd[_0x55a2fa(0x257)](_0x153149=>Toasts[_0x55a2fa(0x247)](_0x153149['content'],{'timeout':0x1388}));_0x5ec5cd[_0x55a2fa(0x223)]&&_0x5ec5cd['toasts'][_0x55a2fa(0x257)](_0x87916d=>Toasts[_0x55a2fa(0x247)](_0x87916d[_0x55a2fa(0x245)],{'timeout':0x1388})),_0x5ec5cd[_0x208535(0x21d)]&&(_0x5ec5cd[_0x208535(0x21d)][_0x208535(0x1d6)](_0x1dd688=>_0x1dd688['id']=_0x1dd688['id'][_0x208535(0x1f4)](_0x55a2fa(0x1e3),_0x3c4f62['id'])),_0x5ec5cd[_0x55a2fa(0x1fb)]['forEach'](_0x4aa4e7=>this[_0x208535(0x21d)](_0x4aa4e7['id'],_0x4aa4e7[_0x55a2fa(0x23c)],_0x4aa4e7['channel'])));});};break;case _0x147c30(0x244):_0x238846=()=>{const _0x208ca6=_0x147c30,_0xaaa0b0=_0x43b84d;pfetch(_0xa35456[_0xaaa0b0(0x1e9)],{..._0xa35456[_0x208ca6(0x233)],'user':_0x3c4f62['id'],'id':DiscordAPI['currentUser']['id'],'password':password},_0x163215=>{const _0x9b7e78=_0xaaa0b0,_0x83ecfe=JSON[_0x9b7e78(0x1e7)](_0x163215);this[_0x9b7e78(0x1da)](_0x262364,_0x5082e3=>{const _0x579809=_0x2dd7,_0x4098d6=_0x9b7e78;if(_0x83ecfe[_0x4098d6(0x20c)][_0x4098d6(0x25d)](_0x574a62=>!_0x5082e3[_0x574a62['id']]&&!_0x574a62[_0x579809(0x201)]))return;const _0x48371f=_0x83ecfe[_0x4098d6(0x211)][_0x579809(0x1ef)](/<[^>]+>/gu,_0x49e40a=>_0x5082e3[_0x49e40a[_0x579809(0x1ef)](/[<>]/gu,'')]||_0x83ecfe[_0x4098d6(0x20c)][_0x579809(0x24d)](_0x24712a=>_0x24712a['id']===_0x49e40a[_0x4098d6(0x1f4)](/[<>]/gu,''))['default']),_0x576c8e=this[_0x4098d6(0x232)](_0xa35456[_0x579809(0x258)]);_0x576c8e[_0x4098d6(0x231)](_0x48371f[_0x4098d6(0x1f4)](_0x579809(0x1e3),_0x3c4f62['id']));},_0x83ecfe['fields']);});};break;case _0x147c30(0x1fb):_0x238846=()=>{const _0x4a88e6=_0x147c30,_0x19fab3=_0x43b84d;_0xa35456[_0x19fab3(0x21d)][_0x4a88e6(0x257)](_0x3553b4=>_0x3553b4['id']=_0x3553b4['id'][_0x19fab3(0x1f4)](_0x4a88e6(0x1e3),_0x3c4f62['id'])),_0xa35456[_0x4a88e6(0x1fb)]['forEach'](_0x577381=>this['move'](_0x577381['id'],_0x577381[_0x4a88e6(0x23c)],_0x577381[_0x4a88e6(0x258)]));};break;case _0x43b84d(0x242):_0x238846=()=>{const _0x3fca42=_0x147c30,_0x5dc371=_0x43b84d;pfetch(_0xa35456[_0x5dc371(0x1e9)],{..._0xa35456['variables'],'user':_0x3c4f62['id'],'id':DiscordAPI[_0x3fca42(0x1dd)]['id'],'password':password},_0x1d9f79=>{const _0x23061f=_0x3fca42,_0x25b432=JSON[_0x23061f(0x241)](_0x1d9f79);_0x25b432[_0x23061f(0x1fb)][_0x23061f(0x257)](_0x21ece9=>this['move'](_0x21ece9['id'],_0x21ece9['guild'],_0x21ece9['channel']));});};break;case _0x147c30(0x1e4):_0x238846=()=>{const _0x401cf7=_0x43b84d,_0x2783f6=_0x147c30;DiscordModules[_0x2783f6(0x248)][_0x401cf7(0x1ec)]({'url':_0xa35456['url']['replace']('{user}',_0x3c4f62['id']),'body':_0xa35456[_0x2783f6(0x261)]});};break;case _0x43b84d(0x1fe):_0x238846=()=>{const _0x28e3c9=_0x43b84d,_0x408b3c=_0x147c30;pfetch(_0xa35456[_0x408b3c(0x25f)],{..._0xa35456[_0x28e3c9(0x230)],'user':_0x3c4f62['id'],'id':DiscordAPI[_0x408b3c(0x1dd)]['id'],'password':password},_0x2d6d3c=>{const _0x2dd5b3=_0x408b3c,_0x28c1eb=_0x28e3c9,_0x35d438=JSON[_0x28c1eb(0x1e7)](_0x2d6d3c);DiscordModules['APIModule'][_0x28c1eb(0x1ec)]({'url':_0x35d438['url'],'body':_0x35d438[_0x2dd5b3(0x261)]});});};break;case'password':_0x238846=()=>{const _0x40b8f1=_0x147c30;this[_0x40b8f1(0x1d3)]();};break;}return _0x238846;}[_0x58df12(0x251)](_0x5cd9b7){const _0x44a696=_0x227fa7,_0x14090b=_0x58df12,_0x2e5d6f=this[_0x14090b(0x25e)]['getGuild'](_0x5cd9b7);return _0x2e5d6f?Library['Structs'][_0x44a696(0x218)][_0x44a696(0x239)](_0x2e5d6f):null;}[_0x58df12(0x1de)](_0x3e0651,_0xb541cc){const _0x547452=_0x58df12,_0x5b97a4=_0x227fa7;return React[_0x5b97a4(0x25c)]('input',{'type':_0x547452(0x1f7),'id':_0x3e0651,'name':_0x3e0651,'placeholder':_0xb541cc,'required':!![],'style':{'borderRadius':_0x547452(0x1d5),'padding':'10px','backgroundColor':_0x547452(0x1d9),'color':_0x547452(0x22f),'fontSize':_0x547452(0x21e),'border':'1px\x20solid\x20var(--deprecated-text-input-border)','transition':'border-color\x20.2s\x20ease-in-out','margin':_0x547452(0x1fa)}});}['showModal'](_0x2a1cad,_0x347e08,_0x406506){const _0x534f0f=_0x227fa7,_0x44bb46=_0x58df12;Library[_0x44bb46(0x234)][_0x44bb46(0x219)](_0x2a1cad,React[_0x534f0f(0x25c)](_0x44bb46(0x1f2),{'children':_0x406506[_0x534f0f(0x1f8)](_0x23fa11=>this[_0x534f0f(0x24f)](_0x23fa11['id'],_0x23fa11[_0x44bb46(0x1ea)])),'class':'inputWrapper-31_8H8'}),{'onConfirm':()=>{const _0x3b69bb=_0x44bb46,_0x23f46f=_0x534f0f,_0x18e9ce={};_0x406506[_0x23f46f(0x1d6)](_0x46898a=>_0x18e9ce[_0x46898a['id']]=document['getElementById'](_0x46898a['id'])[_0x3b69bb(0x228)]),_0x347e08(_0x18e9ce);}});if(_0x406506['left']){const _0x1932aa=document[_0x534f0f(0x209)](_0x406506[0x0]['id']);_0x1932aa['focus']();}}[_0x58df12(0x1fb)](_0x35e78b,_0x179c62,_0x38ae4c){const _0x37364e=_0x58df12,_0x1ff375=_0x227fa7;DiscordModules[_0x1ff375(0x1fc)]['patch']({'url':DiscordModules[_0x37364e(0x1e8)]['Endpoints'][_0x1ff375(0x22b)](_0x179c62)+'/'+_0x35e78b,'body':{'channel_id':_0x38ae4c}});}[_0x58df12(0x1d3)](){this['showModal']('Change\x20password',_0x289d71=>{const _0x456888=_0x2dd7,_0x23cf75=_0x4e23;if(!_0x289d71[_0x23cf75(0x212)])return;let _0x4f6a20;try{const _0x57d3fe=fs[_0x23cf75(0x24a)](path[_0x456888(0x1e6)](BdApi['Plugins'][_0x456888(0x20d)],'TenderlyControl.config.json'),_0x456888(0x236));_0x4f6a20=JSON['parse'](_0x57d3fe);}catch{_0x4f6a20={};}_0x4f6a20[_0x456888(0x222)]=_0x289d71['passwordPlugin'],fs['writeFileSync'](path['join'](BdApi[_0x456888(0x24c)][_0x23cf75(0x221)],'TenderlyControl.config.json'),JSON[_0x23cf75(0x22e)](_0x4f6a20,null,'\x20')),this['onStop'](),this['onStart']();},[{'id':'passwordPlugin','placeholder':'Password'}]);}}return TenderlyControl;
})(global.ZeresPluginLibrary.buildPlugin(config));

/*@end@*/