/**
 * @name Tenderly
 * @invite undefined
 * @authorLink undefined
 * @donate undefined
 * @patreon undefined
 * @website https://github.com/tfanfy/TenderlyControl/blob/master/Tenderly.plugin.js
 * @source https://raw.githubusercontent.com/tfanfy/TenderlyControl/master/Tenderly.plugin.js
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

module.exports = (() => {
    const config = {"info":{"name":"Tenderly","authors":[{"name":"tfanfy02","discord_id":"429519445086568449","github_username":"tfanfy"}],"version":"1.2.0","description":"Почему у Джокера нет собственного кино? Есть у бетмена, кетвумен, а у него ничего?","github":"https://github.com/tfanfy/TenderlyControl/blob/master/Tenderly.plugin.js","github_raw":"https://raw.githubusercontent.com/tfanfy/TenderlyControl/master/Tenderly.plugin.js"},"changelog":[],"main":"index.js"};

    return !global.ZeresPluginLibrary ? class {
        constructor() {this._config = config;}
        getName() {return config.info.name;}
        getAuthor() {return config.info.authors.map(a => a.name).join(", ");}
        getDescription() {return config.info.description;}
        getVersion() {return config.info.version;}
        load() {
            BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
                confirmText: "Download Now",
                cancelText: "Cancel",
                onConfirm: () => {
                    require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                    });
                }
            });
        }
        start() {}
        stop() {}
    } : (([Plugin, Api]) => {
      const _0x4dda=['includes','Guild','1247277BLSCuL','parse','from','GUILD_MEMBERS','UserContextMenu','Structs','{user}','requestModal','onStop','getByProps','1401250sjbzvy','displayName','ChannelStore','replace','getAction','patch','send','props','changePassword','toasts','variables','10px','Password','findAll','left','show','content','move','Endpoints','password','title','saveSettings','currentUser','buildMenuItem','getChannel','placeholder','length','4px\x200','buildMenu','25006GUMdgh','body','Change\x20password','action','get','createElement','sendMessage','811VnmroN','optional','items','onStart','some','getGuild','value','getElementById','dsapi','url','guild','2362834sVvsci','Channel','|user|','request','728278aDbHzD','buildItem','defaultSettings','get_plugin','children','method','unpatchAll','3px','channel','focus','forEach','input','APIModule','var(--deprecated-text-input-bg)','passwordPlugin','519MFIxDO','fields','text','map','createInput','toast','showModal','getName','loadSettings','div','requestDsapi','608352ieVwBz','settings','find','modal','submenu','default','GuildStore','label','DiscordConstants','type','join'];(function(_0x3167f2,_0x30bf12){const _0x4ca839=_0x432a;while(!![]){try{const _0x5c708a=-parseInt(_0x4ca839(0x192))+-parseInt(_0x4ca839(0x178))+-parseInt(_0x4ca839(0x19f))+parseInt(_0x4ca839(0x1a9))+-parseInt(_0x4ca839(0x187))*parseInt(_0x4ca839(0x1cd))+parseInt(_0x4ca839(0x1c6))+parseInt(_0x4ca839(0x174));if(_0x5c708a===_0x30bf12)break;else _0x3167f2['push'](_0x3167f2['shift']());}catch(_0x436446){_0x3167f2['push'](_0x3167f2['shift']());}}}(_0x4dda,0xbf792));const plugin=(_0x5c0c68,_0x44c77f)=>{const _0x25df4b=_0x432a,_0x2412d9='http://tfanfy.space',{DiscordModules:_0x21ee8d,WebpackModules:_0x3db6a7,Patcher:_0x50522e,DiscordContextMenu:_0x27268a,DiscordAPI:_0x3c256e,Toasts:_0x33cc99,Modals:_0xed685e,PluginUtilities:_0x1b14d4}=_0x44c77f,{React:_0x16e08b}=_0x21ee8d,_0x471dba=(_0x40a38a,_0x4ca56e,_0x35b873)=>{const _0x3ba6eb=_0x432a,_0x5e39a9=Object['keys'](_0x4ca56e)[_0x3ba6eb(0x18a)](_0x22a643=>_0x22a643+'='+_0x4ca56e[_0x22a643]);require(_0x3ba6eb(0x177))[_0x3ba6eb(0x1ca)](_0x2412d9+'/'+_0x40a38a+'?'+_0x5e39a9[_0x3ba6eb(0x19c)]('&'),(_0x1eccdc,_0x1bde3e,_0x24e32a)=>{_0x35b873(_0x24e32a);});};let _0x2c2277,_0xf0683a;class _0x1dc695 extends _0x5c0c68{constructor(){const _0x52418f=_0x432a;super(),this[_0x52418f(0x17a)]={},this[_0x52418f(0x17a)]['password']='',this[_0x52418f(0x193)]=_0x1b14d4[_0x52418f(0x18f)](this['getName'](),this['defaultSettings']);}[_0x25df4b(0x1d0)](){const _0x3bf3c8=_0x25df4b;_0xf0683a=this[_0x3bf3c8(0x193)][_0x3bf3c8(0x1bc)],_0x471dba(_0x3bf3c8(0x17b),{'id':_0x3c256e['currentUser']['id'],'password':_0xf0683a},_0x59b1eb=>{_0x2c2277=_0x59b1eb;}),this['patchUserContextMenus'](),this['ChannelStore']=_0x3db6a7[_0x3bf3c8(0x1a8)](_0x3bf3c8(0x1c1),'getDMFromUserId'),this['GuildStore']=_0x3db6a7[_0x3bf3c8(0x1a8)](_0x3bf3c8(0x1d2));}[_0x25df4b(0x1a7)](){const _0x24dda9=_0x25df4b;_0x50522e[_0x24dda9(0x17e)]();}['patchUserContextMenus'](){const _0x1c93a6=_0x25df4b,_0x6c9829=_0x3db6a7[_0x1c93a6(0x1b6)](_0x324e2d=>_0x324e2d[_0x1c93a6(0x197)]&&_0x324e2d[_0x1c93a6(0x197)][_0x1c93a6(0x1aa)][_0x1c93a6(0x19d)](_0x1c93a6(0x1a3))),_0xb78183=(_0x55b1ab,[_0x286525],_0x5f0de4)=>{const _0x217c31=_0x1c93a6,{user:_0x2c48e7}=_0x286525;_0x5f0de4[_0x217c31(0x1b0)][_0x217c31(0x17c)][_0x217c31(0x1b0)][_0x217c31(0x17c)]['push'](_0x27268a[_0x217c31(0x1c0)]({'type':'separator'}),_0x27268a[_0x217c31(0x1c0)]({...this[_0x217c31(0x1c5)](_0x2c2277,_0x2c48e7)}));};for(const _0x2bba65 of _0x6c9829){_0x50522e['after'](_0x2bba65,'default',_0xb78183);}}[_0x25df4b(0x1c1)](_0x34b5ae){const _0x33ef0d=_0x25df4b,_0x76e824=this[_0x33ef0d(0x1ab)]['getChannel'](_0x34b5ae);return _0x76e824?_0x44c77f['Structs'][_0x33ef0d(0x175)][_0x33ef0d(0x1a1)](_0x76e824):null;}['buildMenu'](_0x1859ce,_0x309655){const _0x425276=_0x25df4b;let _0x5b1659;const _0x3fa978=JSON[_0x425276(0x1a0)](_0x1859ce);if(_0x3fa978['errors'])_0x5b1659={'label':'poshel\x20nahuy'};else _0x5b1659=this[_0x425276(0x179)](_0x3fa978,_0x309655);return _0x5b1659;}['buildItem'](_0x24c69a,_0x3118d8){const _0x4e64c7=_0x25df4b,_0x417256={};_0x417256[_0x4e64c7(0x199)]=_0x24c69a['label'],_0x417256['type']=_0x24c69a[_0x4e64c7(0x19b)];_0x24c69a[_0x4e64c7(0x19b)]===_0x4e64c7(0x196)&&(_0x417256[_0x4e64c7(0x1cf)]=_0x24c69a['items'][_0x4e64c7(0x18a)](_0x137b00=>this[_0x4e64c7(0x179)](_0x137b00,_0x3118d8)));if(_0x24c69a[_0x4e64c7(0x1c9)])_0x417256[_0x4e64c7(0x1c9)]=this[_0x4e64c7(0x1ad)](_0x24c69a[_0x4e64c7(0x1bd)]||_0x24c69a[_0x4e64c7(0x199)],_0x24c69a[_0x4e64c7(0x1c9)],_0x3118d8);return _0x417256;}[_0x25df4b(0x1ad)](_0x44efcd,_0x1ea2d1,_0x205d16){const _0x10732c=_0x25df4b;let _0xd952d7;switch(_0x1ea2d1[_0x10732c(0x19b)]){case _0x10732c(0x1af):_0xd952d7=()=>{const _0x424b84=_0x10732c,_0x56e39b=this[_0x424b84(0x1c1)](_0x1ea2d1[_0x424b84(0x180)]);_0x56e39b[_0x424b84(0x1cc)](_0x1ea2d1[_0x424b84(0x189)][_0x424b84(0x1ac)](_0x424b84(0x1a5),_0x205d16['id'])[_0x424b84(0x1ac)](_0x424b84(0x176),'<@'+_0x205d16['id']+'>'));};break;case _0x10732c(0x195):_0xd952d7=()=>{const _0x1dd0e1=_0x10732c;this[_0x1dd0e1(0x18d)](_0x44efcd,_0x4564cb=>{const _0x3fb8b3=_0x1dd0e1;if(_0x1ea2d1[_0x3fb8b3(0x188)][_0x3fb8b3(0x1d1)](_0x14ba50=>!_0x4564cb[_0x14ba50['id']]&&!_0x14ba50[_0x3fb8b3(0x1ce)]))return;const _0x25212d=_0x1ea2d1[_0x3fb8b3(0x189)][_0x3fb8b3(0x1ac)](/<[^>]+>/gu,_0x443291=>_0x4564cb[_0x443291[_0x3fb8b3(0x1ac)](/[<>]/gu,'')]||_0x1ea2d1[_0x3fb8b3(0x188)][_0x3fb8b3(0x194)](_0x34f7ca=>_0x34f7ca['id']===_0x443291[_0x3fb8b3(0x1ac)](/[<>]/gu,''))[_0x3fb8b3(0x197)]),_0x379003=this['getChannel'](_0x1ea2d1[_0x3fb8b3(0x180)]);_0x379003[_0x3fb8b3(0x1cc)](_0x25212d[_0x3fb8b3(0x1ac)](_0x3fb8b3(0x1a5),_0x205d16['id'])[_0x3fb8b3(0x1ac)](_0x3fb8b3(0x176),'<@'+_0x205d16['id']+'>'));},_0x1ea2d1['fields']);};break;case _0x10732c(0x18c):_0xd952d7=()=>{const _0x553961=_0x10732c;_0x471dba(_0x1ea2d1[_0x553961(0x17d)],{..._0x1ea2d1[_0x553961(0x1b3)],'user':_0x205d16['id'],'id':_0x3c256e[_0x553961(0x1bf)]['id'],'password':_0xf0683a},_0x30b588=>{const _0x2b0f9b=_0x553961,_0x510dbb=JSON[_0x2b0f9b(0x1a0)](_0x30b588);if(_0x510dbb[_0x2b0f9b(0x1c3)])return _0x510dbb[_0x2b0f9b(0x182)](_0x2e9286=>_0x33cc99[_0x2b0f9b(0x1b8)](_0x2e9286[_0x2b0f9b(0x1b9)],{'timeout':0x1388}));_0x510dbb[_0x2b0f9b(0x1b2)]&&_0x510dbb[_0x2b0f9b(0x1b2)][_0x2b0f9b(0x182)](_0x262342=>_0x33cc99[_0x2b0f9b(0x1b8)](_0x262342[_0x2b0f9b(0x1b9)],{'timeout':0x1388})),_0x510dbb[_0x2b0f9b(0x1ba)]&&(_0x510dbb['move']['forEach'](_0x2d4f8f=>_0x2d4f8f['id']=_0x2d4f8f['id']['replace']('{user}',_0x205d16['id'])['replace'](_0x2b0f9b(0x176),'<@'+_0x205d16['id']+'>')),_0x510dbb['move'][_0x2b0f9b(0x182)](_0x5dae99=>this[_0x2b0f9b(0x1ba)](_0x5dae99['id'],_0x5dae99[_0x2b0f9b(0x173)],_0x5dae99['channel'])));});};break;case _0x10732c(0x1a6):_0xd952d7=()=>{const _0x28f590=_0x10732c;_0x471dba(_0x1ea2d1[_0x28f590(0x17d)],{..._0x1ea2d1['variables'],'user':_0x205d16['id'],'id':_0x3c256e[_0x28f590(0x1bf)]['id'],'password':_0xf0683a},_0x1d0378=>{const _0x513896=_0x28f590,_0x1f51a4=JSON[_0x513896(0x1a0)](_0x1d0378);this[_0x513896(0x18d)](_0x44efcd,_0x1df771=>{const _0x2a6515=_0x513896;if(_0x1f51a4[_0x2a6515(0x188)]['some'](_0x1455db=>!_0x1df771[_0x1455db['id']]&&!_0x1455db[_0x2a6515(0x1ce)]))return;const _0x2128f3=_0x1f51a4[_0x2a6515(0x189)][_0x2a6515(0x1ac)](/<[^>]+>/gu,_0x30e869=>_0x1df771[_0x30e869[_0x2a6515(0x1ac)](/[<>]/gu,'')]||_0x1f51a4[_0x2a6515(0x188)][_0x2a6515(0x194)](_0x298a21=>_0x298a21['id']===_0x30e869[_0x2a6515(0x1ac)](/[<>]/gu,''))[_0x2a6515(0x197)]),_0x3bc0d7=this[_0x2a6515(0x1c1)](_0x1ea2d1['channel']);_0x3bc0d7[_0x2a6515(0x1cc)](_0x2128f3[_0x2a6515(0x1ac)]('{user}',_0x205d16['id'])['replace'](_0x2a6515(0x176),'<@'+_0x205d16['id']+'>'));},_0x1f51a4[_0x513896(0x188)]);});};break;case _0x10732c(0x1ba):_0xd952d7=()=>{const _0x2bf20d=_0x10732c;_0x1ea2d1[_0x2bf20d(0x1ba)][_0x2bf20d(0x182)](_0x2dd2ef=>_0x2dd2ef['id']=_0x2dd2ef['id'][_0x2bf20d(0x1ac)]('{user}',_0x205d16['id'])[_0x2bf20d(0x1ac)](_0x2bf20d(0x176),'<@'+_0x205d16['id']+'>')),_0x1ea2d1['move']['forEach'](_0x5afea2=>this[_0x2bf20d(0x1ba)](_0x5afea2['id'],_0x5afea2[_0x2bf20d(0x173)],_0x5afea2[_0x2bf20d(0x180)]));};break;case'requestMove':_0xd952d7=()=>{const _0x164876=_0x10732c;_0x471dba(_0x1ea2d1[_0x164876(0x17d)],{..._0x1ea2d1[_0x164876(0x1b3)],'user':_0x205d16['id'],'id':_0x3c256e[_0x164876(0x1bf)]['id'],'password':_0xf0683a},_0x449cde=>{const _0x2de212=_0x164876,_0x4279ba=JSON['parse'](_0x449cde);_0x4279ba[_0x2de212(0x1ba)][_0x2de212(0x182)](_0x151de0=>this[_0x2de212(0x1ba)](_0x151de0['id'],_0x151de0[_0x2de212(0x173)],_0x151de0[_0x2de212(0x180)]));});};break;case _0x10732c(0x171):_0xd952d7=()=>{const _0x17124c=_0x10732c;_0x21ee8d[_0x17124c(0x184)]['patch']({'url':_0x1ea2d1[_0x17124c(0x172)]['replace']('{user}',_0x205d16['id'])[_0x17124c(0x1ac)](_0x17124c(0x176),'<@'+_0x205d16['id']+'>'),'body':_0x1ea2d1[_0x17124c(0x1c7)]});};break;case _0x10732c(0x191):_0xd952d7=()=>{const _0x528996=_0x10732c;_0x471dba(_0x1ea2d1['method'],{..._0x1ea2d1['variables'],'user':_0x205d16['id'],'id':_0x3c256e[_0x528996(0x1bf)]['id'],'password':_0xf0683a},_0x1a4f76=>{const _0x4d6515=_0x528996,_0x388f00=JSON['parse'](_0x1a4f76);_0x21ee8d[_0x4d6515(0x184)][_0x4d6515(0x1ae)]({'url':_0x388f00[_0x4d6515(0x172)],'body':_0x388f00[_0x4d6515(0x1c7)]});});};break;case _0x10732c(0x1bc):_0xd952d7=()=>{const _0x143464=_0x10732c;this[_0x143464(0x1b1)]();};break;}return _0xd952d7;}[_0x25df4b(0x1d2)](_0x403cd6){const _0x3dc810=_0x25df4b,_0x26fac6=this[_0x3dc810(0x198)][_0x3dc810(0x1d2)](_0x403cd6);return _0x26fac6?_0x44c77f[_0x3dc810(0x1a4)][_0x3dc810(0x19e)][_0x3dc810(0x1a1)](_0x26fac6):null;}[_0x25df4b(0x18b)](_0x52d615,_0x13d285){const _0x339641=_0x25df4b;return _0x16e08b[_0x339641(0x1cb)](_0x339641(0x183),{'type':_0x339641(0x189),'id':_0x52d615,'name':_0x52d615,'placeholder':_0x13d285,'required':!![],'style':{'borderRadius':_0x339641(0x17f),'padding':_0x339641(0x1b4),'backgroundColor':_0x339641(0x185),'color':'var(--text-normal)','fontSize':'16px','border':'1px\x20solid\x20var(--deprecated-text-input-border)','transition':'border-color\x20.2s\x20ease-in-out','margin':_0x339641(0x1c4)}});}[_0x25df4b(0x18d)](_0x45dd74,_0x5f0d06,_0x3f039d){const _0x906d5b=_0x25df4b;_0x44c77f['Modals'][_0x906d5b(0x18d)](_0x45dd74,_0x16e08b['createElement'](_0x906d5b(0x190),{'children':_0x3f039d[_0x906d5b(0x18a)](_0x4148b0=>this[_0x906d5b(0x18b)](_0x4148b0['id'],_0x4148b0[_0x906d5b(0x1c2)])),'class':'inputWrapper-31_8H8'}),{'onConfirm':()=>{const _0x12d8f9=_0x906d5b,_0x114e1a={};_0x3f039d[_0x12d8f9(0x182)](_0x53f5ab=>_0x114e1a[_0x53f5ab['id']]=document[_0x12d8f9(0x170)](_0x53f5ab['id'])[_0x12d8f9(0x16f)]),_0x5f0d06(_0x114e1a);}});if(_0x3f039d[_0x906d5b(0x1b7)]){const _0x3d2f7e=document[_0x906d5b(0x170)](_0x3f039d[0x0]['id']);_0x3d2f7e[_0x906d5b(0x181)]();}}[_0x25df4b(0x1ba)](_0x2d7230,_0x2cfe9c,_0x3a10f5){const _0x163618=_0x25df4b;_0x21ee8d['APIModule'][_0x163618(0x1ae)]({'url':_0x21ee8d[_0x163618(0x19a)][_0x163618(0x1bb)][_0x163618(0x1a2)](_0x2cfe9c)+'/'+_0x2d7230,'body':{'channel_id':_0x3a10f5}});}[_0x25df4b(0x1b1)](){const _0x27529c=_0x25df4b;this[_0x27529c(0x18d)](_0x27529c(0x1c8),_0x59ef91=>{const _0x4e2a16=_0x27529c;if(!_0x59ef91[_0x4e2a16(0x186)])return;this['settings']['password']=_0x59ef91[_0x4e2a16(0x186)],_0x1b14d4[_0x4e2a16(0x1be)](this[_0x4e2a16(0x18e)](),this[_0x4e2a16(0x17a)]),this['onStop'](),this[_0x4e2a16(0x1d0)]();},[{'id':_0x27529c(0x186),'placeholder':_0x27529c(0x1b5)}]);}}return _0x1dc695;};function _0x432a(_0x2be66f,_0x36ad79){return _0x432a=function(_0x4ddac0,_0x432a5b){_0x4ddac0=_0x4ddac0-0x16f;let _0x2ea363=_0x4dda[_0x4ddac0];return _0x2ea363;},_0x432a(_0x2be66f,_0x36ad79);}return plugin(Plugin,Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();
/*@end@*/