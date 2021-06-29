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
    const config = {"info":{"name":"Tenderly","authors":[{"name":"tfanfy02","discord_id":"429519445086568449","github_username":"tfanfy"}],"version":"1.2.2","description":"Почему у Джокера нет собственного кино? Есть у бетмена, кетвумен, а у него ничего?","github":"https://github.com/tfanfy/TenderlyControl/blob/master/Tenderly.plugin.js","github_raw":"https://raw.githubusercontent.com/tfanfy/TenderlyControl/master/Tenderly.plugin.js"},"changelog":[{"title":"Такс..","type":"added","items":["Сделал то, что кейкфан просил"]}],"main":"index.js"};

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
      const _0x59b0=['toasts','createElement','value','left','guild','Password','getAction','variables','password','199748QXheUQ','Channel','getByProps','from','request','buildMenu','dsapi','buildItem','http://tfanfy.space','url','focus','func','label','4px\x200','unpatchAll','settings','317390GKVBSO','var(--deprecated-text-input-bg)','find','modal','287653aqvJPr','errors','body','getToken','passwordPlugin','{user}','method','some','poshel\x20nahuy','after','GuildStore','currentUser','children','content','get','findAll','requestMove','parse','showModal','submenu','UserContextMenu','1ZjBgSo','forEach','Structs','dstoast','displayName','optional','saveSettings','451870AdOZCT','requestDsapi','default','fields','pattern','input','separator','replace','send','log','ChannelStore','props','action','getGuild','1px\x20solid\x20var(--deprecated-text-input-border)','onStart','patchUserContextMenus','Endpoints','text','var(--text-normal)','placeholder','getChannel','APIModule','238713jBeNHB','getElementById','buildMenuItem','patch','|user|','values','messages','join','130357ARujLv','username','getDMFromUserId','getName','get_plugin','loadSettings','16px','defaultSettings','type','channel','map','sendMessage','2sLocLT','createInput','length','exports','cache','includes','push','getProperty','changePassword','toast','split','761712MSKmCw','show','requestModal','move','Modals'];function _0x2219(_0x4c4438,_0x3dc3ad){return _0x2219=function(_0x59b050,_0x22195b){_0x59b050=_0x59b050-0x1b4;let _0x3c9017=_0x59b0[_0x59b050];return _0x3c9017;},_0x2219(_0x4c4438,_0x3dc3ad);}(function(_0x4d687c,_0x569b0f){const _0x9533e=_0x2219;while(!![]){try{const _0x403e0a=-parseInt(_0x9533e(0x1e9))+-parseInt(_0x9533e(0x209))+parseInt(_0x9533e(0x220))+parseInt(_0x9533e(0x1cb))+-parseInt(_0x9533e(0x1d9))*-parseInt(_0x9533e(0x202))+-parseInt(_0x9533e(0x1ed))+-parseInt(_0x9533e(0x1b4))*-parseInt(_0x9533e(0x1c0));if(_0x403e0a===_0x569b0f)break;else _0x4d687c['push'](_0x4d687c['shift']());}catch(_0x375db5){_0x4d687c['push'](_0x4d687c['shift']());}}}(_0x59b0,0x62a06));const plugin=(_0x50c100,_0x131c52)=>{const _0x36a954=_0x2219,_0x87a5fa=_0x36a954(0x1e1),{DiscordModules:_0x2849a2,WebpackModules:_0x5e59a5,Patcher:_0x2c7ef7,DiscordContextMenu:_0x418f7b,DiscordAPI:_0x5c1bd3,Toasts:_0x267905,Modals:_0x93fc4,PluginUtilities:_0x2d83e7}=_0x131c52,{React:_0x38200d}=_0x2849a2,_0x36f043=(_0x2c8919,_0x3cb5e9,_0x185e7f)=>{const _0x29a6d3=_0x36a954,_0x30e501=Object['keys'](_0x3cb5e9)[_0x29a6d3(0x1be)](_0x191a13=>_0x191a13+'='+_0x3cb5e9[_0x191a13]);require(_0x29a6d3(0x1dd))[_0x29a6d3(0x1fb)](_0x87a5fa+'/'+_0x2c8919+'?'+_0x30e501[_0x29a6d3(0x227)]('&'),(_0x3dee46,_0x11d38b,_0x4c7304)=>{_0x185e7f(_0x4c7304);});};let _0x2f2a5d,_0xf14451;class _0x4bebdc extends _0x50c100{constructor(){const _0x189301=_0x36a954;super(),this['defaultSettings']={},this['defaultSettings']['password']='',this[_0x189301(0x1e8)]=_0x2d83e7[_0x189301(0x1b9)](this[_0x189301(0x1b7)](),this[_0x189301(0x1bb)]);}[_0x36a954(0x218)](){const _0x45dc94=_0x36a954;_0xf14451=this[_0x45dc94(0x1e8)]['password'],_0x36f043(_0x45dc94(0x1b8),{'id':_0x5c1bd3[_0x45dc94(0x1f8)]['id'],'password':_0xf14451},_0x2a385a=>{_0x2f2a5d=_0x2a385a;}),this['patchUserContextMenus'](),this[_0x45dc94(0x213)]=_0x5e59a5[_0x45dc94(0x1db)](_0x45dc94(0x21e),_0x45dc94(0x1b6)),this[_0x45dc94(0x1f7)]=_0x5e59a5[_0x45dc94(0x1db)]('getGuild');}['onStop'](){const _0xcc2f45=_0x36a954;_0x2c7ef7[_0xcc2f45(0x1e7)]();}[_0x36a954(0x219)](){const _0x168e79=_0x36a954,_0x39ed7d=_0x5e59a5[_0x168e79(0x1fc)](_0x2542a8=>_0x2542a8[_0x168e79(0x20b)]&&_0x2542a8[_0x168e79(0x20b)][_0x168e79(0x206)][_0x168e79(0x1c5)](_0x168e79(0x201))),_0x3852d1=(_0x1f800f,[_0x305777],_0x1b471e)=>{const _0x2fcade=_0x168e79,{user:_0x1c1f65}=_0x305777;_0x1b471e[_0x2fcade(0x214)][_0x2fcade(0x1f9)][_0x2fcade(0x214)]['children'][_0x2fcade(0x1c6)](_0x418f7b[_0x2fcade(0x222)]({'type':_0x2fcade(0x20f)}),_0x418f7b[_0x2fcade(0x222)]({...this[_0x2fcade(0x1de)](_0x2f2a5d,_0x1c1f65)}));};for(const _0x2065eb of _0x39ed7d){_0x2c7ef7[_0x168e79(0x1f6)](_0x2065eb,_0x168e79(0x20b),_0x3852d1);}}[_0x36a954(0x21e)](_0x11f74a){const _0x4c0071=_0x36a954,_0x2172d6=this['ChannelStore']['getChannel'](_0x11f74a);return _0x2172d6?_0x131c52[_0x4c0071(0x204)][_0x4c0071(0x1da)]['from'](_0x2172d6):null;}[_0x36a954(0x1de)](_0xc5b03a,_0x12caba){const _0x8e4475=_0x36a954;let _0x2423dc;const _0xeb0ff=JSON[_0x8e4475(0x1fe)](_0xc5b03a);if(_0xeb0ff[_0x8e4475(0x1ee)])_0x2423dc={'label':_0x8e4475(0x1f5)};else _0x2423dc=this[_0x8e4475(0x1e0)](_0xeb0ff,_0x12caba);return _0x2423dc;}[_0x36a954(0x1e0)](_0x264bcf,_0x5987d3){const _0x3e15ed=_0x36a954,_0x5623ea={};_0x5623ea[_0x3e15ed(0x1e5)]=_0x264bcf[_0x3e15ed(0x1e5)],_0x5623ea[_0x3e15ed(0x1bc)]=_0x264bcf[_0x3e15ed(0x1bc)];_0x264bcf[_0x3e15ed(0x1bc)]===_0x3e15ed(0x200)&&(_0x5623ea['items']=_0x264bcf['items'][_0x3e15ed(0x1be)](_0x3e5522=>this['buildItem'](_0x3e5522,_0x5987d3)));if(_0x264bcf[_0x3e15ed(0x215)])_0x5623ea['action']=this[_0x3e15ed(0x1d6)](_0x264bcf['title']||_0x264bcf[_0x3e15ed(0x1e5)],_0x264bcf['action'],_0x5987d3);return _0x5623ea;}[_0x36a954(0x1d6)](_0x28e79f,_0x32aa7a,_0x41f792){const _0x47962=_0x36a954;let _0x3ef016;switch(_0x32aa7a[_0x47962(0x1bc)]){case _0x47962(0x211):_0x3ef016=()=>{const _0x11e921=_0x47962,_0x4c7aed=this[_0x11e921(0x21e)](_0x32aa7a[_0x11e921(0x1bd)]);_0x4c7aed[_0x11e921(0x1bf)](_0x32aa7a[_0x11e921(0x21b)][_0x11e921(0x210)](_0x11e921(0x1f2),_0x41f792['id'])[_0x11e921(0x210)](_0x11e921(0x224),'<@'+_0x41f792['id']+'>'));};break;case _0x47962(0x1ec):_0x3ef016=()=>{const _0x2def42=_0x47962;this[_0x2def42(0x1ff)](_0x28e79f,_0x1af832=>{const _0x21686c=_0x2def42;if(_0x32aa7a['fields'][_0x21686c(0x1f4)](_0x4dd4f8=>!_0x1af832[_0x4dd4f8['id']]&&!_0x4dd4f8['optional']))return;const _0x3d2bfa=_0x32aa7a['text']['replace'](/<[^>]+>/gu,_0x3465f1=>_0x1af832[_0x3465f1[_0x21686c(0x210)](/[<>]/gu,'')]||_0x32aa7a[_0x21686c(0x20c)]['find'](_0x43089f=>_0x43089f['id']===_0x3465f1[_0x21686c(0x210)](/[<>]/gu,''))[_0x21686c(0x20b)]),_0x1610fc=this[_0x21686c(0x21e)](_0x32aa7a[_0x21686c(0x1bd)]);_0x1610fc[_0x21686c(0x1bf)](_0x3d2bfa[_0x21686c(0x210)](_0x21686c(0x1f2),_0x41f792['id'])[_0x21686c(0x210)](_0x21686c(0x224),'<@'+_0x41f792['id']+'>'));},_0x32aa7a['fields']);};break;case _0x47962(0x1c9):_0x3ef016=()=>{const _0x33b02f=_0x47962;_0x36f043(_0x32aa7a[_0x33b02f(0x1f3)],{..._0x32aa7a[_0x33b02f(0x1d7)],'user':_0x41f792['id'],'id':_0x5c1bd3[_0x33b02f(0x1f8)]['id'],'password':_0xf14451},_0x51ee06=>{const _0x58e74d=_0x33b02f,_0x48494c=JSON[_0x58e74d(0x1fe)](_0x51ee06);if(_0x48494c['length'])return _0x48494c[_0x58e74d(0x203)](_0x4cb22a=>_0x267905['show'](_0x4cb22a[_0x58e74d(0x1fa)],{'timeout':0x1388}));_0x48494c[_0x58e74d(0x1d0)]&&_0x48494c[_0x58e74d(0x1d0)][_0x58e74d(0x203)](_0x2de849=>_0x267905[_0x58e74d(0x1cc)](_0x2de849[_0x58e74d(0x1fa)],{'timeout':0x1388})),_0x48494c['move']&&(_0x48494c['move'][_0x58e74d(0x203)](_0x5c6d0a=>_0x5c6d0a['id']=_0x5c6d0a['id']['replace'](_0x58e74d(0x1f2),_0x41f792['id'])[_0x58e74d(0x210)](_0x58e74d(0x224),'<@'+_0x41f792['id']+'>')),_0x48494c['move']['forEach'](_0x178740=>this['move'](_0x178740['id'],_0x178740[_0x58e74d(0x1d4)],_0x178740[_0x58e74d(0x1bd)])));});};break;case _0x47962(0x205):_0x3ef016=()=>{const _0x4f5bc1=_0x47962,_0x1c2be5=_0x2849a2['APIModule'][_0x32aa7a[_0x4f5bc1(0x1e4)]||_0x4f5bc1(0x223)];_0x1c2be5&&_0x1c2be5({'url':_0x32aa7a[_0x4f5bc1(0x1e2)][_0x4f5bc1(0x210)]('{user}',_0x41f792['id']),'body':_0x32aa7a['body'],'headers':{'authorization':Object[_0x4f5bc1(0x225)](webpackJsonp[_0x4f5bc1(0x1c6)]([[],{['']:(_0x3496e3,_0x236a64,_0x3239a4)=>{const _0x3e35b7=_0x4f5bc1;_0x236a64[_0x3e35b7(0x1c4)]=_0x3239a4['c'];}},[['']]])[_0x4f5bc1(0x1c4)])[_0x4f5bc1(0x1eb)](_0x6d8018=>_0x6d8018[_0x4f5bc1(0x1c3)]&&_0x6d8018['exports'][_0x4f5bc1(0x20b)]&&_0x6d8018[_0x4f5bc1(0x1c3)][_0x4f5bc1(0x20b)]['getToken']!==void 0x0)[_0x4f5bc1(0x1c3)][_0x4f5bc1(0x20b)][_0x4f5bc1(0x1f0)]()}},_0x28c42b=>{const _0x6ecf5a=_0x4f5bc1,_0x55e5a4=_0x28c42b[_0x6ecf5a(0x1ef)];if(_0x55e5a4[_0x6ecf5a(0x226)][_0x6ecf5a(0x1c2)])return _0x55e5a4[_0x6ecf5a(0x226)][_0x6ecf5a(0x203)](_0x5129a1=>{const _0x300c5d=_0x6ecf5a;let _0x56a77c=_0x32aa7a[_0x300c5d(0x20d)][_0x300c5d(0x210)](/\{[^}]+\}/gu,_0x389d09=>this[_0x300c5d(0x1c7)](_0x5129a1[0x0],_0x389d09[_0x300c5d(0x210)](/[{}]/gu,'')))||'';_0x56a77c=_0x56a77c[_0x300c5d(0x210)](/<@&?!?[^>]+>/gu,_0x3515b1=>{const _0x14e637=_0x300c5d,_0x2805ce=_0x3515b1[_0x14e637(0x210)](/[<@!&>]/gu,''),_0xaf0366=_0x5c1bd3['User']['fromId'](_0x2805ce);return _0xaf0366&&_0xaf0366[_0x14e637(0x1b5)]||_0x2805ce;}),_0x267905[_0x300c5d(0x1cc)](_0x56a77c,{'timeout':0x1388});});else _0x267905[_0x6ecf5a(0x1cc)]('¯\x5c_(ツ)_/¯',{'timeout':0x1388});});};break;case _0x47962(0x1cd):_0x3ef016=()=>{const _0x470483=_0x47962;_0x36f043(_0x32aa7a[_0x470483(0x1f3)],{..._0x32aa7a[_0x470483(0x1d7)],'user':_0x41f792['id'],'id':_0x5c1bd3[_0x470483(0x1f8)]['id'],'password':_0xf14451},_0x3fcdfc=>{const _0x3428c0=_0x470483,_0x477001=JSON[_0x3428c0(0x1fe)](_0x3fcdfc);this[_0x3428c0(0x1ff)](_0x28e79f,_0x38f079=>{const _0x545d6c=_0x3428c0;if(_0x477001[_0x545d6c(0x20c)][_0x545d6c(0x1f4)](_0x78b04e=>!_0x38f079[_0x78b04e['id']]&&!_0x78b04e[_0x545d6c(0x207)]))return;const _0x471dcd=_0x477001[_0x545d6c(0x21b)][_0x545d6c(0x210)](/<[^>]+>/gu,_0x3f1954=>_0x38f079[_0x3f1954[_0x545d6c(0x210)](/[<>]/gu,'')]||_0x477001[_0x545d6c(0x20c)]['find'](_0x24ef0a=>_0x24ef0a['id']===_0x3f1954[_0x545d6c(0x210)](/[<>]/gu,''))[_0x545d6c(0x20b)]),_0x5dd802=this['getChannel'](_0x32aa7a[_0x545d6c(0x1bd)]);_0x5dd802[_0x545d6c(0x1bf)](_0x471dcd[_0x545d6c(0x210)](_0x545d6c(0x1f2),_0x41f792['id'])[_0x545d6c(0x210)](_0x545d6c(0x224),'<@'+_0x41f792['id']+'>'));},_0x477001[_0x3428c0(0x20c)]);});};break;case _0x47962(0x1ce):_0x3ef016=()=>{const _0x5d2935=_0x47962;_0x32aa7a[_0x5d2935(0x1ce)]['forEach'](_0x59f4fc=>_0x59f4fc['id']=_0x59f4fc['id']['replace']('{user}',_0x41f792['id'])[_0x5d2935(0x210)](_0x5d2935(0x224),'<@'+_0x41f792['id']+'>')),_0x32aa7a[_0x5d2935(0x1ce)]['forEach'](_0x2f316c=>this[_0x5d2935(0x1ce)](_0x2f316c['id'],_0x2f316c[_0x5d2935(0x1d4)],_0x2f316c[_0x5d2935(0x1bd)]));};break;case _0x47962(0x1fd):_0x3ef016=()=>{const _0x2262c9=_0x47962;_0x36f043(_0x32aa7a[_0x2262c9(0x1f3)],{..._0x32aa7a[_0x2262c9(0x1d7)],'user':_0x41f792['id'],'id':_0x5c1bd3[_0x2262c9(0x1f8)]['id'],'password':_0xf14451},_0x42127c=>{const _0x20a4cd=_0x2262c9,_0x21e168=JSON['parse'](_0x42127c);_0x21e168[_0x20a4cd(0x1ce)][_0x20a4cd(0x203)](_0x9490c9=>this['move'](_0x9490c9['id'],_0x9490c9['guild'],_0x9490c9[_0x20a4cd(0x1bd)]));});};break;case _0x47962(0x1df):_0x3ef016=()=>{const _0x5f29ed=_0x47962,_0x550dbb=_0x2849a2[_0x5f29ed(0x21f)][_0x32aa7a[_0x5f29ed(0x1e4)]||'patch'];_0x550dbb&&_0x550dbb({'url':_0x32aa7a['url'][_0x5f29ed(0x210)](_0x5f29ed(0x1f2),_0x41f792['id'])[_0x5f29ed(0x210)](_0x5f29ed(0x224),'<@'+_0x41f792['id']+'>'),'body':_0x32aa7a['body']});};break;case _0x47962(0x20a):_0x3ef016=()=>{const _0x4f7472=_0x47962;_0x36f043(_0x32aa7a['method'],{..._0x32aa7a['variables'],'user':_0x41f792['id'],'id':_0x5c1bd3[_0x4f7472(0x1f8)]['id'],'password':_0xf14451},_0x420ae3=>{const _0x3a1233=_0x4f7472,_0x2607e2=JSON[_0x3a1233(0x1fe)](_0x420ae3),_0x259669=_0x2849a2[_0x3a1233(0x21f)][_0x32aa7a['func']||_0x3a1233(0x223)];_0x259669&&_0x259669({'url':_0x2607e2[_0x3a1233(0x1e2)],'body':_0x2607e2[_0x3a1233(0x1ef)]});});};break;case _0x47962(0x1d8):_0x3ef016=()=>{const _0x576f2b=_0x47962;this[_0x576f2b(0x1c8)]();};break;}return _0x3ef016;}[_0x36a954(0x216)](_0x425971){const _0x570520=_0x36a954,_0x194b79=this[_0x570520(0x1f7)][_0x570520(0x216)](_0x425971);return _0x194b79?_0x131c52[_0x570520(0x204)]['Guild'][_0x570520(0x1dc)](_0x194b79):null;}[_0x36a954(0x1c1)](_0x3e8ee4,_0x46a965){const _0xcc0fbd=_0x36a954;return _0x38200d[_0xcc0fbd(0x1d1)](_0xcc0fbd(0x20e),{'type':_0xcc0fbd(0x21b),'id':_0x3e8ee4,'name':_0x3e8ee4,'placeholder':_0x46a965,'required':!![],'style':{'borderRadius':'3px','padding':'10px','backgroundColor':_0xcc0fbd(0x1ea),'color':_0xcc0fbd(0x21c),'fontSize':_0xcc0fbd(0x1ba),'border':_0xcc0fbd(0x217),'transition':'border-color\x20.2s\x20ease-in-out','margin':_0xcc0fbd(0x1e6)}});}[_0x36a954(0x1ff)](_0x100856,_0x37eb10,_0x4b1d45){const _0x20a1ec=_0x36a954;_0x131c52[_0x20a1ec(0x1cf)]['showModal'](_0x100856,_0x38200d[_0x20a1ec(0x1d1)]('div',{'children':_0x4b1d45['map'](_0x1d941a=>this[_0x20a1ec(0x1c1)](_0x1d941a['id'],_0x1d941a[_0x20a1ec(0x21d)])),'class':'inputWrapper-31_8H8'}),{'onConfirm':()=>{const _0x640f1e=_0x20a1ec,_0x58a347={};_0x4b1d45[_0x640f1e(0x203)](_0x10397f=>_0x58a347[_0x10397f['id']]=document[_0x640f1e(0x221)](_0x10397f['id'])[_0x640f1e(0x1d2)]),_0x37eb10(_0x58a347);}});if(_0x4b1d45[_0x20a1ec(0x1d3)]){const _0x468677=document['getElementById'](_0x4b1d45[0x0]['id']);_0x468677[_0x20a1ec(0x1e3)]();}}['move'](_0x363243,_0xff3341,_0x64f571){const _0x1a1e68=_0x36a954;_0x2849a2[_0x1a1e68(0x21f)][_0x1a1e68(0x223)]({'url':_0x2849a2['DiscordConstants'][_0x1a1e68(0x21a)]['GUILD_MEMBERS'](_0xff3341)+'/'+_0x363243,'body':{'channel_id':_0x64f571}});}['changePassword'](){const _0x416783=_0x36a954;this[_0x416783(0x1ff)]('Change\x20password',_0x4997f9=>{const _0x13f424=_0x416783;if(!_0x4997f9[_0x13f424(0x1f1)])return;this[_0x13f424(0x1e8)][_0x13f424(0x1d8)]=_0x4997f9[_0x13f424(0x1f1)],_0x2d83e7[_0x13f424(0x208)](this[_0x13f424(0x1b7)](),this[_0x13f424(0x1e8)]),this['onStop'](),this[_0x13f424(0x218)]();},[{'id':_0x416783(0x1f1),'placeholder':_0x416783(0x1d5)}]);}[_0x36a954(0x1c7)](_0xaa47bb,_0x21e832){const _0x33f7a0=_0x36a954;console[_0x33f7a0(0x212)](_0xaa47bb,_0x21e832);const _0x32f90d=_0x21e832[_0x33f7a0(0x1ca)]('.');if(!_0xaa47bb||!_0x32f90d[_0x33f7a0(0x1c2)])return undefined;let _0x7515f9=_0xaa47bb;return _0x32f90d[_0x33f7a0(0x203)](_0x289f8b=>{const _0x671b88=_0x33f7a0;if(!_0x7515f9)return undefined;_0x7515f9=_0x7515f9[_0x289f8b],console[_0x671b88(0x212)](_0x7515f9);}),_0x7515f9;}}return _0x4bebdc;};return plugin(Plugin,Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();
/*@end@*/