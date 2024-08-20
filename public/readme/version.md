<div style='height: 6px; background: transparent'></div>

# <img style='width: 40px;' src="/favicon.jpg"/>Gemini版本日志

### 说明
> Gemini SDK通常以年度为周期发布主要版本

### 更新日志

### &nbsp;&nbsp;[<font color=#FF0000 >2024.1</font>] - `2024-6-16`
---

### &nbsp;&nbsp;🚀 新增功能
* 添加 [MvtLayer2](/public/api/MvtLayer2.html) 类，支持 Mapbox Vector Tile 矢量切片服务的加载功能, 支持4329、3857、国家2000坐标系。
* 添加 [MvtLayer2](/public/api/MvtLayer2.html) 类，支持 Mapbox Vector Tile 矢量切片服务的样式编辑能力。当前支持点要素的billboard、label样式，线要素的color、outline、dashPattern样式，面要素的color样式，详见[矢量切片地图(MVT)](/#/system/sandbox?key=/data/example/mvtLayer/mvtLayer)示例内容。
* 添加 [MvtLayer2](/public/api/MvtLayer2.html) 类，支持 Mapbox Vector Tile 矢量切片服务的瓦片属性信息的点选获取能力。
* 支持 [WmsLayer](/public/api/WmsLayer.html) 类中对 Web Map Service 地图服务的基于SLD的样式编辑能力，详见[WMS样式编辑](/#/system/sandbox?key=/data/example/wmsEdit/wmsEdit)示例内容。

### &nbsp;&nbsp;🐛 修复
* 修复 [SkyEffect](/public/api/SkyEffect.html) 实现大气效果类在显示卫星轨迹等远距离几何物体时，出现显示错误的问题。

### &nbsp;&nbsp;🔧 改进
* 改进 [WmsLayer](/public/api/WmsLayer.html) 类中对`options.layers`的强制需求，已实现元数据自动填充默认值。
* 改进 [WmsLayer](/public/api/WmsLayer.html) 类，支持泰瑞GISServer发布的WMS服务。
* 改进 [WmtsLayer](/public/api/WmtsLayer.html) 类中对`options.layer`的强制需求，已实现元数据自动填充默认值。
* 改进 [WmtsLayer](/public/api/WmtsLayer.html) 类，支持泰瑞GISServer发布的WMTS服务。
* 改进 [WfsLayer](/public/api/WfsLayer.html) 类中对`options.layer`的强制需求，已实现元数据自动填充默认值。
* 改进 [WfsLayer](/public/api/WfsLayer.html) 类，支持泰瑞GISServer发布的WFS服务。

### &nbsp;&nbsp;📝 变更
* 下个版本中 [MvtLayer](/public/api/MvtLayer.html) 类将被<font color=#FF0000 >弃用</font>，请用户使用[MvtLayer2](/public/api/MvtLayer2.html) 类替换原有功能。

### &nbsp;&nbsp;🔗 已知问题
* 使用 [MvtLayer2](/public/api/MvtLayer2.html) 类的过程中，频繁缩放可能会导致页面卡顿及瓦片加载闪烁的问题。
* 使用 [MvtLayer2](/public/api/MvtLayer2.html) 类的过程中，当地图层级大于、小于瓦片的最大层级、最小层级时，瓦片将不显示内容。

### &nbsp;&nbsp;[<font color=#FF0000 >2023.2</font>] - `2023-12-21`
---

### &nbsp;&nbsp;🚀 新增功能
* 添加 [SkyEffect](/public/api/SkyEffect.html) 类，支持 AerialPerspective LUT 的大气后处理效果及天空盒效果，详见[大气效果](/#/system/sandbox?key=/data/example/skyEffect/skyEffect)示例内容。
* 添加 [CloudEffect](/public/api/CloudEffect.html) 类，支持基于 Ray Marching 的简单噪声体积云效果，详见[体积云效果](/#/system/sandbox?key=/data/example/cloudEffect/cloudEffect)示例内容。

### &nbsp;&nbsp;🐛 修复
* 修复多点要素[PointEntity](/public/api/PointEntity.html) 类飞行定位时，高度定位错误的问题。

### &nbsp;&nbsp;🔧 改进
* 改进 [Map](/public/api/Map.html) 类中对`options.layers`中所有的GLTF模型初始化加载效果，用户可根据`EventType.load`事件判断场景的模型是否加载完成。

### &nbsp;&nbsp;📝 变更
* 暂无变更

### &nbsp;&nbsp;🔗 已知问题
* 使用 [WmsLayer](/public/api/WmsLayer.html) 、[WfsLayer](/public/api/WmsLayer.html)、 [WmtsLayer](/public/api/WmtsLayer.html) 类目前无法正常加载泰瑞GISServer发布的对应服务能力。
* 使用 [SkyEffect](/public/api/SkyEffect.html) 类时，加载高空、远距离几何体会影响大气的显示效果。

### &nbsp;&nbsp;[<font color=#FF0000 >2023.1</font>] - `2023-6-5`
---

### &nbsp;&nbsp;🚀 新增功能
* 添加 [S3MLayer](/public/api/S3MLayer.html) 类，支持 S3M3.0 规范的三维模型服务的加载、显示，详见[S3M服务](/#/system/sandbox?key=/data/example/s3m/s3m)示例内容。
* 添加 [S3MLayer](/public/api/S3MLayer.html) 类，支持 S3M3.0 规范的三维模型服务的飞行定位、显隐控制，详见[S3M服务](/#/system/sandbox?key=/data/example/s3m/s3m)示例内容。

### &nbsp;&nbsp;🐛 修复
* 暂无修复。

### &nbsp;&nbsp;📝 变更
* 暂无变更

### &nbsp;&nbsp;🔗 已知问题
* 使用 [Map](/public/api/Map.html) 加载默认配置的场景时，GLTF模型无法通过`EventType.load`事件判断模型是否已经加载完成。
* 使用点要素[PointEntity](/public/api/PointEntity.html) 类加载多个点要素时，多个点要素的范围定位飞行会有高度错误的问题

> <p align="right">2024年6月</p>

<div style='height: 20px; background: transparent'></div>
