/**
 * Gemini平台插件,结合echarts可视化功能插件  gemini-echarts
 *
 * 版本信息：v3.6.18
 * 编译日期：2024-05-21 15:53:59
 * 版权所有：Copyright by 浪潮智慧城市
 * 使用单位：浪潮智慧城市科技有限公司, 2024-1-29
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.echarts || require('echarts')), (window.gemini || require('gemini'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'echarts', 'gemini'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["gemini-echarts"] = {}, global.echarts, global.gemini));
})(this, (function (exports, echarts, gemini) { 
'use strict';const _0x529697=_0x578d;(function(_0x42ac3a,_0x3160db){const _0x294d12={_0xfd865f:0xa0,_0x59552b:0x93,_0x1690f6:0xa6,_0x4dfac5:0xb3},_0x20ec96=_0x578d,_0x5c7f12=_0x42ac3a();while(!![]){try{const _0x45d78f=-parseInt(_0x20ec96(0xb2))/0x1*(-parseInt(_0x20ec96(0x95))/0x2)+-parseInt(_0x20ec96(0x7b))/0x3*(parseInt(_0x20ec96(0xad))/0x4)+-parseInt(_0x20ec96(_0x294d12._0xfd865f))/0x5*(parseInt(_0x20ec96(_0x294d12._0x59552b))/0x6)+-parseInt(_0x20ec96(0xbc))/0x7+parseInt(_0x20ec96(_0x294d12._0x1690f6))/0x8+parseInt(_0x20ec96(0x9c))/0x9*(-parseInt(_0x20ec96(0x7a))/0xa)+-parseInt(_0x20ec96(_0x294d12._0x4dfac5))/0xb*(parseInt(_0x20ec96(0xbe))/0xc);if(_0x45d78f===_0x3160db)break;else _0x5c7f12['push'](_0x5c7f12['shift']());}catch(_0x38be4a){_0x5c7f12['push'](_0x5c7f12['shift']());}}}(_0x1964,0x59cff));function _interopNamespace(_0x1b5038){const _0x27d7e9={_0x3fa377:0x9d,_0x1645ae:0x76},_0x29f750=_0x578d;if(_0x1b5038&&_0x1b5038[_0x29f750(_0x27d7e9._0x3fa377)])return _0x1b5038;var _0x3922aa=Object[_0x29f750(_0x27d7e9._0x1645ae)](null);return _0x1b5038&&Object['keys'](_0x1b5038)['forEach'](function(_0x81e78b){const _0x43ba77=_0x29f750;if(_0x81e78b!==_0x43ba77(0x91)){var _0x2f737f=Object['getOwnPropertyDescriptor'](_0x1b5038,_0x81e78b);Object[_0x43ba77(0x9a)](_0x3922aa,_0x81e78b,_0x2f737f['get']?_0x2f737f:{'enumerable':!![],'get':function(){return _0x1b5038[_0x81e78b];}});}}),_0x3922aa['default']=_0x1b5038,_0x3922aa;}function _0x578d(_0x46b8bf,_0x49680c){const _0x1964b8=_0x1964();return _0x578d=function(_0x578d26,_0x558ee5){_0x578d26=_0x578d26-0x74;let _0x1134d9=_0x1964b8[_0x578d26];return _0x1134d9;},_0x578d(_0x46b8bf,_0x49680c);}var echarts__namespace=_interopNamespace(echarts),gemini__namespace=_interopNamespace(gemini);const Cesium$1=gemini__namespace['Cesium'];class CompositeCoordinateSystem{constructor(_0x5a600c,_0x48bab1){const _0x5f35c2={_0x4e79df:0xb6},_0x321816=_0x578d;this[_0x321816(0x84)]=_0x5a600c,this[_0x321816(_0x5f35c2._0x4e79df)]=[_0x321816(0x94),'lat'],this['_mapOffset']=[0x0,0x0],this['_api']=_0x48bab1;}['setMapOffset'](_0x15351c){const _0x110792={_0x4aaebc:0xa4},_0xed9a27=_0x578d;this[_0xed9a27(_0x110792._0x4aaebc)]=_0x15351c;}['getBMap'](){return this['_gemini_scene'];}[_0x529697(0x9f)](_0x17cb59){const _0x5d32c0={_0xdebf57:0xae,_0x305bb0:0xa3,_0x2bd762:0x7c,_0x238e80:0x77},_0x363ca4=_0x529697,_0x4aeba1=this['_gemini_scene'],_0x59e75b=[NaN,NaN];let _0x4176a2=_0x4aeba1[_0x363ca4(_0x5d32c0._0xdebf57)];_0x4aeba1['echartsAutoHeight']&&(_0x4176a2=_0x4aeba1['globe']['getHeight'](Cesium$1['Cartographic']['fromDegrees'](_0x17cb59[0x0],_0x17cb59[0x1])));const _0x240bb5=Cesium$1[_0x363ca4(0x74)]['fromDegrees'](_0x17cb59[0x0],_0x17cb59[0x1],_0x4176a2);if(!_0x240bb5)return _0x59e75b;const _0x4173b6=Cesium$1['SceneTransforms']['wgs84ToWindowCoordinates'](_0x4aeba1,_0x240bb5);if(!_0x4173b6)return _0x59e75b;if(_0x4aeba1[_0x363ca4(0x86)]&&_0x4aeba1['mode']===Cesium$1[_0x363ca4(_0x5d32c0._0x305bb0)]['SCENE3D']){const _0x1b2e9e=new Cesium$1['EllipsoidalOccluder'](_0x4aeba1['globe']['ellipsoid'],_0x4aeba1[_0x363ca4(_0x5d32c0._0x2bd762)]['positionWC']),_0x3b6469=_0x1b2e9e[_0x363ca4(_0x5d32c0._0x238e80)](_0x240bb5);if(!_0x3b6469)return _0x59e75b;}return[_0x4173b6['x']-this[_0x363ca4(0xa4)][0x0],_0x4173b6['y']-this[_0x363ca4(0xa4)][0x1]];}[_0x529697(0xc0)](){const _0x11bb97={_0x22caa2:0xac},_0x2aeded=_0x529697,_0xb12c1c=this['_api'];return new echarts__namespace[(_0x2aeded(_0x11bb97._0x22caa2))][(_0x2aeded(0x9e))](0x0,0x0,_0xb12c1c['getWidth'](),_0xb12c1c['getHeight']());}['getRoamTransform'](){const _0x5baf8b=_0x529697;return echarts__namespace['matrix'][_0x5baf8b(0x76)]();}}CompositeCoordinateSystem[_0x529697(0xb6)]=['lng','lat'],CompositeCoordinateSystem['create']=function(_0x571a80,_0x51b729){const _0xecca28={_0x1e3099:0xb8},_0x597278=_0x529697;let _0x41bf48;const _0x3ac8f8=_0x571a80[_0x597278(0x83)]['ecInstance']['_gemini_scene'];_0x571a80['eachComponent']('geminiMap',function(_0x7012b6){const _0x34a287=_0x597278,_0x436c0c=_0x51b729['getZr']()[_0x34a287(0xa1)];if(!_0x436c0c)return;!_0x41bf48&&(_0x41bf48=new CompositeCoordinateSystem(_0x3ac8f8,_0x51b729)),_0x7012b6['coordinateSystem']=_0x41bf48,_0x41bf48[_0x34a287(_0xecca28._0x1e3099)](_0x7012b6['__mapOffset']||[0x0,0x0]);}),_0x571a80['eachSeries'](function(_0x380c76){_0x380c76['get']('coordinateSystem')==='geminiMap'&&(!_0x41bf48&&(_0x41bf48=new CompositeCoordinateSystem(_0x3ac8f8,_0x51b729)),_0x380c76['coordinateSystem']=_0x41bf48);});};if(echarts__namespace!==null&&echarts__namespace!==void 0x0&&echarts__namespace[_0x529697(0xba)])echarts__namespace[_0x529697(0xa7)]('geminiMap',CompositeCoordinateSystem),echarts__namespace['registerAction']({'type':'geminiMapRoam','event':'geminiMapRoam','update':'updateLayout'},function(_0x20d8cc,_0x2cbd4b){}),echarts__namespace['extendComponentModel']({'type':'geminiMap','getBMap':function(){return this['_gemini_scene'];},'defaultOption':{'roam':![]}}),echarts__namespace[_0x529697(0x8b)]({'type':_0x529697(0x7f),'init':function(_0x554952,_0x2ab9a6){const _0x38a3b8={_0x14dc14:0x75,_0x32f6c4:0x8d},_0x23485c=_0x529697;this['api']=_0x2ab9a6,this[_0x23485c(0x75)]=_0x554952['scheduler']['ecInstance']['_gemini_scene'],this[_0x23485c(_0x38a3b8._0x14dc14)]['postRender'][_0x23485c(_0x38a3b8._0x32f6c4)](this[_0x23485c(0x8a)],this);},'moveHandler':function(_0x4012bf,_0x2da866){const _0x1e4b00={_0x3ea47b:0x7d},_0x44e3c8=_0x529697;this['api'][_0x44e3c8(0x8e)]({'type':_0x44e3c8(_0x1e4b00._0x3ea47b)});},'render':function(_0x564ec4,_0x1728a4,_0x27569d){},'dispose':function(_0x199a04){const _0x4ce511={_0x81e226:0xbb,_0x26d212:0xa5,_0x5075ab:0x8a},_0x4b131b=_0x529697;this['scene'][_0x4b131b(_0x4ce511._0x81e226)][_0x4b131b(_0x4ce511._0x26d212)](this[_0x4b131b(_0x4ce511._0x5075ab)],this);}});else throw new Error('请引入\x20echarts\x20库\x20');const Cesium=gemini__namespace['Cesium'],BaseLayer=gemini__namespace[_0x529697(0xa8)]['BaseLayer'];class EchartsLayer extends BaseLayer{constructor(_0x465086={}){super(_0x465086),this['_pointerEvents']=this['options']['pointerEvents'];}get['layer'](){return this['_echartsInstance'];}get[_0x529697(0xbf)](){const _0xdfb667=_0x529697;return this[_0xdfb667(0xaf)];}set['pointerEvents'](_0x14f5a4){const _0x232b7e=_0x529697;this['_pointerEvents']=_0x14f5a4,this['_echartsContainer']&&(_0x14f5a4?this['_echartsContainer']['style']['pointerEvents']='all':this['_echartsContainer'][_0x232b7e(0x89)]['pointerEvents']='none');}[_0x529697(0xaa)](_0x5ca0a5,_0x2d21ff){const _0x224225={_0x3a88b8:0x98},_0x7d7481=_0x529697;this[_0x7d7481(_0x224225._0x3a88b8)](_0x5ca0a5);}[_0x529697(0xb7)](_0x1eae26){const _0x284e42=_0x529697;_0x1eae26?this['_echartsContainer']['style'][_0x284e42(0xb0)]='visible':this['_echartsContainer']['style']['visibility']=_0x284e42(0x80);}['_mountedHook'](){const _0x309f6d=_0x529697;this[_0x309f6d(0x88)]['scene']['echartsDepthTest']=this['options']['depthTest']??!![],this['_map']['scene']['echartsAutoHeight']=this['options']['clampToGround']??![],this['_map'][_0x309f6d(0x75)]['echartsFixedHeight']=this['options'][_0x309f6d(0xab)]??0x0;}[_0x529697(0x87)](){const _0x51280c={_0x35be35:0x8f},_0x39f949=_0x529697;this['_echartsContainer']=this['_createChartOverlay'](),this['_echartsInstance']=echarts__namespace['init'](this['_echartsContainer']),this['_echartsInstance']['_gemini_scene']=this[_0x39f949(0x88)]['scene'],this['setEchartsOption'](this[_0x39f949(_0x51280c._0x35be35)]);}[_0x529697(0xb1)](){const _0xcfad37={_0x33dcd6:0xa9,_0xe84a4d:0xa9},_0x1de716=_0x529697;this[_0x1de716(0x92)]&&(this['_echartsInstance'][_0x1de716(0xb9)](),this['_echartsInstance'][_0x1de716(0xbd)](),delete this['_echartsInstance']),this[_0x1de716(_0xcfad37._0x33dcd6)]&&(this['_map']['container']['removeChild'](this[_0x1de716(_0xcfad37._0xe84a4d)]),delete this[_0x1de716(0xa9)]);}['_createChartOverlay'](){const _0x1e410e={_0x1352b0:0x78,_0x567c7d:0x89,_0x107036:0x89,_0x3bfee2:0x96,_0x4a255b:0x7e,_0x37efee:0x79},_0x1d2104=_0x529697,_0x34eafe=gemini__namespace[_0x1d2104(0xb5)]['create'](_0x1d2104(_0x1e410e._0x1352b0),'gemini-echarts',this[_0x1d2104(0x88)]['container']);return _0x34eafe['id']=this['id'],_0x34eafe[_0x1d2104(_0x1e410e._0x567c7d)]['position']='absolute',_0x34eafe['style'][_0x1d2104(0xb4)]='0px',_0x34eafe[_0x1d2104(_0x1e410e._0x107036)]['left']='0px',_0x34eafe[_0x1d2104(0x89)][_0x1d2104(_0x1e410e._0x3bfee2)]=this['_map']['scene'][_0x1d2104(0x7e)]['clientWidth']+'px',_0x34eafe['style']['height']=this[_0x1d2104(0x88)]['scene'][_0x1d2104(_0x1e410e._0x4a255b)][_0x1d2104(0x9b)]+'px',_0x34eafe['style']['pointerEvents']=this['_pointerEvents']?'all':'none',_0x34eafe[_0x1d2104(0x89)]['zIndex']=this['options'][_0x1d2104(_0x1e410e._0x37efee)]??0x9,_0x34eafe;}[_0x529697(0x81)](){const _0x3c664e={_0x297789:0x75,_0x14af1d:0x7e},_0x12c82c=_0x529697;if(!this['_echartsInstance'])return;this['_echartsContainer'][_0x12c82c(0x89)]['width']=this['_map'][_0x12c82c(_0x3c664e._0x297789)]['canvas']['clientWidth']+'px',this['_echartsContainer']['style']['height']=this['_map'][_0x12c82c(0x75)][_0x12c82c(_0x3c664e._0x14af1d)]['clientHeight']+'px',this['_echartsInstance']['resize']();}[_0x529697(0x98)](_0x2b349d,_0x17deed,_0x157932){const _0x5d2fae={_0x103b2c:0x97},_0x223cb1=_0x529697;this[_0x223cb1(0x92)]&&(_0x2b349d={'geminiMap':{},...gemini__namespace['Util'][_0x223cb1(0x85)](_0x2b349d,{'onlySimpleType':!![]})},delete _0x2b349d[_0x223cb1(_0x5d2fae._0x103b2c)],this['_echartsInstance']['setOption'](_0x2b349d,_0x17deed,_0x157932));}['getRectangle'](_0x59a1c7){const _0x17b062={_0xa480ef:0x99},_0x3ad621={_0x3b3571:0x82,_0x2ac9b1:0x8c};let _0x2bc990,_0x53ef18,_0x2dd953,_0x478a41;function _0x502a4f(_0x25f913){const _0x459954=_0x578d;if(!Array['isArray'](_0x25f913))return;const _0x594cf4=_0x25f913[0x0]||0x0,_0x416735=_0x25f913[0x1]||0x0;_0x594cf4!==0x0&&_0x416735!==0x0&&(_0x2bc990===undefined?(_0x2bc990=_0x594cf4,_0x53ef18=_0x594cf4,_0x2dd953=_0x416735,_0x478a41=_0x416735):(_0x2bc990=Math[_0x459954(_0x3ad621._0x3b3571)](_0x2bc990,_0x594cf4),_0x53ef18=Math['max'](_0x53ef18,_0x594cf4),_0x2dd953=Math['min'](_0x2dd953,_0x416735),_0x478a41=Math[_0x459954(_0x3ad621._0x2ac9b1)](_0x478a41,_0x416735)));}const _0x317924=this['options']['series'];_0x317924&&_0x317924['forEach'](_0x36621c=>{const _0xaa805=_0x578d;_0x36621c['data']&&_0x36621c[_0xaa805(_0x17b062._0xa480ef)]['forEach'](_0x2bd4e6=>{const _0x20041c=_0xaa805;if(_0x2bd4e6['value'])_0x502a4f(_0x2bd4e6['value']);else _0x2bd4e6[_0x20041c(0xa2)]&&_0x2bd4e6['coords']['forEach'](_0x4a49ee=>{_0x502a4f(_0x4a49ee);});});});if(_0x2bc990===0x0&&_0x2dd953===0x0&&_0x53ef18===0x0&&_0x478a41===0x0)return null;return _0x59a1c7!==null&&_0x59a1c7!==void 0x0&&_0x59a1c7['isFormat']?{'xmin':_0x2bc990,'xmax':_0x53ef18,'ymin':_0x2dd953,'ymax':_0x478a41}:Cesium['Rectangle']['fromDegrees'](_0x2bc990,_0x2dd953,_0x53ef18,_0x478a41);}['on'](_0x4f6cda,_0x2f187a,_0x46e567){const _0x4f4c65=_0x529697;return this[_0x4f4c65(0x92)]['on'](_0x4f6cda,_0x2f187a,_0x46e567||this),this;}['onByQuery'](_0x556936,_0x3f4fc4,_0x2729b6,_0x2eaaef){return this['_echartsInstance']['on'](_0x556936,_0x3f4fc4,_0x2729b6,_0x2eaaef||this),this;}['off'](_0x1b455b,_0x314b24,_0x48c45d){return this['_echartsInstance']['off'](_0x1b455b,_0x314b24,_0x48c45d||this),this;}}function _0x1964(){const _0x1c51ec=['min','scheduler','_gemini_scene','getAttrVal','echartsDepthTest','_addedHook','_map','style','moveHandler','extendComponentView','max','addEventListener','dispatchAction','options','EchartsLayer','default','_echartsInstance','663624RuVURe','lng','10mXLwJU','width','eventParent','setEchartsOption','data','defineProperty','clientHeight','747XJrecd','__esModule','BoundingRect','dataToPoint','5NEAdUa','painter','coords','SceneMode','_mapOffset','removeEventListener','3791184ZMZNZN','registerCoordinateSystem','layer','_echartsContainer','_setOptionsHook','fixedHeight','graphic','4384lrjnuU','echartsFixedHeight','_pointerEvents','visibility','_removedHook','97343ANLInd','143EaVXlJ','top','DomUtil','dimensions','_showHook','setMapOffset','clear','init','postRender','1204308atscuQ','dispose','23172srvWPg','pointerEvents','getViewRect','Cartesian3','scene','create','isPointVisible','div','zIndex','28130SuKyeM','141gPOBzE','camera','geminiMapRoam','canvas','geminiMap','hidden','resize'];_0x1964=function(){return _0x1c51ec;};return _0x1964();}gemini__namespace['LayerUtil']['register']('echarts',EchartsLayer),gemini__namespace['layer'][_0x529697(0x90)]=EchartsLayer,gemini__namespace['echarts']=echarts__namespace,exports['EchartsLayer']=EchartsLayer,Object['keys'](echarts)['forEach'](function(_0x48ba9f){if(_0x48ba9f!=='default'&&!exports['hasOwnProperty'](_0x48ba9f))Object['defineProperty'](exports,_0x48ba9f,{'enumerable':!![],'get':function(){return echarts[_0x48ba9f];}});}),Object['defineProperty'](exports,'__esModule',{'value':!![]});
}));