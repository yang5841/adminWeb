/**
 * Gemini平台插件,结合heatmap可视化功能插件  gemini-heatmap
 *
 * 版本信息：v3.6.18
 * 编译日期：2024-05-20 09:28:42
 * 版权所有：Copyright by 浪潮智慧城市
 * 使用单位：浪潮智慧城市科技有限公司, 2024-1-29
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.gemini || require('gemini')), (window.h337 || require('@mars3d/heatmap.js'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'gemini', '@mars3d/heatmap.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["gemini-heatmap"] = {}, global.gemini, global.h337));
})(this, (function (exports, gemini, h337) { 
'use strict';const _0x1d2c04=_0x5d9f;(function(_0x320896,_0x49f687){const _0x4130e3={_0x248a97:0xc8,_0x265a10:0x9f,_0x335d06:0xa7},_0x17b663=_0x5d9f,_0x354d30=_0x320896();while(!![]){try{const _0x855465=-parseInt(_0x17b663(0xc5))/0x1*(-parseInt(_0x17b663(0x8b))/0x2)+parseInt(_0x17b663(0x94))/0x3+-parseInt(_0x17b663(0x8a))/0x4*(-parseInt(_0x17b663(0x99))/0x5)+parseInt(_0x17b663(_0x4130e3._0x248a97))/0x6+parseInt(_0x17b663(_0x4130e3._0x265a10))/0x7+parseInt(_0x17b663(_0x4130e3._0x335d06))/0x8+-parseInt(_0x17b663(0x9e))/0x9*(parseInt(_0x17b663(0xa4))/0xa);if(_0x855465===_0x49f687)break;else _0x354d30['push'](_0x354d30['shift']());}catch(_0x3fceef){_0x354d30['push'](_0x354d30['shift']());}}}(_0x5ab4,0xa59a5));function _0x5ab4(){const _0x58e4d4=['setOptions','40fSwtYp','14tviAcW','arcDirection','_graphic','Color','copyCanvas','layer','min','forEach','value','1349301scqSbx','style','px;','REPLACE','graphic','294835RAMaMl','type','ALPHA_BLEND','max','uniforms','85329paZlHm','4575739PzZivB','_updatePositionsHook','positions','_addedHook','xmin','2900KuKFsC','points','arc','5729096hKuBYE','StencilFunction','lng','EllipsoidSurfaceAppearance','data','_last_mBounds','_getHeatCanvas','px;height:','_renderer','_container','_layer','Rectangle','configure','lonlat2mercator','remove','create','options','RectanglePrimitive','_positions','请引入\x20heatmap.js\x20库\x20','setPositions','xmax','_createArcGraphic','_graphic2','minCanvasSize','maxCanvasSize','image','addGraphic','heatStyle','diffHeight','63969gtfxMS','floor','ymax','3424590WKQQLK','round','rgba(','toArray','merge','ImageLayer','abs','Util','clear','_heat','LayerUtil','getValueAt','granularity','flyToByAnimationEnd','PointTrans','clientHeight','fromCache','_rectangle','lat','BaseLayer','isFormat','_scale'];_0x5ab4=function(){return _0x58e4d4;};return _0x5ab4();}function _interopNamespace(_0x4f9b87){const _0x360ab8=_0x5d9f;if(_0x4f9b87&&_0x4f9b87['__esModule'])return _0x4f9b87;var _0x9c686d=Object['create'](null);return _0x4f9b87&&Object['keys'](_0x4f9b87)[_0x360ab8(0x92)](function(_0x22bacd){if(_0x22bacd!=='default'){var _0x21a135=Object['getOwnPropertyDescriptor'](_0x4f9b87,_0x22bacd);Object['defineProperty'](_0x9c686d,_0x22bacd,_0x21a135['get']?_0x21a135:{'enumerable':!![],'get':function(){return _0x4f9b87[_0x22bacd];}});}}),_0x9c686d['default']=_0x4f9b87,_0x9c686d;}var gemini__namespace=_interopNamespace(gemini),h337__namespace=_interopNamespace(h337),HeatMaterial='uniform\x20sampler2D\x20image;\x0a\x0aczm_material\x20czm_getMaterial(czm_materialInput\x20materialInput)\x20{\x0a\x20\x20czm_material\x20material\x20=\x20czm_getDefaultMaterial(materialInput);\x0a\x20\x20vec2\x20st\x20=\x20materialInput.st;\x0a\x20\x20vec4\x20colorImage\x20=\x20texture(image,\x20st);\x0a\x20\x20if(colorImage.rgb\x20==\x20vec3(1.0)\x20||\x20colorImage.rgb\x20==\x20vec3(0.0))\x20{\x0a\x20\x20\x20\x20discard;\x0a\x20\x20}\x0a\x20\x20material.diffuse\x20=\x20colorImage.rgb;\x0a\x20\x20material.alpha\x20=\x20colorImage.a;\x0a\x20\x20return\x20material;\x0a}\x0a';if(!h337__namespace['create'])throw new Error(_0x1d2c04(0xba));const Cesium=gemini__namespace['Cesium'],BaseLayer=gemini__namespace['layer'][_0x1d2c04(0x86)],DEF_HEATSTYLE={'maxOpacity':0.8,'minOpacity':0.1,'blur':0.85,'radius':0x19,'gradient':{0.4:'blue',0.6:'green',0.8:'yellow',0.9:'red'}},DEF_STYLE={'arcRadiusScale':1.5,'arcBlurScale':1.5,'vertexFormat':Cesium['EllipsoidSurfaceAppearance']['VERTEX_FORMAT']};class HeatLayer extends BaseLayer{constructor(_0x1c9404={}){const _0x2c339f={_0x33b6b9:0xc0,_0x322b94:0xbf,_0x48bcb3:0xb7,_0xf2d4c8:0xb7},_0x2b47ee=_0x1d2c04;super(_0x1c9404),this['options']['maxCanvasSize']=this['options'][_0x2b47ee(0xc0)]??document['body']['clientWidth'],this['options']['maxCanvasSize']=Math[_0x2b47ee(0x91)](this['options'][_0x2b47ee(_0x2c339f._0x33b6b9)],0x1388),this['options'][_0x2b47ee(_0x2c339f._0x322b94)]=this['options'][_0x2b47ee(0xbf)]??document['body'][_0x2b47ee(0xd7)],this[_0x2b47ee(_0x2c339f._0x48bcb3)]['minCanvasSize']=Math[_0x2b47ee(0x9c)](this['options']['minCanvasSize'],0x2bc),this['options']['heatStyle']={...DEF_HEATSTYLE,...this['options']['heatStyle']},this['options']['style']={...DEF_STYLE,...this[_0x2b47ee(_0x2c339f._0xf2d4c8)]['style']};}get['layer'](){return this['_layer'];}get['heatStyle'](){return this['options']['heatStyle'];}set['heatStyle'](_0x310278){const _0x22c6af={_0x48a477:0xcc,_0x52acd7:0xb7,_0x13ad61:0xc3},_0x415efb=_0x1d2c04;this['options']['heatStyle']=gemini__namespace['Util'][_0x415efb(_0x22c6af._0x48a477)](this[_0x415efb(_0x22c6af._0x52acd7)][_0x415efb(0xc3)],_0x310278),this['_heat']&&(this['_heat'][_0x415efb(0xb3)](this['options'][_0x415efb(_0x22c6af._0x13ad61)]),this['_updatePositionsHook'](!![]));}get['style'](){const _0x4b7607={_0x14d107:0xb7},_0x4d10ed=_0x1d2c04;return this[_0x4d10ed(_0x4b7607._0x14d107)]['style'];}set['style'](_0x3364ca){const _0x47a814={_0x5d73f6:0xcc,_0x4b0730:0xb7},_0x1d9eae=_0x1d2c04;this[_0x1d9eae(0xb7)]['style']=gemini__namespace[_0x1d9eae(0xcf)][_0x1d9eae(_0x47a814._0x5d73f6)](this[_0x1d9eae(_0x47a814._0x4b0730)]['style'],_0x3364ca);}get[_0x1d2c04(0xa1)](){const _0x21ba98={_0x275b12:0xb9},_0x1470fc=_0x1d2c04;return this[_0x1470fc(_0x21ba98._0x275b12)];}set[_0x1d2c04(0xa1)](_0xf6d7ae){const _0x59e2db={_0xd9ed9b:0xbb},_0x2d1efd=_0x1d2c04;this[_0x2d1efd(_0x59e2db._0xd9ed9b)](_0xf6d7ae);}get['coordinates'](){const _0x428ea8=_0x1d2c04,_0x16861e=[];return this[_0x428ea8(0xa5)]['forEach'](_0x5e133c=>{const _0x537c0d=_0x428ea8;_0x16861e['push'](_0x5e133c[_0x537c0d(0xcb)]());}),_0x16861e;}get['rectangle'](){return this['_rectangle'];}['_setOptionsHook'](_0x586a83,_0x59425e){_0x586a83['positions']&&(this['positions']=_0x586a83['positions']);}['_mountedHook'](){const _0x2bd1b4={_0x97374:0x90,_0x328008:0xb1},_0x2910c0=_0x1d2c04;this['style'][_0x2910c0(0x9a)]==='image'?this['_layer']=new gemini__namespace[(_0x2910c0(_0x2bd1b4._0x97374))][(_0x2910c0(0xcd))]({'crs':'EPSG:3857','private':!![]}):this[_0x2910c0(_0x2bd1b4._0x328008)]=new gemini__namespace['layer']['GraphicLayer']({'private':!![]});}[_0x1d2c04(0xa2)](){const _0x50c40e={_0x392015:0xb0,_0x58897e:0xb7,_0x349345:0xb7},_0x3c828b=_0x1d2c04;this['_map']['addLayer'](this['_layer']),this[_0x3c828b(_0x50c40e._0x392015)]=gemini__namespace['DomUtil'][_0x3c828b(0xb6)]('div','gemini-heatmap\x20gemini-hideDiv',this['_map']['container']),this[_0x3c828b(0xb7)]['positions']&&(this['positions']=this[_0x3c828b(_0x50c40e._0x58897e)]['positions']),this[_0x3c828b(_0x50c40e._0x349345)]['flyTo']&&this[_0x3c828b(0xd5)]();}['_removedHook'](){const _0x1748f6={_0x472bed:0xb0},_0x39253c=_0x1d2c04;this['_container']&&(gemini__namespace['DomUtil'][_0x39253c(0xb5)](this['_container']),delete this[_0x39253c(_0x1748f6._0x472bed)]),this['clear'](),this['_map']['removeLayer'](this['_layer']);}['addPosition'](_0x3f07c8,_0x3c66df){const _0x497c29={_0x56c850:0xb9},_0x10b62f=_0x1d2c04;this['_positions']=this[_0x10b62f(_0x497c29._0x56c850)]||[],this['_positions']['push'](_0x3f07c8),this['_updatePositionsHook'](_0x3c66df);}['setPositions'](_0x3b8573,_0xcf52f7){this['_positions']=_0x3b8573,this['_updatePositionsHook'](_0xcf52f7);}['clear'](){const _0x532c02={_0x32f969:0xb1},_0x2531f2=_0x1d2c04;this['_graphic']&&(this['_layer']['removeGraphic'](this['_graphic'],!![]),delete this['_graphic']),this['_graphic2']&&(this[_0x2531f2(_0x532c02._0x32f969)]['removeGraphic'](this['_graphic2'],!![]),delete this['_graphic2']);}[_0x1d2c04(0xa0)](_0xf945f8){const _0x1c8890={_0x146148:0xa1,_0x4cc235:0xad,_0x1b3edc:0x9a,_0x116f20:0x89,_0x46d6eb:0xa6,_0x48f8a6:0xbe},_0x460e83=_0x1d2c04;if(!this['show']||!this['_map']||!this[_0x460e83(_0x1c8890._0x146148)]||this[_0x460e83(0xa1)]['length']===0x0)return this;const _0x35b006=this[_0x460e83(_0x1c8890._0x4cc235)]();if(this['style'][_0x460e83(_0x1c8890._0x1b3edc)]==='image')this['_layer'][_0x460e83(_0x1c8890._0x116f20)]({'url':_0x35b006['toDataURL']('image/png',0x1),'rectangle':this['_rectangle'],'opacity':this['style']['opacity']});else this['style'][_0x460e83(_0x1c8890._0x46d6eb)]?this['_graphic']&&_0xf945f8?(this['_graphic']['uniforms'][_0x460e83(0xc1)]=_0x35b006,this['_graphic']['uniforms']['bumpMap']=this['_getArcHeatCanvas'](),this['_graphic2']&&(this['_graphic2']['uniforms']['image']=_0x35b006,this[_0x460e83(_0x1c8890._0x48f8a6)]['uniforms']['bumpMap']=this['_graphic']['uniforms']['bumpMap'])):this[_0x460e83(0xbd)](_0x35b006):this[_0x460e83(0x8d)]&&_0xf945f8?this['_graphic'][_0x460e83(0x9d)]['image']=_0x35b006:this['_createGraphic'](_0x35b006);return this;}['_createGraphic'](_0x578cd4){const _0x43e359={_0x3bd0ce:0x8d,_0xbcdc1c:0xaa},_0x374a56=_0x1d2c04;this['clear'](),this[_0x374a56(_0x43e359._0x3bd0ce)]=new gemini__namespace[(_0x374a56(0x98))]['RectanglePrimitive']({...this[_0x374a56(0xb7)],'rectangle':this['_rectangle'],'appearance':new Cesium[(_0x374a56(_0x43e359._0xbcdc1c))]({'material':new Cesium['Material']({'fabric':{'uniforms':{'image':_0x578cd4},'source':HeatMaterial},'translucent':!![]}),'flat':!![]})}),this['_layer']['addGraphic'](this['_graphic']);}['_createArcGraphic'](_0x5e273f){const _0x4b3969={_0x3a46ad:0xd8,_0x46579a:0x97,_0x2835ea:0xa8,_0x237252:0x9b,_0x3472a7:0xc6,_0x39668e:0xc4,_0x14cb98:0xd9,_0x30650b:0x95,_0x13f6a7:0xd4,_0x10185b:0x8e,_0x4a5a16:0x8d,_0x60b0de:0xc2,_0x23841a:0xbe,_0x351501:0x98,_0x4f3ba9:0xb8,_0x1e0d71:0xd9},_0xad4968=_0x1d2c04;this[_0xad4968(0xd0)]();const _0x5044d3=Cesium['RenderState'][_0xad4968(_0x4b3969._0x3a46ad)]({'cull':{'enabled':!![]},'depthTest':{'enabled':!![]},'stencilTest':{'enabled':!![],'frontFunction':Cesium[_0xad4968(0xa8)]['ALWAYS'],'frontOperation':{'fail':Cesium['StencilOperation']['KEEP'],'zFail':Cesium['StencilOperation']['KEEP'],'zPass':Cesium['StencilOperation'][_0xad4968(_0x4b3969._0x46579a)]},'backFunction':Cesium[_0xad4968(_0x4b3969._0x2835ea)]['ALWAYS'],'backOperation':{'fail':Cesium['StencilOperation']['KEEP'],'zFail':Cesium['StencilOperation']['KEEP'],'zPass':Cesium['StencilOperation']['REPLACE']},'reference':0x2,'mask':0x2},'blending':Cesium['BlendingState'][_0xad4968(_0x4b3969._0x237252)]}),_0x2c6c6f=Math[_0xad4968(_0x4b3969._0x3472a7)](this['style'][_0xad4968(0xc4)]??this['_mBoundsMax']*0.02)+0.1;this['style']['diffHeight']&&delete this['style'][_0xad4968(_0x4b3969._0x39668e)];const _0x5a8d27=(this[_0xad4968(0x95)]['splitNum'],0x64);let _0xc0fcbe=Math['max'](this['_rectangle']['height'],this[_0xad4968(_0x4b3969._0x14cb98)]['width']);this[_0xad4968(_0x4b3969._0x30650b)][_0xad4968(_0x4b3969._0x13f6a7)]=_0xc0fcbe/=_0x5a8d27;const _0x575f5d=new Cesium['Material']({'fabric':{'uniforms':{'image':_0x5e273f,'repeat':new Cesium['Cartesian2'](0x1,0x1),'color':new Cesium[(_0xad4968(_0x4b3969._0x10185b))](0x1,0x1,0x1,0x0),'bumpMap':this['_getArcHeatCanvas']()},'source':HeatMaterial},'translucent':!![]}),_0x59f759=this['style']['arcDirection']||0x1;this[_0xad4968(_0x4b3969._0x4a5a16)]=new gemini__namespace['graphic']['RectanglePrimitive']({...this[_0xad4968(0xb7)],'rectangle':this['_rectangle'],'appearance':new Cesium['EllipsoidSurfaceAppearance']({'flat':!![],'aboveGround':!![],'renderState':_0x5044d3,'material':_0x575f5d,'vertexShaderSource':getVertexShaderSource(_0x2c6c6f*_0x59f759)})}),this['_layer'][_0xad4968(_0x4b3969._0x60b0de)](this['_graphic']),this['style'][_0xad4968(0x8c)]===0x0&&(this[_0xad4968(_0x4b3969._0x23841a)]=new gemini__namespace[(_0xad4968(_0x4b3969._0x351501))][(_0xad4968(_0x4b3969._0x4f3ba9))]({...this['options'],'rectangle':this[_0xad4968(_0x4b3969._0x1e0d71)],'appearance':new Cesium['EllipsoidSurfaceAppearance']({'flat':!![],'aboveGround':!![],'renderState':_0x5044d3,'material':_0x575f5d,'vertexShaderSource':getVertexShaderSource(-_0x2c6c6f)})}),this['_layer']['addGraphic'](this['_graphic2']));}['getRectangle'](_0x4638f1){const _0x4755d2={_0x50ea08:0x87,_0x48df68:0xd9},_0x3f3cca=_0x1d2c04;return _0x4638f1!==null&&_0x4638f1!==void 0x0&&_0x4638f1[_0x3f3cca(_0x4755d2._0x50ea08)]&&this[_0x3f3cca(_0x4755d2._0x48df68)]?gemini__namespace['PolyUtil']['formatRectangle'](this[_0x3f3cca(0xd9)]):this['_rectangle'];}['_getHeatCanvas'](){const _0x463d28={_0x6effc8:0xa3,_0x19b850:0xb7,_0x4ca66d:0xb7,_0x1fb196:0x88,_0x200d13:0xb2,_0x26b068:0xbc,_0x3b0f46:0xb7,_0x264f3d:0xac,_0x1f2b92:0xac,_0x57241e:0xae,_0x57f55d:0x96,_0x559627:0xc3,_0x1b7b47:0xb0,_0x44bb56:0xaf},_0x5ba54a={_0x8f29e:0x91},_0x1ed492={_0x20480d:0x9c},_0x3f2b2c=_0x1d2c04,_0x57624a=this[_0x3f2b2c(0xb9)],_0x377ba9=[];let _0x5e3fef,_0x204d9f,_0x32b263,_0x370529;_0x57624a['forEach'](_0x40f7c7=>{const _0x363f14=_0x3f2b2c,_0x17f630=gemini__namespace['LngLatPoint']['parse'](_0x40f7c7);if(!_0x17f630)return;_0x17f630['value']=_0x40f7c7['value']||0x1,!this['options']['rectangle']&&(_0x5e3fef===undefined?(_0x5e3fef=_0x17f630[_0x363f14(0xa9)],_0x204d9f=_0x17f630['lng'],_0x32b263=_0x17f630[_0x363f14(0x85)],_0x370529=_0x17f630['lat']):(_0x5e3fef=Math['min'](_0x5e3fef,_0x17f630['lng']),_0x204d9f=Math[_0x363f14(_0x1ed492._0x20480d)](_0x204d9f,_0x17f630[_0x363f14(0xa9)]),_0x32b263=Math['min'](_0x32b263,_0x17f630[_0x363f14(0x85)]),_0x370529=Math['max'](_0x370529,_0x17f630['lat']))),_0x377ba9['push'](_0x17f630);});_0x5e3fef===_0x204d9f&&(_0x5e3fef-=0.000001,_0x204d9f+=0.000001);_0x32b263===_0x370529&&(_0x32b263-=0.000001,_0x370529+=0.000001);let _0x5ee0fd=this['options']['rectangle']||{'xmin':_0x5e3fef,'xmax':_0x204d9f,'ymin':_0x32b263,'ymax':_0x370529};const _0x1bb083=getMercatorBounds(_0x5ee0fd),_0x16169b=Math[_0x3f2b2c(0xce)](_0x1bb083[_0x3f2b2c(0xbc)]-_0x1bb083[_0x3f2b2c(_0x463d28._0x6effc8)]),_0x59fe00=Math['abs'](_0x1bb083['ymax']-_0x1bb083['ymin']),_0x456e1a=Math['max'](_0x16169b,_0x59fe00),_0x3d3891=Math['min'](_0x16169b,_0x59fe00);this['_mBoundsMax']=_0x456e1a;let _0x21d5c0=0x1;if(_0x456e1a>this[_0x3f2b2c(_0x463d28._0x19b850)]['maxCanvasSize'])_0x21d5c0=_0x456e1a/this['options']['maxCanvasSize'],_0x3d3891/_0x21d5c0<this['options']['minCanvasSize']&&(_0x21d5c0=_0x3d3891/this['options']['minCanvasSize']);else _0x3d3891<this[_0x3f2b2c(_0x463d28._0x4ca66d)]['minCanvasSize']&&(_0x21d5c0=_0x3d3891/this[_0x3f2b2c(_0x463d28._0x19b850)][_0x3f2b2c(0xbf)],_0x456e1a/_0x21d5c0>this['options']['maxCanvasSize']&&(_0x21d5c0=_0x456e1a/this['options']['maxCanvasSize']));const _0x13c4ca=this[_0x3f2b2c(0xc3)]['radius']*1.5,_0x419a53=_0x16169b/_0x21d5c0+_0x13c4ca*0x2,_0x3e01fa=_0x59fe00/_0x21d5c0+_0x13c4ca*0x2,_0x5d5072=_0x13c4ca*_0x21d5c0;_0x1bb083['xmin']-=_0x5d5072,_0x1bb083['ymin']-=_0x5d5072,_0x1bb083['xmax']+=_0x5d5072,_0x1bb083[_0x3f2b2c(0xc7)]+=_0x5d5072,this[_0x3f2b2c(_0x463d28._0x1fb196)]=_0x21d5c0,_0x5ee0fd=geLatLngBounds(_0x1bb083),this['_rectangle']=Cesium[_0x3f2b2c(_0x463d28._0x200d13)]['fromDegrees'](_0x5ee0fd['xmin'],_0x5ee0fd['ymin'],_0x5ee0fd[_0x3f2b2c(_0x463d28._0x26b068)],_0x5ee0fd['ymax']);let _0x304285=_0x377ba9[0x0][_0x3f2b2c(0x93)]??0x1,_0x47109a=_0x377ba9[0x0]['value']??0x0;const _0x3165bd=[];_0x377ba9['forEach'](_0x46b18e=>{const _0x7bcdd0=_0x3f2b2c,_0x171ca7=gemini__namespace['PointTrans']['lonlat2mercator']([_0x46b18e['lng'],_0x46b18e['lat']]),_0x2d97af=_0x46b18e['value']||0x1,_0x5915cc=Math['round']((_0x171ca7[0x0]-_0x1bb083['xmin'])/_0x21d5c0),_0x4c2e74=Math['round']((_0x1bb083['ymax']-_0x171ca7[0x1])/_0x21d5c0);_0x304285=Math['max'](_0x304285,_0x2d97af),_0x47109a=Math[_0x7bcdd0(_0x5ba54a._0x8f29e)](_0x47109a,_0x2d97af),_0x3165bd['push']({'x':_0x5915cc,'y':_0x4c2e74,'value':_0x2d97af});});const _0x519e44={'min':this['options']['min']??_0x47109a,'max':this[_0x3f2b2c(_0x463d28._0x3b0f46)]['max']??_0x304285,'data':_0x3165bd};this['_last_heatData']=_0x519e44;if(!this[_0x3f2b2c(0xac)]||_0x1bb083['xmin']!==this[_0x3f2b2c(_0x463d28._0x264f3d)]['xmin']||_0x1bb083['ymin']!==this['_last_mBounds']['ymin']||_0x1bb083['xmax']!==this[_0x3f2b2c(_0x463d28._0x1f2b92)][_0x3f2b2c(0xbc)]||_0x1bb083['ymax']!==this['_last_mBounds']['ymax']){this[_0x3f2b2c(0xac)]=_0x1bb083,this['_container']['style']['cssText']='width:'+_0x419a53+_0x3f2b2c(_0x463d28._0x57241e)+_0x3e01fa+_0x3f2b2c(_0x463d28._0x57f55d);const _0x2f7bfc={...this[_0x3f2b2c(_0x463d28._0x559627)],'container':this[_0x3f2b2c(_0x463d28._0x1b7b47)]};!this[_0x3f2b2c(0xd1)]?this['_heat']=h337__namespace[_0x3f2b2c(0xb6)](_0x2f7bfc):this['_heat'][_0x3f2b2c(0xb3)](_0x2f7bfc);}this['_heat']['setData'](_0x519e44);const _0x1055ad=gemini__namespace['DomUtil']['copyCanvas'](this['_heat'][_0x3f2b2c(_0x463d28._0x44bb56)]['canvas']);return _0x1055ad;}['_getArcHeatCanvas'](){const _0x5ece9b={_0x43134a:0xd1,_0x4ee38a:0xb7},_0x12d8f2=_0x1d2c04;this[_0x12d8f2(0xd1)]['configure']({'radius':this['heatStyle']['radius']*this['style']['arcRadiusScale'],'blur':this['heatStyle']['blur']*this['style']['arcBlurScale'],'gradient':this['heatStyle']['gradientArc']||{0.25:'rgb(0,0,0)',0.55:'rgb(140,140,140)',0.85:'rgb(216,216,216)',0x1:'rgb(255,255,255)'}});const _0xf1fa5b=gemini__namespace['DomUtil'][_0x12d8f2(0x8f)](this['_heat'][_0x12d8f2(0xaf)]['canvas']);return this[_0x12d8f2(_0x5ece9b._0x43134a)]['configure'](this[_0x12d8f2(_0x5ece9b._0x4ee38a)]['heatStyle']),_0xf1fa5b;}['getPointData'](_0x1fbb4f){const _0x1884e9={_0x430272:0xa9,_0x250d15:0xac,_0x5515dd:0xc9,_0x164fa6:0xa3,_0x2d34a6:0xab},_0x12c34d=_0x1d2c04,_0x105a5f=gemini__namespace['LngLatPoint']['parse'](_0x1fbb4f);if(!_0x105a5f)return{};const _0x425b3f=gemini__namespace['PointTrans'][_0x12c34d(0xb4)]([_0x105a5f[_0x12c34d(_0x1884e9._0x430272)],_0x105a5f['lat']]),_0x37ad8d=this[_0x12c34d(_0x1884e9._0x250d15)],_0x351940=Math[_0x12c34d(_0x1884e9._0x5515dd)]((_0x425b3f[0x0]-_0x37ad8d[_0x12c34d(_0x1884e9._0x164fa6)])/this['_scale']),_0xace847=Math['round']((_0x37ad8d['ymax']-_0x425b3f[0x1])/this['_scale']),_0x2e6a22=this[_0x12c34d(0xd1)][_0x12c34d(0xd3)]({'x':_0x351940,'y':_0xace847}),_0x581dff=this[_0x12c34d(0xd1)][_0x12c34d(0xaf)]['ctx']['getImageData'](_0x351940-0x1,_0xace847-0x1,0x1,0x1)[_0x12c34d(_0x1884e9._0x2d34a6)];return{'x':_0x351940,'y':_0xace847,'value':_0x2e6a22,'color':_0x12c34d(0xca)+_0x581dff[0x0]+','+_0x581dff[0x1]+','+_0x581dff[0x2]+','+_0x581dff[0x3]+')'};}}function _0x5d9f(_0xbc3805,_0x8cee26){const _0x5ab478=_0x5ab4();return _0x5d9f=function(_0x5d9fe0,_0x15a321){_0x5d9fe0=_0x5d9fe0-0x85;let _0x21e0f2=_0x5ab478[_0x5d9fe0];return _0x21e0f2;},_0x5d9f(_0xbc3805,_0x8cee26);}gemini__namespace[_0x1d2c04(0xd2)]['register']('heat',HeatLayer),gemini__namespace['layer']['HeatLayer']=HeatLayer,gemini__namespace['h337']=h337__namespace;function getMercatorBounds(_0x288a8e){const _0x49bb18=gemini__namespace['PointTrans']['lonlat2mercator']([_0x288a8e['xmin'],_0x288a8e['ymin']]),_0x4ec6f9=gemini__namespace['PointTrans']['lonlat2mercator']([_0x288a8e['xmax'],_0x288a8e['ymax']]);return{'xmin':_0x49bb18[0x0],'ymin':_0x49bb18[0x1],'xmax':_0x4ec6f9[0x0],'ymax':_0x4ec6f9[0x1]};}function geLatLngBounds(_0x549791){const _0x42938e={_0x20cf70:0xa3},_0x57611e=_0x1d2c04,_0x4a8e92=gemini__namespace['PointTrans']['mercator2lonlat']([_0x549791[_0x57611e(_0x42938e._0x20cf70)],_0x549791['ymin']]),_0x3eeb4f=gemini__namespace[_0x57611e(0xd6)]['mercator2lonlat']([_0x549791['xmax'],_0x549791['ymax']]);return{'xmin':_0x4a8e92[0x0],'ymin':_0x4a8e92[0x1],'xmax':_0x3eeb4f[0x0],'ymax':_0x3eeb4f[0x1]};}function getVertexShaderSource(_0x534ddd){return'in\x20vec3\x20position3DHigh;\x0a\x20\x20in\x20vec3\x20position3DLow;\x0a\x20\x20in\x20vec2\x20st;\x0a\x20\x20in\x20float\x20batchId;\x0a\x20\x20uniform\x20sampler2D\x20bumpMap_3;\x0a\x20\x20out\x20vec3\x20v_positionMC;\x0a\x20\x20out\x20vec3\x20v_positionEC;\x0a\x20\x20out\x20vec2\x20v_st;\x0a\x0a\x20\x20void\x20main()\x0a\x20\x20{\x0a\x20\x20\x20\x20vec4\x20p\x20=\x20czm_computePosition();\x0a\x20\x20\x20\x20v_positionMC\x20=\x20position3DHigh\x20+\x20position3DLow;\x0a\x20\x20\x20\x20v_positionEC\x20=\x20(czm_modelViewRelativeToEye\x20*\x20p).xyz;\x0a\x20\x20\x20\x20v_st\x20=\x20st;\x0a\x20\x20\x20\x20vec4\x20color\x20=\x20texture(bumpMap_3,\x20v_st);\x0a\x20\x20\x20\x20float\x20centerBump\x20=\x20distance(vec3(0.0),color.rgb);\x0a\x20\x20\x20\x20vec3\x20upDir\x20=\x20normalize(v_positionMC.xyz);\x0a\x20\x20\x20\x20vec3\x20disPos\x20=\x20upDir\x20*\x20centerBump\x20*\x20'+_0x534ddd+';\x0a\x20\x20\x20\x20p\x20+=vec4(disPos,0.0);\x0a\x20\x20\x20\x20gl_Position\x20=\x20czm_modelViewProjectionRelativeToEye\x20*\x20p;\x0a\x20\x20}\x0a';}exports['HeatLayer']=HeatLayer,Object['defineProperty'](exports,'__esModule',{'value':!![]});
}));