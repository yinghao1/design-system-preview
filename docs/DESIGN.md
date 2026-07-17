# RUNDA Design System — 统一设计规范

> **RUNDA Clinical Data X 设计语言规范 · B 端版**  
> 本文档为 RUNDA 产品族的唯一设计源头。所有项目（后台管理 B 端）均以本文档为准。  
> 文档涵盖色彩、字体、间距、组件、动效、交互等全部设计决策，并明确标注各规范的适用范围。

---

## 适用范围标记说明

本文档中的规范按适用范围标记：

- **[通用]** — B 端所有场景均适用，是设计系统的基础层
- **[B 端展示型]** — 适用于展示型/演示型页面（数据大屏、品牌官网、汇报演示）
- **[B 端管理型]** — 适用于后台管理系统（CRUD、表单、列表、工作台）
- 未标记的内容默认为 **[通用]**

---

## 目录

**第一部分：设计基础（通用）**
0. [设计哲学](#0-设计哲学)
1. [色彩系统](#1-色彩系统)
2. [字体与排版](#2-字体与排版)
3. [间距与布局](#3-间距与布局)
4. [圆角系统](#4-圆角系统)
5. [阴影系统](#5-阴影系统)
6. [渐变与装饰](#6-渐变与装饰)
7. [图标规范](#7-图标规范)

**第二部分：通用组件**
8. [按钮](#8-按钮)
9. [表单控件](#9-表单控件)
10. [标签与徽章](#10-标签与徽章)
11. [卡片](#11-卡片)
12. [表格](#12-表格)
13. [弹层与浮层](#13-弹层与浮层)
14. [导航](#14-导航)

**第三部分：数据展示组件**
15. [KPI 与数字展示](#15-kpi-与数字展示)
16. [图表与可视化](#16-图表与可视化)
17. [时间轴](#17-时间轴)
18. [进度与状态](#18-进度与状态)

**第四部分：业务组件**
19. [B 端展示型业务组件](#19-b-端展示型业务组件)
20. [B 端管理型业务组件](#20-b-端管理型业务组件)

**第五部分：交互与动效**
21. [动效系统](#21-动效系统)

**第六部分：页面结构**
22. [B 端展示型页面结构](#22-b-端展示型页面结构)
23. [B 端管理型页面结构](#23-b-端管理型页面结构)

**第七部分：工程化**
24. [Tailwind 配置](#24-tailwind-配置)
25. [国际化](#25-国际化)
26. [设计决策与依据](#26-设计决策与依据)
27. [反模式](#27-反模式)
28. [检查清单](#28-检查清单)

---

## 0. 设计哲学

### 0.1 风格定位 [通用]

| 维度 | 定义 | 依据 |
|------|------|------|
| 基调 | 极简质感 / 低饱和 / 大留白 / 谈静高级 | 源代码注释 |
| 受众 | 医院信息分管院长、信息科主任（40–55 岁） | 目标用户 |
| 场景 | 投影演示 + 桌面操作 | 双场景覆盖 |
| 参照美学 | Stripe / Linear / Vercel 营销页 + Apple 产品展示页 | 非 Material、非 Ant Design |

### 0.2 核心原则 [通用]

1. **克制优先**：90% 界面用灰阶，强调色仅用于关键数据
2. **留白胜过装饰**：宁少勿多，靠空间而非装饰分层
3. **数据第一**：KPI 用巨字号 + mono 字体，让数字说话
4. **白盒可溯**：每一个结论都带来源，每一次交互都有反馈
5. **动效有意义**：用动效表达状态变化与逻辑流转，绝不为动而动

### 0.3 B 端场景差异 [通用]

| 维度 | 展示型 | 管理型 |
|------|----------------|----------------|
| 信息密度 | 低 · 大留白 | 高 · 紧凑 |
| 字号基准 | 17px | 14px |
| 容器宽度 | max-w-ultra (1440px) | 100% 流式 |
| 导航 | 顶部锚点（低调显隐） | 侧边菜单 + 顶部 Header |
| 动效时长 | 仪式感（800ms+） | 实用（200-300ms） |
| 内边距 | p-7 / p-10 | p-4 / p-5 |
| 卡片圆角 | 6-14px | 4-6px |
| 表格行高 | 14px 字 + 28px 行 | 13px 字 + 20-24px 行 |
| 操作频率 | 每页 1-3 次 | 每页 10+ 次 |

### 0.4 禁用反模式 [通用]

- ❌ 渐变不滥用（仅装饰性区域）
- ❌ 禁止玻璃态（glass morphism）
- ❌ 禁止紫渐蓝默认配色
- ❌ 禁止无意义滚动动画
- ❌ 禁止大圆角（最大 16px，主组件 6-12px）

---

## 1. 色彩系统

### 1.1 主色 · ink 墨黑系列 [通用]

承载所有文本、边框、结构。基于 Zinc 灰阶。

```
ink-50   #FAFAFA   页面背景
ink-100  #F4F4F5   ★卡片外描边（极轻边框）、次级背景、分隔线
ink-200  #E4E4E7   主要边框、分割线、网格线
ink-300  #D4D4D8   弱分割线、禁用态
ink-400  #A1A1AA   辅助文字、placeholder、弱图标
ink-500  #71717A   次要正文、说明文字
ink-600  #52525B   标签文字
ink-700  #3F3F46   正文强调
ink-800  #27272A   表格正文
ink-900  #18181B   标题、主按钮背景、核心数字（★文字主色）
ink-950  #09090B   极深黑（极少用）
```

### 1.2 品牌强调色 · cdx 深青系列 [通用]

仅用于关键数字、图表轴线、链接、激活态。

```
cdx-50   #F0F7F8   ★hover 背景、active 行背景
cdx-100  #D9EBED   badge 背景、浅边框
cdx-200  #B0D6DB   中边框、图表辅助
cdx-300  #7FBAC2   图表色阶
cdx-400  #4D9CA7   进度条中等值
cdx-500  #2A7F8B   进度条较高值、渐变起点
cdx-600  #1D6571   品牌圆点、次级图标
cdx-700  #185058   ★★★核心强调色 — KPI 数字、链接、active、按钮 hover
cdx-800  #143F47   深色文字标记、悬停加深
cdx-900  #0F2F35   渐变终点
cdx-950  #081B1F   极深青（极少用）
```

### 1.3 辅助色 · warm 暖金系列 [通用]

用于"治理后"对比、增量指标、暖色强调。

```
warm-50   #FBF9F4  暖色背景
warm-100  #F5F0E4  渐变背景
warm-200  #E8DCC1  辅助装饰、标签边框
warm-300  #D6C396  辅助装饰
warm-400  #C2A968  中等强调
warm-500  #A88B4A  较强强调
warm-600  #8A6F38  强调
warm-700  #6E582C  ★暖色强调文字、增量 KPI
```

### 1.4 状态色 [通用]

克制使用。不做大面积填充，仅用于图标、边框、关键文字。

```
success  #3F8F5C   成功、正常状态节点
warning  #C28A2C   警告、需关注
danger   #A8453B   错误、异常、危急值
error    #DC2626   表单错误（仅输入框）
```

### 1.5 命中高亮色 · hl 琥珀金 [通用]

溯源/命中的专用配色。

```
hl-deep     #92400E   命中深色文字
hl-border   #C28A2C   命中边框/下划线（★）
hl-bg       #FEF3C7   命中背景（★浅琥珀）
hl-bg-soft  #FDE68A   强调高亮
hl-bg-lite  #FFFBF0   可映射浅黄
hl-bg-hover #FFF4D6   映射 hover
hl-bg-active #FFE9B8  映射激活
hl-bg-fade  #FFFBEB   动画衰减终点
hl-warm     #FFF3CC   mark 标签背景
```

### 1.6 扩展语义色 [通用]

```
# 活跃运行态
live-green       #15803D   脉冲活跃绿
live-green-retry #E59C0F   重试中琥珀
live-blue        #1D5CFF   运行中蓝

# 段控件（对账模块专用）
segment-active   #165DFF   段控件激活蓝
segment-bg       #F4F5F7   段控件容器底色
segment-text     #4E5969   段控件默认文字

# 对账模块
recon-border     #E5E6EB   对账边框
recon-border-2   #F2F3F5   对账浅边框
recon-ink        #1D2129   对账文字
recon-muted      #86909C   对账图标灰
recon-header     #F7F8FA   表头底
```

### 1.7 模态标识色 [通用]

每种临床模态有专属徽章色：

| 模态 | 背景 | 文字色 |
|------|------|--------|
| 检验 lab | `#F0F7F8` | `#185058` |
| 检查 exam | `#EFF6FF` | `#1E40AF` |
| 病理 path | `#FEF2F2` | `#991B1B` |
| 诊断 dx | `#F5F3FF` | `#5B21B6` |
| 用药 drug | `#ECFDF5` | `#065F46` |
| 手术 surg | `#FFF7ED` | `#9A3412` |
| 病历 emr | `#F8FAFC` | `#334155` |
| 基因 gene | `#FDF4FF` | `#86198F` |

### 1.8 概念维度色 [B 端]

```
dim-anatomy    #6D28D9   解剖（紫）
dim-symptom    #BE185D   症状（品红）
dim-diagnosis  #185058   诊断（cdx-700）
dim-exam       #6366F1   检查（靛蓝）
dim-lab        #6E582C   检验（warm-700）
```

### 1.9 应用图标彩色映射 [通用]

15 种应用场景的图标背景色：

```
bg-cdx-50/text-cdx-700      bg-blue-50/text-blue-700
bg-amber-50/text-amber-700   bg-violet-50/text-violet-700
bg-rose-50/text-rose-700     bg-emerald-50/text-emerald-700
bg-red-50/text-red-700       bg-cyan-50/text-cyan-700
bg-sky-50/text-sky-700       bg-fuchsia-50/text-fuchsia-700
bg-teal-50/text-teal-700     bg-orange-50/text-orange-700
bg-green-50/text-green-700   bg-indigo-50/text-indigo-700
bg-lime-50/text-lime-700
```

### 1.10 图表调色盘 [通用]

```css
--chart-1: #185058;  /* cdx-700 主色 */
--chart-2: #C28A2C;  /* 琥珀金 */
--chart-3: #6E582C;  /* warm-700 */
--chart-4: #4D9CA7;  /* cdx-400 */
--chart-5: #A1A1AA;  /* ink-400 */
--chart-6: #3F8F5C;  /* success */
--chart-7: #6D28D9;  /* 紫 */
--chart-8: #BE185D;  /* 品红 */
```

### 1.11 色彩使用原则 [通用]

**铁律**：
- **90/10 原则**：90% 用 `ink` 灰阶 + 白色，10% 用 `cdx-700` 强调
- **数字永远用深青**：KPI 主值用 `cdx-700`，其他数字用 `ink-900`
- **hover 永远用浅青**：所有可点击元素 hover 背景用 `#F0F7F8`
- **命中用琥珀金**：溯源/命中高亮一律用 `#FEF3C7` + `#C28A2C`
- **activeBg = #F0F7F8**：列表选中、tab 激活统一浅青

**禁用**：
- 禁止用 `cdx-700` 做大面积背景
- 禁止饱和度超过 80% 的任何色彩
- 禁止使用原生 red/yellow/green，必须走定义的 status 色

### 1.12 权限与角色徽章色 [B 端]

```css
.role-badge.admin   { background: #F5F3FF; color: #5B21B6; border-color: #DDD6FE; }
.role-badge.editor  { background: #F0F7F8; color: #185058; border-color: #B0D6DB; }
.role-badge.viewer  { background: #FAFAFA; color: #52525B; border-color: #E4E4E7; }
.role-badge.guest   { background: #FEF3C7; color: #92400E; border-color: #FDE68A; }
```


---

## 2. 字体与排版

### 2.1 字体栈 [通用]

```css
/* 正文 */
font-family-sans: "PingFang SC", "Noto Sans SC", "Inter",
                   system-ui, -apple-system, BlinkMacSystemFont,
                   "Helvetica Neue", sans-serif;

/* 标题（大字号场景） */
font-family-display: "Inter", "PingFang SC", "Helvetica Neue", sans-serif;

/* 数字 / 代码 / 编号 */
font-family-mono: "JetBrains Mono", ui-monospace,
                   SFMono-Regular, Menlo, monospace;
```

### 2.2 B 端展示型字号阶梯（9 级）[B 端]

面向高层 + 投影场景，字号整体上调。

| Token | 字号 | 行高 | 字重 | 字距 | 适用 |
|-------|------|------|------|------|------|
| `hero` | `clamp(4rem, 6.5vw, 6.5rem)` | 1.08 | 400 | -0.035em | 首页超大数字 |
| `kpi` | `clamp(3.5rem, 5.5vw, 5.5rem)` | 1.0 | 500 | -0.025em | KPI 大数字 |
| `h1` | `clamp(2.5rem, 4vw, 3.75rem)` | 1.15 | 500 | -0.025em | 页面主标题 |
| `h2` | `clamp(1.75rem, 2.4vw, 2.25rem)` | 1.25 | 600 | -0.015em | 章节标题 |
| `h3` | `1.375rem` | 1.45 | 600 | — | 卡片标题 |
| `lead` | `1.083rem` | 1.7 | 400 | — | 引导段落 |
| `body` | `1.0625rem` | 1.75 | 400 | — | 正文 |
| `caption` | `0.9375rem` | 1.6 | 500 | 0.005em | 说明文字 |
| `eyebrow` | `0.8125rem` | 1.4 | 600 | **0.16em** | 标签分类（全大写） |

B 端特殊字号：`text-[1.833rem]`（页面 H1）、`text-[7.2rem]`（Hero 数字）、`text-[3.4rem]`（指标卡）、`text-[2.7rem]`（模态卡）。

### 2.3 B 端字号阶梯（6 级）[B 端]

紧凑高效，适合高频操作。

| Token | 字号 | 行高 | 字重 | 字距 | 适用 |
|-------|------|------|------|------|------|
| `admin-h1` | 20px | 1.3 | 600 | -0.01em | 页面主标题 |
| `admin-h2` | 16px | 1.4 | 600 | — | 区块标题 |
| `admin-h3` | 14px | 1.4 | 600 | — | 卡片标题 |
| `admin-body` | 14px | 1.6 | 400 | — | 正文 |
| `admin-caption` | 13px | 1.5 | 400 | — | 说明 |
| `admin-micro` | 12px | 1.4 | 500 | 0.04em | 元信息 |
| `eyebrow` | 13px | 1.4 | 600 | **0.16em** | 标签（C/B 端共用） |

### 2.4 功能性字号 Token [通用]

适用于特定 UI 元素的字号定义，C/B 端共用。

| Token | 字号 | 行高 | 字重 | 字距 | 字体 | 适用 |
|-------|------|------|------|------|------|------|
| `code` | 14px | 1.6 | 400 | — | font-mono | 代码片段、ID 编号、技术标识 |
| `button` | 14px | 1.0 | 500 | — | font-sans | 按钮文字（常规尺寸） |
| `button-sm` | 12px | 1.0 | 500 | — | font-sans | 小按钮、操作链接 |
| `button-cta` | 13px | 1.0 | 600 | 0.16em | font-sans | CTA 主按钮（uppercase） |
| `nav-link` | 14px | 1.4 | 500 | — | font-sans | 导航链接、菜单项 |
| `nav-link-sm` | 13px | 1.4 | 500 | — | font-sans | 侧边栏菜单项 |
| `caption-uppercase` | 12px | 1.4 | 500 | 0.12em | font-sans | 大写标注（比 eyebrow 更轻量） |
| `table-header` | 12px | 1.4 | 600 | 0.04em | font-sans | 表头文字 |
| `badge` | 11px | 1.4 | 600 | 0.04em | font-mono | 徽章、状态标签 |
| `tooltip` | 12px | 1.6 | 400 | — | font-sans | 提示浮层文字 |

```css
/* 功能性字号 */
.text-code { font-family: var(--font-mono); font-size: 14px; line-height: 1.6; }
.text-button { font-size: 14px; font-weight: 500; line-height: 1.0; }
.text-button-sm { font-size: 12px; font-weight: 500; line-height: 1.0; }
.text-button-cta { font-size: 13px; font-weight: 600; line-height: 1.0; letter-spacing: 0.16em; text-transform: uppercase; }
.text-nav-link { font-size: 14px; font-weight: 500; line-height: 1.4; }
.text-nav-link-sm { font-size: 13px; font-weight: 500; line-height: 1.4; }
.text-caption-upper { font-size: 12px; font-weight: 500; line-height: 1.4; letter-spacing: 0.12em; text-transform: uppercase; }
.text-table-header { font-size: 12px; font-weight: 600; line-height: 1.4; letter-spacing: 0.04em; }
.text-badge { font-family: var(--font-mono); font-size: 11px; font-weight: 600; line-height: 1.4; letter-spacing: 0.04em; }
.text-tooltip { font-size: 12px; line-height: 1.6; }
```

### 2.5 全局排版设置 [通用]

```css
html, body {
  font-feature-settings: "ss01", "cv11";
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.countup, .font-mono {
  font-variant-numeric: tabular-nums;
}
```

### 2.6 eyebrow 样式 [通用]

项目最具辨识度的排版元素，C/B 端共用：

```css
.text-eyebrow {
  font-size: 0.8125rem;       /* 13px */
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: 0.16em;     /* ★超宽字距 */
  text-transform: uppercase;
}
```

### 2.7 排版铁律 [通用]

- 标题用负字距（-0.015em ~ -0.035em）
- 数字永远用 `font-mono` + `tabular-nums`
- eyebrow 字距固定 0.16em，不可减小
- 大字号（>40px）行高 ≤ 1.15

---

## 3. 间距与布局

### 3.1 容器宽度 [通用]

```
narrow    720px    窄内容区（表单、文章）
reading   880px    阅读区（段落文字）
wide      1280px   宽内容区
ultra     1440px   B 端最大内容区
```

### 3.2 B 端展示型页面布局 [B 端]

```
主内容区: max-w-ultra mx-auto px-12 pt-20 pb-20
顶部导航: fixed top-0 z-40 px-6 lg:px-10 py-5
底部控制条: fixed bottom-0 z-40 px-10 py-4
```

### 3.3 B 端管理型页面布局 [B 端]

```
┌──────────────────────────────────────────┐
│  顶部 Header（56px · fixed）              │
├──────┬───────────────────────────────────┤
│ 侧边 │                                    │
│ 菜单 │         主内容区                    │
│ 240px│         padding: 20px              │
│fixed │         margin-left: 240px         │
│      │         margin-top: 56px           │
└──────┴───────────────────────────────────┘
```

**实际规范**（prototype 已验证 · 2026-05-22 与工作台 §30.2 统一）：

```css
/* 侧边栏 */
.sidebar {
  width: 240px;
  position: fixed;
  left: 0; top: 0; bottom: 0;
  background: #fff;
  border-right: 1px solid var(--ink-200);
  z-index: 40;
  display: flex;
  flex-direction: column;
}

/* 顶部 Header */
.header {
  height: 56px;
  position: fixed;
  top: 0; left: 240px; right: 0;
  background: #fff;
  border-bottom: 1px solid var(--ink-200);
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

/* 主内容区 */
.main-content {
  margin-left: 240px;
  margin-top: 56px;
  padding: 20px;        /* ★ 与工作台 §30.2 统一为 20px */
  min-height: calc(100vh - 56px);
}

/* 内卡片间距 */
.main-content > * + * {
  margin-top: 10px;     /* ★ 与工作台 §30.2 统一为 10px */
}
.main-content .card-grid {
  gap: 10px;            /* ★ 卡片网格 gap 统一 10px */
}
```

**侧边栏 Logo 区域**：

```css
/* Logo/品牌区高度与 Header 等高，flex 垂直居中 */
.sidebar-logo {
  height: 56px;
  padding: 0 20px;
  border-bottom: 1px solid var(--ink-200);
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
```

**侧边栏导航**：

```css
/* 一级菜单组按钮 */
.nav-group-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  cursor: pointer;
  color: var(--ink-600);
  font-size: 13px;
  font-weight: 500;
  border-radius: 4px;
  margin: 2px 8px;
  transition: all 150ms var(--ease-expo);
  user-select: none;
}
.nav-group-btn:hover { background: var(--cdx-50); color: var(--ink-900); }
.nav-group-btn.parent-active { color: var(--cdx-700); }
.nav-group-btn .chevron { transition: transform 200ms var(--ease-expo); flex-shrink: 0; }
.nav-group-btn.expanded .chevron { transform: rotate(90deg); }

/* 子菜单展开动画 */
.nav-children { overflow: hidden; max-height: 0; transition: max-height 300ms var(--ease-expo); }
.nav-children.open { max-height: 600px; }

/* 子菜单项 */
.nav-child {
  display: block;
  padding: 6px 16px 6px 46px;
  font-size: 13px;
  color: var(--ink-500);
  cursor: pointer;
  margin: 1px 8px;
  border-radius: 3px;
  border-left: 2px solid transparent;
  transition: all 150ms var(--ease-expo);
}
.nav-child:hover { background: var(--cdx-50); color: var(--ink-900); }
.nav-child.active {
  background: var(--cdx-50);
  color: var(--cdx-700);
  border-left-color: var(--cdx-700);
  font-weight: 500;
}
```

**页面背景**：

```css
/* 全局背景：极浅灰 + 3px 噪点网格 */
html, body {
  background-color: var(--ink-50);
  background-image: radial-gradient(rgba(0,0,0,0.018) 1px, transparent 1px);
  background-size: 3px 3px;
  background-attachment: fixed;
}
```

### 3.4 间距 Token [通用]

```
18   4.5rem   (72px)
22   5.5rem   (88px)
30   7.5rem   (120px)
36   9rem     (144px)
```

### 3.5 卡片内边距 [通用]

| 场景 | 展示型 | 管理型 |
|------|------|------|
| 主卡片 | `p-7` (28px) | `p-5` (20px) |
| 大区块 | `p-10` (40px) | `p-6` (24px) |
| 紧凑卡 | `p-5` (20px) | `p-4` (16px) |
| 表格单元 | `px-4 py-3.5` | `px-3 py-2.5` |

### 3.6 网格分隔线技巧 [通用]

```html
<!-- 1px 网格线效果 -->
<section class="grid grid-cols-3 gap-px bg-ink-200 border border-ink-200">
  <div class="bg-white p-7">卡片1</div>
  <div class="bg-white p-7">卡片2</div>
  <div class="bg-white p-7">卡片3</div>
</section>
```

### 3.7 Layout 布局容器 [通用]

**用途**：标准化页面整体布局结构，提供 Header/Sider/Content/Footer 组合

**布局模式**：
- 经典布局：Header + Sider + Content + Footer
- 顶部导航布局：Header + Content + Footer
- 侧边导航布局：Sider + (Header + Content + Footer)

#### 基础布局容器

```css
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--ink-50);
}
```

#### Header 顶部

```css
.layout__header {
  height: 56px;
  background: #fff;
  border-bottom: 1px solid var(--ink-100);
  display: flex;
  align-items: center;
  padding: 0 24px;
  flex-shrink: 0;
  z-index: 800;
}
```

#### Sider 侧边栏

```css
.layout__sider {
  width: 240px;
  background: #fff;
  border-right: 1px solid var(--ink-100);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition: width 300ms var(--ease-expo);
  overflow: hidden;
}
.layout__sider--collapsed {
  width: 64px;
}
```

#### Content 主内容区

```css
.layout__content {
  flex: 1;
  padding: 20px;
  background: var(--ink-50);
  overflow-y: auto;
}
```

#### Footer 底部

```css
.layout__footer {
  height: 48px;
  background: #fff;
  border-top: 1px solid var(--ink-100);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  flex-shrink: 0;
  font-size: 13px;
  color: var(--ink-500);
}
```

#### 布局组合

```css
/* 经典布局：Header + (Sider + Content) + Footer */
.layout--classic {
  display: flex;
  flex-direction: column;
}
.layout__body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* 侧边导航布局：Sider + (Header + Content + Footer) */
.layout--sider-first {
  flex-direction: row;
}
.layout--sider-first .layout__main {
  display: flex;
  flex-direction: column;
  flex: 1;
}
```

**使用示例**：

```html
<!-- 经典布局 -->
<div class="layout layout--classic">
  <header class="layout__header">
    <div>Logo</div>
    <nav>导航菜单</nav>
  </header>
  
  <div class="layout__body">
    <aside class="layout__sider">
      侧边栏菜单
    </aside>
    
    <main class="layout__content">
      主内容区域
    </main>
  </div>
  
  <footer class="layout__footer">
    © 2026 RUNDA Clinical Data X
  </footer>
</div>

<!-- 侧边导航布局 -->
<div class="layout layout--sider-first">
  <aside class="layout__sider">
    侧边栏菜单
  </aside>
  
  <div class="layout__main">
    <header class="layout__header">
      顶部导航
    </header>
    
    <main class="layout__content">
      主内容区域
    </main>
    
    <footer class="layout__footer">
      底部信息
    </footer>
  </div>
</div>

<!-- 可折叠侧边栏 -->
<aside class="layout__sider layout__sider--collapsed">
  <div class="sidebar__brand">
    <svg class="sidebar__logo">...</svg>
  </div>
  <nav class="sidebar__menu">
    <!-- 折叠时只显示图标 -->
  </nav>
</aside>
```

**响应式**：

```css
@media (max-width: 768px) {
  .layout__sider {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 900;
    transform: translateX(-100%);
    transition: transform 300ms var(--ease-expo);
  }
  .layout__sider--visible {
    transform: translateX(0);
  }
  .layout__content {
    padding: 16px;
  }
}
```

### 3.8 Grid 栅格系统 [通用]

**用途**：响应式布局、多列布局、卡片网格

**规格**：24 栅格系统，支持响应式断点

#### 响应式断点

```
xs:  0px      (手机竖屏)
sm:  640px    (手机横屏)
md:  768px    (平板竖屏)
lg:  1024px   (平板横屏/小屏笔记本)
xl:  1280px   (桌面)
xxl: 1536px   (大屏桌面)
```

#### Row 行容器

```css
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;
}
.row--gutter-12 {
  margin-left: -6px;
  margin-right: -6px;
}
.row--gutter-16 {
  margin-left: -8px;
  margin-right: -8px;
}
.row--gutter-20 {
  margin-left: -10px;
  margin-right: -10px;
}
.row--gutter-24 {
  margin-left: -12px;
  margin-right: -12px;
}
```

#### Col 列容器

```css
.col {
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;
}

/* 24 栅格 */
.col-1  { flex: 0 0 4.166667%; max-width: 4.166667%; }
.col-2  { flex: 0 0 8.333333%; max-width: 8.333333%; }
.col-3  { flex: 0 0 12.5%; max-width: 12.5%; }
.col-4  { flex: 0 0 16.666667%; max-width: 16.666667%; }
.col-5  { flex: 0 0 20.833333%; max-width: 20.833333%; }
.col-6  { flex: 0 0 25%; max-width: 25%; }
.col-7  { flex: 0 0 29.166667%; max-width: 29.166667%; }
.col-8  { flex: 0 0 33.333333%; max-width: 33.333333%; }
.col-9  { flex: 0 0 37.5%; max-width: 37.5%; }
.col-10 { flex: 0 0 41.666667%; max-width: 41.666667%; }
.col-11 { flex: 0 0 45.833333%; max-width: 45.833333%; }
.col-12 { flex: 0 0 50%; max-width: 50%; }
.col-13 { flex: 0 0 54.166667%; max-width: 54.166667%; }
.col-14 { flex: 0 0 58.333333%; max-width: 58.333333%; }
.col-15 { flex: 0 0 62.5%; max-width: 62.5%; }
.col-16 { flex: 0 0 66.666667%; max-width: 66.666667%; }
.col-17 { flex: 0 0 70.833333%; max-width: 70.833333%; }
.col-18 { flex: 0 0 75%; max-width: 75%; }
.col-19 { flex: 0 0 79.166667%; max-width: 79.166667%; }
.col-20 { flex: 0 0 83.333333%; max-width: 83.333333%; }
.col-21 { flex: 0 0 87.5%; max-width: 87.5%; }
.col-22 { flex: 0 0 91.666667%; max-width: 91.666667%; }
.col-23 { flex: 0 0 95.833333%; max-width: 95.833333%; }
.col-24 { flex: 0 0 100%; max-width: 100%; }
```

#### Offset 偏移

```css
.col-offset-1  { margin-left: 4.166667%; }
.col-offset-2  { margin-left: 8.333333%; }
.col-offset-3  { margin-left: 12.5%; }
.col-offset-4  { margin-left: 16.666667%; }
.col-offset-6  { margin-left: 25%; }
.col-offset-8  { margin-left: 33.333333%; }
.col-offset-12 { margin-left: 50%; }
```

#### 响应式栅格

```css
/* sm: >= 640px */
@media (min-width: 640px) {
  .col-sm-12 { flex: 0 0 50%; max-width: 50%; }
  .col-sm-24 { flex: 0 0 100%; max-width: 100%; }
}

/* md: >= 768px */
@media (min-width: 768px) {
  .col-md-8  { flex: 0 0 33.333333%; max-width: 33.333333%; }
  .col-md-12 { flex: 0 0 50%; max-width: 50%; }
  .col-md-16 { flex: 0 0 66.666667%; max-width: 66.666667%; }
}

/* lg: >= 1024px */
@media (min-width: 1024px) {
  .col-lg-6  { flex: 0 0 25%; max-width: 25%; }
  .col-lg-8  { flex: 0 0 33.333333%; max-width: 33.333333%; }
  .col-lg-12 { flex: 0 0 50%; max-width: 50%; }
}

/* xl: >= 1280px */
@media (min-width: 1280px) {
  .col-xl-4  { flex: 0 0 16.666667%; max-width: 16.666667%; }
  .col-xl-6  { flex: 0 0 25%; max-width: 25%; }
  .col-xl-8  { flex: 0 0 33.333333%; max-width: 33.333333%; }
}
```

**使用示例**：

```html
<!-- 基础 2 列布局 -->
<div class="row">
  <div class="col col-12">左侧内容（50%）</div>
  <div class="col col-12">右侧内容（50%）</div>
</div>

<!-- 3 列布局 -->
<div class="row row--gutter-16">
  <div class="col col-8">列 1（33.33%）</div>
  <div class="col col-8">列 2（33.33%）</div>
  <div class="col col-8">列 3（33.33%）</div>
</div>

<!-- 响应式布局 -->
<div class="row">
  <div class="col col-24 col-md-12 col-lg-8">
    <!-- 手机 100%，平板 50%，桌面 33.33% -->
  </div>
  <div class="col col-24 col-md-12 col-lg-8">
    <!-- 手机 100%，平板 50%，桌面 33.33% -->
  </div>
  <div class="col col-24 col-md-24 col-lg-8">
    <!-- 手机 100%，平板 100%，桌面 33.33% -->
  </div>
</div>

<!-- 偏移布局 -->
<div class="row">
  <div class="col col-8 col-offset-8">
    <!-- 居中显示，左右各留 33.33% -->
  </div>
</div>

<!-- 卡片网格 -->
<div class="row row--gutter-16">
  <div class="col col-24 col-sm-12 col-md-8 col-lg-6">
    <div class="stat-card">卡片 1</div>
  </div>
  <div class="col col-24 col-sm-12 col-md-8 col-lg-6">
    <div class="stat-card">卡片 2</div>
  </div>
  <div class="col col-24 col-sm-12 col-md-8 col-lg-6">
    <div class="stat-card">卡片 3</div>
  </div>
  <div class="col col-24 col-sm-12 col-md-8 col-lg-6">
    <div class="stat-card">卡片 4</div>
  </div>
</div>
```

**Tailwind 替代方案**：

```html
<!-- 使用 Tailwind Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="stat-card">卡片 1</div>
  <div class="stat-card">卡片 2</div>
  <div class="stat-card">卡片 3</div>
  <div class="stat-card">卡片 4</div>
</div>
```

---

## 4. 圆角系统 [通用]

| Token | 值 | 用途 |
|-------|-----|------|
| `rounded-xs` | 2px | 锐利徽章（对账/synonym） |
| `rounded-sm` | 4px | tag / chip / 段控件 |
| `rounded` | 6px | ★按钮 / 输入框 / 卡片（默认） |
| `rounded-md` | 8px | 中等卡片 / 下拉菜单 |
| `rounded-lg` | 12px | 大卡片 / 登录卡 |
| `rounded-xl` | 16px | 特大容器 |
| `rounded-2xl` | 14px | 模态卡片（B 端专用） |
| `rounded-full` | 999px | pill / avatar / badge |

**特别说明**：B 端卡片统一用 6px，不使用 14px 模态卡圆角。

---

## 5. 阴影系统 [通用]

### 5.1 基础阴影（3 层）

```css
subtle:     0 1px 2px rgba(15, 23, 42, 0.04);
soft:       0 4px 16px rgba(15, 23, 42, 0.06);
lift:       0 12px 40px rgba(15, 23, 42, 0.08);
```

### 5.2 场景阴影

```css
card-hover:     0 12px 28px rgba(24, 80, 88, 0.08);
drawer:         -16px 0 48px rgba(15, 23, 42, 0.12);
tooltip:        0 8px 24px rgba(0, 0, 0, 0.18);
dropdown:       0 12px 40px rgba(15, 23, 42, 0.10);
login:          0 1px 0 rgba(0,0,0,0.02), 0 24px 60px -20px rgba(15,23,42,0.10);
modal:          0 24px 60px -12px rgba(15, 23, 42, 0.20);  /* [B 端] */
concept-hit:    0 4px 14px rgba(194, 138, 44, 0.18);
```

### 5.3 Focus Ring 阴影

```css
focus-ink:      0 0 0 3px rgba(24, 24, 27, 0.06);      /* 输入框 focus */
focus-error:    0 0 0 3px rgba(220, 38, 38, 0.08);     /* 输入框 error */
focus-cdx:      0 0 0 2px rgba(24, 80, 88, 0.15);      /* filter-pill */
hl-ring:        0 0 0 2px #FEF3C7;                      /* 命中外圈 */
```

### 5.4 Inset 阴影（状态标记）

```css
inset 0 -3px 0 #185058;          /* layer-tab active 底条 */
inset 3px 0 0 #C28A2C;           /* 命中行左侧条 */
inset 3px 0 0 #185058;           /* 规则行激活左条 */
```

### 5.5 使用原则

- 静态卡片默认无阴影，靠 `border: 1px solid #E4E4E7` 分层
- 阴影仅在 hover 时出现
- 焦点态用 ring 阴影
- 状态标记用 inset 阴影

---

## 6. 渐变与装饰 [通用]

### 6.1 预定义渐变

```css
--gradient-warm:     linear-gradient(135deg, #FBF9F4 0%, #F5F0E4 100%);
--gradient-cdx:      linear-gradient(135deg, #2A7F8B 0%, #185058 100%);
--gradient-fade:     linear-gradient(180deg, transparent 0%, #FAFAFA 100%);
--gradient-modality: linear-gradient(180deg, #FFFFFF 0%, #F7F8FA 100%);
```

### 6.2 噪点纹理（★全局必备）[通用]

直接作为 `body` 背景图层实现，避免伪元素层叠问题和 `mix-blend-mode` 对组件的颜色污染。

```css
html, body {
  background-color: #FAFAFA;
  background-image: radial-gradient(rgba(0,0,0,0.018) 1px, transparent 1px);
  background-size: 3px 3px;
  background-attachment: fixed;
}
```

**设计要点**：
- 纹理是 body 背景本身，天然最底层，无 z-index 问题
- 不使用伪元素，不创建额外合成层，滚动/动画零性能开销
- 不使用 `mix-blend-mode`，不会对任何组件产生颜色混合污染
- `background-attachment: fixed` 确保纹理固定不随页面滚动
- `rgba(0,0,0,0.018)` 极低透明度 + 3px 间距，不影响内容可读性

**禁用旧方案**：
- ❌ 不再使用 `.grain::before` 伪元素方案
- ❌ 不再使用 `mix-blend-mode: multiply`
- ❌ 不再需要 `<body class="grain">`

### 6.3 流光扫过 [B 端]

```css
.pl-step.active::after {
  background: linear-gradient(90deg,
    transparent 0%, rgba(42,127,139,0.14) 50%, transparent 100%);
  animation: flowSweep 2.4s linear infinite;
}
```

### 6.4 流动条纹 [B 端]

```css
.sync-bar > i::after {
  background: repeating-linear-gradient(135deg,
    rgba(255,255,255,0) 0 10px,
    rgba(255,255,255,.45) 10px 14px,
    rgba(255,255,255,0) 14px 22px);
  animation: flowStripe 1.2s linear infinite;
}
```

### 6.5 骨架屏渐变 [B 端]

```css
.skeleton {
  background: linear-gradient(90deg, #F4F4F5 0%, #FAFAFA 50%, #F4F4F5 100%);
  background-size: 200% 100%;
  animation: skeletonShine 1.4s ease-in-out infinite;
}
```

---

## 7. 图标规范 [通用]

| 项 | 规范 |
|----|------|
| 风格 | 线性描边（stroke），不用填充 |
| stroke-width | 1.5（细）/ 1.8（中）/ 2（粗） |
| stroke-linecap | `round` |
| stroke-linejoin | `round` |
| viewBox | `0 0 24 24` |
| 来源 | **内联 SVG**，不用图标字体 |
| 颜色 | `currentColor` |

尺寸阶梯：12px / 14px / 16px / 20px / 24px / 32px / 48px

---

## 8. 按钮 [通用]

### 8.1 Primary CTA [通用]

**B 端实际规范**（prototype 已验证）：

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid var(--ink-900);
  background: var(--ink-900);
  color: #fff;
  cursor: pointer;
  transition: all 200ms var(--ease-expo);
  font-family: inherit;
  line-height: 1.4;
}
.btn-primary:hover {
  background: var(--cdx-700);
  border-color: var(--cdx-700);
}
```

> B 端大按钮（落地页 CTA）保留原有 `padding: 14px 32px; letter-spacing: 0.16em; text-transform: uppercase` 规格，其他场景一律使用上方 mini 规格。

### 8.2 Secondary [通用]

**B 端实际规范**（prototype 已验证）：

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid var(--ink-200);
  background: #fff;
  color: var(--ink-700);
  cursor: pointer;
  transition: all 200ms var(--ease-expo);
  font-family: inherit;
  line-height: 1.4;
}
.btn-secondary:hover {
  border-color: var(--cdx-700);
  color: var(--cdx-700);
}
```

> B 端保留原有 `padding: 14px 32px; letter-spacing: 0.16em; text-transform: uppercase` 规格。

### 8.3 Danger [通用]

```css
.btn-danger {
  background: #A8453B;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
}
.btn-danger--ghost {
  background: transparent;
  border: 1px solid #A8453B;
  color: #A8453B;
}
```

### 8.4 Dashed Add [通用]

```css
.btn-dashed {
  border: 1px dashed var(--ink-200);
  color: var(--ink-500);
  padding: 8px 16px;
  border-radius: 4px;
}
.btn-dashed:hover {
  border-color: var(--cdx-700);
  color: var(--cdx-700);
}
```

### 8.5 Link Button [通用]

```css
.btn-link {
  background: none;
  border: none;
  color: var(--cdx-700);
  font-size: 12px;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
}
.btn-link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}
```

> B 端表格操作列中使用，字号固定 12px，无需 `text-decoration` 默认态。

### 8.6 Page Button [B 端]

```css
.page-btn {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  opacity: 0.5;
  transition: opacity 200ms;
}
.page-btn.active {
  background: var(--ink-900);
  color: #fff;
  opacity: 1;
}
```

### 8.7 Mini Button [B 端]

```css
.btn-mini {
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 3px;
  line-height: 1.4;
}
```

### 8.8 Button Group [B 端]

```css
.btn-group {
  display: inline-flex;
}
.btn-group > .btn { border-radius: 0; }
.btn-group > .btn:first-child { border-radius: 4px 0 0 4px; }
.btn-group > .btn:last-child { border-radius: 0 4px 4px 0; }
.btn-group > .btn + .btn { margin-left: -1px; }
```

### 8.9 Drill-back Button [B 端]

```css
.btn-drill-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--ink-500);
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.btn-drill-back svg {
  transition: transform 200ms var(--ease-expo);
}
.btn-drill-back:hover svg {
  transform: translateX(-3px);
}
```

---

## 9. 表单控件 [通用]

### 9.1 Main Input [通用]

```css
.input {
  padding: 14px 16px;
  border: 1px solid var(--ink-200);
  border-radius: 6px;
  font-size: 14px;
  color: var(--ink-900);
  background: #fff;
  transition: border-color 200ms, box-shadow 200ms;
}
.input:focus {
  border-color: var(--cdx-700);
  box-shadow: 0 0 0 3px rgba(45, 120, 115, 0.08);
  outline: none;
}
.input::placeholder {
  color: var(--ink-400);
}
```

### 9.2 Compact Input [B 端]

```css
.recon-input {
  height: 36px;
  padding: 6px 12px;
  border-radius: 2px;
  border: 1px solid var(--ink-200);
  font-size: 13px;
}
```

### 9.3 Search Input [通用]

```css
.input-search {
  background: var(--ink-50);
  padding-left: 36px;
  border-color: transparent;
}
.input-search:focus {
  background: #fff;
  border-color: var(--cdx-700);
}
```

### 9.4 Date Input [通用]

```css
.input-date {
  font-family: var(--font-mono);
  letter-spacing: 0.02em;
}
```

### 9.5 Label [通用]

```css
.form-label {
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-500);
  margin-bottom: 6px;
}
```

### 9.6 Error Message [通用]

```css
.form-error {
  font-size: 12px;
  color: #A8453B;
  margin-top: 4px;
}
```

### 9.7 Validation States [通用]

```css
.input--error { border-color: #A8453B; }
.input--warning { border-color: var(--amber-500); }
.input--valid { border-color: var(--cdx-700); }
.input--disabled {
  background: var(--ink-50);
  color: var(--ink-400);
  cursor: not-allowed;
  opacity: 0.6;
}
```

### 9.8 Switch [B 端]

```css
.switch {
  width: 34px;
  height: 20px;
  border-radius: 10px;
  background: var(--ink-200);
  position: relative;
  transition: background 200ms;
}
.switch::after {
  content: '';
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform 200ms var(--ease-expo);
}
.switch.active {
  background: var(--cdx-700);
}
.switch.active::after {
  transform: translateX(14px);
}
```

### 9.9 Checkbox [B 端]

```css
.checkbox {
  width: 16px;
  height: 16px;
  border: 1.5px solid var(--ink-300);
  border-radius: 3px;
  transition: all 150ms;
}
.checkbox:checked {
  background: var(--cdx-700);
  border-color: var(--cdx-700);
}
```

### 9.10 Radio [B 端]

```css
.radio {
  width: 16px;
  height: 16px;
  border: 1.5px solid var(--ink-300);
  border-radius: 50%;
  transition: all 150ms;
}
.radio:checked {
  border-width: 5px;
  border-color: var(--cdx-700);
}
```

### 9.11 Radio Button Group [B 端]

**实际规范**（prototype 已验证）：

```css
.radio-btn-group {
  display: inline-flex;
  border: 1px solid var(--ink-200);
  border-radius: 4px;
  overflow: hidden;
}
.radio-btn {
  padding: 5px 14px;
  font-size: 13px;
  cursor: pointer;
  border-right: 1px solid var(--ink-200);
  color: var(--ink-600);
  background: #fff;
}
.radio-btn:last-child { border-right: none; }
.radio-btn.active {
  background: var(--cdx-50);
  color: var(--cdx-700);
  font-weight: 500;
}
```

**激活态变体**：当用于"运行质控 / 终末质控"等强调切换时，激活项使用深色填充：

```css
/* 强调激活态 — 用于质控类型切换 */
.radio-btn.active-dark {
  background: var(--ink-900);
  color: #fff;
}
```

**使用规则**：
- 选项数量 2–4 个，超过 4 个改用 `<select>`
- 不得在 radio-btn-group 内混用不同尺寸的按钮
- 一级场景切换（门诊/住院）用下划线 Tab 样式，二级类型切换（运行/终末）用本组件

### 9.12 Select Dropdown [B 端]

**实际规范**（prototype 已验证）：

```css
.filter-select {
  appearance: none;
  -webkit-appearance: none;
  padding: 7px 32px 7px 12px;
  border: 1px solid var(--ink-200);
  border-radius: 4px;
  font-size: 13px;
  color: var(--ink-900);
  background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2371717A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right 10px center;
  background-size: 14px;
  outline: none;
  transition: border-color 200ms, box-shadow 200ms;
  font-family: inherit;
}
.filter-select:focus {
  border-color: var(--cdx-700);
  box-shadow: 0 0 0 3px rgba(24,80,88,0.08);
}
```

**分页器小尺寸变体**（每页条数选择器）：

```css
/* 分页器内嵌 select — padding-right 必须保留 28px 给箭头图标 */
.filter-select.select-sm {
  padding: 3px 28px 3px 8px;
  font-size: 12px;
}
```

**关键规则**：
- 必须同时设置 `appearance: none` 和 `-webkit-appearance: none` 移除浏览器原生箭头
- `padding-right` 最小 **32px**（标准）/ **28px**（小尺寸），确保文字不与箭头图标重叠
- 箭头图标使用内联 SVG data URI，颜色固定 `#71717A`（`--ink-500`），尺寸 14px，位置 `right 10px center`
- 禁止使用内联 `style="padding:Xpx Ypx"` 覆盖 padding，会导致图标与文字重叠

### 9.13 Multi-select [B 端]

```css
.multi-select {
  min-height: 36px;
  padding: 4px 8px;
  border: 1px solid var(--ink-200);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.multi-select__tag {
  padding: 2px 8px;
  background: var(--cdx-50);
  border-radius: 3px;
  font-size: 12px;
}
```

### 9.14 Tag Input [B 端]

```css
.tag-input {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 6px 8px;
  border: 1px solid var(--ink-200);
  border-radius: 4px;
  min-height: 36px;
}
.tag-input__tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  background: var(--ink-100);
  border-radius: 3px;
  font-size: 12px;
}
```

---

### 9.15 Form 表单容器 [通用]

标准化表单布局、字段校验、错误提示、响应式适配。

#### 布局模式

| 模式 | 说明 | 适用场景 |
|------|------|----------|
| Horizontal | 标签在左，控件在右 | 默认，桌面端表单 |
| Vertical | 标签在上，控件在下 | 移动端、长标签 |
| Inline | 标签和控件同行，多字段横排 | 筛选栏、搜索条件 |

#### Form 容器

```css
.form { width: 100%; }
.form--horizontal .form-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}
.form--vertical .form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.form--inline {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
```

#### Form Item 表单项

```css
.form-item__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-700);
}
.form--horizontal .form-item__label {
  width: 120px;
  text-align: right;
  padding-right: 12px;
  flex-shrink: 0;
  padding-top: 8px;
}
.form--vertical .form-item__label {
  margin-bottom: 6px;
}
```

#### 必填标记

```css
.form-item__label--required::before {
  content: '*';
  color: #DC2626;
  margin-right: 4px;
}
```

#### 错误提示

```css
.form-item__error {
  font-size: 12px;
  color: #DC2626;
  margin-top: 4px;
}
.form-item--error .input {
  border-color: #DC2626;
}
.form-item--error .input:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}
```

#### 帮助文本

```css
.form-item__help {
  font-size: 12px;
  color: var(--ink-500);
  margin-top: 4px;
}
```

#### 响应式

- 移动端（< md）：自动切换为 vertical 布局
- 标签宽度：80 / 100 / 120px 可配置

#### 键盘操作

- Tab：在表单项之间切换焦点
- Enter：提交表单（在最后一个输入框时）
- Esc：取消编辑

---

## 10. 标签与徽章 [通用]

### 10.1 Condition Tag [通用]

```css
.cond-tag {
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  background: var(--ink-100);
  color: var(--ink-700);
  cursor: pointer;
  transition: all 150ms;
}
.cond-tag.is-active {
  background: var(--cdx-700);
  color: #fff;
}
```

### 10.2 Filter Chip [通用]

```css
.filter-chip {
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid var(--ink-200);
  font-size: 12px;
}
.filter-chip.active {
  background: var(--cdx-50);
  border-color: var(--cdx-700);
  color: var(--cdx-700);
}
```

### 10.3 Modality Chip [B 端]

```css
.mod-chip {
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: var(--ink-100);
}
```

### 10.4 Badge [通用]

**B 端实际规范**（prototype 已验证）：

```css
/* 基础 badge — 所有变体共享 */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 2px;           /* 直角感，区别于 B 端圆角 pill */
  font-size: 11px;
  font-weight: 500;
  font-family: var(--font-mono);
  letter-spacing: 0.04em;
  white-space: nowrap;
}

/* 语义变体 */
.badge-danger  { background: #FEF2F2; color: #991B1B; }  /* 危险 / 单项否决 */
.badge-warning { background: #FEF3C7; color: #92400E; }  /* 警告 / 未达标 */
.badge-ok      { background: #D1FAE5; color: #065F46; }  /* 正常 / 达标 */
.badge-cdx     { background: var(--cdx-50); color: var(--cdx-700); } /* 品牌 / 累计扣分 */
.badge-muted   { background: var(--ink-100); color: var(--ink-600); } /* 中性 / 禁用 */
```

**使用规则**：
- `border-radius: 2px`（非圆角），与 B 端 pill 形 badge 区分
- 字体强制 `font-mono`，保证数字等宽对齐
- 5 种语义变体覆盖所有业务状态，禁止自定义颜色
- 表格状态列、指标类型标注、扣除逻辑标注均使用本组件

### 10.5 Badge Warn / OK [通用]

> **已合并至 §10.4**。`badge-warning` / `badge-ok` 作为 `.badge` 的语义变体统一管理，不再单独定义。

### 10.6 Batch Tag [B 端]

```css
.batch-tag { padding: 2px 8px; border-radius: 3px; font-size: 11px; }
.batch-tag--run { background: var(--cdx-50); color: var(--cdx-700); }
.batch-tag--ok { background: #D1FAE5; color: #065F46; }
.batch-tag--retry { background: #FEF3C7; color: #92400E; }
```

### 10.7 Cond-pill [B 端]

```css
.cond-pill {
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--cdx-700);
  color: #fff;
  font-size: 11px;
  font-weight: 500;
}
```

### 10.8 Role Badge [B 端]

```css
.role-badge {
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 500;
}
.role-badge--admin { background: #EDE9FE; color: #5B21B6; }
.role-badge--editor { background: #DBEAFE; color: #1E40AF; }
.role-badge--viewer { background: var(--ink-100); color: var(--ink-600); }
```

### 10.9 Accel Badge [B 端]

```css
.accel-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 3px;
  background: var(--ink-100);
  font-size: 11px;
  font-family: var(--font-mono);
}
```

### 10.10 Avatar 头像 [通用]

用户头像展示，支持图片、文字、图标三种模式，以及上传交互状态。

#### 尺寸阶梯

| 尺寸 | 直径 | 字号 | 适用场景 |
|------|------|------|----------|
| xs | 24px | 11px | 表格行内、评论列表 |
| sm | 32px | 13px | 导航栏、Header 用户信息 |
| md | 40px | 14px | 卡片内、列表项 |
| lg | 56px | 18px | 个人中心、详情页 |
| xl | 80px | 24px | 设置页头像编辑区 |

#### 基础样式

```css
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  user-select: none;
  vertical-align: middle;
}
.avatar--xs { width: 24px; height: 24px; font-size: 11px; }
.avatar--sm { width: 32px; height: 32px; font-size: 13px; }
.avatar--md { width: 40px; height: 40px; font-size: 14px; }
.avatar--lg { width: 56px; height: 56px; font-size: 18px; }
.avatar--xl { width: 80px; height: 80px; font-size: 24px; }
```

#### 默认态（图标占位）

无头像时显示用户图标占位：

```css
.avatar--default {
  background: var(--cdx-50);
  border: 1px solid var(--cdx-200);
  color: var(--cdx-700);
}
```

图标使用内联 SVG（user 图标）：
- xs/sm：`width: 14px; height: 14px`
- md：`width: 18px; height: 18px`
- lg/xl：`width: 24px; height: 24px`
- stroke-width: 1.8，stroke-linecap: round

#### 文字头像

取用户姓名首字（中文取第一个字，英文取首字母大写）：

```css
.avatar--text {
  background: var(--cdx-700);
  color: #fff;
  font-weight: 600;
  letter-spacing: 0;
}
```

多色方案（用于群组区分）：

| 序号 | 背景色 | 文字色 | 用途 |
|------|--------|--------|------|
| 1 | #185058 (cdx-700) | #fff | 默认 |
| 2 | #6D28D9 | #fff | 紫色 |
| 3 | #BE185D | #fff | 粉色 |
| 4 | #065F46 | #fff | 绿色 |
| 5 | #9A3412 | #fff | 橙色 |
| 6 | #1E40AF | #fff | 蓝色 |

根据用户 ID 或姓名 hash 取模分配颜色，保证同一用户颜色固定。

#### 图片头像

```css
.avatar--image {
  border: 1px solid var(--ink-100);
}
.avatar--image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

#### 上传交互态

适用于设置页面的头像编辑区域（推荐使用 lg 或 xl 尺寸）：

```css
/* 可上传态 — hover 遮罩 */
.avatar--editable {
  position: relative;
  cursor: pointer;
}
.avatar--editable::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 200ms;
}
.avatar--editable:hover::after {
  background: rgba(0, 0, 0, 0.45);
}
.avatar__upload-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  opacity: 0;
  z-index: 1;
  transition: opacity 200ms;
}
.avatar--editable:hover .avatar__upload-icon {
  opacity: 1;
}

/* 上传中 */
.avatar--uploading {
  position: relative;
}
.avatar--uploading::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.45);
}
.avatar__progress {
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: #fff;
  animation: spin 600ms linear infinite;
  z-index: 1;
}

/* 上传成功 — 短暂显示对勾后恢复 */
.avatar--success::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(63, 143, 92, 0.15);
  animation: avatarSuccessFade 1200ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes avatarSuccessFade {
  0% { opacity: 1; }
  70% { opacity: 1; }
  100% { opacity: 0; }
}

/* 上传失败 */
.avatar--error {
  border: 2px solid #DC2626;
}
```

#### 状态徽标

头像右下角的在线状态指示：

```css
.avatar-wrapper {
  position: relative;
  display: inline-flex;
}
.avatar__badge {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #fff;
}
.avatar__badge--online { background: #3F8F5C; }
.avatar__badge--offline { background: var(--ink-300); }
.avatar__badge--busy { background: #DC2626; }
```

尺寸适配：
- xs/sm：徽标 8px，border 1.5px
- md：徽标 10px，border 2px
- lg/xl：徽标 12px，border 2px

#### 头像组

多个头像重叠展示：

```css
.avatar-group {
  display: inline-flex;
  align-items: center;
}
.avatar-group .avatar {
  border: 2px solid #fff;
  margin-left: -8px;
}
.avatar-group .avatar:first-child {
  margin-left: 0;
}
.avatar-group__more {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--ink-100);
  color: var(--ink-600);
  font-size: 11px;
  font-weight: 600;
  border: 2px solid #fff;
  margin-left: -8px;
}
```

#### 方形头像（可选）

用于应用图标、团队 Logo 等非人物场景：

```css
.avatar--square {
  border-radius: 6px;
}
```

#### 键盘与无障碍

- 可上传头像：`role="button"` + `tabindex="0"` + `aria-label="上传头像"`
- 图片头像：`alt` 属性填写用户姓名
- 文字头像：`aria-label` 填写完整姓名
- 状态徽标：`aria-label="在线状态: 在线/离线/忙碌"`

#### 反模式

- ❌ 不要使用方形头像表示人物（方形仅用于应用/团队 Logo）
- ❌ 不要在 xs 尺寸上显示状态徽标（太小看不清）
- ❌ 不要使用渐变背景作为默认头像
- ❌ 不要让头像组超过 5 个（超出用 `+N` 表示）

---

## 11. 卡片 [通用]

### 11.0 卡片外描边铁律 [通用]

**卡片统一使用 `ink-100 (#F4F4F5)` 作为外描边色**，营造极轻的分层感，不抢视觉焦点。

```css
/* 所有卡片外层容器的标准描边 */
.card, .card-wrap, .stat-card, .info-card, .form-card,
.metric-card, .app-card, .recon-card {
  border: 1px solid var(--ink-100);
}
```

**适用范围**：
- 所有卡片容器（stat-card / card-wrap / info-card / form-card 等）
- 所有列表/表格外容器
- 所有 Filter Bar 外容器

**设计依据**：
- `ink-100 (#F4F4F5)` 比 `ink-200 (#E4E4E7)` 更轻，适合大面积卡片分层
- 配合噪点纹理背景（page bg `#FAFAFA`），卡片白底 + `ink-100` 边框营造"纸感"
- 当卡片内嵌套分隔线（表格行线、表头底线）时，使用 `ink-200` 与外描边区分层级

**外描边 vs 内分隔线**：
| 用途 | 色值 | Token |
|------|------|-------|
| 卡片外描边 | `#F4F4F5` | `ink-100` |
| 表格行底线 / 内部分隔 | `#F4F4F5` | `ink-100` |
| 表头底边 / 强分隔 | `#E4E4E7` | `ink-200` |
| 输入框描边 | `#E4E4E7` | `ink-200` |
| 主要视觉边框 | `#E4E4E7` | `ink-200` |

**hover 描边**：
- 卡片 hover：描边由 `ink-100` 过渡到 `cdx-200 (#B0D6DB)` + 出现阴影
- 静态无阴影，只有 hover 才显现

---

### 11.1 Metric Card [B 端]

```css
.metric-card {
  padding: 28px;
  border: 1px solid var(--ink-100);
  border-radius: 8px;
  background: #fff;
  transition: transform 300ms var(--ease-expo), box-shadow 300ms;
}
.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.06);
}
```

### 11.2 Modality Card [B 端]

```css
.modality-card {
  border-radius: 14px;
  padding: 32px;
  background: linear-gradient(180deg, #fff 0%, #F7F8FA 100%);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--ink-200);
  transition: all 450ms var(--ease-expo);
  cursor: pointer;
}
.modality-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(24, 80, 88, 0.08);
}
/* 右上角图标（替代旧版模糊径向渐变伪元素） */
.modality-card-icon {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cdx-50);
  color: var(--cdx-700);
  transition: all 350ms var(--ease-expo);
}
.modality-card:hover .modality-card-icon {
  background: var(--cdx-700);
  color: #fff;
  transform: scale(1.08);
}
```

**已废弃**：
- ❌ 不再使用 `.modality-card::before` 模糊径向渐变装饰
- ❌ 不再使用 `mix-blend-mode` 或 `radial-gradient` 伪元素

### 11.3 ROI Card [B 端]

```css
.roi-card {
  padding: 24px;
  border: 1px solid var(--ink-100);
  border-radius: 8px;
  background: var(--warm-50);
}
```

### 11.4 Recon Card [B 端]

```css
.recon-card {
  padding: 16px;
  border: 1px solid var(--ink-100);
  border-radius: 4px;
  background: #fff;
}
```

### 11.5 App Card [通用]

```css
.app-card {
  padding: 20px;
  border: 1px solid var(--ink-100);
  border-radius: 8px;
  background: #fff;
}
```

### 11.6 Login Card [通用]

```css
.login-card {
  width: 400px;
  padding: 40px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
}
```

### 11.7 Field Card [B 端]

```css
.field-card {
  padding: 12px 16px;
  border: 1px solid var(--ink-100);
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
}
```

### 11.8 Concept Card [B 端]

三态卡片：default / hit / active

```css
.concept-card {
  padding: 16px;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  opacity: 0.42;
  transition: all 300ms var(--ease-expo);
}
.concept-card.hit {
  opacity: 0.75;
  border-color: var(--cdx-200);
}
.concept-card.active {
  opacity: 1;
  border-color: var(--cdx-700);
  box-shadow: 0 0 0 3px rgba(45, 120, 115, 0.08);
}
```

### 11.9 Feat-tag [B 端]

```css
.feat-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 4px;
  background: var(--ink-50);
  font-size: 12px;
}
```

### 11.10 Stat Card [B 端]

**实际规范**（prototype 已验证）：

```css
/* 数据统计卡片 — 用于指标监控、KPI 展示 */
.stat-card {
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  padding: 16px 20px;
  transition: all 300ms var(--ease-expo);
}
.stat-card:hover {
  border-color: var(--cdx-200);
  box-shadow: 0 4px 16px rgba(24,80,88,0.06);
}

/* 通用内容容器 — 表格、列表外层包裹 */
.card-wrap {
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  overflow: hidden;
}
```

**使用规则**：
- `stat-card`：有 hover 交互，用于可点击的指标卡片
- `card-wrap`：无 hover，用于表格/列表的外层容器，`overflow: hidden` 确保圆角裁剪
- 两者圆角统一为 `6px`，内边距 `stat-card` 为 `16px 20px`，`card-wrap` 内容由子元素控制

### 11.11 Info Card [B 端]

```css
.info-card {
  padding: 16px;
  border: 1px solid var(--ink-100);
  border-radius: 4px;
  background: var(--ink-50);
}
```

---

## 12. 表格 [通用]

### 12.1 Main Table (ptbl) [B 端]

```css
.ptbl {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
.ptbl th {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-500);
  padding: 10px 12px;
  border-bottom: 1px solid var(--ink-100);
  text-align: left;
}
.ptbl td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--ink-50);
  line-height: 28px;
}
```

### 12.2 Compact Table (dt) [B 端]

```css
.dt {
  font-size: 13px;
}
.dt th, .dt td {
  padding: 6px 10px;
}
```

### 12.3 Sync Table [B 端]

```css
.sync-table {
  font-size: 12px;
  font-family: var(--font-mono);
}
.sync-table td {
  padding: 4px 8px;
  white-space: nowrap;
}
```

### 12.4 Data Table [B 端]

**实际规范**（prototype 已验证）：

```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.data-table thead th {
  background: var(--ink-50);
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-600);
  text-align: left;
  border-bottom: 1px solid var(--ink-200);
  white-space: nowrap;
  user-select: none;
}
.data-table tbody td {
  padding: 8px 12px;
  font-size: 13px;
  color: var(--ink-800);
  line-height: 20px;
  border-bottom: 1px solid var(--ink-100);
}
.data-table tbody tr {
  transition: background 150ms var(--ease-expo);
}
.data-table tbody tr:hover td {
  background: var(--cdx-50);   /* hover 用品牌浅色，非 ink-50 */
}

/* 不折行工具类 */
.data-table .col-name   { white-space: nowrap; }
.data-table .col-action { white-space: nowrap; }

/* 操作栏 sticky 固定 */
.data-table .col-fixed {
  position: sticky;
  right: 0;
  background: #fff;
  box-shadow: -2px 0 4px rgba(0,0,0,0.04);
}
```

**关键规则**：
- 表头底线用 `ink-200`，行底线用 `ink-100`，形成层级感
- hover 背景用 `cdx-50`（品牌浅青），不用 `ink-50`
- 姓名/名称列加 `.col-name`，操作列加 `.col-action`，强制不折行
- 宽表格操作列同时加 `.col-fixed` 实现 sticky 固定

### 12.5 Table Toolbar [B 端]

```css
.table-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  gap: 12px;
}
```

### 12.6 Batch Action Bar [B 端]

```css
.batch-bar {
  position: sticky;
  bottom: 0;
  padding: 12px 16px;
  background: var(--ink-900);
  color: #fff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 12px;
  animation: slideUp 200ms var(--ease-expo);
}
```

### 12.7 Table Pagination [B 端]

**实际规范**（prototype 已验证）：

```css
/* 分页容器 */
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 13px;
  color: var(--ink-500);
}

/* 页码按钮 */
.page-btn {
  min-width: 28px;
  height: 28px;
  padding: 0 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--ink-200);
  border-radius: 4px;
  font-size: 12px;
  color: var(--ink-700);
  background: #fff;
  cursor: pointer;
  transition: all 150ms var(--ease-expo);
  font-family: var(--font-mono);
}
.page-btn:hover {
  border-color: var(--cdx-700);
  color: var(--cdx-700);
}
.page-btn.active {
  background: var(--ink-900);
  border-color: var(--ink-900);
  color: #fff;
}
```

**分页器左侧每页条数选择器**：

```html
<div class="pagination">
  <div style="display:flex;align-items:center;gap:8px">
    <span>共 N 条</span>
    <!-- padding-right 必须 ≥28px，否则文字与箭头图标重叠 -->
    <select class="filter-select" style="padding:3px 28px 3px 8px;font-size:12px">
      <option>10条/页</option>
      <option>20条/页</option>
      <option>50条/页</option>
    </select>
  </div>
  <div style="display:flex;gap:4px">
    <span class="page-btn">&lt;</span>
    <span class="page-btn active">1</span>
    <span class="page-btn">2</span>
    <span class="page-btn">&gt;</span>
  </div>
</div>
```

**关键规则**：
- 激活页码用 `ink-900` 深色填充，非品牌色
- 每页条数 select 使用 `filter-select` 类，`padding-right` 最小 28px
- 分页容器 `padding: 12px 0`，不加背景色

### 12.8 Row Actions [B 端]

```css
.row-actions {
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 150ms;
}
tr:hover .row-actions {
  opacity: 1;
}
.row-actions .btn-mini {
  color: var(--cdx-700);
}
```

### 12.9 Descriptions 描述列表 [通用]

**用途**：详情页展示键值对信息、用户资料、订单详情、配置信息

**布局**：支持 2/3/4 列自适应，响应式自动调整

#### 基础样式

```css
.descriptions {
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  overflow: hidden;
}
.descriptions__row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  border-bottom: 1px solid var(--ink-100);
}
.descriptions__row:last-child {
  border-bottom: none;
}
```

#### 描述项

```css
.descriptions__item {
  display: grid;
  grid-template-columns: 120px 1fr;
  border-right: 1px solid var(--ink-100);
  min-height: 48px;
}
.descriptions__item:last-child {
  border-right: none;
}
.descriptions__label {
  padding: 12px 16px;
  background: var(--ink-50);
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-500);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  border-right: 1px solid var(--ink-100);
}
.descriptions__content {
  padding: 12px 16px;
  font-size: 14px;
  color: var(--ink-900);
  display: flex;
  align-items: center;
  word-break: break-word;
}
```

#### 列数变体

```css
/* 2 列布局 */
.descriptions--col-2 .descriptions__row {
  grid-template-columns: repeat(2, 1fr);
}

/* 3 列布局 */
.descriptions--col-3 .descriptions__row {
  grid-template-columns: repeat(3, 1fr);
}

/* 4 列布局 */
.descriptions--col-4 .descriptions__row {
  grid-template-columns: repeat(4, 1fr);
}
```

#### 无边框模式

```css
.descriptions--borderless {
  border: none;
}
.descriptions--borderless .descriptions__row {
  border-bottom: 1px solid var(--ink-100);
}
.descriptions--borderless .descriptions__item {
  border-right: none;
}
.descriptions--borderless .descriptions__label {
  background: transparent;
  border-right: none;
  padding-left: 0;
}
.descriptions--borderless .descriptions__content {
  padding-right: 0;
}
```

#### 垂直布局

```css
.descriptions--vertical .descriptions__item {
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}
.descriptions--vertical .descriptions__label {
  border-right: none;
  border-bottom: 1px solid var(--ink-100);
}
```

#### 响应式

```css
@media (max-width: 768px) {
  .descriptions__row {
    grid-template-columns: 1fr !important;
  }
  .descriptions__item {
    border-right: none;
    border-bottom: 1px solid var(--ink-100);
  }
  .descriptions__item:last-child {
    border-bottom: none;
  }
}
```

**使用示例**：

```html
<!-- 基础 2 列布局 -->
<div class="descriptions descriptions--col-2">
  <div class="descriptions__row">
    <div class="descriptions__item">
      <div class="descriptions__label">用户名</div>
      <div class="descriptions__content">张三</div>
    </div>
    <div class="descriptions__item">
      <div class="descriptions__label">手机号</div>
      <div class="descriptions__content">138****8888</div>
    </div>
  </div>
  <div class="descriptions__row">
    <div class="descriptions__item">
      <div class="descriptions__label">邮箱</div>
      <div class="descriptions__content">zhangsan@example.com</div>
    </div>
    <div class="descriptions__item">
      <div class="descriptions__label">注册时间</div>
      <div class="descriptions__content">2026-05-22 10:30:00</div>
    </div>
  </div>
</div>

<!-- 3 列布局 -->
<div class="descriptions descriptions--col-3">
  <div class="descriptions__row">
    <div class="descriptions__item">
      <div class="descriptions__label">订单号</div>
      <div class="descriptions__content">202605220001</div>
    </div>
    <div class="descriptions__item">
      <div class="descriptions__label">状态</div>
      <div class="descriptions__content">
        <span class="badge badge--success">已完成</span>
      </div>
    </div>
    <div class="descriptions__item">
      <div class="descriptions__label">金额</div>
      <div class="descriptions__content">¥1,234.56</div>
    </div>
  </div>
</div>

<!-- 无边框模式 -->
<div class="descriptions descriptions--borderless descriptions--col-2">
  <div class="descriptions__row">
    <div class="descriptions__item">
      <div class="descriptions__label">姓名</div>
      <div class="descriptions__content">李四</div>
    </div>
    <div class="descriptions__item">
      <div class="descriptions__label">部门</div>
      <div class="descriptions__content">技术部</div>
    </div>
  </div>
</div>
```

**跨列显示**：

```html
<!-- 某项占据整行 -->
<div class="descriptions descriptions--col-3">
  <div class="descriptions__row">
    <div class="descriptions__item" style="grid-column: span 3;">
      <div class="descriptions__label">备注</div>
      <div class="descriptions__content">
        这是一段很长的备注信息，需要占据整行显示...
      </div>
    </div>
  </div>
</div>
```

**带标题**：

```html
<div class="descriptions">
  <div style="padding: 16px; border-bottom: 1px solid var(--ink-100);">
    <h3 style="font-size: 16px; font-weight: 600; color: var(--ink-900);">基本信息</h3>
  </div>
  <div class="descriptions__row">
    <!-- 描述项... -->
  </div>
</div>
```

**反模式**：
- ❌ 不要在标签中使用过长文字（超过 10 个字符），应简化为关键词
- ❌ 不要在内容区域使用过小字号（< 13px），影响可读性
- ❌ 不要混用不同的标签宽度，保持统一（默认 120px）

### 12.10 Table 高级功能 [通用]

#### 树形表格

```css
.table__row--expandable .table__cell:first-child {
  padding-left: calc(var(--indent-level, 0) * 24px + 12px);
}
.table__expand-icon {
  display: inline-flex;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
  transition: transform 200ms;
}
.table__row--expanded .table__expand-icon {
  transform: rotate(90deg);
}
```

- 缩进：每层 24px
- 展开图标：chevron-right，展开时旋转 90°
- 动画：200ms expo-out

#### 可编辑表格

```css
.table__cell--editable {
  position: relative;
  cursor: pointer;
}
.table__cell--editing .table__cell-content {
  display: none;
}
.table__cell-input {
  position: absolute;
  inset: 0;
  padding: 8px 12px;
  border: 2px solid var(--cdx-700);
  background: #fff;
  z-index: 10;
}
```

- 触发：双击单元格进入编辑模式
- 保存：Enter 键或失焦
- 取消：Esc 键
- 编辑态边框：2px solid cdx-700

#### 固定列

```css
.table__cell--fixed-left {
  position: sticky;
  left: 0;
  background: #fff;
  z-index: 2;
}
.table__cell--fixed-right {
  position: sticky;
  right: 0;
  background: #fff;
  z-index: 2;
}
```

- 固定列阴影：滚动时显示 `box-shadow: 4px 0 8px rgba(0,0,0,0.04)`
- 支持左右同时固定

#### 虚拟滚动

- 仅渲染可见行（viewport + buffer）
- 支持 10000+ 行数据
- 行高固定：40px（紧凑）/ 48px（默认）/ 56px（宽松）
- buffer：上下各 5 行

### 12.11 Upload 上传 [通用]

文件上传核心组件，支持按钮上传、拖拽上传、文件列表管理。

#### 按钮上传

```css
.upload-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px dashed var(--ink-300);
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  transition: all 200ms;
}
.upload-btn:hover {
  border-color: var(--cdx-700);
  color: var(--cdx-700);
}
```

#### 拖拽上传

```css
.upload-dragger {
  border: 2px dashed var(--ink-200);
  border-radius: 6px;
  padding: 40px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 200ms;
}
.upload-dragger:hover {
  border-color: var(--cdx-700);
  background: var(--cdx-50);
}
```

#### 文件列表

```css
.upload-list__item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid var(--ink-100);
  border-radius: 4px;
  margin-bottom: 8px;
}
.upload-list__name {
  flex: 1;
  font-size: 13px;
  color: var(--ink-900);
}
.upload-list__size {
  font-size: 12px;
  color: var(--ink-500);
  margin-right: 12px;
}
```

#### 文件状态

| 状态 | 图标色 | 说明 |
|------|--------|------|
| uploading | cdx-700 | 上传中，显示进度条 |
| done | #3F8F5C | 上传成功，显示对勾 |
| error | #DC2626 | 上传失败，显示叉号 |

#### 限制规则

- 文件类型：通过 accept 属性限制
- 文件大小：默认 10MB，超出提示错误
- 文件数量：可配置最大数量
- 提示文案：`支持 .pdf .xlsx .csv 格式，单个文件不超过 10MB`

---

## 13. 弹层与浮层 [通用]

### 13.1 Tooltip [通用]

```css
.tooltip {
  background: var(--ink-900);
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  max-width: 240px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  pointer-events: none;
}
.tooltip::after {
  content: '';
  position: absolute;
  border: 5px solid transparent;
  border-top-color: var(--ink-900);
}
```

### 13.2 Dropdown Menu [通用]

```css
.dropdown {
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  padding: 4px;
  min-width: 160px;
}
.dropdown__item {
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  transition: background 100ms;
}
.dropdown__item:hover {
  background: var(--ink-50);
}
.dropdown__divider {
  height: 1px;
  background: var(--ink-100);
  margin: 4px 0;
}
```

### 13.3 User Dropdown [通用]

```css
.user-dropdown {
  width: 220px;
}
.user-dropdown__header {
  padding: 12px;
  border-bottom: 1px solid var(--ink-100);
}
```

### 13.4 Filter Pill + Date Dropdown [B 端]

```css
.filter-dropdown {
  padding: 16px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 12px 32px rgba(0,0,0,0.1);
  min-width: 280px;
}
```

### 13.5 Drawer [通用]

三种宽度变体：

```css
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background: #fff;
  box-shadow: -8px 0 32px rgba(0,0,0,0.08);
  transform: translateX(100%);
  transition: transform 300ms var(--ease-expo);
  z-index: 1000;
}
.drawer.open { transform: translateX(0); }
.drawer--md { width: 720px; }
.drawer--lg { width: 860px; }
.drawer--patient { width: 480px; }
.drawer__header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--ink-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.drawer__body {
  padding: 24px;
  overflow-y: auto;
  height: calc(100vh - 65px);
}
```

### 13.6 Modal [B 端]

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
  z-index: 1100;
  animation: fadeIn 150ms;
}
.modal {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.12);
  animation: scaleIn 200ms var(--ease-expo);
}
.modal--sm { width: 400px; }
.modal--md { width: 560px; }
.modal--lg { width: 720px; }
.modal--xl { width: 900px; }
.modal__header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--ink-100);
}
.modal__body { padding: 24px; }
.modal__footer {
  padding: 16px 24px;
  border-top: 1px solid var(--ink-100);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
```

### 13.7 Popover / Confirm [B 端]

```css
.popover {
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  padding: 16px;
  max-width: 320px;
}
.popover__actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
}
```

### 13.8 Toast [B 端]

```css
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 16px;
  border-radius: 6px;
  background: #fff;
  border: 1px solid var(--ink-200);
  border-left: 3px solid;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 13px;
  animation: slideInRight 300ms var(--ease-expo);
  z-index: 1200;
}
.toast--success { border-left-color: #3F8F5C; }
.toast--warning { border-left-color: #C28A2C; }
.toast--danger { border-left-color: #A8453B; }
.toast--info { border-left-color: var(--cdx-700); }

@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
```

**图标规范**（Toast 与 Alert 共用）：
- 尺寸：`w-4 h-4`（16×16px）
- 定位：`flex-shrink-0; margin-top: 2px`
- 颜色：对应状态色（success: `#3F8F5C`，warning: `#C28A2C`，danger: `#A8453B`，info: `#185058`）
- 图标形态：带外框（圆圈/三角形），stroke-width: 2，stroke-linecap: round

### 13.9 Alert [B 端]

```css
.alert {
  padding: 12px 16px;
  border-radius: 6px;
  border-left: 3px solid;
  font-size: 13px;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.alert--success { background: #F0FDF4; border-color: #3F8F5C; color: #065F46; }
.alert--warning { background: #FEF3C7; border-color: #C28A2C; color: #92400E; }
.alert--danger { background: #FEF2F2; border-color: #A8453B; color: #991B1B; }
.alert--info { background: var(--cdx-50); border-color: var(--cdx-700); color: var(--cdx-900); }
```

**图标规范**（与 Toast 保持统一）：
- 尺寸：`w-4 h-4`（16×16px）
- 定位：`flex-shrink-0; margin-top: 2px`（与首行文字对齐）
- 颜色：使用对应状态色（success: `#3F8F5C`，warning: `#C28A2C`，danger: `#A8453B`，info: `#185058`）
- 图标形态：带外框圆圈/三角形，与 Toast 使用相同 SVG path
  - success: 圆圈 + 对勾（`M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`）
  - warning: 三角形 + 感叹号
  - danger: 圆圈 + 叉号（`M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z`）
  - info: 圆圈 + i（`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`）

### 13.10 Message 全局提示 [通用]

顶部居中的轻量级操作反馈，自动消失。

#### 容器

```css
.message-container {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;
}
```

#### 消息项

```css
.message {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  font-size: 14px;
  pointer-events: auto;
  animation: messageSlideDown 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

#### 状态色

| 状态 | 文字色 | 图标色 |
|------|--------|--------|
| success | #3F8F5C | #3F8F5C |
| warning | #C28A2C | #C28A2C |
| error | #DC2626 | #DC2626 |
| info | #185058 | #185058 |

#### 动画

```css
@keyframes messageSlideDown {
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
}
```

#### 行为规范

- 自动关闭：默认 3 秒
- 多个消息：垂直堆叠，间距 12px
- 图标：16×16px，与 Toast/Alert 统一
- 最大宽度：不超过 480px

### 13.11 DatePicker 日期选择器 [通用]

日期录入、日期范围选择、月份/年份选择。

#### 输入框

```css
.datepicker__input {
  padding: 8px 32px 8px 12px;
  border: 1px solid var(--ink-200);
  border-radius: 6px;
  font-size: 14px;
  font-family: var(--font-mono);
  letter-spacing: 0.02em;
  cursor: pointer;
}
.datepicker__input:focus {
  border-color: var(--cdx-700);
  box-shadow: 0 0 0 3px rgba(24, 80, 88, 0.08);
}
```

#### 日历面板

```css
.datepicker__panel {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1000;
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 12px;
  min-width: 280px;
}
```

#### 日期单元格

```css
.datepicker__day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 150ms;
}
.datepicker__day:hover { background: var(--cdx-50); }
.datepicker__day--today { border: 1px solid var(--cdx-700); }
.datepicker__day--selected { background: var(--cdx-700); color: #fff; }
.datepicker__day--disabled { color: var(--ink-300); cursor: not-allowed; }
```

#### 快捷选项

- 今天 / 本周 / 本月 / 最近 7 天 / 最近 30 天
- 样式：`padding: 4px 10px; font-size: 12px; border-radius: 4px; border: 1px solid var(--ink-200)`
- hover：`border-color: var(--cdx-700); color: var(--cdx-700)`

#### 键盘操作

- Enter：选中当前日期
- Esc：关闭面板
- 方向键：在日期间移动焦点
- Page Up/Down：切换月份

---

## 14. 导航 [通用]

### 14.1 Top Nav [B 端]

```css
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.30;
  transition: opacity 400ms;
}
.top-nav:hover,
.top-nav.scrolled {
  opacity: 1.00;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
}
```

### 14.2 Bottom Bar [B 端]

```css
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.25;
  transition: opacity 400ms;
  font-size: 11px;
  color: var(--ink-500);
}
.bottom-bar:hover {
  opacity: 0.90;
}
```

### 14.3 Keyboard Shortcuts [B 端]

| 快捷键 | 功能 |
|--------|------|
| `J` / `K` | 上/下切换章节 |
| `Enter` | 进入 drill |
| `Esc` | 返回上层 |
| `1-9` | 跳转到第 N 章 |
| `?` | 显示快捷键面板 |

### 14.4 Sidebar [B 端]

```css
.sidebar {
  position: sticky;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  background: #fff;
  border-right: 1px solid var(--ink-100);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex-shrink: 0;
}
```

### 14.5 Sidebar Brand [B 端]

```css
.sidebar__brand {
  padding: 20px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--ink-100);
}
.sidebar__brand-logo {
  width: 28px;
  height: 28px;
}
.sidebar__brand-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-900);
}
```

### 14.6 Sidebar Items [B 端]

```css
.sidebar__item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  margin: 2px 8px;
  border-radius: 4px;
  font-size: 13px;
  color: var(--ink-600);
  transition: all 150ms;
}
.sidebar__item:hover {
  background: var(--cdx-50);
  color: var(--ink-900);
}
.sidebar__item.active {
  background: var(--cdx-50);
  color: var(--cdx-700);
  border-left: 2px solid var(--cdx-700);
  font-weight: 500;
}
.sidebar__item-icon {
  width: 18px;
  height: 18px;
  opacity: 0.7;
}
```

### 14.7 Sidebar Submenu [B 端]

> **规则**：侧边栏所有二级导航项统一使用 **13px** 字号（与一级菜单一致），不得使用 12px 或其他尺寸。

```css
.sidebar__submenu {
  padding-left: 38px;
}
.sidebar__submenu-item {
  padding: 6px 12px;
  font-size: 13px;
  color: var(--ink-500);
  border-radius: 3px;
}
.sidebar__submenu-item.active {
  color: var(--cdx-700);
}
```

### 14.8 Breadcrumb [B 端]

```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--ink-500);
}
.breadcrumb__sep {
  color: var(--ink-300);
}
.breadcrumb__current {
  color: var(--ink-900);
  font-weight: 500;
}
```

### 14.9 Header [B 端]

```css
.header {
  position: sticky;
  top: 0;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid var(--ink-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 800;
}
.header__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header__icon-btn {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  color: var(--ink-500);
  transition: background 100ms;
}
.header__icon-btn:hover {
  background: var(--ink-50);
}
```

### 14.10 Tabs 标签页 [通用]

**用途**：内容分组、视图切换、多标签页管理

**样式类型**：
- **Line 型**（默认）：下划线激活态，适用于内容区域
- **Card 型**：卡片背景激活态，适用于容器顶部

#### Line 型 Tabs

```css
.tabs {
  display: flex;
  border-bottom: 1px solid var(--ink-100);
  gap: 0;
}
.tabs__item {
  position: relative;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-600);
  cursor: pointer;
  transition: color 200ms var(--ease-expo);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}
.tabs__item:hover {
  color: var(--cdx-700);
}
.tabs__item.active {
  color: var(--cdx-700);
  border-bottom-color: var(--cdx-700);
}
.tabs__item.disabled {
  color: var(--ink-300);
  cursor: not-allowed;
  pointer-events: none;
}
```

#### Card 型 Tabs

```css
.tabs--card {
  border-bottom: none;
  gap: 4px;
}
.tabs--card .tabs__item {
  border: 1px solid var(--ink-100);
  border-radius: 6px 6px 0 0;
  border-bottom: none;
  background: var(--ink-50);
  margin-bottom: 0;
}
.tabs--card .tabs__item.active {
  background: #fff;
  border-bottom: 1px solid #fff;
  position: relative;
  z-index: 1;
}
```

#### 带图标 Tabs

```css
.tabs__item-icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
  vertical-align: -2px;
}
```

#### 可关闭 Tabs

```css
.tabs__item-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  margin-left: 8px;
  border-radius: 2px;
  opacity: 0;
  transition: opacity 150ms, background 150ms;
}
.tabs__item:hover .tabs__item-close {
  opacity: 1;
}
.tabs__item-close:hover {
  background: var(--ink-200);
}
```

#### 响应式滚动

```css
.tabs-wrapper {
  position: relative;
  overflow: hidden;
}
.tabs-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
}
.tabs-scroll::-webkit-scrollbar {
  display: none;
}
.tabs-nav-btn {
  position: absolute;
  top: 0;
  width: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0) 100%);
  z-index: 2;
  cursor: pointer;
}
.tabs-nav-btn--left { left: 0; }
.tabs-nav-btn--right { right: 0; transform: scaleX(-1); }
```

**使用示例**：

```html
<!-- Line 型 -->
<div class="tabs">
  <div class="tabs__item active">基本信息</div>
  <div class="tabs__item">详细资料</div>
  <div class="tabs__item disabled">权限设置</div>
</div>

<!-- Card 型 -->
<div class="tabs tabs--card">
  <div class="tabs__item active">
    <svg class="tabs__item-icon">...</svg>
    用户列表
  </div>
  <div class="tabs__item">
    <svg class="tabs__item-icon">...</svg>
    角色管理
  </div>
</div>

<!-- 可关闭 -->
<div class="tabs">
  <div class="tabs__item active">
    首页
    <span class="tabs__item-close">×</span>
  </div>
  <div class="tabs__item">
    用户管理
    <span class="tabs__item-close">×</span>
  </div>
</div>
```

**键盘操作**：
- `Tab` / `Shift+Tab`：焦点在标签间移动
- `Enter` / `Space`：激活当前焦点标签
- `Home` / `End`：跳转到第一个/最后一个标签

**无障碍**：
```html
<div class="tabs" role="tablist">
  <div class="tabs__item active" role="tab" aria-selected="true" tabindex="0">基本信息</div>
  <div class="tabs__item" role="tab" aria-selected="false" tabindex="-1">详细资料</div>
</div>
<div role="tabpanel" aria-labelledby="tab-1">内容区域</div>
```

### 14.11 Collapse 折叠面板 [通用]

**用途**：表单分组、FAQ、详情页分段展示、长内容折叠

**样式**：
- 默认：ink-100 边框 + 6px 圆角
- 手风琴模式：同时只展开一个面板
- 无边框模式：仅保留分隔线

#### 基础样式

```css
.collapse {
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  overflow: hidden;
}
.collapse__item {
  border-bottom: 1px solid var(--ink-100);
}
.collapse__item:last-child {
  border-bottom: none;
}
```

#### 面板头部

```css
.collapse__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  cursor: pointer;
  background: #fff;
  transition: background 150ms;
  user-select: none;
}
.collapse__header:hover {
  background: var(--cdx-50);
}
.collapse__header-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-900);
}
.collapse__header-extra {
  font-size: 13px;
  color: var(--ink-500);
  margin-right: 8px;
}
```

#### 展开图标

```css
.collapse__icon {
  width: 16px;
  height: 16px;
  color: var(--ink-500);
  transition: transform 300ms var(--ease-expo);
  flex-shrink: 0;
}
.collapse__item.active .collapse__icon {
  transform: rotate(180deg);
}
```

#### 内容区域

```css
.collapse__content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms var(--ease-expo);
}
.collapse__item.active .collapse__content {
  max-height: 2000px; /* 足够大的值 */
}
.collapse__body {
  padding: 16px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--ink-700);
  background: var(--ink-50);
}
```

#### 无边框模式

```css
.collapse--borderless {
  border: none;
  border-radius: 0;
}
.collapse--borderless .collapse__item {
  border-bottom: 1px solid var(--ink-100);
}
.collapse--borderless .collapse__header {
  padding-left: 0;
  padding-right: 0;
}
```

#### 手风琴模式

手风琴模式通过 JavaScript 控制，同时只允许一个面板展开：

```javascript
// 手风琴逻辑
const collapseItems = document.querySelectorAll('.collapse__item');
collapseItems.forEach(item => {
  item.querySelector('.collapse__header').addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    // 关闭所有面板
    collapseItems.forEach(i => i.classList.remove('active'));
    // 如果当前未激活，则激活
    if (!isActive) item.classList.add('active');
  });
});
```

**使用示例**：

```html
<!-- 基础折叠面板 -->
<div class="collapse">
  <div class="collapse__item active">
    <div class="collapse__header">
      <span class="collapse__header-title">基本信息</span>
      <svg class="collapse__icon">
        <path d="M19 9l-7 7-7-7" stroke="currentColor" stroke-width="2" fill="none"/>
      </svg>
    </div>
    <div class="collapse__content">
      <div class="collapse__body">
        这里是基本信息的内容区域...
      </div>
    </div>
  </div>
  
  <div class="collapse__item">
    <div class="collapse__header">
      <span class="collapse__header-title">详细资料</span>
      <span class="collapse__header-extra">选填</span>
      <svg class="collapse__icon">
        <path d="M19 9l-7 7-7-7" stroke="currentColor" stroke-width="2" fill="none"/>
      </svg>
    </div>
    <div class="collapse__content">
      <div class="collapse__body">
        这里是详细资料的内容区域...
      </div>
    </div>
  </div>
</div>

<!-- 无边框模式 -->
<div class="collapse collapse--borderless">
  <div class="collapse__item">
    <div class="collapse__header">
      <span class="collapse__header-title">常见问题 1</span>
      <svg class="collapse__icon">...</svg>
    </div>
    <div class="collapse__content">
      <div class="collapse__body">答案内容...</div>
    </div>
  </div>
</div>
```

**键盘操作**：
- `Tab` / `Shift+Tab`：焦点在面板头部间移动
- `Enter` / `Space`：展开/收起当前焦点面板
- `Home` / `End`：跳转到第一个/最后一个面板

**无障碍**：
```html
<div class="collapse__item">
  <div class="collapse__header" 
       role="button" 
       aria-expanded="true" 
       aria-controls="panel-1"
       tabindex="0">
    <span class="collapse__header-title">基本信息</span>
    <svg class="collapse__icon" aria-hidden="true">...</svg>
  </div>
  <div class="collapse__content" id="panel-1" role="region">
    <div class="collapse__body">内容...</div>
  </div>
</div>
```

**反模式**：
- ❌ 不要在折叠面板内嵌套超过 2 层
- ❌ 不要在面板头部放置可交互元素（按钮、链接），会与展开/收起冲突
- ❌ 不要使用 `display: none` 隐藏内容，会导致动画失效

---

## 15. KPI 与数字展示 [通用]

### 15.1 CountUp Animation [通用]

```css
.countup {
  font-family: var(--font-mono);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
```

```javascript
/* CountUp 参数 */
const countUpConfig = {
  duration: 1.6,        /* 1600ms */
  easing: 'easeOutCubic',
  separator: ',',
  decimal: '.',
};
```

### 15.2 Donut Chart [通用]

```css
.donut {
  width: 120px;
  height: 120px;
}
.donut__ring {
  fill: none;
  stroke: var(--ink-100);
  stroke-width: 12;
}
.donut__segment {
  fill: none;
  stroke: var(--cdx-700);
  stroke-width: 12;
  stroke-dasharray: var(--percent, 75) 100;
  stroke-dashoffset: 25;
  stroke-linecap: round;
  transition: stroke-dasharray 1.2s var(--ease-expo);
}
```

### 15.3 Mini Bar Chart [通用]

```css
.mini-bar {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 32px;
}
.mini-bar__col {
  width: 4px;
  background: var(--cdx-700);
  border-radius: 2px 2px 0 0;
  transform-origin: bottom;
  animation: barGrow 600ms var(--ease-expo) backwards;
}
@keyframes barGrow {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
```

### 15.4 Progress Bar [通用]

```css
.progress {
  height: 6px;
  background: var(--ink-100);
  border-radius: 3px;
  overflow: hidden;
}
.progress__fill {
  height: 100%;
  background: var(--cdx-700);
  border-radius: 3px;
  transition: width 800ms var(--ease-expo);
}
```

### 15.5 Ring Progress [通用]

```css
.ring-progress {
  position: relative;
  width: 64px;
  height: 64px;
}
.ring-progress svg {
  transform: rotate(-90deg);
}
.ring-progress__track {
  fill: none;
  stroke: var(--ink-100);
  stroke-width: 6;
}
.ring-progress__fill {
  fill: none;
  stroke: var(--cdx-700);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 176; /* 2 * PI * 28 */
  stroke-dashoffset: calc(176 - 176 * var(--percent, 0.75));
  transition: stroke-dashoffset 1s var(--ease-expo);
}
.ring-progress__label {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 14px;
  font-weight: 600;
  font-family: var(--font-mono);
}
```

---

## 16. 图表与可视化 [通用]

### 16.1 Chart Container [B 端]

```css
.chart-container {
  padding: 20px;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  background: #fff;
}
.chart-container__title {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-700);
  margin-bottom: 16px;
}
```

### 16.2 Chart Tabs [通用]

```css
.chart-tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
}
.chart-tab {
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  color: var(--ink-500);
  cursor: pointer;
}
.chart-tab.active {
  background: var(--ink-900);
  color: #fff;
}
```

### 16.3 Chart Legend [通用]

```css
.chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 12px;
  color: var(--ink-600);
}
.chart-legend__item {
  display: flex;
  align-items: center;
  gap: 6px;
}
.chart-legend__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
```

### 16.4 Chart Color Palette [通用]

| 序号 | 变量 | 色值 | 用途 |
|------|------|------|------|
| 1 | `--chart-1` | `#2D7873` | 主系列（cdx-700） |
| 2 | `--chart-2` | `#4BA3A0` | 次系列 |
| 3 | `--chart-3` | `#D4A853` | 强调/金色 |
| 4 | `--chart-4` | `#7C9EB5` | 辅助蓝灰 |
| 5 | `--chart-5` | `#A8453B` | 警告/红 |
| 6 | `--chart-6` | `#6B7280` | 中性灰 |
| 7 | `--chart-7` | `#8B5CF6` | 紫色辅助 |
| 8 | `--chart-8` | `#059669` | 成功/绿 |

---

## 17. 时间轴 [B 端]

### 17.1 Vertical Timeline (VTL) [B 端]

```css
.vtl {
  position: relative;
  padding-left: 32px;
}
.vtl::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--ink-100);
}
```

### 17.2 Timeline Nodes [B 端]

```css
.vtl__node {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  display: grid;
  place-items: center;
}
.vtl__node--teal { background: var(--cdx-700); }
.vtl__node--gold { background: var(--amber-500); }
.vtl__node--gray { background: var(--ink-300); }
.vtl__node--red { background: #A8453B; }
.vtl__node svg {
  width: 12px;
  height: 12px;
  color: #fff;
}
```

### 17.3 Timeline Cards [B 端]

```css
.vtl__card {
  padding: 16px;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  margin-bottom: 16px;
  margin-left: 12px;
  background: #fff;
}
.vtl__card-time {
  font-size: 11px;
  color: var(--ink-400);
  font-family: var(--font-mono);
  margin-bottom: 4px;
}
.vtl__card-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-900);
}
```

---

## 18. 进度与状态 [通用]

### 18.1 Loading Bar [通用]

```css
.loading-bar {
  height: 3px;
  background: var(--ink-100);
  overflow: hidden;
  border-radius: 2px;
}
.loading-bar__fill {
  height: 100%;
  width: 40%;
  background: var(--cdx-700);
  border-radius: 2px;
  animation: loadingSlide 1.2s ease-in-out infinite;
}
@keyframes loadingSlide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(350%); }
}
```

### 18.2 Pulse Dot [通用]

```css
.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #059669;
  position: relative;
}
.pulse-dot::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 2px solid #059669;
  animation: pulse 1.6s ease-out infinite;
}
@keyframes pulse {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.8); opacity: 0; }
}
```

### 18.3 Pipeline [B 端]

```css
.pipeline {
  display: flex;
  align-items: center;
  gap: 2px;
}
.pipeline__step {
  padding: 8px 16px;
  font-size: 12px;
  background: var(--ink-50);
  color: var(--ink-500);
  position: relative;
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%, 8px 50%);
}
.pipeline__step:first-child {
  clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%);
}
.pipeline__step--done {
  background: var(--cdx-700);
  color: #fff;
}
.pipeline__step--active {
  background: var(--cdx-100);
  color: var(--cdx-900);
  animation: flowSweep 2s ease infinite;
}
@keyframes flowSweep {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

### 18.4 Sync Bar [B 端]

```css
.sync-bar {
  height: 4px;
  border-radius: 2px;
  overflow: hidden;
}
.sync-bar--idle { background: var(--ink-100); }
.sync-bar--syncing {
  background: var(--ink-100);
  position: relative;
}
.sync-bar--syncing::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    -45deg,
    var(--cdx-700) 0 4px,
    transparent 4px 8px
  );
  animation: stripeMove 0.6s linear infinite;
}
.sync-bar--done { background: var(--cdx-700); }
@keyframes stripeMove {
  to { background-position: 8px 0; }
}
```

### 18.5 Skeleton [B 端]

```css
.skeleton {
  background: linear-gradient(90deg, var(--ink-100) 0%, var(--ink-50) 50%, var(--ink-100) 100%);
  background-size: 200% 100%;
  animation: skeletonShimmer 1.4s ease-in-out infinite;
  border-radius: 4px;
}
.skeleton--text { height: 14px; width: 80%; }
.skeleton--title { height: 20px; width: 50%; }
.skeleton--avatar { width: 32px; height: 32px; border-radius: 50%; }
.skeleton--card { height: 120px; }
@keyframes skeletonShimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 18.6 Spinner [B 端]

```css
.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--ink-200);
  border-top-color: var(--cdx-700);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### 18.7 Empty State [通用]

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
}
.empty-state__icon {
  width: 48px;
  height: 48px;
  color: var(--ink-300);
  margin-bottom: 16px;
}
.empty-state__title {
  font-size: 15px;
  font-weight: 500;
  color: var(--ink-700);
  margin-bottom: 4px;
}
.empty-state__desc {
  font-size: 13px;
  color: var(--ink-500);
  max-width: 320px;
}
```

### 18.8 Steps Indicator [B 端]

```css
.steps {
  display: flex;
  align-items: center;
  gap: 0;
}
.steps__item {
  display: flex;
  align-items: center;
  gap: 8px;
}
.steps__dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid var(--ink-200);
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 500;
}
.steps__dot--done {
  background: var(--cdx-700);
  border-color: var(--cdx-700);
  color: #fff;
}
.steps__dot--active {
  border-color: var(--cdx-700);
  color: var(--cdx-700);
}
.steps__line {
  width: 40px;
  height: 2px;
  background: var(--ink-200);
  margin: 0 8px;
}
.steps__line--done { background: var(--cdx-700); }
```

### 18.9 Reason Step [B 端]

三态：pending / active / done

```css
.reason-step {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 13px;
  transition: all 300ms var(--ease-expo);
}
.reason-step--pending {
  opacity: 0.4;
  color: var(--ink-500);
}
.reason-step--active {
  opacity: 1;
  background: var(--cdx-50);
  color: var(--cdx-900);
}
.reason-step--done {
  opacity: 0.7;
  color: var(--ink-700);
}
```

---

## 19. B 端展示型业务组件 [B 端]

### 19.1 Layer Stepper [B 端]

```css
.layer-stepper {
  display: flex;
  align-items: stretch;
  gap: 0;
}
.layer-tab {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 28px;
  cursor: pointer;
  background: #fff;
  border: 1px solid var(--ink-200);
  border-radius: 8px;
  transition: all 250ms var(--ease-expo);
}
.layer-tab.is-active {
  border-color: var(--cdx-700);
  box-shadow: inset 0 -3px 0 var(--cdx-700);
}
.layer-badge {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 22px;
  background: var(--ink-100);
  color: var(--ink-400);
  border: 2px solid var(--ink-200);
  transition: all 250ms var(--ease-expo);
}
.layer-tab.is-active .layer-badge {
  background: var(--cdx-700);
  color: #fff;
  border-color: var(--cdx-700);
}
.layer-arrow {
  color: var(--ink-300);
  font-size: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
}
```

**布局说明**：
- 每个 `.layer-tab` 独立带圆角和边框，不共享边框
- `.layer-arrow` 无背景、无边框，仅作为视觉连接符
- 外层容器不加额外描边或背景色，保持透明

### 19.2 DAG Nodes [B 端]

四种节点类型：source / transform / model / output

```css
.dag-node {
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 12px;
  border: 1px solid;
  min-width: 120px;
  text-align: center;
}
.dag-node--source { border-color: var(--cdx-200); background: var(--cdx-50); }
.dag-node--transform { border-color: var(--amber-200); background: #FFFBEB; }
.dag-node--model { border-color: #C4B5FD; background: #EDE9FE; }
.dag-node--output { border-color: var(--ink-200); background: var(--ink-50); }
```

### 19.3 Synonym Group [B 端]

```css
.synonym-group {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 12px;
  border: 1px dashed var(--ink-200);
  border-radius: 4px;
}
.synonym-group__item {
  padding: 2px 8px;
  background: var(--cdx-50);
  border-radius: 3px;
  font-size: 12px;
  color: var(--cdx-700);
}
```

### 19.4 Anchor / Linkable [B 端]

```css
.anchor-link {
  color: var(--cdx-700);
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}
.trace-highlight {
  background: rgba(45, 120, 115, 0.08);
  border-radius: 2px;
  padding: 0 2px;
  transition: background 300ms;
}
.trace-highlight.active {
  background: rgba(45, 120, 115, 0.2);
}
```

### 19.5 EMR Highlight [B 端]

```css
.emr-mark {
  background: var(--amber-100);
  border-radius: 2px;
  padding: 0 2px;
}
.emr-mark--diagnosis { background: #DBEAFE; }
.emr-mark--medication { background: #D1FAE5; }
.emr-mark--procedure { background: #EDE9FE; }
```

### 19.6 Patient List Panel [B 端]

```css
.patient-panel {
  width: 320px;
  border-right: 1px solid var(--ink-100);
  height: 100vh;
  overflow-y: auto;
  transition: width 300ms var(--ease-expo);
}
.patient-panel.collapsed {
  width: 48px;
}
.patient-panel__item {
  padding: 12px 16px;
  border-bottom: 1px solid var(--ink-50);
  cursor: pointer;
}
.patient-panel__item.active {
  background: var(--cdx-50);
  border-left: 2px solid var(--cdx-700);
}
```

### 19.7 Drill View [B 端]

```css
.drill-view {
  animation: drillIn 400ms var(--ease-expo);
}
@keyframes drillIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.drill-view__back {
  margin-bottom: 16px;
}
```

---

## 20. B 端管理型业务组件 [B 端]

### 20.1 Page Header [B 端]

```css
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.page-header__title {
  font-size: 18px;
  font-weight: 600;
  color: var(--ink-900);
}
.page-header__actions {
  display: flex;
  gap: 8px;
}
```

### 20.2 Filter Bar [B 端]

```css
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: var(--ink-50);
  border-radius: 6px;
  margin-bottom: 16px;
}
.filter-bar__item {
  display: flex;
  align-items: center;
  gap: 4px;
}
.filter-bar__reset {
  margin-left: auto;
  font-size: 12px;
  color: var(--ink-500);
}
```

### 20.3 Form Card [B 端]

```css
.form-card {
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  overflow: hidden;
}
.form-card__section {
  padding: 20px 24px;
  border-bottom: 1px solid var(--ink-100);
}
.form-card__section-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-900);
  margin-bottom: 16px;
}
.form-card__footer {
  padding: 16px 24px;
  background: var(--ink-50);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
```

### 20.4 Stat Card Grid [B 端]

```css
.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}
```

### 20.5 Role Badges [B 端]

见 10.8 Role Badge。

### 20.6 Batch Operations [B 端]

```css
.batch-ops {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: var(--ink-900);
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
}
.batch-ops__count {
  font-weight: 500;
  margin-right: 8px;
}
.batch-ops__btn {
  padding: 4px 10px;
  border-radius: 3px;
  background: rgba(255,255,255,0.15);
  color: #fff;
  font-size: 12px;
}
.batch-ops__btn:hover {
  background: rgba(255,255,255,0.25);
}
```

---

## 17. 时间轴 [B 端]

### 17.1 纵向时间轴（VTL）

```css
.vtl { position: relative; padding-left: 100px; }
.vtl::before { content:""; position:absolute; left:82px; top:0; bottom:0; width:2px; background:#E4E4E7; }
.vtl-date { position:absolute; left:-100px; top:12px; width:72px; text-align:right; font-size:12px; font-family:monospace; color:#71717A; }
.vtl-node { position:absolute; left:-22px; top:14px; width:12px; height:12px; border-radius:999px; background:#185058; border:2px solid #fff; box-shadow:0 0 0 2px #E4E4E7; }
.vtl-node.warn { background:#C28A2C; }
.vtl-node.danger { background:#A8453B; }
.vtl-node.success { background:#3F8F5C; }
.vtl-card { margin-left:8px; padding:10px 16px; background:#fff; border:1px solid #E4E4E7; border-radius:6px; cursor:pointer; transition:all 250ms cubic-bezier(.16,1,.3,1); }
.vtl-card:hover { border-color:#185058; background:#F0F7F8; }
.vtl-card.is-active { border-color:#185058; background:#F0F7F8; box-shadow:0 2px 12px rgba(24,80,88,.14); }
```

---

## 18. 进度与状态 [通用]

### 18.1 Loading Bar [通用]

```css
.loading-bar { height:3px; background:#E4E4E7; border-radius:2px; overflow:hidden; position:relative; }
.loading-bar::after { content:""; position:absolute; top:0; left:-40%; width:40%; height:100%; background:#185058; animation:slide 1.4s cubic-bezier(.4,0,.2,1) infinite; }
@keyframes slide { to { left:100%; } }
```

### 18.2 Pulse Dot [通用]

```css
.pulse-dot { width:8px; height:8px; border-radius:999px; background:#15803D; box-shadow:0 0 0 0 rgba(21,128,61,.45); animation:pulse 1.6s ease-out infinite; }
@keyframes pulse { 0%{box-shadow:0 0 0 0 rgba(21,128,61,.5)} 70%{box-shadow:0 0 0 10px rgba(21,128,61,0)} 100%{box-shadow:0 0 0 0 rgba(21,128,61,0)} }
```

### 18.3 Pipeline [B 端]

```css
.pipeline { display:flex; border:1px solid #E5E6EB; border-radius:10px; background:#fff; overflow:hidden; }
.pl-step { flex:1; padding:18px 22px; position:relative; border-right:1px solid #F2F3F5; }
.pl-step.active { background:linear-gradient(90deg,rgba(42,127,139,.03) 0%,rgba(42,127,139,.08) 50%,rgba(42,127,139,.03) 100%); }
.pl-step.active::after { content:""; position:absolute; inset:0; background:linear-gradient(90deg,transparent,rgba(42,127,139,.14) 50%,transparent); transform:translateX(-100%); animation:flowSweep 2.4s linear infinite; }
.pl-step.done .pl-name::before { content:""; display:inline-block; width:18px; height:18px; border-radius:999px; background:#15803D; margin-right:8px; }
.pl-progress { position:absolute; left:0; bottom:0; height:3px; background:#E5E6EB; width:100%; }
.pl-progress::after { content:""; position:absolute; left:0; top:0; height:100%; background:#2A7F8B; width:var(--w,0%); transition:width 1.6s ease; }
```

### 18.4 Sync Bar [B 端]

```css
.sync-bar { height:8px; background:#F2F3F5; border-radius:4px; overflow:hidden; position:relative; min-width:160px; }
.sync-bar > i { position:absolute; left:0; top:0; bottom:0; background:#1D5CFF; border-radius:4px; transition:width 1.2s ease; }
.sync-bar.ok > i { background:#15803D; }
.sync-bar.retry > i { background:#E59C0F; }
```

### 18.5 Skeleton [B 端]

```css
.skeleton { background:linear-gradient(90deg,#F4F4F5 0%,#FAFAFA 50%,#F4F4F5 100%); background-size:200% 100%; animation:skeletonShine 1.4s ease-in-out infinite; border-radius:4px; }
@keyframes skeletonShine { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
```

### 18.6 Spinner [B 端]

```css
.spinner { width:14px; height:14px; border:2px solid #E4E4E7; border-top-color:#185058; border-radius:50%; animation:spin 600ms linear infinite; }
@keyframes spin { to { transform:rotate(360deg); } }
```

### 18.7 Empty State [通用]

```css
.empty-state { display:flex; flex-direction:column; align-items:center; padding:60px 40px; text-align:center; }
.empty-state-icon { width:56px; height:56px; color:#D4D4D8; margin-bottom:16px; }
.empty-state-title { font-size:15px; font-weight:600; color:#71717A; margin-bottom:4px; }
.empty-state-hint { font-size:13px; color:#A1A1AA; max-width:360px; line-height:1.7; }
```

### 18.8 Steps Indicator [B 端]

```css
.steps { display:flex; align-items:center; }
.step { display:flex; align-items:center; flex:1; }
.step-dot-num { width:24px; height:24px; border-radius:50%; background:#E4E4E7; color:#A1A1AA; font-size:12px; font-weight:600; display:inline-flex; align-items:center; justify-content:center; }
.step.is-active .step-dot-num, .step.is-done .step-dot-num { background:#185058; color:#fff; }
.step-label { margin-left:8px; font-size:12px; color:#71717A; }
.step.is-active .step-label { color:#18181B; font-weight:600; }
.step-line { flex:1; height:1px; background:#E4E4E7; margin:0 12px; }
.step.is-done .step-line { background:#185058; }
```

### 18.9 Reason Step [B 端]

```css
.reason-step { border-left:3px solid #E4E4E7; padding:12px 14px; transition:all 350ms; opacity:.55; }
.reason-step.is-active { opacity:1; border-left-color:#C28A2C; background:#FFFBF0; }
.reason-step.is-done { opacity:1; border-left-color:#185058; }
```

---

## 19. B 端展示型业务组件 [B 端]

### 19.1 Layer Stepper

三层流程引导（感知层 → 映射层 → 推理层），56px 数字徽章，3 态（默认/激活/已完成）。每个 tab 独立圆角卡片，箭头无背景无边框。

```css
.layer-stepper { display:flex; align-items:stretch; gap:0; }
.layer-tab { flex:1; display:flex; align-items:center; gap:18px; padding:22px 28px; cursor:pointer; background:#fff; border:1px solid #E4E4E7; border-radius:8px; transition:all 250ms; }
.layer-tab.is-active { border-color:#185058; box-shadow:inset 0 -3px 0 #185058; }
.layer-badge { width:56px; height:56px; border-radius:50%; font-family:"JetBrains Mono",monospace; font-weight:700; font-size:22px; background:#F4F4F5; color:#A1A1AA; border:2px solid #E4E4E7; display:flex; align-items:center; justify-content:center; }
.layer-tab.is-active .layer-badge { background:#185058; color:#fff; border-color:#185058; }
.layer-arrow { color:#D4D4D8; font-size:20px; padding:0 10px; display:flex; align-items:center; }
```

### 19.2 DAG Nodes

4 种节点类型：起点（圆形青）、聚合（紫色）、时间窗（黑色）、合并（粉色菱形）。

```css
.dag-canvas { position:relative; min-height:360px; background:#FAFAFA; border:1px dashed #E4E4E7; border-radius:4px; }
.dag-node { position:absolute; border-radius:6px; padding:10px 14px; font-size:12px; z-index:2; }
.dag-node-start { width:56px; height:56px; border-radius:50%; background:#185058; color:#fff; font-weight:700; }
.dag-node-mix { background:#7C3AED; color:#fff; min-width:180px; }
.dag-node-time { background:#18181B; color:#fff; min-width:200px; }
.dag-node-merge { width:80px; height:80px; transform:rotate(45deg); border:2px solid #EC4899; background:#FDF2F8; }
```

### 19.3 Synonym Group

```css
.synonym-alias { padding:3px 10px; font-size:13px; background:#FBF9F4; border:1px solid #E8DCC1; border-radius:2px; color:#6E582C; }
.synonym-std { padding:6px 14px; font-size:14px; background:#F0F7F8; border:1px solid #B0D6DB; border-radius:2px; color:#185058; font-weight:600; }
.synonym-arrow { color:#A1A1AA; font-size:18px; }
```

### 19.4 Anchor / Linkable（溯源锚点）

```css
.anchor { cursor:pointer; padding:1px 4px; margin:-1px -2px; border-radius:2px; border-bottom:1px dashed #D4D4D8; transition:all 250ms; }
.anchor:hover { background:#F0F7F8; border-bottom-color:#185058; }
.anchor.is-hl { background:#FEF3C7; border-bottom:2px solid #C28A2C; box-shadow:0 0 0 2px #FEF3C7; }
mark { background:#FFF3CC; color:#6E582C; padding:1px 4px; border-radius:3px; font-weight:600; }
mark.cdx { background:#D9EBED; color:#143F47; }
```

### 19.5 Patient List Panel

```css
.patient-list-panel { width:300px; border-right:1px solid #E4E4E7; position:sticky; top:0; height:100vh; overflow-y:auto; transition:width 300ms cubic-bezier(.16,1,.3,1); }
.patient-list-panel.is-collapsed { width:48px; }
.patient-row { cursor:pointer; border-left:3px solid transparent; transition:all 250ms; }
.patient-row:hover { background:#F0F7F8; }
.patient-row.is-active { background:#F0F7F8; border-left-color:#185058; }
```

---

## 20. B 端管理型业务组件 [B 端]

### 20.1 Page Header

**实际规范**（prototype 已验证）：

```css
/* 页面标题行 — 标题 + 副标题同行，margin-bottom 统一 16px */
.page-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 16px;
}
.page-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--ink-900);
  margin: 0;
}
.page-subtitle {
  font-size: 13px;
  color: var(--ink-500);
  margin: 0;
}
/* 标题行含操作按钮时 */
.page-header--with-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
```

**HTML 示例**：
```html
<!-- 纯标题 -->
<div style="display:flex;align-items:baseline;gap:12px;margin-bottom:16px">
  <h2 style="font-size:18px;font-weight:600;color:#18181B;margin:0">页面标题</h2>
  <p style="font-size:13px;color:#71717A;margin:0">副标题说明</p>
</div>

<!-- 标题 + 操作按钮 -->
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
  <div style="display:flex;align-items:baseline;gap:12px">
    <h2 style="font-size:18px;font-weight:600;color:#18181B;margin:0">页面标题</h2>
    <p style="font-size:13px;color:#71717A;margin:0">副标题说明</p>
  </div>
  <button class="btn-primary">操作按钮</button>
</div>
```

**关键规则**：
- 标题字号 **18px**，font-weight 600，颜色 `ink-900`
- 副标题字号 **13px**，颜色 `ink-500`（`#71717A`）
- 标题行 `margin-bottom` 统一 **16px**，禁止使用 20px

### 20.2 Filter Bar

**实际规范**（prototype 已验证）：

```css
.filter-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #fff;
  border: 1px solid var(--ink-100);  /* ink-100，非 ink-200 */
  border-radius: 6px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
```

**筛选项 + 按钮组布局规则**：

```html
<!-- 筛选项流式排列，按钮组跟在最后一个筛选项右侧 -->
<div class="filter-bar">
  <div style="display:flex;flex-wrap:wrap;gap:10px;flex:1;min-width:0">
    <!-- 筛选项 -->
    <div style="display:flex;align-items:center;gap:6px">
      <label style="font-size:12px;color:#52525B;white-space:nowrap">字段名</label>
      <select class="filter-select" style="flex:1;min-width:0">...</select>
    </div>
  </div>
  <!-- 按钮组：margin-left:auto 推到右侧，white-space:nowrap 防换行 -->
  <div style="display:flex;gap:8px;white-space:nowrap;margin-left:auto">
    <button class="btn-primary">查询</button>
    <button class="btn-secondary">重置</button>
  </div>
</div>
```

**关键规则**：
- 外边框用 `ink-100`（`#F4F4F5`），与卡片同级，不用 `ink-200`
- 按钮组用 `margin-left: auto` 推到右侧，不用 `justify-content: center`
- 按钮换行后整组保持同行（`white-space: nowrap`）
- 筛选项标签字号 **12px**，颜色 `ink-600`

### 20.3 Form Card

```css
.form-card {
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  overflow: hidden;
}
.form-card__section {
  padding: 20px 24px;
  border-bottom: 1px solid var(--ink-100);
}
.form-card__section-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-900);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
/* 左侧品牌色竖线装饰 */
.form-card__section-title::before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 14px;
  background: var(--cdx-700);
  border-radius: 2px;
}
.form-card__footer {
  padding: 16px 24px;
  background: var(--ink-50);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.form-row {
  display: flex;
  align-items: flex-start;
  min-height: 36px;
  margin-bottom: 12px;
}
.form-row:last-child { margin-bottom: 0; }
.form-label {
  width: 140px;
  flex-shrink: 0;
  font-size: 13px;
  color: var(--ink-600);
  line-height: 32px;
}
.form-control {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
```

---

## 21. 动效系统 [通用]

### 21.1 核心缓动

```css
--ease-expo: cubic-bezier(0.16, 1, 0.3, 1);  /* ★全局统一 */
```

### 21.2 时长阶梯

| 场景 | 展示型 | 管理型 |
|------|------|------|
| 微交互（hover/focus） | 200-250ms | 150ms |
| 状态切换（tab/toggle） | 250-350ms | 200ms |
| 面板展开 | 420ms | 250ms |
| 卡片 hover | 450ms | 300ms |
| 入场动画 | 800ms | 200ms |
| 数字滚动 | 1600ms | 1000ms |
| 图表绘制 | 1200ms | 800ms |

### 21.3 cdx-fade 入场 [B 端]

```javascript
document.querySelectorAll('.cdx-fade').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  setTimeout(() => {
    el.style.transition = 'opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }, 80 + i * 90);
});
```

### 21.4 B 端入场 [B 端]

```css
.admin-fade-in { animation: fadeIn 200ms cubic-bezier(0.16,1,0.3,1) both; }
/* 无 stagger，快速出现 */
```

### 21.5 全部 @keyframes

```css
@keyframes fadeIn { from{opacity:0} to{opacity:1} }
@keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
@keyframes pulseSoft { 0%,100%{opacity:.6} 50%{opacity:1} }
@keyframes ringFill { to{stroke-dashoffset:0} }
@keyframes slide { to{left:100%} }
@keyframes pulse { 0%{box-shadow:0 0 0 0 rgba(21,128,61,.5)} 70%{box-shadow:0 0 0 10px rgba(21,128,61,0)} 100%{box-shadow:0 0 0 0 rgba(21,128,61,0)} }
@keyframes flowSweep { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
@keyframes pulseRun { 0%,100%{transform:scale(1)} 50%{transform:scale(1.18)} }
@keyframes pdot { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }
@keyframes rowFlash { 0%{background:#FDE68A} 60%{background:#FEF3C7} 100%{background:#FFFBEB} }
@keyframes flowStripe { 0%{transform:translateX(0)} 100%{transform:translateX(22px)} }
@keyframes skeletonShine { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
@keyframes spin { to{transform:rotate(360deg)} }
@keyframes scaleIn { from{transform:scale(.95);opacity:0} to{transform:scale(1);opacity:1} }
@keyframes toastSlideIn { from{opacity:0;transform:translateX(16px)} to{opacity:1;transform:translateX(0)} }
@keyframes barGrow { from{transform:scaleY(0)} to{transform:scaleY(1)} }
```

---

## 22. B 端展示型页面结构 [B 端]

### 22.1 ACT 三段式

```html
<main class="max-w-ultra mx-auto px-12 pt-20 pb-20">
  <!-- 1. 章节头 -->
  <div class="cdx-fade flex items-center gap-4 mb-8">
    <span class="font-mono text-eyebrow text-cdx-700 font-bold">01 · ACT ONE</span>
    <span class="h-px flex-1 bg-ink-300"></span>
    <span class="text-eyebrow uppercase text-ink-600">章节名称</span>
  </div>

  <!-- 2. 标题 + 引导 -->
  <h1 class="cdx-fade text-[1.833rem] font-display font-medium leading-tight max-w-5xl">
    主标题<span class="text-ink-500">弱化部分</span>
  </h1>
  <p class="cdx-fade text-lead text-ink-700 mt-6 max-w-3xl">引导段落</p>

  <!-- 3. 主体内容 -->
  <section class="cdx-fade mt-10">...</section>

  <!-- 4. 章节尾 -->
  <section class="cdx-fade mt-18 bg-white border border-ink-200 p-10">
    <div class="text-eyebrow uppercase text-cdx-700 font-bold mb-3">这意味着什么</div>
    <p class="text-h3 font-display font-semibold">总结金句</p>
    <div class="mt-10 border-t border-ink-200 pt-7 flex items-center justify-between">
      <div class="text-caption text-ink-700">下一幕 · ...</div>
      <button class="group inline-flex items-center gap-4 px-8 py-4 bg-ink-900 text-white text-eyebrow uppercase rounded hover:bg-cdx-700 hover:gap-6 transition-all duration-500">
        <span>CTA</span><svg>→</svg>
      </button>
    </div>
  </section>
</main>
```

### 22.2 鉴权

```html
<body data-require-auth="true">
<script src="_auth.js"></script>
<script>window.CDXAuth && window.CDXAuth.guard();</script>
```

---

## 23. B 端管理型页面结构 [B 端]

### 23.1 列表页

```html
<main class="admin-main">
  <nav class="breadcrumb">...</nav>
  <div class="page-header">
    <div><h1 class="page-title">患者列表</h1><p class="page-subtitle">共 12,847 例</p></div>
    <div class="page-actions"><button>导出</button><button>新增</button></div>
  </div>
  <div class="filter-bar">...</div>
  <div class="grid grid-cols-4 gap-4 mb-5"><div class="stat-card">...</div></div>
  <div class="table-wrap">
    <div class="table-toolbar">...</div>
    <table class="data-table">...</table>
    <div class="table-pagination">...</div>
  </div>
</main>
```

### 23.2 详情页

```html
<main class="admin-main">
  <nav class="breadcrumb">...</nav>
  <div class="page-header">...</div>
  <div class="grid grid-cols-3 gap-5">
    <div class="col-span-2 space-y-5"><div class="info-card">...</div></div>
    <aside class="space-y-5"><div class="stat-card">...</div></aside>
  </div>
</main>
```

### 23.3 表单页

```html
<main class="admin-main">
  <nav class="breadcrumb">...</nav>
  <div class="page-header">...</div>
  <div class="form-card">
    <div class="form-section"><h3 class="form-section-title">基本信息</h3><div class="form-grid grid-cols-2">...</div></div>
    <div class="form-footer"><button>取消</button><button>保存</button></div>
  </div>
</main>
```

---

## 24. Tailwind 配置 [通用]

完整配置见 `tokens/tailwind.config.js`。核心扩展：

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: { ink: {...}, cdx: {...}, warm: {...}, hl: {...}, live: {...}, recon: {...}, concept: {...} },
      fontFamily: { sans: [...], display: [...], mono: [...] },
      fontSize: { hero, kpi, h1, h2, h3, lead, body, caption, eyebrow, 'admin-h1', 'admin-h2', 'admin-h3', 'admin-body', 'admin-caption', 'admin-micro' },
      spacing: { 18, 22, 30, 36 },
      borderRadius: { xs:'2px', sm:'4px', DEFAULT:'6px', md:'8px', lg:'12px', xl:'16px', '2xl':'14px' },
      boxShadow: { subtle, soft, lift, 'card-hover', drawer, tooltip, dropdown, modal, 'focus-ink', 'focus-error', 'focus-cdx' },
      backgroundImage: { 'gradient-warm', 'gradient-cdx', 'gradient-fade', 'gradient-modality' },
      transitionTimingFunction: { 'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)' },
      animation: { 'fade-in', 'fade-up', 'pulse-soft', 'flow-sweep', 'pulse-run', 'pulse-ring', 'slide', 'skeleton-shine', 'spin' },
      maxWidth: { narrow:'720px', reading:'880px', wide:'1280px', ultra:'1440px' }
    }
  }
};
```

---

## 25. 国际化 [通用]

| 代码 | 语言 | 标签 |
|------|------|------|
| `zh` | 中文（默认） | 中文 |
| `en` | English | EN |
| `pt` | Português | PT |
| `es` | Español | ES |

```html
<span data-i18n="nav.assets">资产总览</span>
<h1 data-i18n-html="index.title">含 HTML 的文本</h1>
<input data-i18n-placeholder="login.username-placeholder" />
<span data-i18n-skip>不翻译的内容</span>
```

持久化：`localStorage.setItem('cdx-lang', langCode)`

---

## 26. 设计决策与依据 [通用]

| 决策 | 原因 |
|------|------|
| 用 `cubic-bezier(0.16,1,0.3,1)` | 前快后慢，模拟物理惯性，比标准 ease-out 更高级 |
| eyebrow 字距 0.16em | 项目视觉指纹，营造高端 SaaS 气质 |
| 噪点纹理 | 纯白背景在大屏/投影显得"塑料感"，微噪点增加"纸感" |
| 命中用琥珀金 | 医院场景"红色=危急"，琥珀金有强调力度又不触发警报感 |
| 字号上调 | 目标用户 40-55 岁，投影场景距离远 |
| 边框优先于阴影 | 克制风格核心，静态阴影让界面显得"浮" |
| 灰-青-金三色体系 | 灰=理性骨架，青=品牌可信，金=关键时刻。无负面联想 |
| 对账模块独立色板 | 暗示"机房/运维"视角，与主体"业务视角"区分 |

---

## 27. 反模式 [通用]

| 反模式 | 正确做法 |
|--------|---------|
| 紫→蓝渐变背景 | 白底 + 噪点纹理 + 边框 |
| 玻璃态 | 实色卡片 + 1px 边框 |
| 大圆角（20px+） | 6px 为主，最大 16px |
| 通用 Hero 居中排版 | 左对齐 + 数字主角 |
| 渐变滥用 | 仅装饰性区域 |
| 滚动触发动画 | 只在入场时动画一次 |
| 无性格体栈 | PingFang + Inter + JetBrains Mono |
| 饱和色 | 低饱和品牌青 #185058 |
| 所有按钮加阴影 | 阴影仅在 hover 出现 |
| Emoji 图标 | 内联 SVG stroke 图标 |
| 斑马条纹表格 | 纯白行 + hover 高亮 |
| 图标字体 | 内联 SVG |

---

## 28. 检查清单 [通用]

### 28.1 基础环境

- [ ] `<body class="font-sans text-ink-900 antialiased">`
- [ ] 页面背景 `#FAFAFA` + 噪点纹理（body 背景图层）
- [ ] `font-feature-settings: "ss01","cv11"`
- [ ] 噪点纹理通过 `background-image` 实现（非伪元素）
- [ ] Tailwind 配置完整复用

### 28.2 色彩

- [ ] 90% 文本用 ink 灰阶
- [ ] KPI 主值用 `cdx-700`
- [ ] hover 背景统一 `#F0F7F8`
- [ ] 命中/溯源用 `#FEF3C7` + `#C28A2C`
- [ ] 禁止使用未定义颜色

### 28.3 字体

- [ ] 标签用 eyebrow（13px/600/uppercase/0.16em）
- [ ] 数字用 `font-mono` + `tabular-nums`
- [ ] 标题负字距

### 28.4 组件

- [ ] 主按钮 eyebrow 样式
- [ ] 卡片 `border border-ink-200 bg-white` + hover 阴影
- [ ] 表头 `bg-ink-50` + uppercase
- [ ] 图标内联 SVG stroke
- [ ] 输入框 focus 用 ring shadow

### 28.5 动效

- [ ] 统一缓动 `cubic-bezier(0.16,1,0.3,1)`
- [ ] B 端展示型入场用 `.cdx-fade`
- [ ] KPI 有 countUp
- [ ] 阴影仅 hover 出现

### 28.6 页面结构

- [ ] 展示型：ACT 三段式 + meaning card
- [ ] 管理型：sidebar + header + main 三段式
- [ ] 键盘导航可用（展示型）

### 28.7 禁用项

- [ ] 无玻璃态
- [ ] 无紫渐蓝
- [ ] 无大圆角（>16px）
- [ ] 无 emoji 图标
- [ ] 无外链字体
- [ ] 无图标字体
- [ ] 无滚动触发动画

---

## 29. B 端顶部对齐与表单细节（增补 · 2026-05-13）

> 本章记录了一套在 B 端后台系统高频复用的、细节层面的规范。来自住院整体监管模块实际对齐过程。

### 29.1 Header 水平条带双栏等高原则 [B 端]

B 端页面顶部由**两条水平条带**组成：

- 左侧：侧边栏顶部品牌/logo 栏（`.menu-head` / `.sidebar-brand`）
- 右侧：主内容区顶部工具栏（`.header-wrapper` / `.admin-header`）

**硬性约束**：两者必须**严格等高**（视觉连续），形成一条完整横向分隔线。

**规范值**：
```
高度 = 68px
底边框 = 1px solid var(--ink-100)
垂直对齐 = 内部元素必须 flex + align-items: center
水平 padding = 16-24px（左右可不同，左侧一般 16，右侧 20-24）
背景 = #fff
```

**错误做法**：
- ❌ 左右条带高度不一（例：左 87px、右 68px）
- ❌ 仅一侧有底边框
- ❌ 内部 logo/图标靠大 padding 撑高度（容易被图标尺寸变化破坏）

**正确做法**：
```css
.menu-head,
.header-wrapper {
  box-sizing: border-box;
  height: 68px;
  min-height: 68px;
  border-bottom: 1px solid var(--ink-100);
  display: flex;
  align-items: center;        /* ★ 子元素垂直居中 */
  background: #fff;
}
.menu-head { padding: 0 16px; gap: 10px; justify-content: space-between; }
.header-wrapper { padding: 0 20px 0 24px; gap: 16px; justify-content: space-between; }

/* 左侧 logo 容器不吞高度，靠图片 max-height 控制 */
.menu-head .menu-icon { height: 40px; display: inline-flex; align-items: center; }
.menu-head img { max-height: 28px; height: auto; object-fit: contain; }
```

### 29.2 下拉箭头双侧对称原则 [B 端]

**用户原话**：箭头图标在组件内容区域的左右边距保持一致，严格参考时间选择组件的布局规范。

**核心原则**：所有带下拉/悬浮图标的输入控件，"**内容区起点距外框左边**" 必须 = "**图标终点距外框右边**"，等于 **12px**。

**参考标准（时间选择器 monthrange / daterange）**：

| 测量项 | 实测值 |
|--------|--------|
| `.el-date-editor--monthrange.el-input__inner { padding: 0 12px }` | 左 12 / 右 12 |
| 左侧 `.el-range__icon` 距外框左边 | 13px |
| 右侧 `.el-range__close-icon` 距外框右边 | 13px |
| **结论：左右严格对称 12-13px** | ✅ |

**对齐目标 — 所有下拉/带 suffix 控件**：

| 控件 | padding-left | padding-right | 内容起点距左 | 图标距右 | 是否对称 |
|------|--------------|----------------|---------------|----------|----------|
| `.el-date-editor--monthrange` | 12px | 12px | 13px | 13px | ✅ |
| `.el-select` | **12px** | 32px | 12px | 12px | ✅ |
| `.el-cascader` | **12px** | 32px | 12px | 12px | ✅ |
| `.el-input--suffix`（搜索/清除等） | **12px** | 32px | 12px | 12px | ✅ |
| `.el-input--prefix`（带左图标 input） | 32px | 32px | 12px | 12px | ✅ |
| `.el-date-editor.el-input`（单日期） | 32px | 32px | 12px | 12px | ✅ |

> 关键解读：`padding-right: 32px` 不代表"图标距右 32px"。
> 32px = **12px（图标距右边）+ 16px（图标本身宽度）+ 4px（视觉间隙）**
> 因此**实际"图标距外框右边"恰好是 12px**，与左侧 padding 12px 严格对称。

**实现规范**：

```css
/* 1) 通用兜底：所有 el-input__inner 左右最小 12px */
html body .el-input__inner {
  padding-left: 12px !important;
  padding-right: 12px !important;
}

/* 2) 带 suffix（select/cascader/搜索 input）：左 12 / 右 32 */
html body .el-input--suffix .el-input__inner,
html body .el-select .el-input__inner,
html body .el-cascader .el-input__inner {
  padding-left: 12px !important;
  padding-right: 32px !important;
}

/* 3) 带 prefix（含左图标的 input）：左 32 / 右 32 */
html body .el-input--prefix .el-input__inner {
  padding-left: 32px !important;
  padding-right: 32px !important;
}

/* 4) 单日期选择器（左日期图标 + 右悬浮）：左 32 / 右 32 */
html body .el-date-editor.el-input .el-input__inner {
  padding-left: 32px !important;
  padding-right: 32px !important;
}

/* 5) 双输入 Range 类：自身就是 input__inner，padding 0 12px 自然对称 */
html body .el-date-editor--monthrange.el-input__inner,
html body .el-date-editor--daterange.el-input__inner,
html body .el-date-editor--timerange.el-input__inner,
html body .el-date-editor--datetimerange.el-input__inner {
  padding: 0 12px !important;
}

/* 6) suffix/prefix 绝对定位：右/左各 12px */
.el-input__suffix { position: absolute; right: 12px; top: 0; bottom: 0; display: flex; align-items: center; }
.el-input__prefix { position: absolute; left: 12px;  top: 0; bottom: 0; display: flex; align-items: center; }

/* 7) 图标尺寸统一 16×16，色 ink-400，hover ink-700 */
.el-input__icon { width: 16px; height: 16px; color: var(--ink-400); }
```

**为什么用 `html body` 前缀提权**：Element UI 默认 `.el-input__inner { padding: 0 15px }` 与我们覆盖样式权重相同，运行时 webpack chunk CSS 在某些路由下后插，会反压回 15px。`html body` 双祖先选择器把权重抬高 (0,0,2,1) 高于普通类 (0,0,1,0)，确保 12px 稳定胜出。

**验收命令（控制台运行）**：

```javascript
function symCheck(sel) {
  const el = document.querySelector(sel);
  if (!el) return null;
  const inner = el.classList.contains('el-input__inner') ? el : el.querySelector('.el-input__inner');
  const innerRect = inner.getBoundingClientRect();
  const suffix = el.querySelector('.el-input__suffix, .el-range__close-icon');
  const prefix = el.querySelector('.el-input__prefix, .el-range__icon');
  const cs = getComputedStyle(inner);
  return {
    sel,
    pl: cs.paddingLeft,
    pr: cs.paddingRight,
    rightIconFromRight: suffix ? Math.round(innerRect.right - suffix.getBoundingClientRect().right) : null,
    leftIconFromLeft: prefix ? Math.round(prefix.getBoundingClientRect().left - innerRect.left) : null
  };
}
console.table([
  symCheck('.el-date-editor--monthrange'),
  symCheck('.el-select'),
  symCheck('.el-cascader'),
  symCheck('.el-input--suffix')
]);
// 预期：所有行 pl == 12px，rightIconFromRight ≈ 12-13px，左右对称

### 29.3 Header 标题与释义同行原则 [B 端]

当 header 右侧同时承载"用户名"+"所属科室/组织列表"等释义信息时：

- ❌ **错误**：用 `flex-direction: column` 让释义独立成行，占用两倍垂直空间
- ✅ **正确**：用 `flex-direction: row` 让释义与主体信息同行，中间以 **`·` ink-300 分隔符 + 8px gap** 区分

**规范模板**：
```css
.header-wrapper > .user {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}
.header-wrapper > .user > .username {
  display: inline-flex;
  flex-direction: row;   /* ★ 关键：释义不换行 */
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--ink-900);
  white-space: nowrap;
}
.header-wrapper > .user .department {
  font-size: 12px;
  color: var(--ink-500);
  max-width: 420px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header-wrapper > .user .department::before {
  content: '·';
  color: var(--ink-300);
  margin-right: 8px;
}
```

**长文本策略**：当 `.department` 超长被 ellipsis 截断时，整段应可点击，通过 Popover 展示完整内容（沿用 Element UI `.el-popover__reference` 约定）。

### 29.4 存量皮肤覆盖工程结构 [B 端]

目录结构：
```
design-system-overrides/
├── 01-tokens-base.css            :root 令牌 + body 噪点 + 排版
├── 02-form-components.css        Element UI 表单类
├── 03-data-components.css        Element UI 数据展示类
├── 04-overlay-nav.css            Element UI 弹层/导航
├── 05-project-custom.css         Element UI 其他通用
├── 06-motion.css                 动效关键帧
└── 07-business-inhospital.css    项目壳 + 业务类 + §29 本章修复
```

集成要点：
- 所有覆盖文件必须放在原项目 CSS 之后
- 搭配 MutationObserver 守护脚本，防止 webpack 运行时 chunk CSS 反压
- 禁止修改原项目 JS/HTML 结构，仅通过 CSS 覆盖实现视觉对齐
- 所有覆盖规则使用 `!important` 确保优先级胜出

### 29.5 表格姓名列与操作栏不折行规范 [B 端]

**问题**：页面宽度缩小时，姓名列和操作栏文本发生折行，导致行高不一致、操作按钮错位。

**规范**：

1. **姓名列**（`.col-name`）：强制 `white-space: nowrap`，确保人名在任何屏幕宽度下完整单行显示。
2. **操作栏**（`.col-action`）：强制 `white-space: nowrap`，确保操作按钮组（查看/编辑/删除等）始终水平排列不换行。

**CSS 实现**：
```css
.data-table .col-name { white-space: nowrap; }
.data-table .col-action { white-space: nowrap; }
```

**使用方式**：
```html
<!-- 姓名列 -->
<td class="col-name" style="font-weight:500">张三</td>

<!-- 操作栏 -->
<td class="col-action">
  <span class="btn-link">查看</span>
  <span class="btn-link">编辑</span>
</td>
```

**适用范围**：所有 B 端数据表格中包含姓名/名称字段和操作按钮的列。

**补充说明**：
- 表头 `<th>` 已全局设置 `white-space: nowrap`，无需额外处理
- 多列宽表格（如问题列表、任务执行）操作栏应同时使用 `position: sticky; right: 0` 固定在右侧可视区域
- 操作栏 sticky 时需配合 `background: #fff; box-shadow: -2px 0 4px rgba(0,0,0,0.04)` 避免内容穿透

**覆盖页面清单**：

| 页面 | 姓名列 | 操作栏 | sticky |
|------|:------:|:------:|:------:|
| 患者查询（实时/归档前/终末） | ✓ | ✓ | — |
| 问题列表（实时/归档前/终末） | ✓ | ✓ | ✓ |
| 任务分配 | ✓ | ✓ | ✓ |
| 任务跟踪 | ✓ | ✓ | ✓ |
| 任务执行 | — | ✓ | ✓ |
| 指标管理（病案管理指标） | — | ✓ | — |
| 核心指标 | — | ✓ | — |
| 设置-规则维护 | ✓ | ✓ | — |
| 设置-评分表维护 | ✓ | ✓ | — |
| 设置-病案管理指标配置 | ✓ | ✓ | — |
| 设置-核心制度指标配置 | ✓ | ✓ | — |

---

## 30. EMR 医生工作台模式（增补 · 2026-05-18）

> 本章为 B 端临床信息系统（HIS / EMR / CIS / 病历质控）类工作台页面的统一规范。来自 EMR 医生工作台实际还原与对照过程。基础 token 已沿用 §1~§28，本章只规定与基础规范不同或新增的细则。

### 30.1 适用场景 [B 端]

适用于具备以下特征的页面：
- 单患者上下文驱动（顶部固定患者主信息条）
- 高频垂直导航 + 业务功能多 Tab（≥10 项）
- 左筛右表的两栏内容区（筛选条件常驻 + 数据表格）
- 单屏沉浸式（`overflow: hidden` + 全 viewport 高度）

典型应用：医生站、护士站、病历质控、病案管理、诊间工作台、医技工作台。

### 30.2 全局布局规范 [B 端]

工作台采用「侧边栏 + Header + 紧凑两栏内容区」的固定三段式：

```
┌──────────┬─────────────────────────────────────┐
│ 240px    │  Header  56px (患者主信息条)         │
│ Sidebar  ├─────────────────────────────────────┤
│ 中文名+  │  Content  padding:20 gap:10          │
│ 多级菜单 │  ┌──────────┬──────────────────────┐│
│ + 版本   │  │ 260px    │  flex:1              ││
│ 页脚     │  │ 查询卡片 │  数据表格卡片         ││
│          │  └──────────┴──────────────────────┘│
└──────────┴─────────────────────────────────────┘
```

**关键差异点（vs §3.3 基础 B 端布局）**：

| 维度 | 基础 B 端 (§3.3) | 工作台 (§30) |
|------|------------------|---------------|
| Header 高度 | 56px | 56px（保持） |
| 侧边栏宽度 | 240px | 240px（保持） |
| 主内容 padding | **20px** | 20px（一致） |
| 内卡片间距 | **10px** | 10px（一致） |
| Logo 区高度 | 56px | 56px（保持） |
| Logo 显示形式 | 大写英文缩写 | **中文全称（加粗）** |
| 整体滚动 | `min-height: calc(100vh - 56px)` | **`overflow: hidden` 单屏** |

> v2.6 · 2026-05-22：基础 B 端布局（§3.3）的 main-content padding 与卡片 gap 已与工作台规范统一，避免双标准混乱。差异点收敛为 Logo 形式 + 滚动行为两项。

**实现规范**：

```css
.emr-app { display: flex; height: 100vh; overflow: hidden; }
.main-area { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
.content {
  flex: 1; display: flex; overflow: hidden;
  padding: 20px;     /* ★ 与基础 B 端 §3.3 统一 */
  gap: 10px;         /* ★ 与基础 B 端 §3.3 统一 */
}
```

### 30.3 侧边栏中文 Logo 规范 [B 端]

当 Logo 名称为中文全称（如「EMR 电子病历系统」「住院监管」），不再使用 §14.5 的全大写 + 0.16em 字距，改用：

```css
.sidebar-brand-name {
  font-size: 14px;           /* ★ 比英文缩写大 1px */
  font-weight: 700;          /* ★ 加粗，体现中文比重 */
  letter-spacing: 0.02em;    /* ★ 细字距，非 0.16em */
  color: var(--ink-900);
  /* 不使用 text-transform: uppercase */
}
```

**何时用哪种**：
- 英文缩写 / 中英混排（≤4 字符）：13px / 600 / **0.16em** / uppercase（沿用 §14.5）
- 中文全称（≥4 字符）：14px / **700** / 0.02em / **不大写**（本节规范）

**禁用项**：
- ❌ 不要给中文 Logo 加 uppercase（中文无大写）
- ❌ 不要给中文 Logo 加 0.16em 字距（中文字距过大显得松散）
- ❌ 不要将多字中文压缩到 12px 以下

### 30.4 Header 患者主信息条 [B 端]

工作台 Header 左侧承载当前患者上下文，使用「姓名 + 模态徽章组 + 元信息分隔符」组合：

```html
<header class="header">
  <div class="header-left">
    <div class="header-patient">
      <span class="patient-name">郑宗范</span>
      <span class="patient-tag tag-bed">02003床</span>
      <span class="patient-tag tag-insurance">医保(先)</span>
      <span class="meta-sep">·</span>
      <span>男 · 79岁</span>
      <span class="meta-sep">·</span>
      <span>主管: 刘姗姗</span>
    </div>
  </div>
  <div class="header-right">
    <div class="header-meta">
      <span>住院号</span><span class="mono">1708569</span>
      <span class="meta-sep">·</span>
      <span>入院</span><span class="mono">2017-02-23</span>
    </div>
    <div class="header-avatar">...</div>
  </div>
</header>
```

```css
.header-patient {
  display: flex; align-items: center; gap: 12px;
  font-size: 13px; color: var(--ink-700);
}
.header-patient .patient-name {
  font-size: 15px; font-weight: 600; color: var(--ink-900);
}
.patient-tag {
  display: inline-flex; align-items: center;
  padding: 2px 8px; border-radius: 2px;
  font-size: 11px; font-weight: 500;
  font-family: var(--font-mono); letter-spacing: 0.04em;
}
.tag-bed { background: var(--cdx-50); color: var(--cdx-700); }
.tag-insurance { background: #FEF3C7; color: #92400E; }
.meta-sep { color: var(--ink-400); }
.header-meta { display: flex; align-items: center; gap: 6px;
  font-size: 12px; color: var(--ink-500); }
.header-meta .mono { font-family: var(--font-mono); font-size: 11px; }
.header-avatar {
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--cdx-50); border: 1px solid var(--cdx-200);
  display: grid; place-items: center; color: var(--cdx-700);
}
```

**铁律**：
- 患者姓名永远 15px / 600 / ink-900，是 Header 的视觉焦点
- 床号、医保性质用 `.patient-tag` 模态徽章呈现，不用纯文字
- 多组元信息用 `·` (ink-400) 分隔，不换行
- 数字（住院号 / 入院日期）一律 `font-mono`

### 30.5 查询条件卡片（QueryCard）[B 端]

左侧 260px 常驻筛选卡片，结构 = 头部 + Tab + 表单 + 底部统计：

```css
.query-card {
  width: 260px; flex-shrink: 0;
  background: #fff;
  border: 1px solid var(--ink-100);   /* 卡片外描边铁律 §11.0 */
  border-radius: 6px;
  display: flex; flex-direction: column; overflow: hidden;
}

/* 卡片标题 + 计数徽章 */
.query-card-header {
  padding: 14px 16px;
  border-bottom: 1px solid var(--ink-200);
  display: flex; align-items: center; justify-content: space-between;
}
.query-card-title {
  font-size: 13px; font-weight: 600; color: var(--ink-900);
  display: flex; align-items: center; gap: 8px;
}
.query-card-title::before {
  content: ''; display: inline-block;
  width: 3px; height: 14px;
  background: var(--cdx-700); border-radius: 2px;   /* §20.3 form-card 装饰条 */
}
.query-card-badge {
  font-size: 11px; font-family: var(--font-mono); font-weight: 600;
  padding: 2px 8px; border-radius: 2px;
  background: var(--cdx-50); color: var(--cdx-700);
}

/* 内嵌下划线 Tab */
.query-tabs {
  display: flex; border-bottom: 1px solid var(--ink-100);
  padding: 0 4px;
}
.query-tab {
  flex: 1; padding: 8px 4px;
  font-size: 12px; text-align: center;
  cursor: pointer; color: var(--ink-500);
  border-bottom: 2px solid transparent;
  transition: all 150ms var(--ease-expo);
}
.query-tab:hover { color: var(--ink-900); }
.query-tab.active {
  color: var(--cdx-700); font-weight: 600;
  border-bottom-color: var(--cdx-700);
}
```

**使用规则**：
- 卡片宽度固定 **260px**，不可随响应式收缩到 240 以下（避免标签换行）
- 标题左侧 3×14 cdx-700 装饰条与 §20.3 form-card 一致
- 计数徽章用 mono + cdx-50/cdx-700，与表格 `table-count` 区分（后者为 ink-400 灰）
- Tab 数量 ≤4 时强制 `flex:1` 等宽；>4 时改为水平滚动

### 30.6 状态点统计（StatRow）[B 端]

QueryCard 底部用于汇总在院危重情况，状态点 + 文字 + 数字三段式：

```css
.query-stats {
  padding: 12px 16px;
  border-top: 1px solid var(--ink-100);
  display: flex; gap: 16px;
  background: var(--ink-50);
}
.stat-item {
  display: flex; align-items: center; gap: 6px;
  font-size: 12px; color: var(--ink-600);
}
.stat-item strong {
  font-family: var(--font-mono); color: var(--ink-900);
}
.stat-dot { width: 8px; height: 8px; border-radius: 50%; }
.dot-danger  { background: var(--status-danger); }   /* #A8453B */
.dot-warning { background: var(--status-warning); }  /* #C28A2C */
.dot-normal  { background: var(--status-success); }  /* #3F8F5C */
```

**铁律**：
- 状态点严格用 §1.4 status 三色，禁止用原生 red/yellow/green
- 数字字段必须 `font-mono` + ink-900；标签部分用 ink-600
- 容器底色用 `ink-50`（与白色卡片体形成 1px 分隔）

### 30.7 紧凑表格卡片（TableCard）[B 端]

工作台右侧主区为带 toolbar / 分页的完整表格卡片：

```css
.table-card {
  flex: 1; background: #fff;
  border: 1px solid var(--ink-100); border-radius: 6px;
  display: flex; flex-direction: column;
  overflow: hidden; min-width: 0;     /* ★ flex 子项缩小关键 */
}

.table-card-header {
  padding: 14px 16px;
  border-bottom: 1px solid var(--ink-200);
  display: flex; align-items: center; justify-content: space-between;
}
.table-title-row { display: flex; align-items: baseline; gap: 10px; }
.table-title  { font-size: 14px; font-weight: 600; color: var(--ink-900); }
.table-count  { font-size: 12px; color: var(--ink-400); font-family: var(--font-mono); }

/* 工具栏内嵌搜索框 — 暖色背景 */
.search-input {
  display: flex; align-items: center; gap: 6px;
  padding: 5px 10px;
  border: 1px solid var(--ink-200); border-radius: 4px;
  background: var(--ink-50);   /* 搜索框浅灰底，与表格内容区视觉分层 */
  transition: all 200ms;
}
.search-input:focus-within {
  background: #fff; border-color: var(--cdx-700);
}
.search-input svg { color: var(--ink-400); flex-shrink: 0; }
.search-input input {
  border: none; outline: none; background: transparent;
  font-size: 12px; font-family: inherit;
  width: 120px; color: var(--ink-900);
}

/* 表格主体 — 沿用 §12.4 data-table，本节补充选中行样式 */
.data-table tbody tr.selected td {
  background: var(--cdx-50);
}
.data-table tbody tr.selected td:first-child {
  box-shadow: inset 3px 0 0 var(--cdx-700);   /* §5.4 inset-cdx-left */
}
```

**关键规则**：
- `.table-card` 必须设 `min-width: 0`，否则 flex 子项不会收缩，会撑破水平方向
- 搜索框背景用 `ink-50`（浅灰），与表格内容区视觉分层
- 选中行用 cdx-50 浅青背景 + 3px cdx-700 左侧 inset 条，**禁止用 ink-900 深色填充**

### 30.8 工作台分页器尺寸变体 [B 端]

工作台的分页器空间紧凑，使用 §12.7 标准分页器的精简版（无每页条数选择器）：

```html
<div class="table-footer">
  <span class="footer-info">显示 1-23 条</span>
  <div class="pagination">
    <button class="page-btn">‹</button>
    <button class="page-btn active">1</button>
    <button class="page-btn">2</button>
    <button class="page-btn">›</button>
  </div>
</div>
```

```css
.table-footer {
  padding: 12px 16px;
  border-top: 1px solid var(--ink-100);
  display: flex; align-items: center; justify-content: space-between;
}
.footer-info { font-size: 13px; color: var(--ink-500); }
```

`page-btn` 完全沿用 §12.7：`28×28 / mono / active 用 ink-900 深填充`，不可改为品牌色填充。

### 30.9 工作台检查清单

新增 §28 检查项的工作台子集：

- [ ] 全局 `<body>` 已设 `overflow: hidden`，单屏不滚动
- [ ] Sidebar 中文 Logo 用 14px / 700 / 0.02em，不大写
- [ ] Header 患者姓名 15px / 600，床号 + 医保用模态徽章
- [ ] 元信息一律 `·` ink-400 分隔，数字 mono
- [ ] Content 区 padding **20px** + gap **10px**
- [ ] QueryCard 标题左侧 3×14 cdx-700 装饰条
- [ ] 内嵌 Tab 用下划线样式（非 §11.x 卡片型）
- [ ] 底部状态点用 status 三色（不用原生色）
- [ ] TableCard 加 `min-width: 0`，flex 子项可收缩
- [ ] 选中行 cdx-50 + 3px cdx-700 inset，**禁深色填充**

### 30.10 反模式（增补 §27）

| 反模式 | 正确做法 |
|--------|---------|
| 中文 Logo 字距 0.16em | 中文用 0.02em，且不 uppercase |
| Sidebar 中文用 12px | 中文 Logo ≥14px，菜单 ≥13px |
| Header 用纯文字 "床号:02003" | 用模态徽章 `.patient-tag` |
| 工作台 padding ≥24px | 工作台一律 20px / gap 10px |
| QueryCard tab 用卡片型 Tab | 工作台内嵌 tab 用下划线型 |
| 选中行用 ink-900 深填充 | cdx-50 + 3px inset |
| 状态点用 `red/yellow/green` | 用 `status-danger/warning/success` |
| 紧凑场景用斑马纹 | 工作台严格无斑马纹（§27） |

---

## 31. AI 对话系统（增补 · 2026-05-22）

> 本章为 B 端 AI 对话场景（IM 式人机交互、多角色 AI 会诊、思维链展示）的统一组件规范。适用于临床 AI 助手、MDT 多学科会诊、智能问答等场景。参考豆包、元宝、DeepSeek、ChatGPT 等成熟产品交互模式，融合 RUNDA 设计语言。

### 31.1 ChatContainer 对话容器 [B端管理型]

整体布局采用「消息列表 + 固定底部输入区」的经典对话结构：

```
┌─────────────────────────────────────────┐
│  Chat Header（可选：患者上下文/会话标题）  │ 56px
├─────────────────────────────────────────┤
│                                         │
│  Message List（flex:1, overflow-y:auto） │
│  ┌─────────────────────────────────┐    │
│  │ AI Message                      │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │ User Message                    │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │ AI Message + Thinking           │    │
│  └─────────────────────────────────┘    │
│                                         │
├─────────────────────────────────────────┤
│  Chat Input（固定底部）                  │ auto
└─────────────────────────────────────────┘
```

```css
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--ink-50);
  overflow: hidden;
}
.chat-header {
  height: 56px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--ink-100);
  background: #fff;
  flex-shrink: 0;
}
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.chat-input-area {
  flex-shrink: 0;
  padding: 16px 20px;
  border-top: 1px solid var(--ink-100);
  background: #fff;
}
```

### 31.2 MessageBubble 消息气泡 [B端管理型]

所有消息统一左对齐，通过发送者标识区分角色。消息体为白色卡片。

**AI 消息**：

```css
.message {
  display: flex;
  gap: 12px;
  max-width: 100%;
}
.message__body {
  flex: 1;
  min-width: 0;
}
.message__content {
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  padding: 16px 20px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--ink-800);
  animation: chatMsgIn 200ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes chatMsgIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
```

**用户消息**：

```css
.message--user .message__content {
  background: var(--cdx-50);
  border-color: var(--cdx-200);
}
```

**系统消息**（时间分隔、状态提示）：

```css
.message--system {
  justify-content: center;
  padding: 8px 0;
}
.message--system .message__content {
  background: transparent;
  border: none;
  padding: 4px 12px;
  font-size: 12px;
  color: var(--ink-400);
  text-align: center;
}
```

### 31.3 SenderIdentity 发送者标识 [B端管理型]

```css
.message__sender {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.message__sender-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--cdx-700);
}
.message--user .message__sender-name {
  color: var(--ink-900);
}
.message__sender-tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 500;
  background: var(--cdx-100);
  color: var(--cdx-700);
  border-radius: 3px;
}
.message__timestamp {
  font-size: 12px;
  font-family: var(--font-mono);
  color: var(--ink-400);
  margin-left: auto;
}
```

**AI 头像**：使用 40px 圆形，cdx-50 背景 + cdx-700 图标（与 §10.10 Avatar 一致）

```css
.message__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.message__avatar--ai {
  background: var(--cdx-50);
  border: 1px solid var(--cdx-200);
  color: var(--cdx-700);
}
.message__avatar--user {
  background: var(--ink-100);
  border: 1px solid var(--ink-200);
  color: var(--ink-700);
}
```

### 31.4 ThinkingState 思考状态 [B端管理型]

#### 31.4.1 思考中动画

AI 正在生成回复时显示的加载状态：

```css
.thinking-indicator {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--cdx-50);
  border: 1px solid var(--cdx-100);
  border-radius: 6px;
  font-size: 13px;
  color: var(--ink-500);
}
.thinking-dots {
  display: inline-flex;
  gap: 4px;
}
.thinking-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--cdx-400);
  animation: thinkingPulse 1.4s ease-in-out infinite;
}
.thinking-dots span:nth-child(2) { animation-delay: 0.2s; }
.thinking-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes thinkingPulse {
  0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
  40% { opacity: 1; transform: scale(1); }
}
```

#### 31.4.2 思维链折叠面板

思维链（Chain-of-Thought）默认收起，显示摘要信息，点击展开查看完整推理过程：

```css
.thinking-chain {
  margin-bottom: 12px;
}
.thinking-chain__trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--ink-50);
  border: 1px solid var(--ink-100);
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  color: var(--ink-500);
  transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.thinking-chain__trigger:hover {
  background: var(--cdx-50);
  border-color: var(--cdx-200);
  color: var(--cdx-700);
}
.thinking-chain__trigger-icon {
  width: 14px;
  height: 14px;
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.thinking-chain--expanded .thinking-chain__trigger-icon {
  transform: rotate(180deg);
}
.thinking-chain__duration {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink-400);
  margin-left: auto;
}
.thinking-chain__body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
.thinking-chain--expanded .thinking-chain__body {
  max-height: 600px;
  overflow-y: auto;
}
.thinking-chain__content {
  padding: 12px 16px;
  margin-top: 8px;
  background: var(--ink-50);
  border: 1px solid var(--ink-100);
  border-radius: 4px;
  font-size: 13px;
  line-height: 1.7;
  color: var(--ink-600);
}
```

**状态文案**：
- 思考中：「正在思考...」+ 动画点
- 已完成：「已深度思考（用时 X 秒）」+ 展开箭头

### 31.5 StructuredOutput 结构化输出 [B端管理型]

#### 31.5.1 风险评估卡片

左侧色条标识风险等级，内含标题 + 正文 + 建议：

```css
.risk-card {
  position: relative;
  padding: 16px 20px;
  padding-left: 24px;
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  margin-bottom: 12px;
}
.risk-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 6px 0 0 6px;
}
.risk-card--high::before { background: #DC2626; }
.risk-card--medium::before { background: #C28A2C; }
.risk-card--low::before { background: #3F8F5C; }

.risk-card__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--ink-900);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.risk-card__body {
  font-size: 14px;
  line-height: 1.7;
  color: var(--ink-700);
  margin-bottom: 12px;
}
.risk-card__suggestion {
  padding: 10px 14px;
  background: var(--ink-50);
  border-radius: 4px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--ink-700);
}
.risk-card__suggestion-label {
  font-weight: 600;
  color: var(--ink-900);
  margin-right: 4px;
}
```

#### 31.5.2 诊断标签组

```css
.diagnosis-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
}
.diagnosis-tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 500;
  background: var(--ink-50);
  border: 1px solid var(--ink-200);
  border-radius: 4px;
  color: var(--ink-800);
}
.diagnosis-tag--primary {
  background: var(--cdx-50);
  border-color: var(--cdx-200);
  color: var(--cdx-700);
}
```

### 31.6 ChatInput 输入区 [B端管理型]

```css
.chat-input {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--ink-50);
  border: 1px solid var(--ink-200);
  border-radius: 10px;
  padding: 8px 12px;
  transition: border-color 200ms, box-shadow 200ms;
}
.chat-input:focus-within {
  border-color: var(--cdx-700);
  box-shadow: 0 0 0 3px rgba(24, 80, 88, 0.08);
}
.chat-input__textarea {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ink-900);
  resize: none;
  min-height: 20px;
  max-height: 120px;
  outline: none;
}
.chat-input__textarea::placeholder {
  color: var(--ink-400);
}
.chat-input__send {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--cdx-700);
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.chat-input__send:hover {
  background: var(--cdx-600);
  transform: scale(1.05);
}
.chat-input__send:disabled {
  background: var(--ink-200);
  cursor: not-allowed;
  transform: none;
}
```

**快捷指令提示**（输入 `/` 触发）：

```css
.chat-commands {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 4px;
  z-index: 50;
}
.chat-commands__item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 150ms;
}
.chat-commands__item:hover {
  background: var(--cdx-50);
}
.chat-commands__item-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-900);
}
.chat-commands__item-desc {
  font-size: 12px;
  color: var(--ink-500);
}
```

### 31.7 ConsensusCard 综合决策卡 [B端管理型]

用于 AI 多角色讨论后的最终综合报告，深色渐变头部 + 白色内容区：

```css
.consensus-card {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--cdx-200);
  animation: chatMsgIn 300ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
.consensus-card__header {
  background: linear-gradient(135deg, var(--cdx-700) 0%, var(--cdx-900) 100%);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.consensus-card__header-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.consensus-card__header-title {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}
.consensus-card__header-subtitle {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
}
.consensus-card__body {
  background: #fff;
  padding: 24px;
}
.consensus-card__section {
  margin-bottom: 20px;
}
.consensus-card__section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-900);
  margin-bottom: 8px;
}
```

### 31.8 ExpertPanel 专家面板 [B端管理型]

多角色 AI 专家在同一面板内分区讨论，支持折叠/展开：

```css
.expert-panel {
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  overflow: hidden;
}
.expert-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid var(--ink-100);
  cursor: pointer;
  transition: background 150ms;
}
.expert-panel__header:hover {
  background: var(--cdx-50);
}
.expert-panel__title {
  font-size: 15px;
  font-weight: 600;
  color: var(--ink-900);
  display: flex;
  align-items: center;
  gap: 10px;
}
.expert-panel__count {
  font-size: 13px;
  color: var(--ink-500);
}
.expert-panel__toggle {
  width: 20px;
  height: 20px;
  color: var(--ink-400);
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.expert-panel--expanded .expert-panel__toggle {
  transform: rotate(180deg);
}
.expert-panel__body {
  padding: 0 20px 20px;
}

/* 单个专家区块 */
.expert-section {
  padding: 16px 0;
  border-bottom: 1px solid var(--ink-100);
}
.expert-section:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.expert-section__header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.expert-section__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--cdx-50);
  border: 1px solid var(--cdx-200);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cdx-700);
}
.expert-section__name {
  font-size: 14px;
  font-weight: 600;
  color: var(--cdx-700);
}
.expert-section__tag {
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 500;
  background: var(--cdx-100);
  color: var(--cdx-700);
  border-radius: 3px;
}
.expert-section__content {
  padding-left: 40px;
}
```

### 31.9 ReferenceCard 引用卡片 [B端管理型]

文献/指南引用展示，带编号徽章和外链：

```css
.reference-card {
  padding: 14px 16px;
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  margin-bottom: 8px;
  transition: border-color 200ms;
}
.reference-card:hover {
  border-color: var(--cdx-200);
}
.reference-card__header {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 6px;
}
.reference-card__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 600;
  background: var(--cdx-700);
  color: #fff;
  border-radius: 3px;
  flex-shrink: 0;
}
.reference-card__title {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-900);
  line-height: 1.5;
}
.reference-card__excerpt {
  font-size: 13px;
  color: var(--ink-600);
  line-height: 1.5;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.reference-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: var(--ink-400);
}
.reference-card__link {
  font-size: 12px;
  font-weight: 500;
  color: var(--cdx-700);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.reference-card__link:hover {
  text-decoration: underline;
}
```

### 31.10 RiskBadge 风险等级徽章 [B端管理型]

```css
.risk-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 3px;
}
.risk-badge--high {
  background: #FEE2E2;
  color: #DC2626;
}
.risk-badge--medium {
  background: #FEF3C7;
  color: #C28A2C;
}
.risk-badge--low {
  background: #DCFCE7;
  color: #3F8F5C;
}
```

### 31.11 Markdown 渲染样式 [B端管理型]

AI 输出通常包含 Markdown 格式内容，需要在消息体内正确渲染：

```css
.message__content h1,
.message__content h2,
.message__content h3 {
  font-weight: 600;
  color: var(--ink-900);
  margin: 16px 0 8px;
}
.message__content h1 { font-size: 18px; }
.message__content h2 { font-size: 16px; }
.message__content h3 { font-size: 15px; }

.message__content p {
  margin: 8px 0;
}
.message__content ul,
.message__content ol {
  padding-left: 20px;
  margin: 8px 0;
}
.message__content li {
  margin: 4px 0;
}
.message__content code {
  font-family: var(--font-mono);
  font-size: 13px;
  background: var(--ink-50);
  padding: 2px 6px;
  border-radius: 3px;
  color: var(--cdx-700);
}
.message__content pre {
  background: var(--ink-900);
  color: #E4E4E7;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 12px 0;
}
.message__content pre code {
  background: transparent;
  padding: 0;
  color: inherit;
}
.message__content blockquote {
  border-left: 3px solid var(--cdx-200);
  padding-left: 14px;
  margin: 12px 0;
  color: var(--ink-600);
}
.message__content strong {
  font-weight: 600;
  color: var(--ink-900);
}
```

### 31.12 消息操作栏 [B端管理型]

消息 hover 时显示的操作按钮组：

```css
.message__actions {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  opacity: 0;
  transition: opacity 150ms;
}
.message:hover .message__actions {
  opacity: 1;
}
.message__action-btn {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: var(--ink-400);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 150ms;
}
.message__action-btn:hover {
  background: var(--ink-100);
  color: var(--ink-700);
}
```

**操作项**：复制、重新生成、点赞、点踩

### 31.13 键盘操作与无障碍

- `Enter`：发送消息（`Shift+Enter` 换行）
- `Escape`：关闭快捷指令面板
- `↑` / `↓`：在快捷指令列表中导航
- `Tab`：在消息操作按钮间移动焦点
- 思维链折叠面板：`Enter` / `Space` 展开/收起

**ARIA 标注**：
```html
<div class="chat-messages" role="log" aria-live="polite" aria-label="对话消息">
  <div class="message" role="article" aria-label="AI 主诊医生 10:33">
    ...
  </div>
</div>
<div class="thinking-chain" role="region" aria-label="AI 思考过程">
  <button class="thinking-chain__trigger" aria-expanded="false" aria-controls="thinking-content-1">
    已深度思考（用时 12 秒）
  </button>
  <div class="thinking-chain__body" id="thinking-content-1" role="region">...</div>
</div>
```

### 31.14 检查清单

- [ ] 消息全部左对齐，通过头像+角色名区分
- [ ] AI 头像使用 cdx-50 背景 + cdx-700 图标
- [ ] 用户消息使用 cdx-50 背景 + cdx-200 边框
- [ ] 思维链默认收起，显示耗时
- [ ] 风险卡片左侧 4px 色条（高红/中黄/低绿）
- [ ] 输入区 focus 时 cdx-700 边框 + ring shadow
- [ ] 消息入场动画 200ms expo-out
- [ ] 思考中动画 3 点脉冲 1.4s
- [ ] 综合决策卡头部使用 cdx 渐变
- [ ] 引用卡片带编号徽章 + 外链
- [ ] 消息操作栏 hover 时显示
- [ ] 对话区域 `role="log"` + `aria-live="polite"`

### 31.15 反模式

| 反模式 | 正确做法 |
|--------|---------|
| 用户消息右对齐 | 全部左对齐，通过头像区分 |
| 消息气泡用大圆角（>10px） | 统一 6px 圆角（输入区 10px 除外） |
| 思维链默认展开 | 默认收起，用户主动展开 |
| AI 头像用彩色渐变 | cdx-50 背景 + 线性图标 |
| 风险等级用纯文字 | 使用 RiskBadge 色块标签 |
| 输入框无 focus 反馈 | focus 时 cdx-700 边框 + ring |
| 消息无入场动画 | 200ms translateY + opacity |
| 引用卡片无来源标注 | 必须显示期刊名 + 日期 |
| 操作按钮常驻显示 | hover 时才显示操作栏 |

---

*RUNDA Design System v2.6 · Unified Specification (C + B + EMR Workstation + AI Chat)*  
*Last Updated: 2026-05-22*

**版本变更记录**：
- v2.6 · 2026-05-22 · P0/P1 核心组件补充 + §31 AI 对话系统规范（ChatContainer/MessageBubble/ThinkingState/StructuredOutput/ChatInput/ConsensusCard/ExpertPanel/ReferenceCard/RiskBadge/Markdown渲染/消息操作栏）；Avatar 头像组件（§10.10）；§3.3 基础 B 端布局 main-content padding 由 24px 调整为 **20px**、内卡片 gap 由 16-20px 调整为 **10px**，与 §30.2 工作台规范统一

**版本变更记录**：
- v2.5 · 2026-05-18 · 增补 §30：EMR 医生工作台模式（B 端临床信息系统统一规范） — 新增中文 Logo 规则（14px/700/0.02em）、紧凑布局规则（content padding 20px + gap 10px + overflow:hidden 单屏）、Header 患者主信息条、QueryCard 查询卡片、StatRow 状态点统计、TableCard 紧凑表格卡片、§30.10 反模式增补；配套 EMR 工作台示例 HTML 与 screenshots/pages/11-emr-workstation.png
- v2.4 · 2026-05-14 · Prototype 全面审查同步：更新 §3.3 B端布局（sidebar/header/main-content 实际 CSS）、§8.1/8.2/8.5 按钮 B端规范（padding/font-size/border-radius 实测值）、§9.11 Radio Button Group（padding 5px/激活态双变体）、§9.12 Select Dropdown（appearance:none + SVG data URI 箭头 + 分页小尺寸变体 + 禁止内联覆盖规则）、§10.4 Badge（border-radius 改为 2px + 5种语义变体统一）、§10.5 合并至 §10.4、§11.10 Stat Card + card-wrap 实测规范（圆角 6px / padding 16px 20px）、§12.4 Data Table（hover 改为 cdx-50 / col-name / col-action 工具类）、§12.7 Pagination（page-btn 实测 CSS + 分页 select 规则）、§20.1 Page Header（18px/margin-bottom 16px/双变体）、§20.2 Filter Bar（ink-100 边框 + 按钮组布局规则）、§20.3 Form Card 完整规范
- v2.3.1 · 2026-05-14 · 增补 §29.5：表格姓名列与操作栏不折行规范，新增 `.col-name` / `.col-action` 工具类
- v2.3 · 2026-05-13 · 增补 §29：B 端顶部双栏等高 / 下拉箭头统一右 12px / Header 标题与释义同行；配套覆盖文件 `07-business-inhospital.css` 三项 FIX
- v2.2 · 2026-05-13 · 补充住院监管业务映射（section-card / metric-card / quality-* / rectify-* / kv-*）
- v2.1 · 2026-05-13 · 存量项目皮肤覆盖工程化规范（7 节：工程结构 / 覆盖原则 / 类映射 / 反模式护栏 / 验收命令 / 回归清单 / 局限说明）
- v2.0 · 2026-05-12 · 完整版：含 B 端扩展 + 全量截图
- v1.0 · 2026-05-12 · 初版：B 端规范提取
