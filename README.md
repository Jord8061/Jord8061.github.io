# Personal Academic Homepage

一个纯静态的双语个人学术主页项目，适合部署到 GitHub Pages 等静态托管平台，并在开发过程中使用了 Codex 辅助完成页面结构、交互逻辑与响应式细节的迭代。页面主要展示个人简介、新闻、项目、教育经历、个人经历与奖项。

## Structure

- [index.html](./index.html): 页面结构与静态入口
- [style.css](./style.css): 全站样式与响应式规则
- [app.js](./app.js): 渲染逻辑、语言切换、导航与交互行为
- [content-en.js](./content-en.js): 英文内容数据
- [content-zh.js](./content-zh.js): 中文内容数据
- `assets/`: 图片、图标、缩略图等静态资源

## Editing

- 修改内容：编辑 [content-en.js](./content-en.js) 与 [content-zh.js](./content-zh.js)
- 修改样式与响应式行为：编辑 [style.css](./style.css)
- 修改交互逻辑：编辑 [app.js](./app.js)
- 修改页面结构与 head 资源：编辑 [index.html](./index.html)

## Preview

线上版本已托管到 GitHub Pages，可直接访问：<https://jord8061.github.io/>  
本地预览可直接打开 [index.html](./index.html)。如果需要更接近线上环境，建议使用本地静态服务器。

## Updates

### 2026.03

- 将主页内容拆分为中英文数据文件，完成语言切换能力
- 重构导航栏、社交图标行、News 与 Project links 的样式和交互
- 重构 Awards 展示，加入缩略图、大图预览、折叠展开与时间排序
- 为 Education 增加校徽、说明浮层与移动端自适应定位
- 持续优化移动端与横屏适配，区分手机与平板布局行为
- 压缩头像、导航头像、favicon 与 iOS 图标资源，优化首屏加载
- 增加 README，用于记录项目结构与阶段性更新

后续版本更新继续追加在本 README 的 `Updates` 中即可。
