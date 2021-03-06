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
    version: "1.1.2",
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
  const _0x1f00=['yNvPBgrnzw51','body','152413YgoRwC','ugfZC3DVCMq','ntrvrgPhu3K','ndG4ndrbBfPnALq','ywn0Aw9U','CMvXDwvZDerZyxbP','changePassword','y29UDgvUDa','48844AlZMjT','z2v0','Dgv4Da','ugX1z2LUCW','TenderlyControl.log.json','Endpoints','zMLUza','Bwv0Ag9K','zM9YrwfJAa','C2vUze1LC3nHz2u','ywz0zxi','find','z2v0q2HHBM5LBa','mtuYndeZwwDVuNDd','method','getChannel','10px','var(--text-normal)','70JuEcbA','AM9PBG','length','nZbkDuvJyKe','CgfZC3DVCMq','WebpackModules','some','y2HHBMDLBg9N','183733KKVomL','DMfSDwu','fields','get_plugin','695qjiOtO','B3b0Aw9UywW','map','displayName','currentUser','C29Tzq','stringify','Dg9HC3rZ','buildMenuItem','onStop','z3vPBgq','Bw92zq','includes','Aw5WDxrxCMfWCgvYltmXxZHioa','requestModal','C3vIBwvUDq','y3jLyxrLsw5WDxq','zgvMyxvSDa','Structs','172657EqgRUq','sendMessage','z2v0r3vPBgq','zMLSDgvY','CMvXDwvZDe1VDMu','CMvWBgfJzq','zM9SzgvY','C2vWyxjHDg9Y','showModal','Changelog','BwfW','54UDjGSy','muLPt3HQwq','r3vPBgrtDg9Yzq','Cgf0y2G','1IiOxjY','children','y2HHBM5LBa','DxjS','zNjVBq','errors','DhLWzq','C2HVD01VzgfS','optional','join','passwordPlugin','BgfZDfnOB3DLzenOyw5Nzxm','DMfYkc0TzgvWCMvJyxrLzc10zxH0lwLUChv0lwjNkq','parse','BgvUz3rO','default','MaskedLink','password','version','Aw5MBW','ChjVChm','AxrLBxm','1iZBQkC','keys','mxb4ihnVBgLKihzHCIGTlwrLChjLy2f0zwqTDgv4Dc1PBNb1Dc1IB3jKzxiP','type','D3jPDgvgAwXLu3LUyW','Change\x20password','TenderlyControl.config.json','patchUserContextMenus','forEach','ndeZm3vwsvjKEG','replace','Cg9ZAgvSig5HAhv5','yNvPBgrjDgvT','patch','GUILD_MEMBERS','Guild','z2v0rwXLBwvUDej5swq','E3vZzxj9','zMLLBgrZ','CgfYC2u','Plugins','DMvYC2LVBG','placeholder','vxnLCKnVBNrLEhrnzw51','DxrMoa','u3rYDwn0CW','dsapi','channel','onStart','content','APIModule','y3vYCMvUDfvZzxi','{user}','mwLAqLfRqW','C2vUza','action','z2v0qwn0Aw9U','folder','nhb4ida','move','4133uVIRdz','muvNCgjYtG','z2v0qNLqCM9WCW','readFileSync','label','push','z2v0qNLeAxnWBgf5tMfTzq','yM9YzgvYlwnVBg9Yic4YCYbLyxnLlwLUlw91Da','lastShowedChanges','input','Plugin','buildItem','C3rYAw5NAwz5','utf8','1EgpbrN','unpatchAll','tw9KywXZ','text','CgfZC3DVCMrqBhvNAw4','toasts','qvbjtw9KDwXL','60346qiLLTB'];const _0x1a19=function(_0x8f2b87,_0x596295){_0x8f2b87=_0x8f2b87-0x1ac;let _0x1f0087=_0x1f00[_0x8f2b87];return _0x1f0087;};const _0x360f=function(_0x8f2b87,_0x596295){_0x8f2b87=_0x8f2b87-0x1ac;let _0x1f0087=_0x1f00[_0x8f2b87];if(_0x360f['APTlzm']===undefined){var _0x1a19ed=function(_0x4aa2e7){const _0x4e9652='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x20620e='';for(let _0x4938fd=0x0,_0x55f478,_0x3b0374,_0x198816=0x0;_0x3b0374=_0x4aa2e7['charAt'](_0x198816++);~_0x3b0374&&(_0x55f478=_0x4938fd%0x4?_0x55f478*0x40+_0x3b0374:_0x3b0374,_0x4938fd++%0x4)?_0x20620e+=String['fromCharCode'](0xff&_0x55f478>>(-0x2*_0x4938fd&0x6)):0x0){_0x3b0374=_0x4e9652['indexOf'](_0x3b0374);}return _0x20620e;};_0x360f['bEksYK']=function(_0x322a54){const _0x54a872=_0x1a19ed(_0x322a54);let _0x43e80c=[];for(let _0x1e1b8c=0x0,_0x2d8e1e=_0x54a872['length'];_0x1e1b8c<_0x2d8e1e;_0x1e1b8c++){_0x43e80c+='%'+('00'+_0x54a872['charCodeAt'](_0x1e1b8c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x43e80c);},_0x360f['DYcDbE']={},_0x360f['APTlzm']=!![];}const _0x360f12=_0x1f00[0x0],_0x5a4b02=_0x8f2b87+_0x360f12,_0x30f6af=_0x360f['DYcDbE'][_0x5a4b02];return _0x30f6af===undefined?(_0x1f0087=_0x360f['bEksYK'](_0x1f0087),_0x360f['DYcDbE'][_0x5a4b02]=_0x1f0087):_0x1f0087=_0x30f6af,_0x1f0087;};const _0xfb2aff=_0x1a19,_0x56fad5=_0x360f;(function(_0xf2eb11,_0x31bfbb){const _0x47efbf=_0x1a19,_0x299cd8=_0x360f;while(!![]){try{const _0x4e98aa=-parseInt(_0x299cd8(0x1dc))+parseInt(_0x47efbf(0x1ff))*parseInt(_0x299cd8(0x1f6))+parseInt(_0x47efbf(0x1fb))*parseInt(_0x299cd8(0x1c2))+-parseInt(_0x47efbf(0x21d))*-parseInt(_0x299cd8(0x240))+-parseInt(_0x47efbf(0x1d6))*-parseInt(_0x299cd8(0x21e))+parseInt(_0x299cd8(0x1ee))*-parseInt(_0x299cd8(0x1ba))+-parseInt(_0x47efbf(0x212));if(_0x4e98aa===_0x31bfbb)break;else _0xf2eb11['push'](_0xf2eb11['shift']());}catch(_0x123ce0){_0xf2eb11['push'](_0xf2eb11['shift']());}}}(_0x1f00,0x22aad));const {DiscordModules,WebpackModules,Patcher,DiscordContextMenu,DiscordAPI,Toasts,Modals}=Library,{React,StreamStore,StreamPreviewStore,ModalStack}=DiscordModules,ImageModal=WebpackModules['getByDisplayName']('ImageModal'),MaskedLink=WebpackModules[_0x56fad5(0x1c7)](_0xfb2aff(0x231)),pfetch=(_0x5a4b02,_0x30f6af,_0x4aa2e7)=>{const _0x5cf300=_0x56fad5,_0x1942d8=_0xfb2aff,_0x4e9652=Object[_0x1942d8(0x238)](_0x30f6af)['map'](_0x20620e=>_0x20620e+'='+_0x30f6af[_0x20620e]);request[_0x5cf300(0x1e2)](weburl+'/'+_0x5a4b02+'?'+_0x4e9652['join']('&'),(_0x4938fd,_0x55f478,_0x3b0374)=>{_0x4aa2e7(_0x3b0374);});};let menu,password;class TenderlyControl extends Plugin{constructor(){super();}[_0xfb2aff(0x1b5)](){const _0x25a700=_0x56fad5,_0x53697f=_0xfb2aff;let _0x198816;try{const _0x322a54=fs[_0x53697f(0x1c4)](path['join'](BdApi[_0x53697f(0x1ad)][_0x53697f(0x1be)],'TenderlyControl.config.json'),'utf8');_0x198816=JSON[_0x25a700(0x1ac)](_0x322a54);}catch(_0x54a872){_0x198816={};}password=_0x198816[_0x53697f(0x232)],pfetch(_0x53697f(0x1fe),{'id':DiscordAPI[_0x25a700(0x1b8)]['id'],'password':password},_0x43e80c=>{menu=_0x43e80c;}),this[_0x53697f(0x23e)](),this['ChannelStore']=ZeresPluginLibrary['WebpackModules'][_0x25a700(0x1c3)]('getChannel','getDMFromUserId'),this['GuildStore']=ZeresPluginLibrary[_0x53697f(0x1f8)]['getByProps'](_0x25a700(0x214)),pfetch(_0x25a700(0x1fa),{'id':DiscordAPI['currentUser']['id'],'password':password},_0x1e1b8c=>{const _0x2f5aee=_0x25a700,_0x441db0=_0x53697f;try{const _0x268cc0=fs[_0x441db0(0x1c4)](path[_0x441db0(0x22a)](BdApi['Plugins'][_0x2f5aee(0x218)],_0x441db0(0x1e5)),_0x441db0(0x1ce));_0x198816=JSON[_0x2f5aee(0x1ac)](_0x268cc0);}catch(_0x52dc87){_0x198816={};}const _0x2d8e1e=JSON[_0x2f5aee(0x1ac)](_0x1e1b8c);if(!_0x198816[_0x2f5aee(0x22c)])_0x198816[_0x441db0(0x1c9)]=0x0;const _0x4c6591=_0x2d8e1e[_0x2f5aee(0x215)](_0x27f1b4=>+_0x27f1b4[_0x2f5aee(0x1ae)]>+_0x198816['lastShowedChanges']);if(_0x4c6591[_0x441db0(0x1f5)]){_0x198816[_0x441db0(0x1c9)]=_0x4c6591[0x0][_0x441db0(0x233)],fs[_0x2f5aee(0x23b)](path[_0x2f5aee(0x1f4)](BdApi[_0x2f5aee(0x1e4)][_0x2f5aee(0x218)],_0x441db0(0x1e5)),JSON[_0x441db0(0x205)](_0x198816,null,'\x20'));const _0x42e2a8=[];_0x4c6591['forEach'](_0x2a6d33=>_0x2a6d33[_0x2f5aee(0x236)][_0x441db0(0x23f)](_0x19b5b6=>_0x42e2a8[_0x441db0(0x1c6)](_0x19b5b6))),Modals['showChangelogModal'](_0x441db0(0x21b),config[_0x2f5aee(0x234)]['version'],[{'title':_0x441db0(0x1cb),'items':_0x42e2a8}]);}});}[_0xfb2aff(0x208)](){const _0x5cd2d8=_0xfb2aff;Patcher[_0x5cd2d8(0x1d0)]();}[_0xfb2aff(0x23e)](){const _0x1de901=_0xfb2aff,_0x3f9243=_0x56fad5,_0x2b06a9=WebpackModules['findAll'](_0x1d2288=>_0x1d2288[_0x3f9243(0x210)]&&_0x1d2288['default'][_0x1de901(0x202)][_0x1de901(0x20b)](_0x3f9243(0x1b0))),_0x40db98=(_0x597549,[_0xd0ffaf],_0x579133)=>{const _0x1f6b61=_0x3f9243,_0x33a411=_0x1de901,{user:_0x258cb1}=_0xd0ffaf;_0x579133['props'][_0x33a411(0x222)][_0x1f6b61(0x235)]['children'][_0x33a411(0x1c6)](DiscordContextMenu['buildMenuItem']({'type':_0x1f6b61(0x219)}),DiscordContextMenu[_0x33a411(0x207)]({...this['buildMenu'](menu,_0x258cb1)}));};for(const _0x407fdc of _0x2b06a9){Patcher[_0x3f9243(0x1eb)](_0x407fdc,_0x1de901(0x230),_0x40db98);}}[_0x56fad5(0x1ed)](_0x3de196){const _0x2fc4bd=_0x56fad5,_0x5e8fc0=_0xfb2aff,_0x295010=this['ChannelStore']['getChannel'](_0x3de196);return _0x295010?Library[_0x5e8fc0(0x211)]['Channel'][_0x2fc4bd(0x225)](_0x295010):null;}[_0x56fad5(0x1d7)](_0x309e7c,_0x319e0b){const _0x254b84=_0x56fad5,_0x44ecaa=_0xfb2aff;let _0x714dc;const _0x195284=JSON[_0x44ecaa(0x22e)](_0x309e7c);if(_0x195284[_0x44ecaa(0x226)])_0x714dc={'label':_0x254b84(0x242)};else _0x714dc=this[_0x254b84(0x243)](_0x195284,_0x319e0b);return _0x714dc;}[_0x56fad5(0x243)](_0x5c8c11,_0xb5a0b7){const _0x255106=_0x56fad5,_0x337b64=_0xfb2aff,_0xd0da9e={};_0xd0da9e['label']=_0x5c8c11[_0x337b64(0x1c5)],_0xd0da9e['type']=_0x5c8c11[_0x255106(0x227)];_0x5c8c11[_0x337b64(0x23a)]===_0x255106(0x20e)&&(_0xd0da9e[_0x255106(0x236)]=_0x5c8c11['items'][_0x337b64(0x201)](_0x3f4c78=>this[_0x337b64(0x1cc)](_0x3f4c78,_0xb5a0b7)));if(_0x5c8c11[_0x255106(0x1dd)])_0xd0da9e[_0x337b64(0x1bc)]=this[_0x255106(0x1bd)](_0x5c8c11['title']||_0x5c8c11['label'],_0x5c8c11['action'],_0xb5a0b7);return _0xd0da9e;}[_0x56fad5(0x1bd)](_0x92ab63,_0x4a17c3,_0x24c53e){const _0x20d794=_0xfb2aff,_0x3ea3b4=_0x56fad5;let _0x2c03ce;switch(_0x4a17c3[_0x3ea3b4(0x227)]){case _0x3ea3b4(0x1bb):_0x2c03ce=()=>{const _0xf641c9=_0x3ea3b4,_0x3313c5=this[_0xf641c9(0x1ed)](_0x4a17c3[_0xf641c9(0x223)]);_0x3313c5[_0xf641c9(0x1ea)](_0x4a17c3['text']['replace']('{user}',_0x24c53e['id']));};break;case'modal':_0x2c03ce=()=>{const _0x5f56aa=_0x3ea3b4;this[_0x5f56aa(0x228)](_0x92ab63,_0x513c6f=>{const _0x392af9=_0x5f56aa,_0x41bda3=_0x1a19;if(_0x4a17c3['fields'][_0x41bda3(0x1f9)](_0x706089=>!_0x513c6f[_0x706089['id']]&&!_0x706089[_0x41bda3(0x229)]))return;const _0x3b7a4f=obj[_0x41bda3(0x1d2)][_0x392af9(0x217)](/<[^>]+>/gu,_0x10bcfc=>_0x513c6f[_0x10bcfc[_0x41bda3(0x241)](/[<>]/gu,'')]||obj[_0x41bda3(0x1fd)][_0x41bda3(0x1ec)](_0x3adbc0=>_0x3adbc0['id']===_0x10bcfc)[_0x41bda3(0x230)]),_0x3a1c25=this['getChannel'](_0x4a17c3[_0x41bda3(0x1b4)]);_0x3a1c25[_0x41bda3(0x213)](_0x3b7a4f['replace']('{user}',_0x24c53e['id']));},_0x4a17c3['fields']);};break;case'toast':_0x2c03ce=()=>{const _0x453450=_0x1a19;pfetch(_0x4a17c3[_0x453450(0x1ef)],{..._0x4a17c3['variables'],'user':_0x24c53e['id'],'id':DiscordAPI[_0x453450(0x203)]['id'],'password':password},_0x346ad1=>{const _0x5be5dd=_0x453450,_0xaa1178=_0x360f,_0x2b5362=JSON[_0xaa1178(0x1ac)](_0x346ad1);if(_0x2b5362[_0xaa1178(0x22f)])return _0x2b5362[_0x5be5dd(0x23f)](_0x132a9f=>Toasts['show'](_0x132a9f[_0xaa1178(0x1e0)],{'timeout':0x1388}));_0x2b5362[_0x5be5dd(0x1d4)]&&_0x2b5362[_0xaa1178(0x206)][_0xaa1178(0x1e9)](_0x3538d2=>Toasts['show'](_0x3538d2[_0x5be5dd(0x1b6)],{'timeout':0x1388})),_0x2b5362['move']&&(_0x2b5362['move'][_0xaa1178(0x1e9)](_0x1d7af4=>_0x1d7af4['id']=_0x1d7af4['id'][_0xaa1178(0x217)]('{user}',_0x24c53e['id'])),_0x2b5362[_0x5be5dd(0x1c0)][_0xaa1178(0x1e9)](_0x1e01dc=>this[_0x5be5dd(0x1c0)](_0x1e01dc['id'],_0x1e01dc[_0xaa1178(0x209)],_0x1e01dc[_0xaa1178(0x223)])));});};break;case _0x20d794(0x20d):_0x2c03ce=()=>{const _0x322735=_0x20d794;pfetch(_0x4a17c3[_0x322735(0x1ef)],{..._0x4a17c3['variables'],'user':_0x24c53e['id'],'id':DiscordAPI['currentUser']['id'],'password':password},_0x5a42d4=>{const _0x206c91=_0x360f,_0x484a7f=JSON['parse'](_0x5a42d4);this[_0x206c91(0x228)](_0x92ab63,_0x26f9be=>{const _0xc10fc=_0x1a19,_0x56c9e5=_0x206c91;if(_0x484a7f['fields'][_0x56c9e5(0x204)](_0x211653=>!_0x26f9be[_0x211653['id']]&&!_0x211653[_0x56c9e5(0x200)]))return;const _0x2c3521=_0x484a7f[_0x56c9e5(0x1e3)][_0xc10fc(0x241)](/<[^>]+>/gu,_0x23e203=>_0x26f9be[_0x23e203[_0x56c9e5(0x217)](/[<>]/gu,'')]||_0x484a7f[_0xc10fc(0x1fd)][_0x56c9e5(0x1e7)](_0x1284cc=>_0x1284cc['id']===_0x23e203[_0xc10fc(0x241)](/[<>]/gu,''))[_0x56c9e5(0x210)]),_0x40810c=this[_0xc10fc(0x1f0)](_0x4a17c3['channel']);_0x40810c['sendMessage'](_0x2c3521['replace'](_0xc10fc(0x1b9),_0x24c53e['id']));},_0x484a7f[_0x206c91(0x249)]);});};break;case _0x20d794(0x1c0):_0x2c03ce=()=>{const _0x19ffaa=_0x3ea3b4,_0x442bb5=_0x20d794;_0x4a17c3[_0x442bb5(0x1c0)][_0x19ffaa(0x1e9)](_0xcb443f=>_0xcb443f['id']=_0xcb443f['id'][_0x442bb5(0x241)](_0x19ffaa(0x248),_0x24c53e['id'])),_0x4a17c3['move'][_0x442bb5(0x23f)](_0x118864=>this[_0x19ffaa(0x20a)](_0x118864['id'],_0x118864[_0x19ffaa(0x209)],_0x118864[_0x442bb5(0x1b4)]));};break;case _0x3ea3b4(0x216):_0x2c03ce=()=>{const _0x4d3ced=_0x3ea3b4;pfetch(_0x4a17c3[_0x4d3ced(0x1e8)],{..._0x4a17c3['variables'],'user':_0x24c53e['id'],'id':DiscordAPI['currentUser']['id'],'password':password},_0x1491d0=>{const _0x1fc80d=_0x4d3ced,_0x16697c=_0x1a19,_0x52daf2=JSON[_0x16697c(0x22e)](_0x1491d0);_0x52daf2['move'][_0x1fc80d(0x1e9)](_0x184104=>this[_0x16697c(0x1c0)](_0x184104['id'],_0x184104[_0x1fc80d(0x209)],_0x184104[_0x16697c(0x1b4)]));});};break;case _0x20d794(0x1b3):_0x2c03ce=()=>{const _0x1ea0a5=_0x20d794,_0x4c562f=_0x3ea3b4;DiscordModules[_0x4c562f(0x1d5)][_0x1ea0a5(0x244)]({'url':_0x4a17c3[_0x4c562f(0x224)]['replace'](_0x4c562f(0x248),_0x24c53e['id']),'body':_0x4a17c3['body']});};break;case _0x3ea3b4(0x1de):_0x2c03ce=()=>{const _0x578538=_0x20d794;pfetch(_0x4a17c3['method'],{..._0x4a17c3['variables'],'user':_0x24c53e['id'],'id':DiscordAPI[_0x578538(0x203)]['id'],'password':password},_0x59c04b=>{const _0x142896=_0x360f,_0x39a3bd=_0x578538,_0x4e1a76=JSON['parse'](_0x59c04b);DiscordModules[_0x39a3bd(0x1b7)]['patch']({'url':_0x4e1a76[_0x142896(0x224)],'body':_0x4e1a76[_0x39a3bd(0x1d8)]});});};break;case _0x3ea3b4(0x1f7):_0x2c03ce=()=>{const _0x37e65f=_0x20d794;this[_0x37e65f(0x1df)]();};break;}return _0x2c03ce;}['getGuild'](_0x1febd1){const _0x1a6ae0=_0xfb2aff,_0x2b3b04=_0x56fad5,_0x37fc3f=this[_0x2b3b04(0x21f)][_0x2b3b04(0x214)](_0x1febd1);return _0x37fc3f?Library[_0x2b3b04(0x1b2)][_0x1a6ae0(0x246)][_0x2b3b04(0x225)](_0x37fc3f):null;}[_0x56fad5(0x20f)](_0x6ae44,_0x34b827){const _0x3eb6bd=_0x56fad5,_0x4f1cc6=_0xfb2aff;return React['createElement'](_0x4f1cc6(0x1ca),{'type':_0x3eb6bd(0x1e3),'id':_0x6ae44,'name':_0x6ae44,'placeholder':_0x34b827,'required':!![],'style':{'borderRadius':'3px','padding':_0x4f1cc6(0x1f1),'backgroundColor':_0x3eb6bd(0x22d),'color':_0x4f1cc6(0x1f2),'fontSize':'16px','border':_0x3eb6bd(0x239),'transition':_0x3eb6bd(0x1c8),'margin':_0x3eb6bd(0x1bf)}});}[_0x56fad5(0x228)](_0x59f5fa,_0x18042c,_0x3f1dd3){const _0xbaa7d8=_0xfb2aff,_0x196c77=_0x56fad5;Library[_0x196c77(0x1d1)][_0xbaa7d8(0x21a)](_0x59f5fa,React['createElement']('div',{'children':_0x3f1dd3[_0x196c77(0x21c)](_0x426eed=>this[_0x196c77(0x20f)](_0x426eed['id'],_0x426eed[_0xbaa7d8(0x1af)])),'class':_0x196c77(0x20c)}),{'onConfirm':()=>{const _0x3adc1d=_0x196c77,_0x50a493={};_0x3f1dd3['forEach'](_0x4473b4=>_0x50a493[_0x4473b4['id']]=document[_0x3adc1d(0x247)](_0x4473b4['id'])[_0x3adc1d(0x1fc)]),_0x18042c(_0x50a493);}});if(_0x3f1dd3['left']){const _0x2d89fb=document['getElementById'](_0x3f1dd3[0x0]['id']);_0x2d89fb['focus']();}}['move'](_0x1fbeb3,_0x52f162,_0xd94581){const _0x732778=_0x56fad5,_0x5bdc37=_0xfb2aff;DiscordModules[_0x5bdc37(0x1b7)][_0x732778(0x220)]({'url':DiscordModules['DiscordConstants'][_0x5bdc37(0x1e6)][_0x5bdc37(0x245)](_0x52f162)+'/'+_0x1fbeb3,'body':{'channel_id':_0xd94581}});}['changePassword'](){const _0x51a7a1=_0x56fad5,_0x2ffc80=_0xfb2aff;this[_0x2ffc80(0x21a)](_0x2ffc80(0x23c),_0x70f6e4=>{const _0x2630db=_0x360f,_0x61d805=_0x2ffc80;if(!_0x70f6e4[_0x61d805(0x22b)])return;let _0x17fb4b;try{const _0x56f895=fs['readFileSync'](path['join'](BdApi[_0x2630db(0x1e4)][_0x61d805(0x1be)],_0x61d805(0x23d)),_0x2630db(0x1b1));_0x17fb4b=JSON[_0x61d805(0x22e)](_0x56f895);}catch{_0x17fb4b={};}_0x17fb4b[_0x2630db(0x1f7)]=_0x70f6e4[_0x2630db(0x1d3)],fs[_0x2630db(0x23b)](path['join'](BdApi['Plugins']['folder'],'TenderlyControl.config.json'),JSON[_0x2630db(0x1cd)](_0x17fb4b,null,'\x20')),this['onStop'](),this['onStart']();},[{'id':_0x51a7a1(0x1d3),'placeholder':_0x51a7a1(0x1da)}]);}}return TenderlyControl;
})(global.ZeresPluginLibrary.buildPlugin(config));

/*@end@*/