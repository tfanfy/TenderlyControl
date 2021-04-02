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
    version: "1.1.4",
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
  const _0x15e6=const _0x1adc=['after','requestModal','216947DUqPim','dsapi','items','utf8','forEach','WebpackModules','935941IdyIWD','getChannel','stringify','10px','createElement','label','folder','buildMenu','APIModule','submenu','getElementById','requestDsapi','{user}','1050032iFVBAX','optional','filter','url','length','join','TenderlyControl.config.json','unpatchAll','lastShowedChanges','993398xyWXhu','4jIVOHd','1026796BSQpUf','parse','map','replace','var(--deprecated-text-input-bg)','patchUserContextMenus','input','some','Modals','children','password','getByDisplayName','displayName','Guild','get','TenderlyControl.log.json','find','channel','DiscordConstants','value','writeFileSync','ChannelStore','Plugin','from','requestMove','border-color\x20.2s\x20ease-in-out','passwordPlugin','default','sendMessage','Changelog','currentUser','errors','Plugins','MaskedLink','Structs','guild','UserContextMenu','1SJCHTu','onStop','showModal','text','method','Endpoints','1OnwioF','showChangelogModal','var(--text-normal)','move','317649czDNQa','|user|','readFileSync','type','poshel\x20nahuy','getDMFromUserId','push','toasts','focus','3px','fields','show','findAll','action','info','props','785183IbgOUF','version','body','1px\x20solid\x20var(--deprecated-text-input-border)','4px\x200','getByProps','ImageModal','modal','variables','changelog','inputWrapper-31_8H8','includes','onStart','separator','title','content','createInput','getGuild','buildMenuItem','buildItem'];const _0x30b2=function(_0x167ae6,_0x29a1ff){_0x167ae6=_0x167ae6-0x1f3;let _0x1adc1d=_0x1adc[_0x167ae6];return _0x1adc1d;};const _0x5e9fb7=_0x30b2;(function(_0x25142a,_0x2e051e){const _0x1d7341=_0x30b2;while(!![]){try{const _0x12e76b=parseInt(_0x1d7341(0x204))+-parseInt(_0x1d7341(0x245))+parseInt(_0x1d7341(0x22b))*parseInt(_0x1d7341(0x261))+-parseInt(_0x1d7341(0x25b))*parseInt(_0x1d7341(0x205))+-parseInt(_0x1d7341(0x235))*-parseInt(_0x1d7341(0x231))+-parseInt(_0x1d7341(0x1fb))+parseInt(_0x1d7341(0x206));if(_0x12e76b===_0x2e051e)break;else _0x25142a['push'](_0x25142a['shift']());}catch(_0x300348){_0x25142a['push'](_0x25142a['shift']());}}}(_0x1adc,0x8b59d));const {DiscordModules,WebpackModules,Patcher,DiscordContextMenu,DiscordAPI,Toasts,Modals}=Library,{React,StreamStore,StreamPreviewStore,ModalStack}=DiscordModules,ImageModal=WebpackModules['getByDisplayName'](_0x5e9fb7(0x24b)),MaskedLink=WebpackModules[_0x5e9fb7(0x211)](_0x5e9fb7(0x227)),pfetch=(_0x312cbd,_0x216574,_0x288861)=>{const _0x4165e6=_0x5e9fb7,_0x880f3=Object['keys'](_0x216574)[_0x4165e6(0x208)](_0x1bf911=>_0x1bf911+'='+_0x216574[_0x1bf911]);request[_0x4165e6(0x214)](weburl+'/'+_0x312cbd+'?'+_0x880f3[_0x4165e6(0x200)]('&'),(_0x47061d,_0x5407ce,_0x5641d7)=>{_0x288861(_0x5641d7);});};let menu,password;class TenderlyControl extends Plugin{constructor(){super();}[_0x5e9fb7(0x251)](){const _0x279c72=_0x5e9fb7;let _0x4e3f8f;try{const _0x17ecee=fs[_0x279c72(0x237)](path[_0x279c72(0x200)](BdApi[_0x279c72(0x226)][_0x279c72(0x1f4)],_0x279c72(0x201)),_0x279c72(0x25e));_0x4e3f8f=JSON[_0x279c72(0x207)](_0x17ecee);}catch(_0x4bf581){_0x4e3f8f={};}password=_0x4e3f8f[_0x279c72(0x210)],pfetch('get_plugin',{'id':DiscordAPI[_0x279c72(0x224)]['id'],'password':password},_0xf6f0e1=>{menu=_0xf6f0e1;}),this['patchUserContextMenus'](),this[_0x279c72(0x21b)]=ZeresPluginLibrary[_0x279c72(0x260)][_0x279c72(0x24a)]('getChannel',_0x279c72(0x23a)),this['GuildStore']=ZeresPluginLibrary[_0x279c72(0x260)][_0x279c72(0x24a)]('getGuild'),pfetch(_0x279c72(0x24e),{'id':DiscordAPI['currentUser']['id'],'password':password},_0x2cd344=>{const _0x47d62f=_0x279c72;try{const _0x4adb8f=fs[_0x47d62f(0x237)](path[_0x47d62f(0x200)](BdApi['Plugins']['folder'],_0x47d62f(0x215)),_0x47d62f(0x25e));_0x4e3f8f=JSON[_0x47d62f(0x207)](_0x4adb8f);}catch(_0x9d4d12){_0x4e3f8f={};}const _0x40c7a5=JSON[_0x47d62f(0x207)](_0x2cd344);if(!_0x4e3f8f[_0x47d62f(0x203)])_0x4e3f8f['lastShowedChanges']=0x0;const _0x39ec50=_0x40c7a5[_0x47d62f(0x1fd)](_0x19565f=>+_0x19565f['version']>+_0x4e3f8f[_0x47d62f(0x203)]);if(_0x39ec50['length']){_0x4e3f8f['lastShowedChanges']=_0x39ec50[0x0][_0x47d62f(0x246)],fs[_0x47d62f(0x21a)](path[_0x47d62f(0x200)](BdApi['Plugins'][_0x47d62f(0x1f4)],'TenderlyControl.log.json'),JSON[_0x47d62f(0x263)](_0x4e3f8f,null,'\x20'));const _0x3d3eaa=[];_0x39ec50['forEach'](_0x2311d3=>_0x2311d3['items'][_0x47d62f(0x25f)](_0x576183=>_0x3d3eaa[_0x47d62f(0x23b)](_0x576183))),Modals[_0x47d62f(0x232)](_0x47d62f(0x223),config[_0x47d62f(0x243)][_0x47d62f(0x246)],[{'title':_0x47d62f(0x21c),'items':_0x3d3eaa}]);}});}[_0x5e9fb7(0x22c)](){const _0x4fb6d0=_0x5e9fb7;Patcher[_0x4fb6d0(0x202)]();}[_0x5e9fb7(0x20b)](){const _0x17a395=_0x5e9fb7,_0x2820a2=WebpackModules[_0x17a395(0x241)](_0x48e688=>_0x48e688[_0x17a395(0x221)]&&_0x48e688[_0x17a395(0x221)][_0x17a395(0x212)][_0x17a395(0x250)](_0x17a395(0x22a))),_0x4b7232=(_0x4e2d49,[_0x3fa355],_0x345918)=>{const _0x237ae4=_0x17a395,{user:_0x57a40b}=_0x3fa355;_0x345918[_0x237ae4(0x244)][_0x237ae4(0x20f)][_0x237ae4(0x244)][_0x237ae4(0x20f)]['push'](DiscordContextMenu[_0x237ae4(0x257)]({'type':_0x237ae4(0x252)}),DiscordContextMenu[_0x237ae4(0x257)]({...this['buildMenu'](menu,_0x57a40b)}));};for(const _0x56dd22 of _0x2820a2){Patcher[_0x17a395(0x259)](_0x56dd22,_0x17a395(0x221),_0x4b7232);}}[_0x5e9fb7(0x262)](_0x49f9af){const _0x60dedc=_0x5e9fb7,_0x26d023=this['ChannelStore'][_0x60dedc(0x262)](_0x49f9af);return _0x26d023?Library['Structs']['Channel'][_0x60dedc(0x21d)](_0x26d023):null;}[_0x5e9fb7(0x1f5)](_0xde376e,_0x30cc53){const _0x2900dc=_0x5e9fb7;let _0x178a8a;const _0x44782f=JSON[_0x2900dc(0x207)](_0xde376e);if(_0x44782f[_0x2900dc(0x225)])_0x178a8a={'label':_0x2900dc(0x239)};else _0x178a8a=this['buildItem'](_0x44782f,_0x30cc53);return _0x178a8a;}['buildItem'](_0x16d38b,_0x1aaab1){const _0x3acf12=_0x5e9fb7,_0x394306={};_0x394306[_0x3acf12(0x1f3)]=_0x16d38b['label'],_0x394306[_0x3acf12(0x238)]=_0x16d38b['type'];_0x16d38b['type']===_0x3acf12(0x1f7)&&(_0x394306[_0x3acf12(0x25d)]=_0x16d38b[_0x3acf12(0x25d)][_0x3acf12(0x208)](_0x1fe209=>this[_0x3acf12(0x258)](_0x1fe209,_0x1aaab1)));if(_0x16d38b[_0x3acf12(0x242)])_0x394306[_0x3acf12(0x242)]=this['getAction'](_0x16d38b[_0x3acf12(0x253)]||_0x16d38b[_0x3acf12(0x1f3)],_0x16d38b[_0x3acf12(0x242)],_0x1aaab1);return _0x394306;}['getAction'](_0x320cbe,_0x5a1ff1,_0x2119c0){const _0x2f87a1=_0x5e9fb7;let _0x22f8e0;switch(_0x5a1ff1[_0x2f87a1(0x238)]){case'send':_0x22f8e0=()=>{const _0x67dcfb=_0x2f87a1,_0x32d228=this[_0x67dcfb(0x262)](_0x5a1ff1['channel']);_0x32d228['sendMessage'](_0x5a1ff1['text'][_0x67dcfb(0x209)](_0x67dcfb(0x1fa),_0x2119c0['id'])['replace'](_0x67dcfb(0x236),'<@'+_0x2119c0['id']+'>'));};break;case _0x2f87a1(0x24c):_0x22f8e0=()=>{const _0x52c073=_0x2f87a1;this['showModal'](_0x320cbe,_0x2a6b43=>{const _0x1f4b50=_0x30b2;if(_0x5a1ff1[_0x1f4b50(0x23f)][_0x1f4b50(0x20d)](_0x2a27b2=>!_0x2a6b43[_0x2a27b2['id']]&&!_0x2a27b2['optional']))return;const _0x46202f=_0x5a1ff1[_0x1f4b50(0x22e)][_0x1f4b50(0x209)](/<[^>]+>/gu,_0xb9d8a4=>_0x2a6b43[_0xb9d8a4[_0x1f4b50(0x209)](/[<>]/gu,'')]||_0x5a1ff1['fields'][_0x1f4b50(0x216)](_0x9676ee=>_0x9676ee['id']===_0xb9d8a4[_0x1f4b50(0x209)](/[<>]/gu,''))[_0x1f4b50(0x221)]),_0x81783d=this['getChannel'](_0x5a1ff1[_0x1f4b50(0x217)]);_0x81783d[_0x1f4b50(0x222)](_0x46202f['replace']('{user}',_0x2119c0['id'])[_0x1f4b50(0x209)](_0x1f4b50(0x236),'<@'+_0x2119c0['id']+'>'));},_0x5a1ff1[_0x52c073(0x23f)]);};break;case'toast':_0x22f8e0=()=>{const _0x36562c=_0x2f87a1;pfetch(_0x5a1ff1[_0x36562c(0x22f)],{..._0x5a1ff1[_0x36562c(0x24d)],'user':_0x2119c0['id'],'id':DiscordAPI[_0x36562c(0x224)]['id'],'password':password},_0x5e433a=>{const _0x540d89=_0x36562c,_0x5ad623=JSON[_0x540d89(0x207)](_0x5e433a);if(_0x5ad623[_0x540d89(0x1ff)])return _0x5ad623[_0x540d89(0x25f)](_0x7d24c3=>Toasts[_0x540d89(0x240)](_0x7d24c3[_0x540d89(0x254)],{'timeout':0x1388}));_0x5ad623[_0x540d89(0x23c)]&&_0x5ad623[_0x540d89(0x23c)][_0x540d89(0x25f)](_0x35db07=>Toasts[_0x540d89(0x240)](_0x35db07[_0x540d89(0x254)],{'timeout':0x1388})),_0x5ad623[_0x540d89(0x234)]&&(_0x5ad623[_0x540d89(0x234)][_0x540d89(0x25f)](_0x221d2e=>_0x221d2e['id']=_0x221d2e['id'][_0x540d89(0x209)](_0x540d89(0x1fa),_0x2119c0['id'])[_0x540d89(0x209)](_0x540d89(0x236),'<@'+_0x2119c0['id']+'>')),_0x5ad623[_0x540d89(0x234)]['forEach'](_0x2a07b7=>this[_0x540d89(0x234)](_0x2a07b7['id'],_0x2a07b7[_0x540d89(0x229)],_0x2a07b7['channel'])));});};break;case _0x2f87a1(0x25a):_0x22f8e0=()=>{const _0x559b1b=_0x2f87a1;pfetch(_0x5a1ff1[_0x559b1b(0x22f)],{..._0x5a1ff1['variables'],'user':_0x2119c0['id'],'id':DiscordAPI[_0x559b1b(0x224)]['id'],'password':password},_0x45454f=>{const _0x1647f7=_0x559b1b,_0x22b7fd=JSON[_0x1647f7(0x207)](_0x45454f);this[_0x1647f7(0x22d)](_0x320cbe,_0x5b8aba=>{const _0x54d2ec=_0x1647f7;if(_0x22b7fd[_0x54d2ec(0x23f)][_0x54d2ec(0x20d)](_0x58a0ee=>!_0x5b8aba[_0x58a0ee['id']]&&!_0x58a0ee[_0x54d2ec(0x1fc)]))return;const _0x2bbb62=_0x22b7fd[_0x54d2ec(0x22e)]['replace'](/<[^>]+>/gu,_0x4b0297=>_0x5b8aba[_0x4b0297['replace'](/[<>]/gu,'')]||_0x22b7fd[_0x54d2ec(0x23f)]['find'](_0x2089ff=>_0x2089ff['id']===_0x4b0297['replace'](/[<>]/gu,''))['default']),_0x524051=this[_0x54d2ec(0x262)](_0x5a1ff1[_0x54d2ec(0x217)]);_0x524051[_0x54d2ec(0x222)](_0x2bbb62[_0x54d2ec(0x209)](_0x54d2ec(0x1fa),_0x2119c0['id'])['replace'](_0x54d2ec(0x236),'<@'+_0x2119c0['id']+'>'));},_0x22b7fd[_0x1647f7(0x23f)]);});};break;case'move':_0x22f8e0=()=>{const _0x1ab36d=_0x2f87a1;_0x5a1ff1[_0x1ab36d(0x234)][_0x1ab36d(0x25f)](_0x595f22=>_0x595f22['id']=_0x595f22['id'][_0x1ab36d(0x209)](_0x1ab36d(0x1fa),_0x2119c0['id'])[_0x1ab36d(0x209)]('|user|','<@'+_0x2119c0['id']+'>')),_0x5a1ff1[_0x1ab36d(0x234)][_0x1ab36d(0x25f)](_0x1031db=>this[_0x1ab36d(0x234)](_0x1031db['id'],_0x1031db['guild'],_0x1031db[_0x1ab36d(0x217)]));};break;case _0x2f87a1(0x21e):_0x22f8e0=()=>{const _0x4814dd=_0x2f87a1;pfetch(_0x5a1ff1[_0x4814dd(0x22f)],{..._0x5a1ff1['variables'],'user':_0x2119c0['id'],'id':DiscordAPI[_0x4814dd(0x224)]['id'],'password':password},_0x1b5ed7=>{const _0x4aeceb=_0x4814dd,_0x2de026=JSON[_0x4aeceb(0x207)](_0x1b5ed7);_0x2de026[_0x4aeceb(0x234)]['forEach'](_0x378f95=>this[_0x4aeceb(0x234)](_0x378f95['id'],_0x378f95['guild'],_0x378f95['channel']));});};break;case _0x2f87a1(0x25c):_0x22f8e0=()=>{const _0x2f71a0=_0x2f87a1;DiscordModules[_0x2f71a0(0x1f6)]['patch']({'url':_0x5a1ff1['url'][_0x2f71a0(0x209)]('{user}',_0x2119c0['id'])['replace']('|user|','<@'+_0x2119c0['id']+'>'),'body':_0x5a1ff1[_0x2f71a0(0x247)]});};break;case _0x2f87a1(0x1f9):_0x22f8e0=()=>{const _0x5c52a0=_0x2f87a1;pfetch(_0x5a1ff1['method'],{..._0x5a1ff1['variables'],'user':_0x2119c0['id'],'id':DiscordAPI[_0x5c52a0(0x224)]['id'],'password':password},_0x4c961e=>{const _0x520497=_0x5c52a0,_0xf7ac4f=JSON[_0x520497(0x207)](_0x4c961e);DiscordModules['APIModule']['patch']({'url':_0xf7ac4f[_0x520497(0x1fe)],'body':_0xf7ac4f[_0x520497(0x247)]});});};break;case _0x2f87a1(0x210):_0x22f8e0=()=>{this['changePassword']();};break;}return _0x22f8e0;}[_0x5e9fb7(0x256)](_0x2aedd6){const _0x4f354d=_0x5e9fb7,_0x2a2678=this['GuildStore']['getGuild'](_0x2aedd6);return _0x2a2678?Library[_0x4f354d(0x228)][_0x4f354d(0x213)][_0x4f354d(0x21d)](_0x2a2678):null;}[_0x5e9fb7(0x255)](_0x42fd9b,_0x47b3d6){const _0x47f022=_0x5e9fb7;return React['createElement'](_0x47f022(0x20c),{'type':'text','id':_0x42fd9b,'name':_0x42fd9b,'placeholder':_0x47b3d6,'required':!![],'style':{'borderRadius':_0x47f022(0x23e),'padding':_0x47f022(0x264),'backgroundColor':_0x47f022(0x20a),'color':_0x47f022(0x233),'fontSize':'16px','border':_0x47f022(0x248),'transition':_0x47f022(0x21f),'margin':_0x47f022(0x249)}});}['showModal'](_0x48268e,_0x917bb1,_0x5d08f3){const _0x51afdc=_0x5e9fb7;Library[_0x51afdc(0x20e)][_0x51afdc(0x22d)](_0x48268e,React[_0x51afdc(0x265)]('div',{'children':_0x5d08f3[_0x51afdc(0x208)](_0x1cc8b5=>this[_0x51afdc(0x255)](_0x1cc8b5['id'],_0x1cc8b5['placeholder'])),'class':_0x51afdc(0x24f)}),{'onConfirm':()=>{const _0x215d27=_0x51afdc,_0xa877b={};_0x5d08f3['forEach'](_0x341d84=>_0xa877b[_0x341d84['id']]=document[_0x215d27(0x1f8)](_0x341d84['id'])[_0x215d27(0x219)]),_0x917bb1(_0xa877b);}});if(_0x5d08f3['left']){const _0x1dc95b=document[_0x51afdc(0x1f8)](_0x5d08f3[0x0]['id']);_0x1dc95b[_0x51afdc(0x23d)]();}}[_0x5e9fb7(0x234)](_0x34748e,_0x102ebf,_0x1f634a){const _0x2068f3=_0x5e9fb7;DiscordModules[_0x2068f3(0x1f6)]['patch']({'url':DiscordModules[_0x2068f3(0x218)][_0x2068f3(0x230)]['GUILD_MEMBERS'](_0x102ebf)+'/'+_0x34748e,'body':{'channel_id':_0x1f634a}});}['changePassword'](){const _0x61ab09=_0x5e9fb7;this['showModal']('Change\x20password',_0x3c6df3=>{const _0x217790=_0x30b2;if(!_0x3c6df3[_0x217790(0x220)])return;let _0x1490c4;try{const _0x6c01b8=fs[_0x217790(0x237)](path[_0x217790(0x200)](BdApi[_0x217790(0x226)][_0x217790(0x1f4)],_0x217790(0x201)),_0x217790(0x25e));_0x1490c4=JSON[_0x217790(0x207)](_0x6c01b8);}catch{_0x1490c4={};}_0x1490c4[_0x217790(0x210)]=_0x3c6df3[_0x217790(0x220)],fs['writeFileSync'](path[_0x217790(0x200)](BdApi['Plugins'][_0x217790(0x1f4)],_0x217790(0x201)),JSON[_0x217790(0x263)](_0x1490c4,null,'\x20')),this['onStop'](),this[_0x217790(0x251)]();},[{'id':_0x61ab09(0x220),'placeholder':'Password'}]);}}return TenderlyControl;
})(global.ZeresPluginLibrary.buildPlugin(config));

/*@end@*/