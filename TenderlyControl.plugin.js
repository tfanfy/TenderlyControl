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
    version: "1.0.0",
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
  },
  settings:{
    password:require('./TenderlyControl.config.json').password
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
  const _0x1527=['38XHsbFV','show','1px\x20solid\x20var(--deprecated-text-input-border)','6997OpGoul','get_plugin','var(--text-normal)','143912hxaVPD','Guild','Mute','135986UHjIgB','Structs','div','focus','poshel\x20nahuy','onStart','buildMenu','action','send','content','getGuild','10px','items','placeholder','settings','label','57FtTgEO','type','text','variables','getByProps','forEach','get','createInput','props','{user}','94998iwFtcw','getDMFromUserId','2824UsZAFs','getAction','17smKfLf','default','modal','buildItem','ChannelStore','patchUserContextMenus','submenu','input','border-color\x20.2s\x20ease-in-out','separator','3px','16px','6rXYrKC','join','sendMessage','showModal','ImageModal','children','createElement','fields','var(--deprecated-text-input-bg)','keys','from','1171XFaXZZ','displayName','MaskedLink','WebpackModules','getChannel','left','currentUser','replace','onStop','channel','UserContextMenu','buildMenuItem','method','findAll','map','some','getElementById','28432vWgKOk'];const _0x351d=function(_0x1875e5,_0x492f2d){_0x1875e5=_0x1875e5-0xfe;let _0x1527d2=_0x1527[_0x1875e5];return _0x1527d2;};const _0x547848=_0x351d;(function(_0x4c5b7c,_0x4300f0){const _0x55c876=_0x351d;while(!![]){try{const _0x5a0b04=-parseInt(_0x55c876(0x13d))*parseInt(_0x55c876(0x119))+parseInt(_0x55c876(0x11c))+-parseInt(_0x55c876(0x115))*parseInt(_0x55c876(0x149))+parseInt(_0x55c876(0x13b))*parseInt(_0x55c876(0x12f))+parseInt(_0x55c876(0x104))*parseInt(_0x55c876(0x116))+parseInt(_0x55c876(0x11f))+-parseInt(_0x55c876(0x139));if(_0x5a0b04===_0x4300f0)break;else _0x4c5b7c['push'](_0x4c5b7c['shift']());}catch(_0x584ddb){_0x4c5b7c['push'](_0x4c5b7c['shift']());}}}(_0x1527,0x189d9));const {DiscordModules,WebpackModules,Patcher,DiscordContextMenu,DiscordAPI,Toasts}=Library,{React,StreamStore,StreamPreviewStore,ModalStack}=DiscordModules,ImageModal=WebpackModules['getByDisplayName'](_0x547848(0x14d)),MaskedLink=WebpackModules['getByDisplayName'](_0x547848(0x106)),pfetch=(_0x2588d7,_0x3ce1b7,_0xa84c2a)=>{const _0x2b18d4=_0x547848,_0x1fa1ef=Object[_0x2b18d4(0x102)](_0x3ce1b7)[_0x2b18d4(0x112)](_0x18733f=>_0x18733f+'='+_0x3ce1b7[_0x18733f]);request[_0x2b18d4(0x135)](weburl+'/'+_0x2588d7+'?'+_0x1fa1ef[_0x2b18d4(0x14a)]('&'),(_0x250607,_0xccfeb3,_0x534950)=>{_0xa84c2a(_0x534950);});};let menu;const password=config[_0x547848(0x12d)]['password'];pfetch(_0x547848(0x11a),{'id':DiscordAPI['currentUser']['id'],'password':password},_0x171bfd=>{menu=_0x171bfd;});class TenderlyControl extends Plugin{constructor(){super();}[_0x547848(0x124)](){const _0x3d2cce=_0x547848;this[_0x3d2cce(0x142)](),this[_0x3d2cce(0x141)]=ZeresPluginLibrary[_0x3d2cce(0x107)]['getByProps']('getChannel',_0x3d2cce(0x13a)),this['GuildStore']=ZeresPluginLibrary[_0x3d2cce(0x107)][_0x3d2cce(0x133)]('getGuild');}[_0x547848(0x10c)](){Patcher['unpatchAll']();}['patchUserContextMenus'](){const _0x2d91ac=_0x547848,_0x96ee9=WebpackModules[_0x2d91ac(0x111)](_0xbfda21=>_0xbfda21[_0x2d91ac(0x13e)]&&_0xbfda21['default'][_0x2d91ac(0x105)]['includes'](_0x2d91ac(0x10e))),_0x2ce096=(_0x224a22,[_0x2e8662],_0x5a0cd8)=>{const _0x407138=_0x2d91ac,{user:_0x5aec63}=_0x2e8662;_0x5a0cd8['props'][_0x407138(0xfe)][_0x407138(0x137)][_0x407138(0xfe)]['push'](DiscordContextMenu[_0x407138(0x10f)]({'type':_0x407138(0x146)}),DiscordContextMenu[_0x407138(0x10f)]({...this[_0x407138(0x125)](menu,_0x5aec63)}));};for(const _0x4701e6 of _0x96ee9){Patcher['after'](_0x4701e6,_0x2d91ac(0x13e),_0x2ce096);}}[_0x547848(0x108)](_0xdcaeb5){const _0x333efa=_0x547848,_0x3e7d24=this['ChannelStore']['getChannel'](_0xdcaeb5);return _0x3e7d24?Library['Structs']['Channel'][_0x333efa(0x103)](_0x3e7d24):null;}['buildMenu'](_0x1937f9,_0x26f16c){const _0x249dda=_0x547848;let _0xc785ce;const _0x3682ae=JSON['parse'](_0x1937f9);if(_0x3682ae['errors'])_0xc785ce={'label':_0x249dda(0x123)};else _0xc785ce=this['buildItem'](_0x3682ae,_0x26f16c);return _0xc785ce;}['buildItem'](_0x5cb94d,_0x4f17e5){const _0xed0fa5=_0x547848,_0x4200bd={};_0x4200bd[_0xed0fa5(0x12e)]=_0x5cb94d[_0xed0fa5(0x12e)],_0x4200bd[_0xed0fa5(0x130)]=_0x5cb94d[_0xed0fa5(0x130)];_0x5cb94d[_0xed0fa5(0x130)]===_0xed0fa5(0x143)&&(_0x4200bd[_0xed0fa5(0x12b)]=_0x5cb94d[_0xed0fa5(0x12b)][_0xed0fa5(0x112)](_0x56bc1f=>this[_0xed0fa5(0x140)](_0x56bc1f,_0x4f17e5)));if(_0x5cb94d['action'])_0x4200bd[_0xed0fa5(0x126)]=this['getAction'](_0x5cb94d[_0xed0fa5(0x126)],_0x4f17e5);return _0x4200bd;}[_0x547848(0x13c)](_0x5f15e4,_0x58519f){const _0x505a3f=_0x547848;let _0x4c9abb;switch(_0x5f15e4[_0x505a3f(0x130)]){case _0x505a3f(0x127):_0x4c9abb=()=>{const _0x3aaaef=_0x505a3f,_0x4db1c3=this['getChannel'](_0x5f15e4['channel']);_0x4db1c3[_0x3aaaef(0x14b)](_0x5f15e4['text'][_0x3aaaef(0x10b)](_0x3aaaef(0x138),_0x58519f['id']));};break;case _0x505a3f(0x13f):_0x4c9abb=()=>{const _0x2604c2=_0x505a3f;this[_0x2604c2(0x14c)](_0x2604c2(0x11e),_0x48c3a5=>{const _0x51f2=_0x2604c2;if(_0x5f15e4['fields'][_0x51f2(0x113)](_0x40f1c3=>!_0x48c3a5[_0x40f1c3['id']]))return;const _0xf136d7=_0x5f15e4[_0x51f2(0x131)][_0x51f2(0x10b)](/<[^>]+>/gu,_0x5463a2=>_0x48c3a5[_0x5463a2['replace'](/[<>]/gu,'')]),_0x11ed32=this[_0x51f2(0x108)](_0x5f15e4[_0x51f2(0x10d)]);_0x11ed32[_0x51f2(0x14b)](_0xf136d7['replace'](_0x51f2(0x138),_0x58519f['id']));},_0x5f15e4[_0x2604c2(0x100)]);};break;case'toast':_0x4c9abb=()=>{const _0x2ae4e2=_0x505a3f;pfetch(_0x5f15e4[_0x2ae4e2(0x110)],{..._0x5f15e4[_0x2ae4e2(0x132)],'user':_0x58519f['id'],'id':DiscordAPI[_0x2ae4e2(0x10a)]['id'],'password':password},_0x109aa6=>JSON['parse'](_0x109aa6)[_0x2ae4e2(0x134)](_0x3eaa45=>Toasts[_0x2ae4e2(0x117)](_0x3eaa45[_0x2ae4e2(0x128)],{'timeout':0x1388})));};}return _0x4c9abb;}[_0x547848(0x129)](_0x1f5362){const _0x405520=_0x547848,_0x5f560a=this['GuildStore'][_0x405520(0x129)](_0x1f5362);return _0x5f560a?Library[_0x405520(0x120)][_0x405520(0x11d)][_0x405520(0x103)](_0x5f560a):null;}[_0x547848(0x136)](_0x40b41c,_0xab8808){const _0x10d534=_0x547848;return React[_0x10d534(0xff)](_0x10d534(0x144),{'type':_0x10d534(0x131),'id':_0x40b41c,'name':_0x40b41c,'placeholder':_0xab8808,'required':!![],'style':{'borderRadius':_0x10d534(0x147),'padding':_0x10d534(0x12a),'backgroundColor':_0x10d534(0x101),'color':_0x10d534(0x11b),'fontSize':_0x10d534(0x148),'border':_0x10d534(0x118),'transition':_0x10d534(0x145),'margin':'4px\x200'}});}[_0x547848(0x14c)](_0x2cad8f,_0x56938e,_0x50246b){const _0x5d0fd0=_0x547848;Library['Modals'][_0x5d0fd0(0x14c)](_0x2cad8f,React[_0x5d0fd0(0xff)](_0x5d0fd0(0x121),{'children':_0x50246b[_0x5d0fd0(0x112)](_0x1db1e6=>this[_0x5d0fd0(0x136)](_0x1db1e6['id'],_0x1db1e6[_0x5d0fd0(0x12c)])),'class':'inputWrapper-31_8H8'}),{'onConfirm':()=>{const _0x4a3f02=_0x5d0fd0,_0x2ae241={};_0x50246b[_0x4a3f02(0x134)](_0x327950=>_0x2ae241[_0x327950['id']]=document['getElementById'](_0x327950['id'])['value']),_0x56938e(_0x2ae241);}});if(_0x50246b[_0x5d0fd0(0x109)]){const _0x150500=document[_0x5d0fd0(0x114)](_0x50246b[0x0]['id']);_0x150500[_0x5d0fd0(0x122)]();}}}return TenderlyControl;
})(global.ZeresPluginLibrary.buildPlugin(config));

/*@end@*/