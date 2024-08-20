/**
 * Gemini双子数字孪生平台  gemini
 *
 * 版本信息：v2024.1
 * 编译日期：2024-08-15 14:14:11
 * 版权所有：Copyright by 浪潮智慧城市
 * 使用单位：浪潮智慧城市科技有限公司, 2024-1-29
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.Cesium || require('gemini-cesium')), (window.turf || require('@turf/turf'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'gemini-cesium', '@turf/turf'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.gemini = {}, global.Cesium, global.turf));
})(this, (function (exports, Cesium, turf) { 
}));