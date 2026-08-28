# RUNDA Design System

> RUNDA Clinical Data X 设计系统完整产出包。  
> 新项目开发时，以本目录为设计源头，确保 UI 视觉样式与交互风格 100% 一致。

## 在线预览

本项目的公开预览页面：<https://yinghao1.github.io/design-system-preview/>

---

## AI 使用规则（必读）

**当你使用本设计系统进行任何 UI 开发时，必须遵循以下规则：**

### 规则 1：必须读取的文件（按顺序）

在开始任何 UI 相关工作之前，你必须按以下顺序读取并理解这些文件：

| 优先级 | 文件路径 | 内容 | 何时读取 |
|--------|----------|------|----------|
| **P0** | `design-system/README.md` | 本文件 · 规则入口 | 每次开始 UI 工作时 |
| **P1** | `design-system/docs/DESIGN.md` | 完整设计规范（28 章） | 每次开始 UI 工作时 |
| **P2** | `design-system/tokens/design-tokens.json` | 设计令牌（程序可消费） | 需要精确数值时 |
| **P3** | `design-system/tokens/tailwind.config.js` | Tailwind 配置 | 写 Tailwind class 时 |
| **P4** | `design-system/preview/index.html` | 统一组件预览（HTML 实现参考） | 需要组件实现示例时 |
| **P5** | `design-system/screenshots/` | 页面截图（视觉参考） | 需要确认视觉效果时 |

### 规则 2：文件关系与职责

```
README.md（本文件）
  ├── 规则入口：告诉你读什么、怎么读、什么不能做
  │
  ├── docs/DESIGN.md（设计圣经）
  │   ├── 第一部分：设计基础（色彩/字体/间距/圆角/阴影/渐变/图标）
  │   ├── 第二部分：通用组件（按钮/表单/标签/卡片/表格/弹层/导航）
  │   ├── 第三部分：数据展示（KPI/图表/时间轴/进度状态）
  │   ├── 第四部分：业务组件（B 端专属）
  │   ├── 第五部分：动效系统（缓动/时长/入场/关键帧）
  │   ├── 第六部分：页面结构（B 端 ACT 三段式 + 列表/详情/表单页）
  │   └── 第七部分：工程化（Tailwind 配置/国际化/反模式/检查清单）
  │
  ├── tokens/design-tokens.json（精确数值源）
  │   ├── colors：全部色值（ink/cdx/warm/status/segment/live/recon/concept/modality）
  │   ├── typography：字体栈 + 全部字号 token（含功能性字号）
  │   ├── spacing：容器宽度 + 自定义间距
  │   ├── borderRadius：圆角阶梯
  │   ├── boxShadow：阴影系统
  │   ├── layout：z-index 层级
  │   ├── effect：噪点纹理参数
  │   └── i18n：国际化配置
  │
  ├── tokens/tailwind.config.js（可直接复用的 Tailwind 配置）
  │   └── 包含 colors/fontFamily/fontSize/spacing/borderRadius/boxShadow/animation 全部扩展
  │
  ├── preview/index.html（组件实现参考）
  │   └── 15 个章节的完整 HTML/CSS 实现，可直接复制代码片段
  │
  └── screenshots/
      ├── pages/：12 张完整页面截图（含 EMR 工作台）
      ├── states/：10 张不同状态截图（含 §30 工作台组件状态）
      └── interactions/：4 张交互状态截图（含 §30.7 行选中态）
```

### 规则 3：设计决策优先级

当你做 UI 决策时，按以下优先级查找答案：

1. **DESIGN.md 中的明确规则** → 直接遵循，不可覆盖
2. **design-tokens.json 中的精确数值** → 使用精确值，不可近似
3. **preview/index.html 中的实现示例** → 参考实现方式
4. **screenshots/ 中的视觉效果** → 确认最终视觉
5. **DESIGN.md §27 反模式** → 绝对禁止的做法

### 规则 4：绝对禁止（来自 DESIGN.md §27）

- ❌ 玻璃态（glass morphism）
- ❌ 紫渐蓝默认配色
- ❌ 大圆角（>16px，模态卡 14px 除外）
- ❌ 滚动触发动画（只在入场时动画一次）
- ❌ 图标字体（必须用内联 SVG）
- ❌ 渐变滥用（仅装饰性区域）
- ❌ 饱和度超过 80% 的色彩
- ❌ 未定义的颜色
- ❌ 斑马条纹表格
- ❌ 所有按钮加阴影（阴影仅 hover 出现）

### 规则 5：适用范围标记

DESIGN.md 中的规范按适用范围标记：

- **[通用]** — B 端所有场景均适用
- **[B 端展示型]** — 适用于展示型/演示型页面（数据大屏、品牌官网、汇报演示）
- **[B 端管理型]** — 适用于后台管理系统（CRUD、表单、列表、工作台）

开发前必须确认当前页面属于哪种类型，然后只使用对应范围的规范。

### 规则 6：组件开发流程

当你需要开发一个 UI 组件时：

1. 先在 `DESIGN.md` 中查找该组件的规范定义
2. 在 `preview/index.html` 中查找该组件的 HTML/CSS 实现
3. 使用 `design-tokens.json` 中的精确数值
4. 用 `tailwind.config.js` 中的 class 名称
5. 对照 `screenshots/` 确认视觉效果
6. 最后用 `DESIGN.md §28 检查清单` 自检

---

## 目录结构

```
design-system/
├── README.md                          ← 本文件（规则入口 · AI 必读）
├── docs/
│   ├── DESIGN.md                      ← 统一设计规范（B 端 · 30 章）
│   ├── COMPONENT-AUDIT.md             ← 组件审计报告
│   ├── NEW-COMPONENTS-P0.md           ← P0 组件补充规范（已集成）
│   ├── NEW-COMPONENTS-P1.md           ← P1 组件补充规范
│   └── UPDATE-v2.6-SUMMARY.md         ← v2.6 更新总结
├── tokens/
│   ├── design-tokens.json             ← 设计令牌（JSON · 程序可消费）
│   └── tailwind.config.js             ← Tailwind 配置（直接复用）
├── preview/
│   └── index.html                     ← 统一组件预览（B 端 · 27 章节）
├── assets/
│   └── icons/empty-state.svg          ← RUNDA 标准空状态插画
└── screenshots/
    ├── pages/                         ← 全部页面完整截图（11 张）
    ├── states/                        ← 不同状态截图（6 张）
    └── interactions/                  ← 交互状态截图（3 张）
```

---

## 快速开始

### 1. 新项目初始化

```bash
# 复制 Tailwind 配置到新项目
cp design-system/tokens/tailwind.config.js your-project/_tailwind.config.js

# 或在 HTML 中引用
<script src="https://cdn.tailwindcss.com"></script>
<script src="_tailwind.config.js"></script>
```

### 2. 必须的全局样式

每个页面 `<body>` 必须包含：

```html
<body class="font-sans text-ink-900 antialiased">
```

每个页面 `<style>` 必须包含噪点纹理（直接作为 body 背景图层）：

```css
html, body {
  background-color: #FAFAFA;
  background-image: radial-gradient(rgba(0,0,0,0.018) 1px, transparent 1px);
  background-size: 3px 3px;
  background-attachment: fixed;
  font-feature-settings: "ss01","cv11";
  margin: 0;
}
```

### 3. 查看预览

在线查看：<https://yinghao1.github.io/design-system-preview/>

```bash
# 启动本地服务器
cd "clinical-data-x 2"
python3 -m http.server 8080

# 浏览器打开
# 统一预览：http://localhost:8080/design-system/preview/index.html
```

---

## 文件详细说明

### docs/DESIGN.md — 设计圣经

| 章节 | 内容 | 关键规则 |
|------|------|----------|
| §0 设计哲学 | 风格定位、核心原则、C/B 端差异 | 90/10 原则、克制优先 |
| §1 色彩系统 | ink/cdx/warm/状态色/高亮色/模态色/图表色 | cdx-700 为核心强调色 |
| §2 字体与排版 | 字体栈、B 端 9 级 + 6 级 + 功能性 10 级 | eyebrow 0.16em、数字用 mono |
| §3 间距与布局 | 容器宽度、B 端布局、间距 token、Layout 容器、Grid 栅格 | B 端 max-w-ultra、流式、24 栅格系统 |
| §4 圆角系统 | 7 级圆角阶梯 | 默认 6px |
| §5 阴影系统 | 基础 3 层 + 场景阴影 + focus ring | 静态无阴影、hover 出现 |
| §6 渐变与装饰 | 预定义渐变、噪点纹理、流光、骨架屏 | 纹理用 body 背景实现 |
| §7 图标规范 | 线性 stroke、内联 SVG | stroke-width 1.5-2 |
| §8 按钮 | 9 种按钮变体 | CTA 用 eyebrow 样式 |
| §9 表单控件 | 14 种表单组件 | focus 用 ring shadow |
| §10 标签与徽章 | 9 种标签/徽章变体 | active 态用 cdx-700 |
| §11 卡片 | 11 种卡片变体 | hover 才出阴影 |
| §12 表格 | 9 种表格相关组件 + 树形表格 + 可编辑表格 | 表头 bg-ink-50 + uppercase |
| §13 弹层与浮层 | 9 种弹层组件 | Toast/Alert 图标统一规范 |
| §14 导航 | 11 种导航组件 + Tabs + Collapse | B 端顶部导航、侧边导航、标签页、折叠面板 |
| §15 KPI 与数字 | 5 种数字展示组件 | countUp 1600ms |
| §16 图表与可视化 | 4 种图表相关组件 | 8 色调色盘 |
| §17 时间轴 | 3 种时间轴组件 | 4 色节点 |
| §18 进度与状态 | 9 种状态组件 | 统一缓动曲线 |
| §19 B 端展示型业务组件 | 7 种展示型专属组件 | Layer Stepper 独立圆角 |
| §20 B 端管理型业务组件 | 6 种管理型专属组件 | Page Header + Filter Bar |
| §21 动效系统 | 缓动、时长阶梯、入场动画、关键帧 | expo-out 统一缓动 |
| §22 B 端展示型页面结构 | ACT 段式 + 鉴权 | 章节头 + 标题 + 主体 + 尾 |
| §23 B 端管理型页面结构 | 列表页/详情页/表单页 | sidebar + header + main |
| §24 Tailwind 配置 | 完整配置说明 | 见 tokens/tailwind.config.js |
| §25 国际化 | 4 语言 + 属性标记 | data-i18n 系列属性 |
| §26 设计决策与依据 | 8 条核心决策的原因 | 理解"为什么"这样设计 |
| §27 反模式 | 12 条禁止做法 | 绝对不可违反 |
| §28 检查清单 | 7 类自检项 | 开发完成后逐项核对 |
| §29 B 端顶部对齐与表单细节 | 顶部双栏等高 / 下拉箭头对称 / Header 同行 | 实战增补 |
| §30 EMR 医生工作台模式 | 中文 Logo / 紧凑布局 / Header 患者条 / QueryCard / StatRow | B 端临床信息系统统一规范 |
| §31 AI 对话系统 | ChatContainer / MessageBubble / ThinkingState / StructuredOutput / ChatInput / ConsensusCard / ExpertPanel / ReferenceCard / RiskBadge | AI 对话场景统一规范 |

### tokens/design-tokens.json — 精确数值源

当 DESIGN.md 中的描述与 design-tokens.json 中的数值冲突时，以 **design-tokens.json** 为准（它是程序化的单一数据源）。

JSON 结构：
```
{
  "colors": { ink, cdx, warm, status, segment, live, recon, concept, modality },
  "typography": { fontFamily, fontSize（含 20+ token）, settings },
  "spacing": { container, custom },
  "borderRadius": { 7 级 },
  "boxShadow": { 基础 + 场景 + focus + inset },
  "layout": { z-index },
  "effect": { grain 噪点纹理参数 },
  "i18n": { languages, default, storage, attrs }
}
```

### tokens/tailwind.config.js — Tailwind 配置

直接在项目中引用此文件，无需手动配置。包含：
- `colors`：ink / cdx / warm 全色阶
- `fontFamily`：sans / display / mono
- `fontSize`：全部字号 token
- `spacing`：自定义间距
- `borderRadius`：圆角阶梯
- `boxShadow`：阴影系统
- `animation`：全部动画
- `maxWidth`：容器宽度

### preview/index.html — 组件实现参考

27 个章节的完整 HTML + CSS 实现，可直接从中复制代码片段：

| 章节 | 包含组件 |
|------|----------|
| 01 色彩 | 色板展示（ink / cdx / warm / 状态色） |
| 02 字体 | 全部字号阶梯 + 功能性字号 |
| 03 按钮 | CTA / 品牌 / 次级 / 危险 / 虚线 / 链接 / 分页 / 按钮组 |
| 04 表单 | 输入框四态 / Switch / Checkbox / Radio / Select / Tag Input |
| 05 标签 | 条件标签 / 筛选 Chip / Badge / Role Badge |
| 06 卡片 | Metric / Modality / Stat / App Card |
| 07 表格 | 完整数据表 + 工具栏 + 分页 + 行选择 |
| 08 弹层 | Toast / Alert / Modal |
| 09 导航 | Sidebar / Breadcrumb / Steps |
| 10 KPI | Hero Number / Tooltip / Progress / Ring |
| 11 状态 | Loading / Pulse / Spinner / Pipeline / Skeleton / Empty State |
| 12 时间轴 | 四色节点 + 事件卡片 |
| 13 溯源 | Anchor 锚点 / Mark 高亮 / Synonym 同义词组 |
| 14 动效 | 缓动曲线可视化 / 时长阶梯对照 |
| 15 页面 | Layer Stepper / 管理端列表页缩略 |
| 16 工作台 | EMR 医生工作台模式 |
| 17 标签页 | Line 型 / Card 型 / 带图标 / 可关闭 |
| 18 折叠面板 | 基础折叠 / 无边框模式 |
| 19 描述列表 | 3 列带边框 / 无边框垂直布局 |
| 20 布局 | 经典侧边栏布局 / 布局结构说明 |
| 21 栅格 | 24 栅格演示 / 响应式断点 |
| 22 表单 | 水平布局 / 内联布局 |
| 23 日期选择 | 日期输入框 + 日历面板 |
| 24 上传 | 按钮上传 / 拖拽上传 / 文件列表 |
| 25 全局提示 | 4 种状态 Message |
| 26 头像 | 尺寸阶梯 / 文字头像 / 图片+状态徽标 / 头像组 / 上传态 / 方形变体 |
| 27 AI 对话 | 消息气泡 / 思考状态 / 思维链折叠 / 风险卡片 / 专家面板 / 综合决策卡 / 引用卡片 / 输入区 |

---

## 设计核心要点（速查）

### 色彩

- **90% 用 ink 灰阶**，cdx 深青仅点缀关键数字
- **核心强调色**：`#185058`（cdx-700）
- **hover 背景**：`#F0F7F8`（cdx-50）
- **命中高亮**：`#FEF3C7` + `#C28A2C`（琥珀金）
- **页面背景**：`#FAFAFA`（ink-50）

### 字体

- 正文：PingFang SC + Inter
- 数字：JetBrains Mono（tabular-nums）
- 标签：13px / 600 / uppercase / letter-spacing 0.16em
- 代码/ID：14px / mono
- 按钮：14px / 500（CTA: 13px / 600 / 0.16em / uppercase）；表格操作栏按钮：13px / 500，不得低于 13px
- 导航：14px / 500

### 动效

- **统一缓动**：`cubic-bezier(0.16, 1, 0.3, 1)`
- **入场动画**：translateY(12px) → 0，800ms，逐序延迟 90ms
- **卡片 hover**：translateY(-3~4px) + 阴影，450ms
- **阴影仅在 hover 时出现**

### 圆角

- 默认 6px，模态卡 14px，pill 999px
- 对账模块用 2px（锐利）

### 图标

- 风格：线性 stroke（不用填充）
- stroke-width：1.5（细）/ 2（粗）
- stroke-linecap / linejoin：round
- 来源：内联 SVG，颜色用 currentColor
- Toast/Alert 图标：w-4 h-4 + 对应状态色 + 带外框形态

---

## 截图索引

### 页面截图（默认状态）

| 编号 | 页面 | 文件 |
|------|------|------|
| 00 | 首页 Hero | [00-index-home.png](screenshots/pages/00-index-home.png) |
| 01 | 登录页 | [01-login-default.png](screenshots/pages/01-login-default.png) |
| 02 | 资产总览 | [02-act1-assets.png](screenshots/pages/02-act1-assets.png) |
| 03 | 数据对账 | [03-act1b-reconciliation.png](screenshots/pages/03-act1b-reconciliation.png) |
| 04 | 治理结果 | [04-act4a-governance.png](screenshots/pages/04-act4a-governance.png) |
| 05 | 智能筛选 | [05-act2-cohort.png](screenshots/pages/05-act2-cohort.png) |
| 06 | 患者 360° | [06-act3-patient360.png](screenshots/pages/06-act3-patient360.png) |
| 07 | 双擎引擎 | [07-act5-engine.png](screenshots/pages/07-act5-engine.png) |
| 08 | 价值 ROI | [08-act6-roi.png](screenshots/pages/08-act6-roi.png) |
| 09 | 设计预览（展示型） | [09-design-preview.png](screenshots/pages/09-design-preview.png) |
| 10 | 设计预览（管理型） | [10-bside-preview.png](screenshots/pages/10-bside-preview.png) |
| 11 | EMR 医生工作台（§30 新增） | [11-emr-workstation.png](screenshots/pages/11-emr-workstation.png) |

### 状态截图

| 状态 | 文件 |
|------|------|
| 登录表单错误态 | [login-error-state.png](screenshots/states/login-error-state.png) |
| 队列筛选（GGN 预设） | [cohort-ggn-preset.png](screenshots/states/cohort-ggn-preset.png) |
| 患者 360 已加载 | [patient360-loaded.png](screenshots/states/patient360-loaded.png) |
| 引擎映射层 | [engine-map-layer.png](screenshots/states/engine-map-layer.png) |
| ROI 价值释放 Tab | [roi-value-tab.png](screenshots/states/roi-value-tab.png) |
| 治理结果默认 | [governance-lab-default.png](screenshots/states/governance-lab-default.png) |
| EMR 组件总览（§30） | [emr-components-overview.png](screenshots/states/emr-components-overview.png) |
| EMR Header 患者条（§30.4） | [emr-header-patient-bar.png](screenshots/states/emr-header-patient-bar.png) |
| EMR 侧边栏 Logo 中英文（§30.3） | [emr-sidebar-brand-cn-vs-en.png](screenshots/states/emr-sidebar-brand-cn-vs-en.png) |
| EMR QueryCard + StatRow（§30.5/30.6） | [emr-query-card-default.png](screenshots/states/emr-query-card-default.png) |

### 交互截图

| 交互 | 文件 |
|------|------|
| 溯源抽屉打开 | [cohort-drawer-open.png](screenshots/interactions/cohort-drawer-open.png) |
| 日期筛选器展开 | [assets-datepicker-open.png](screenshots/interactions/assets-datepicker-open.png) |
| 流水线运行中 | [reconciliation-pipeline-active.png](screenshots/interactions/reconciliation-pipeline-active.png) |
| EMR 行选中态（§30.7） | [emr-row-selected.png](screenshots/interactions/emr-row-selected.png) |

---

## 版本

| 版本 | 日期 | 说明 |
|------|------|------|
| v2.6.2 | 2026-08-28 | 新增 RUNDA 标准空状态 SVG，统一 160px 尺寸、cdx 青绿色配色、紧凑缩放和文字层级规则 |
| v2.6.1 | 2026-08-17 | 表格操作栏按钮字号统一为 **13px**，与表格单元格文字一致且不得低于 13px；同步更新 `button-sm` 令牌与预览示例 |
| v2.6 | 2026-05-22 | **P0/P1 核心组件补充**：P0 已集成 — Form 表单容器（§9.15）/ DatePicker 日期选择器（§13.11）/ Upload 上传（§12.11）/ Message 全局提示（§13.10）/ Table 高级功能（§12.10，树形/可编辑/固定列）/ Tabs 标签页（§14.10）/ Collapse 折叠面板（§14.11）/ Descriptions 描述列表（§12.9）/ Layout 布局容器（§3.7）/ Grid 栅格系统（§3.8）；P1 规范完成 — Tree 树形控件 / Transfer 穿梭框 / Space 间距 / TimePicker 时间选择器 / Cascader 级联选择 / Notification 通知提醒 / Progress 增强（环形/仪表盘/步骤）/ Statistic 统计数值；preview 扩展至 27 章节（含 Avatar 头像 + AI 对话系统）；design-tokens.json 新增 components 节点（含 avatar + chat）；§3.3 基础 B 端布局 main-content padding 24px→**20px**、内卡片 gap 16-20px→**10px**，与 §30.2 工作台规范统一；搜索框背景由 warm-50 改为 ink-50 |
| v2.5 | 2026-05-18 | 增补 §30：EMR 医生工作台模式 — 中文 Logo（14px/700/0.02em） / 紧凑布局（content padding 20px / gap 10px / overflow:hidden 单屏） / Header 患者主信息条（姓名+模态徽章+元信息分隔符） / QueryCard（标题装饰条+下划线 Tab+底部统计） / StatRow 状态点统计 / TableCard 紧凑表格 / 选中行 cdx-50+inset 左条；新增 token：`workstation` spacing、`brand-name-cn/en`/`patient-name`/`patient-tag` 字号 token；preview 新增第 16 章节；screenshots 新增 1 张页面图 + 4 张状态图 + 1 张交互图 |
| v2.3 | 2026-05-13 | 增补 §29：B 端顶部双栏等高（menu-head ≡ header-wrapper ≡ 68px）/ 下拉箭头统一右 12px / Header 标题与释义同行；配套覆盖文件 `design-system-overrides/07-business-inhospital.css` |
| v2.2 | 2026-05-13 | 补充住院监管业务类映射（section-card / metric-card / quality-* / rectify-* / kv-*） |
| v2.1 | 2026-05-13 | 统一版：B 端融合预览、AI 规则强化、功能性字号补充 |
| v2.0 | 2026-05-12 | 完整版：含 B 端扩展 + 全量截图 |
| v1.0 | 2026-05-12 | 初版：B 端规范提取 |

---

*RUNDA Design System v2.6.2 · Maintained by RUNDA Clinical Data X Team*
