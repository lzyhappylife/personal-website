# LZY 个人网站

一个纯静态的个人主页，响应式设计，支持深色模式。

## 技术栈

- HTML
- CSS（原生，CSS 变量 + 深色模式）
- JavaScript（主题切换、移动端菜单）

## 本地预览

直接用浏览器打开 `index.html`，或启动一个本地服务器：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 部署

托管在 GitHub Pages：

1. 在仓库 Settings → Pages 中选择 `main` 分支根目录
2. 访问 `https://<用户名>.github.io/<仓库名>/`

## 自定义

- 头像 / 名字 / 简介：编辑 `index.html` 的 hero 和 about 部分
- 配色：编辑 `assets/css/style.css` 顶部的 `:root` 变量
- 项目列表：编辑 `index.html` 的 projects 部分
