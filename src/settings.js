export default {
  /**
   * 网页标题
   */
  title: import.meta.env.VITE_APP_TITLE,
  /**
   * 侧边栏主题 深色主题theme-dark，浅色主题theme-light
   */
  sideTheme: 'theme-light',
  /**
   * 是否系统布局配置
   */
  showSettings: true,

  /**
   * 是否显示动态标题
   */
  dynamicTitle: false,

  /**
   * 切换主题按钮
   */
  switchValue:false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
