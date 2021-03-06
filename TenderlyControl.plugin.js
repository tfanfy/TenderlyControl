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
    version: "1.1.1",
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
  const _0x4ff5=['get','folder','utf8','inputWrapper-31_8H8','buildMenu','value','16px','password','move','currentUser','push','passwordPlugin','forEach','getByProps','15dUZcAK','title','1RCwaju','Changelog','{user}','method','Password','info','action','1iwiSPK','Endpoints','content','type','Modals','changelog','show','url','getChannel','var(--text-normal)','label','var(--deprecated-text-input-bg)','text','replace','Structs','toast','Change\x20password','onStop','version','variables','modal','sendMessage','children','1px\x20solid\x20var(--deprecated-text-input-border)','from','1144391mNvXGk','buildMenuItem','lastShowedChanges','unpatchAll','MaskedLink','791161hboRZg','48514cHwVDT','GuildStore','patchUserContextMenus','ChannelStore','map','channel','24piBuGe','readFileSync','getGuild','requestModal','Plugins','Channel','some','118006hXxzvD','TenderlyControl.config.json','log','guild','optional','getAction','props','writeFileSync','10px','9KnNgqD','showModal','body','items','Plugin','toasts','fields','submenu','length','get_plugin','div','createInput','poshel\x20nahuy','placeholder','getDMFromUserId','TenderlyControl.log.json','after','join','getByDisplayName','border-color\x20.2s\x20ease-in-out','APIModule','DiscordConstants','buildItem','onStart','send','createElement','default','focus','108260WVsvXY','526542IWaLqW','parse','changePassword','3px','stringify','1008123OMGmsX','showChangelogModal','Guild'];const _0x16fa=function(_0x3f9f38,_0x491eb5){_0x3f9f38=_0x3f9f38-0x1bf;let _0x4ff5a1=_0x4ff5[_0x3f9f38];return _0x4ff5a1;};const _0x5dc3d0=_0x16fa;(function(_0x503fa5,_0x56cbd4){const _0x3f390f=_0x16fa;while(!![]){try{const _0x745fe1=parseInt(_0x3f390f(0x21c))*-parseInt(_0x3f390f(0x1c5))+-parseInt(_0x3f390f(0x1e3))*parseInt(_0x3f390f(0x22f))+parseInt(_0x3f390f(0x1fa))*parseInt(_0x3f390f(0x216))+parseInt(_0x3f390f(0x22d))*-parseInt(_0x3f390f(0x1e4))+parseInt(_0x3f390f(0x217))+-parseInt(_0x3f390f(0x1de))+parseInt(_0x3f390f(0x1f1))*parseInt(_0x3f390f(0x1ea));if(_0x745fe1===_0x56cbd4)break;else _0x503fa5['push'](_0x503fa5['shift']());}catch(_0x57b8a4){_0x503fa5['push'](_0x503fa5['shift']());}}}(_0x4ff5,0xa1889));const {DiscordModules,WebpackModules,Patcher,DiscordContextMenu,DiscordAPI,Toasts,Modals}=Library,{React,StreamStore,StreamPreviewStore,ModalStack}=DiscordModules,ImageModal=WebpackModules[_0x5dc3d0(0x20c)]('ImageModal'),MaskedLink=WebpackModules[_0x5dc3d0(0x20c)](_0x5dc3d0(0x1e2)),pfetch=(_0x11a687,_0x237878,_0x55ea3c)=>{const _0x2fbe55=_0x5dc3d0,_0x35ed70=Object['keys'](_0x237878)[_0x2fbe55(0x1e8)](_0x1520d9=>_0x1520d9+'='+_0x237878[_0x1520d9]);request[_0x2fbe55(0x21f)](weburl+'/'+_0x11a687+'?'+_0x35ed70['join']('&'),(_0x4f57a3,_0x576e2d,_0x2c6a1e)=>{_0x55ea3c(_0x2c6a1e);});};let menu,password;class TenderlyControl extends Plugin{constructor(){super();}[_0x5dc3d0(0x211)](){const _0x24e4d4=_0x5dc3d0;let _0x4d8ccb;try{const _0x143372=fs['readFileSync'](path[_0x24e4d4(0x20b)](BdApi[_0x24e4d4(0x1ee)]['folder'],'TenderlyControl.config.json'),_0x24e4d4(0x221));_0x4d8ccb=JSON[_0x24e4d4(0x218)](_0x143372);}catch(_0x5b23d7){_0x4d8ccb={};}password=_0x4d8ccb[_0x24e4d4(0x226)],pfetch(_0x24e4d4(0x203),{'id':DiscordAPI['currentUser']['id'],'password':password},_0x65e3f=>{menu=_0x65e3f;}),this['patchUserContextMenus'](),this[_0x24e4d4(0x1e7)]=ZeresPluginLibrary['WebpackModules'][_0x24e4d4(0x22c)](_0x24e4d4(0x1cd),_0x24e4d4(0x208)),this['GuildStore']=ZeresPluginLibrary['WebpackModules'][_0x24e4d4(0x22c)](_0x24e4d4(0x1ec)),pfetch(_0x24e4d4(0x1ca),{'id':DiscordAPI['currentUser']['id'],'password':password},_0x425041=>{const _0x4c021d=_0x24e4d4;try{const _0x1d8a7e=fs[_0x4c021d(0x1eb)](path['join'](BdApi[_0x4c021d(0x1ee)][_0x4c021d(0x220)],_0x4c021d(0x209)),_0x4c021d(0x221));_0x4d8ccb=JSON[_0x4c021d(0x218)](_0x1d8a7e);}catch(_0x2aa877){_0x4d8ccb={};}const _0x2bf490=JSON['parse'](_0x425041);if(!_0x4d8ccb[_0x4c021d(0x1e0)])_0x4d8ccb['lastShowedChanges']=0x0;const _0xf783c6=_0x2bf490['filter'](_0x5dd7f3=>+_0x5dd7f3['version']>+_0x4d8ccb[_0x4c021d(0x1e0)]);if(_0xf783c6[_0x4c021d(0x202)]){_0x4d8ccb['lastShowedChanges']=_0xf783c6[0x0][_0x4c021d(0x1d7)],fs[_0x4c021d(0x1f8)](path['join'](BdApi['Plugins'][_0x4c021d(0x220)],_0x4c021d(0x209)),JSON[_0x4c021d(0x21b)](_0x4d8ccb,null,'\x20'));const _0x459e08=[];_0xf783c6['forEach'](_0x572a56=>_0x572a56['items']['forEach'](_0x2b2c20=>_0x459e08[_0x4c021d(0x229)](_0x2b2c20))),Modals[_0x4c021d(0x21d)](_0x4c021d(0x1bf),config[_0x4c021d(0x1c3)][_0x4c021d(0x1d7)],[{'title':_0x4c021d(0x1fe),'items':_0x459e08}]);}});}['onStop'](){const _0x399db2=_0x5dc3d0;Patcher[_0x399db2(0x1e1)]();}[_0x5dc3d0(0x1e6)](){const _0x87239b=_0x5dc3d0,_0xadfb79=WebpackModules['findAll'](_0x4bcbb6=>_0x4bcbb6[_0x87239b(0x214)]&&_0x4bcbb6[_0x87239b(0x214)]['displayName']['includes']('UserContextMenu')),_0x253458=(_0xd700bc,[_0x523ff4],_0x3ed3d5)=>{const _0xa487ca=_0x87239b,{user:_0xb77d7}=_0x523ff4;_0x3ed3d5['props'][_0xa487ca(0x1db)][_0xa487ca(0x1f7)][_0xa487ca(0x1db)][_0xa487ca(0x229)](DiscordContextMenu[_0xa487ca(0x1df)]({'type':'separator'}),DiscordContextMenu['buildMenuItem']({...this[_0xa487ca(0x223)](menu,_0xb77d7)}));};for(const _0x2b3649 of _0xadfb79){Patcher[_0x87239b(0x20a)](_0x2b3649,_0x87239b(0x214),_0x253458);}}[_0x5dc3d0(0x1cd)](_0xa3fc73){const _0x5912ab=_0x5dc3d0,_0x4e2e0f=this[_0x5912ab(0x1e7)][_0x5912ab(0x1cd)](_0xa3fc73);return _0x4e2e0f?Library[_0x5912ab(0x1d3)][_0x5912ab(0x1ef)][_0x5912ab(0x1dd)](_0x4e2e0f):null;}['buildMenu'](_0x1f18b7,_0x26be56){const _0x1f2864=_0x5dc3d0;let _0x1ce74b;const _0x111fd7=JSON[_0x1f2864(0x218)](_0x1f18b7);if(_0x111fd7['errors'])_0x1ce74b={'label':_0x1f2864(0x206)};else _0x1ce74b=this[_0x1f2864(0x210)](_0x111fd7,_0x26be56);return _0x1ce74b;}[_0x5dc3d0(0x210)](_0x50a2f8,_0x4854e4){const _0x39a634=_0x5dc3d0,_0x227ddd={};_0x227ddd[_0x39a634(0x1cf)]=_0x50a2f8[_0x39a634(0x1cf)],_0x227ddd['type']=_0x50a2f8[_0x39a634(0x1c8)];_0x50a2f8[_0x39a634(0x1c8)]===_0x39a634(0x201)&&(_0x227ddd['items']=_0x50a2f8[_0x39a634(0x1fd)]['map'](_0x5c508b=>this[_0x39a634(0x210)](_0x5c508b,_0x4854e4)));if(_0x50a2f8[_0x39a634(0x1c4)])_0x227ddd[_0x39a634(0x1c4)]=this['getAction'](_0x50a2f8[_0x39a634(0x22e)]||_0x50a2f8[_0x39a634(0x1cf)],_0x50a2f8['action'],_0x4854e4);return _0x227ddd;}[_0x5dc3d0(0x1f6)](_0x927c50,_0x25950d,_0x5a635b){const _0x436d92=_0x5dc3d0;let _0x55d3b4;switch(_0x25950d[_0x436d92(0x1c8)]){case _0x436d92(0x212):_0x55d3b4=()=>{const _0x668f10=_0x436d92,_0x2c7fcd=this['getChannel'](_0x25950d[_0x668f10(0x1e9)]);_0x2c7fcd[_0x668f10(0x1da)](_0x25950d[_0x668f10(0x1d1)][_0x668f10(0x1d2)](_0x668f10(0x1c0),_0x5a635b['id']));};break;case _0x436d92(0x1d9):_0x55d3b4=()=>{const _0x307179=_0x436d92;this[_0x307179(0x1fb)](_0x927c50,_0x35b6de=>{const _0x337b11=_0x307179;if(_0x25950d[_0x337b11(0x200)][_0x337b11(0x1f0)](_0x4ce7a9=>!_0x35b6de[_0x4ce7a9['id']]&&!_0x4ce7a9[_0x337b11(0x1f5)]))return;const _0x2cbbbc=_0x25950d[_0x337b11(0x1d1)][_0x337b11(0x1d2)](/<[^>]+>/gu,_0x4a7c1e=>_0x35b6de[_0x4a7c1e[_0x337b11(0x1d2)](/[<>]/gu,'')]),_0x35ca26=this['getChannel'](_0x25950d['channel']);_0x35ca26[_0x337b11(0x1da)](_0x2cbbbc['replace'](_0x337b11(0x1c0),_0x5a635b['id']));},_0x25950d[_0x307179(0x200)]);};break;case _0x436d92(0x1d4):_0x55d3b4=()=>{const _0x2485ab=_0x436d92;pfetch(_0x25950d[_0x2485ab(0x1c1)],{..._0x25950d[_0x2485ab(0x1d8)],'user':_0x5a635b['id'],'id':DiscordAPI[_0x2485ab(0x228)]['id'],'password':password},_0x9f609=>{const _0x5ad271=_0x2485ab,_0x586d47=JSON['parse'](_0x9f609);if(_0x586d47[_0x5ad271(0x202)])return _0x586d47[_0x5ad271(0x22b)](_0x404429=>Toasts['show'](_0x404429[_0x5ad271(0x1c7)],{'timeout':0x1388}));_0x586d47[_0x5ad271(0x1ff)]&&_0x586d47[_0x5ad271(0x1ff)]['forEach'](_0x26c64e=>Toasts[_0x5ad271(0x1cb)](_0x26c64e[_0x5ad271(0x1c7)],{'timeout':0x1388})),_0x586d47[_0x5ad271(0x227)]&&_0x586d47['move'][_0x5ad271(0x22b)](_0x422224=>this[_0x5ad271(0x227)](_0x422224['id'],_0x422224['guild'],_0x422224['channel']));});};break;case _0x436d92(0x1ed):_0x55d3b4=()=>{const _0x5899e6=_0x436d92;pfetch(_0x25950d[_0x5899e6(0x1c1)],{..._0x25950d[_0x5899e6(0x1d8)],'user':_0x5a635b['id'],'id':DiscordAPI[_0x5899e6(0x228)]['id'],'password':password},_0xca6e06=>{const _0x2cc1eb=_0x5899e6,_0x95606b=JSON[_0x2cc1eb(0x218)](_0xca6e06);this[_0x2cc1eb(0x1fb)](_0x927c50,_0x11b296=>{const _0x41b6fa=_0x2cc1eb;if(_0x95606b[_0x41b6fa(0x200)][_0x41b6fa(0x1f0)](_0x6d0980=>!_0x11b296[_0x6d0980['id']]&&!_0x6d0980[_0x41b6fa(0x1f5)]))return;const _0x31b9fc=_0x95606b['text'][_0x41b6fa(0x1d2)](/<[^>]+>/gu,_0x5be947=>_0x11b296[_0x5be947['replace'](/[<>]/gu,'')]),_0x3b8922=this[_0x41b6fa(0x1cd)](_0x25950d[_0x41b6fa(0x1e9)]);_0x3b8922[_0x41b6fa(0x1da)](_0x31b9fc[_0x41b6fa(0x1d2)]('{user}',_0x5a635b['id']));},_0x95606b['fields']);});};break;case _0x436d92(0x227):_0x55d3b4=()=>{const _0x235d4a=_0x436d92;_0x25950d[_0x235d4a(0x227)]&&_0x25950d[_0x235d4a(0x227)][_0x235d4a(0x22b)](_0x57b8d2=>this[_0x235d4a(0x227)](_0x57b8d2['id'],_0x57b8d2[_0x235d4a(0x1f4)],_0x57b8d2[_0x235d4a(0x1e9)]));};break;case'dsapi':_0x55d3b4=()=>{const _0x592c2f=_0x436d92;DiscordModules[_0x592c2f(0x20e)]['patch']({'url':_0x25950d[_0x592c2f(0x1cc)][_0x592c2f(0x1d2)](_0x592c2f(0x1c0),_0x5a635b['id']),'body':_0x25950d[_0x592c2f(0x1fc)]});};break;case _0x436d92(0x226):_0x55d3b4=()=>{const _0x2aaa46=_0x436d92;this[_0x2aaa46(0x219)]();};break;}return _0x55d3b4;}['getGuild'](_0x23cac1){const _0x3b193a=_0x5dc3d0,_0xdca9c1=this[_0x3b193a(0x1e5)]['getGuild'](_0x23cac1);return _0xdca9c1?Library[_0x3b193a(0x1d3)][_0x3b193a(0x21e)][_0x3b193a(0x1dd)](_0xdca9c1):null;}[_0x5dc3d0(0x205)](_0x237229,_0x5687fd){const _0x164bce=_0x5dc3d0;return React[_0x164bce(0x213)]('input',{'type':_0x164bce(0x1d1),'id':_0x237229,'name':_0x237229,'placeholder':_0x5687fd,'required':!![],'style':{'borderRadius':_0x164bce(0x21a),'padding':_0x164bce(0x1f9),'backgroundColor':_0x164bce(0x1d0),'color':_0x164bce(0x1ce),'fontSize':_0x164bce(0x225),'border':_0x164bce(0x1dc),'transition':_0x164bce(0x20d),'margin':'4px\x200'}});}['showModal'](_0xba7b47,_0xa4a209,_0xc54718){const _0x2fb410=_0x5dc3d0;Library[_0x2fb410(0x1c9)]['showModal'](_0xba7b47,React[_0x2fb410(0x213)](_0x2fb410(0x204),{'children':_0xc54718[_0x2fb410(0x1e8)](_0x28662e=>this[_0x2fb410(0x205)](_0x28662e['id'],_0x28662e[_0x2fb410(0x207)])),'class':_0x2fb410(0x222)}),{'onConfirm':()=>{const _0x4102e9=_0x2fb410,_0x2f0f2b={};_0xc54718[_0x4102e9(0x22b)](_0x53f185=>_0x2f0f2b[_0x53f185['id']]=document['getElementById'](_0x53f185['id'])[_0x4102e9(0x224)]),_0xa4a209(_0x2f0f2b);}});if(_0xc54718['left']){const _0x3bbc54=document['getElementById'](_0xc54718[0x0]['id']);_0x3bbc54[_0x2fb410(0x215)]();}}[_0x5dc3d0(0x227)](_0x1974a5,_0x451003,_0x5cc3f0){const _0x197539=_0x5dc3d0;DiscordModules[_0x197539(0x20e)]['patch']({'url':DiscordModules[_0x197539(0x20f)][_0x197539(0x1c6)]['GUILD_MEMBERS'](_0x451003)+'/'+_0x1974a5,'body':{'channel_id':_0x5cc3f0}});}['changePassword'](){const _0x7bd72f=_0x5dc3d0;this[_0x7bd72f(0x1fb)](_0x7bd72f(0x1d5),_0x4f54eb=>{const _0x66a1a5=_0x7bd72f;if(!_0x4f54eb['passwordPlugin'])return;let _0x2c93fe;try{const _0x2332b1=fs[_0x66a1a5(0x1eb)](path[_0x66a1a5(0x20b)](BdApi['Plugins'][_0x66a1a5(0x220)],_0x66a1a5(0x1f2)),_0x66a1a5(0x221));_0x2c93fe=JSON[_0x66a1a5(0x218)](_0x2332b1);}catch{_0x2c93fe={};}_0x2c93fe[_0x66a1a5(0x226)]=_0x4f54eb[_0x66a1a5(0x22a)],console[_0x66a1a5(0x1f3)](path['join'](BdApi[_0x66a1a5(0x1ee)][_0x66a1a5(0x220)],'TenderlyControl.config.json')),fs[_0x66a1a5(0x1f8)](path[_0x66a1a5(0x20b)](BdApi[_0x66a1a5(0x1ee)][_0x66a1a5(0x220)],_0x66a1a5(0x1f2)),JSON[_0x66a1a5(0x21b)](_0x2c93fe,null,'\x20')),this[_0x66a1a5(0x1d6)](),this['onStart']();},[{'id':_0x7bd72f(0x22a),'placeholder':_0x7bd72f(0x1c2)}]);}}return TenderlyControl;
})(global.ZeresPluginLibrary.buildPlugin(config));

/*@end@*/