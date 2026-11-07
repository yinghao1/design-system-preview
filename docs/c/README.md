# RUNDA ToC 移动端设计系统 · 规范文档

> 版本 v1.6.0 | 平台 iOS（iPhone）| 设计分辨率 390 × 852 pt（3x → 1170 × 2556 px）

本目录是「C 端移动」的规范源头，与仓库根目录的 `docs/DESIGN.md`（B 端 PC）并列，
两者共享同一套中性色阶、背景纹理与品牌主色 `#2A7F8B`，构成一个品牌下的两种端形态。

---

## 文件清单

| 文件 | 内容 | 何时读取 |
|------|------|----------|
| `DESIGN.md` | 设计原则、色彩、排版、间距、圆角、阴影、动效、无障碍、图表色板 | 每次开始 C 端 UI 工作 |
| `COMPONENTS.md` | 全部组件契约：视觉、状态、尺寸、交互行为（19 章 / 60+ 组件） | 选型与实现组件时 |
| `DEVELOPMENT-RULES.md` | 强制开发规范、视觉验收清单、违规处理 | 提交前自检 |
| `../../tokens/c-design-tokens.json` | 机器可读设计令牌（程序消费） | 需要精确数值时 |
| `../../preview/docs/c/*.html` | 在线预览与可复制实现 | 需要代码示例时 |
| `../../preview/assets/c-mobile.css` | C 端组件样式（`c-` 前缀） | 接入样式时 |

---

## 章节索引（预览页）

| 章节 | 预览页 | 覆盖内容 |
|------|--------|----------|
| 01 概述 | `preview/docs/c/c-introduction.html` | 平台参数、六条原则、页面结构、跨端一致性 |
| 02 色彩 | `preview/docs/c/c-colors.html` | 品牌五档、中性灰阶、功能色、鲜艳数据色、图表与分类色板 |
| 03 排版与基础规范 | `preview/docs/c/c-typography.html` | 11 级字号、Manrope 数字、4pt 网格、圆角、阴影、动效 |
| 04 基础组件 | `preview/docs/c/c-basics.html` | Button / IconButton / Chip / Badge / Avatar / Divider |
| 05 表单控件 | `preview/docs/c/c-forms.html` | TextField / TextArea / SearchBar / Switch / Check / Radio / Segmented / Slider / Stepper / Rate |
| 06 导航 | `preview/docs/c/c-navigation.html` | NavigationBar / TabBar / TabGroup / TabsLine / Accordion / Swipe / PullRefresh |
| 07 数据展示 | `preview/docs/c/c-data.html` | Card / ListItem / ChatBubble / Progress / Ring / Timeline / MetricCard / GroupKPI / StatusBadge / InfoTable / Capsule / Advice / SectionTitle |
| 08 图表 | `preview/docs/c/c-charts.html` | 系列色板、分类色板、轴与网格、Line/Area/Bar/Ring/MultiLine |
| 09 反馈 | `preview/docs/c/c-feedback.html` | Toast / Alert / Banner / ActionSheet / Sheet / Modal / Skeleton / Spinner / Empty / Error |
| 10 业务组件 | `preview/docs/c/c-business.html` | TaskCard / AgentMessage / StepIndicator / ToolCallCard / PricingCard / UploadCard / FAB |

---

## 命名与隔离约定

- C 端组件类名统一使用 **`c-` 前缀**（如 `.c-btn`、`.c-card`、`.c-navbar`），与 B 端类名（`.tag`、`.data-table`、`.metric-card` 等）不冲突，可在同一仓库/页面内并存。
- 演示外壳使用 `.phone` / `.phone-screen`，固定内容宽 390pt。
- 站点外壳（顶部导航、侧边栏、搜索、Tabs）由 `preview/assets/coss.js` 统一驱动；C 端页面在 `<html>` 上声明 `data-set="c"`，脚本会自动切换到 C 端章节表。

---

## 快速接入

```html
<link rel="stylesheet" href="preview/assets/coss.css" />
<link rel="stylesheet" href="preview/assets/design-system.css" />
<link rel="stylesheet" href="preview/assets/c-mobile.css" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="preview/assets/tw-config.js"></script>
```

```html
<div class="c-card">
  <div class="c-metric">
    <div class="c-metric-label">今日步数</div>
    <div class="c-metric-value c-num">8,420<small>步</small></div>
  </div>
  <div class="c-progress"><i style="width:68%"></i></div>
</div>
```

---

## 与 B 端的差异要点

| 维度 | B 端 PC | C 端移动 |
|------|---------|----------|
| 设计基准 | 1440 宽栅格，24 栅格系统 | 390 × 852pt，4pt 网格 |
| 圆角 | 6–14pt | 4–24pt（卡片 16pt） |
| 主交互尺寸 | 32–36pt 高控件 | 44–48pt 高，最小触摸 44×44pt |
| 数字字体 | Urbanist | Manrope（可变 200–800） |
| 层级表达 | 边框 + 阴影 | 阴影为主（浅色主题） |
| 图表 | PC 图表规范 | 移动适配：轴标签 10px、Tooltip 11px、禁渐变 |
