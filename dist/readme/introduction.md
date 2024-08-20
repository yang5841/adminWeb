<div style='height: 6px; background: transparent'></div>

# <img style='width: 40px;' src="/favicon.jpg"/>Gemini开发教程

### 引用
> 引用部分主要介绍如何将Gemini.js的能力引入到您的前端项目中

1. 相关下载资源

   [SDK下载](/resource/gemini.zip) [接口文档下载](/resource/api.zip)

2. 引入接口文件
   
   常规方式
   
    ```html
    <!--Cesium库的样式文件-->
    <link href="[css_path]/Cesium/Widgets/widgets.css" rel="stylesheet" />
    <!--Gemini库的样式文件-->
    <link href="[css_path]/gemini/gemini.css" rel="stylesheet" />
    <!--Cesium库的JS文件-->
    <script src="[js_path]/Cesium/Cesium.js"></script>
    <!--Gemini库的JS文件-->
    <script src="[js_path]/gemini/gemini.js"></script>
    ```

3. 添加`DOM`容器（id可以自定义）

    ```html
    <div id="gemini-container"></div>
    ```

4. 在`js`文件夹中实现

    ```javascript
    // 三维场景的初始化参数
    let mapOptions = {
        // 详细参数见 gemini.Map类
        scene: {},
        mouse: {},
        control: {},
        basemaps: [],
        layers: []
    }

    const map = new gemini.Map("gemini-container", mapOptions)
   ```

5. 绘制一个简单的三维地球，如下是完整代码结构。
    ```html
    <!DOCTYPE html>
        <html>
        <head>
            <title>创建地球</title>
            <link href="[css_path]/Cesium/Widgets/widgets.css" rel="stylesheet" />
            <link href="[css_path]/gemini/gemini.css" rel="stylesheet" />
            <script src="[js_path]/Cesium/Cesium.js"></script>
            <script src="[js_path]/gemini/gemini.js"></script>
        </head>
        <body>
            <div id="geminiContainer" class="gemini-container"></div>
            <script type="text/javascript">
                let mapOptions = {
                    scene: {
                        globe: {
                            depthTestAgainstTerrain: true,
                            showGroundAtmosphere: false,
                        },
                        center: { lat: 30.054604, lng: 108.885436, alt: 17036414, heading: 0, pitch: -90 }
                    },
                    mouse: {
                        enabledMoveTarget: false,
                    },
                    basemaps: [
                        {
                            name: "天地图影像(EPSG:3857)",
                            icon: "img/basemaps/tdt_img.png",
                            type: "tdt",
                            layer: "img_d",
                            key: gemini.Token.tiandituArr,
                            show: true,
                        }
                    ]
                }
                const map = new gemini.Map("geminiContainer", mapOptions)
            </script>
        </body>
        </html>
    ```
6. 展现的三维地球效果就诞生了！
    <iframe style="width: 100%; height: 530px;border: none;"  src="/data/example/options/options.html"></iframe>

> <p align="right">2024年5月</p>

<div style='height: 20px; background: transparent'></div>
