# RUNDA Design System 组件审计报告

> 对比主流 B 端设计系统（Ant Design 5.x、Element Plus 2.x、Material-UI 5.x）  
> 审计日期：2026-05-22  
> 审计范围：数据展示、布局结构、表单录入、交互反馈、业务特定组件

---

## 一、现有组件清单

### 1. 设计基础（7 章节）
- ✅ 色彩系统（11 个子系统）
- ✅ 字体与排版（3 套字号阶梯 + 10 个功能性 token）
- ✅ 间距与布局（容器宽度 + 2 套布局）
- ✅ 圆角系统（7 级）
- ✅ 阴影系统（5 类）
- ✅ 渐变与装饰（5 种）
- ✅ 图标规范

### 2. 通用组件（7 大类，共 80+ 组件）

#### 2.1 按钮（9 种）
- ✅ Primary CTA
- ✅ Secondary
- ✅ Danger
- ✅ Dashed Add
- ✅ Link Button
- ✅ Page Button
- ✅ Mini Button
- ✅ Button Group
- ✅ Drill-back Button

#### 2.2 表单控件（14 种）
- ✅ Main Input
- ✅ Compact Input
- ✅ Search Input
- ✅ Date Input
- ✅ Label
- ✅ Error Message
- ✅ Validation States
- ✅ Switch
- ✅ Checkbox
- ✅ Radio
- ✅ Radio Button Group
- ✅ Select Dropdown
- ✅ Multi-select
- ✅ Tag Input

#### 2.3 标签与徽章（9 种）
- ✅ Condition Tag
- ✅ Filter Chip
- ✅ Modality Chip
- ✅ Badge
- ✅ Badge Warn / OK
- ✅ Batch Tag
- ✅ Cond-pill
- ✅ Role Badge
- ✅ Accel Badge

#### 2.4 卡片（11 种）
- ✅ Metric Card
- ✅ Modality Card
- ✅ ROI Card
- ✅ Recon Card
- ✅ App Card
- ✅ Login Card
- ✅ Field Card
- ✅ Concept Card
- ✅ Feat-tag
- ✅ Stat Card
- ✅ Info Card

#### 2.5 表格（8 种）
- ✅ Main Table (ptbl)
- ✅ Compact Table (dt)
- ✅ Sync Table
- ✅ Data Table
- ✅ Table Toolbar
- ✅ Column Sorter
- ✅ Table Pagination
- ✅ Row Actions

#### 2.6 弹层与浮层（9 种）
- ✅ Tooltip
- ✅ Popover
- ✅ Modal
- ✅ Drawer
- ✅ Dropdown
- ✅ Context Menu
- ✅ Date Picker
- ✅ Toast
- ✅ Alert

#### 2.7 导航（9 种）
- ✅ Top Nav
- ✅ Bottom Bar
- ✅ Keyboard Shortcuts
- ✅ Sidebar
- ✅ Breadcrumb
- ✅ Tabs
- ✅ Steps
- ✅ Anchor Nav
- ✅ Menu

### 3. 数据展示组件（4 大类，共 17 种）
- ✅ KPI 与数字展示（5 种）
- ✅ 图表与可视化（4 种）
- ✅ 时间轴（3 种）
- ✅ 进度与状态（9 种）

### 4. 业务组件（2 大类，共 13 种）
- ✅ B 端展示型业务组件（7 种）
- ✅ B 端管理型业务组件（6 种）

---

## 二、缺失组件分析

### 【高优先级】必须补充的核心组件

#### A. 数据展示类（5 个）

##### A1. **Tabs 标签页** ⚠️ 高优
**缺失原因**：虽然有 Chart Tabs，但缺少通用的内容标签页组件  
**主流对比**：
- Ant Design: Tabs（4 种样式：line/card/editable-card/capsule）
- Element UI: Tabs（3 种类型：card/border-card/default）
- Material-UI: Tabs + Tab（支持滚动、图标、禁用）

**设计要求**：
- 基础样式：下划线型（line）、卡片型（card）
- 激活态：cdx-700 下划线 + cdx-50 背景
- 支持图标 + 文字组合
- 支持禁用状态
- 支持可关闭（editable）
- 响应式：超出宽度自动滚动

##### A2. **Collapse 折叠面板** ⚠️ 高优
**缺失原因**：管理端常用于表单分组、FAQ、详情页分段展示  
**主流对比**：
- Ant Design: Collapse + Panel（支持手风琴模式、自定义图标）
- Element UI: Collapse（支持手风琴、边框样式）
- Material-UI: Accordion（Material Design 规范）

**设计要求**：
- 默认样式：ink-100 边框 + 6px 圆角
- 展开图标：右侧 chevron-down，旋转 180° 动画
- 手风琴模式：同时只展开一个
- 支持嵌套
- 动画：300ms expo-out

##### A3. **Descriptions 描述列表** ⚠️ 高优
**缺失原因**：详情页核心组件，用于展示键值对信息  
**主流对比**：
- Ant Design: Descriptions（支持边框、列数、响应式）
- Element UI: Descriptions（支持边框、对齐方式）
- Material-UI: 无独立组件，用 Grid + Typography 实现

**设计要求**：
- 布局：2/3/4 列自适应
- 标签样式：13px / 600 / ink-500 / uppercase / 0.16em
- 内容样式：14px / 400 / ink-900
- 边框模式：ink-100 分隔线
- 响应式：移动端自动单列

##### A4. **Tree 树形控件** ⚠️ 中优
**缺失原因**：组织架构、文件目录、权限管理必备  
**主流对比**：
- Ant Design: Tree（支持复选、拖拽、虚拟滚动、搜索）
- Element UI: Tree（支持懒加载、自定义节点）
- Material-UI: TreeView（Material Design 规范）

**设计要求**：
- 缩进：24px/层
- 展开图标：chevron-right，展开时旋转 90°
- 复选框：支持半选状态
- 连接线：可选，ink-200 虚线
- 搜索高亮：hl 琥珀金背景

##### A5. **Transfer 穿梭框** ⚠️ 中优
**缺失原因**：权限分配、数据筛选场景常用  
**主流对比**：
- Ant Design: Transfer（支持搜索、分页、自定义渲染）
- Element UI: Transfer（支持搜索、自定义）
- Material-UI: 无独立组件，用 List + Checkbox 实现

**设计要求**：
- 双列布局：左右各 240px，中间操作按钮
- 搜索框：顶部 search input
- 列表项：checkbox + 文字，hover cdx-50
- 操作按钮：> / < 图标按钮
- 统计：已选 N / 共 M 项

#### B. 布局结构类（4 个）

##### B1. **Layout 布局容器** ⚠️ 高优
**缺失原因**：虽然有页面布局示例，但缺少可复用的布局组件  
**主流对比**：
- Ant Design: Layout（Header/Sider/Content/Footer）
- Element UI: Container（Header/Aside/Main/Footer）
- Material-UI: Box + Grid 组合

**设计要求**：
- Header：固定高度 56px，背景 #fff，底部 ink-100 边框
- Sider：宽度 240px（展开）/ 64px（收起），背景 #fff
- Content：flex-1，背景 #FAFAFA，padding 20px
- Footer：固定高度 48px，背景 #fff，顶部 ink-100 边框
- 响应式：移动端 Sider 自动收起

##### B2. **Grid 栅格系统** ⚠️ 高优
**缺失原因**：缺少标准 24 栅格系统  
**主流对比**：
- Ant Design: Row + Col（24 栅格，支持响应式）
- Element UI: Row + Col（24 栅格，支持 gutter）
- Material-UI: Grid（12 栅格，Material Design）

**设计要求**：
- 24 栅格系统
- Gutter：8/12/16/20/24px
- 响应式断点：xs/sm/md/lg/xl/xxl
- Offset / Push / Pull 支持

##### B3. **Space 间距组件** ⚠️ 中优
**缺失原因**：快速设置子元素间距  
**主流对比**：
- Ant Design: Space（支持水平/垂直、尺寸、对齐）
- Element UI: Space（支持方向、尺寸）
- Material-UI: Stack（Material Design 规范）

**设计要求**：
- 方向：horizontal / vertical
- 尺寸：small(8px) / medium(12px) / large(16px)
- 对齐：start / center / end / baseline
- 自动换行：wrap 模式

##### B4. **Divider 分割线** ⚠️ 低优
**缺失原因**：虽然有分隔线样式，但缺少独立组件  
**主流对比**：
- Ant Design: Divider（支持文字、虚线、垂直）
- Element UI: Divider（支持文字、方向）
- Material-UI: Divider（Material Design 规范）

**设计要求**：
- 水平：1px solid ink-100，margin 16px 0
- 垂直：1px solid ink-100，height 100%
- 带文字：居中/左对齐/右对齐
- 虚线：dashed 样式

#### C. 表单与数据录入类（6 个）

##### C1. **Form 表单容器** ⚠️ 高优
**缺失原因**：虽然有 Form Card，但缺少标准表单布局组件  
**主流对比**：
- Ant Design: Form + Form.Item（支持校验、布局、响应式）
- Element UI: Form + Form-Item（支持校验、标签位置）
- Material-UI: FormControl + FormLabel（Material Design）

**设计要求**：
- 布局：horizontal / vertical / inline
- 标签宽度：80/100/120px
- 标签对齐：left / right
- 必填标记：红色 * 号
- 校验提示：error message 红色，12px
- 响应式：移动端自动 vertical

##### C2. **DatePicker 日期选择器** ⚠️ 高优
**缺失原因**：虽然有 Date Input 和 Date Dropdown，但缺少完整日期选择器  
**主流对比**：
- Ant Design: DatePicker（支持范围、时间、禁用日期）
- Element UI: DatePicker（支持多种类型、快捷选项）
- Material-UI: DatePicker（Material Design 规范）

**设计要求**：
- 单日期选择
- 日期范围选择
- 月份选择器
- 年份选择器
- 快捷选项：今天/本周/本月/最近 7 天
- 禁用日期：支持函数判断
- 时间选择：可选附加时间

##### C3. **TimePicker 时间选择器** ⚠️ 中优
**缺失原因**：时间录入场景必备  
**主流对比**：
- Ant Design: TimePicker（支持范围、格式、步长）
- Element UI: TimePicker（支持范围、固定时间点）
- Material-UI: TimePicker（Material Design 规范）

**设计要求**：
- 时分秒选择
- 12/24 小时制
- 时间范围选择
- 步长：1/5/10/15 分钟
- 禁用时间：支持函数判断

##### C4. **Upload 上传** ⚠️ 高优
**缺失原因**：文件上传核心组件  
**主流对比**：
- Ant Design: Upload（支持拖拽、列表、图片墙、裁剪）
- Element UI: Upload（支持拖拽、多种列表类型）
- Material-UI: 无独立组件，用 Button + input[type=file]

**设计要求**：
- 按钮上传：dashed add 按钮
- 拖拽上传：虚线边框区域，hover cdx-50
- 文件列表：文件名 + 大小 + 进度条 + 删除按钮
- 图片墙：缩略图 + 预览 + 删除
- 限制：文件类型、大小、数量
- 状态：uploading / done / error

##### C5. **Cascader 级联选择器** ⚠️ 中优
**缺失原因**：地区选择、分类选择场景常用  
**主流对比**：
- Ant Design: Cascader（支持搜索、动态加载、多选）
- Element UI: Cascader（支持搜索、懒加载）
- Material-UI: 无独立组件

**设计要求**：
- 多级下拉面板
- 面板宽度：180px/级
- 激活项：cdx-50 背景
- 搜索：支持关键词高亮
- 动态加载：懒加载子节点

##### C6. **Rate 评分** ⚠️ 低优
**缺失原因**：评价场景使用  
**主流对比**：
- Ant Design: Rate（支持半星、自定义图标、只读）
- Element UI: Rate（支持半星、颜色、文字）
- Material-UI: Rating（Material Design 规范）

**设计要求**：
- 星形图标：24px，ink-200 未选中，#F59E0B 选中
- 半星：支持 0.5 步长
- 只读模式
- 自定义图标：支持替换星形

#### D. 交互反馈类（3 个）

##### D1. **Message 全局提示** ⚠️ 高优
**缺失原因**：虽然有 Toast，但缺少顶部全局提示  
**主流对比**：
- Ant Design: Message（顶部居中，3 秒自动关闭）
- Element UI: Message（顶部居中，支持偏移）
- Material-UI: Snackbar（底部提示）

**设计要求**：
- 位置：顶部居中，距顶 24px
- 样式：白色背景 + 阴影 + 图标 + 文字
- 类型：success / warning / error / info
- 自动关闭：3 秒（可配置）
- 动画：slideDown 200ms

##### D2. **Notification 通知提醒框** ⚠️ 中优
**缺失原因**：系统通知场景使用  
**主流对比**：
- Ant Design: Notification（右上角，支持图标、操作按钮）
- Element UI: Notification（四角可选，支持 HTML）
- Material-UI: 无独立组件，用 Snackbar

**设计要求**：
- 位置：右上角，距顶/右 24px
- 尺寸：宽度 384px
- 样式：白色背景 + 阴影 + 图标 + 标题 + 内容 + 关闭按钮
- 类型：success / warning / error / info
- 自动关闭：4.5 秒（可配置）
- 堆叠：多个通知垂直堆叠

##### D3. **Progress 进度条** ⚠️ 中优（已有 Progress Bar，需增强）
**缺失原因**：虽然有 Progress Bar，但缺少环形进度、仪表盘进度  
**主流对比**：
- Ant Design: Progress（line/circle/dashboard，支持步骤、渐变）
- Element UI: Progress（line/circle/dashboard，支持颜色）
- Material-UI: LinearProgress + CircularProgress

**设计要求**：
- 线形进度：已有，需补充百分比文字
- 环形进度：已有 Ring Progress，需补充百分比居中
- 仪表盘进度：半圆环形，用于评分展示
- 步骤进度：分段显示，每段不同颜色

#### E. 业务特定组件（4 个）

##### E1. **Table 高级功能** ⚠️ 高优
**缺失功能**：
- 树形表格：展开/收起子行
- 可编辑表格：单元格内联编辑
- 固定列：左右固定列
- 虚拟滚动：大数据量性能优化

**主流对比**：
- Ant Design: Table（全功能，支持树形、编辑、固定、虚拟滚动）
- Element UI: Table（支持树形、固定、展开行）
- Material-UI: DataGrid（付费版支持全功能）

**设计要求**：
- 树形表格：缩进 24px，展开图标 chevron-right
- 可编辑：双击单元格进入编辑，Enter 保存，Esc 取消
- 固定列：左右固定，滚动时保持可见
- 虚拟滚动：仅渲染可见行，支持 10000+ 行

##### E2. **Calendar 日历** ⚠️ 低优
**缺失原因**：排班、日程管理场景使用  
**主流对比**：
- Ant Design: Calendar（月视图、年视图、自定义单元格）
- Element UI: Calendar（月视图、自定义内容）
- Material-UI: 无独立组件

**设计要求**：
- 月视图：7×6 网格
- 年视图：12 个月缩略
- 单元格：支持自定义内容（事件、徽章）
- 导航：上月/下月/今天按钮
- 选中态：cdx-50 背景

##### E3. **Statistic 统计数值** ⚠️ 中优（已有 KPI，需标准化）
**缺失原因**：虽然有 Hero Number、KPI，但缺少标准统计数值组件  
**主流对比**：
- Ant Design: Statistic（支持前缀、后缀、精度、倒计时）
- Element UI: Statistic（支持前缀、后缀、精度）
- Material-UI: 无独立组件

**设计要求**：
- 数值：JetBrains Mono，tabular-nums
- 标题：13px / 600 / uppercase / 0.16em / ink-500
- 前缀/后缀：图标或文字
- 趋势：上升/下降箭头 + 百分比
- 倒计时：支持时分秒格式

##### E4. **Result 结果页** ⚠️ 低优
**缺失原因**：成功/失败/403/404/500 页面  
**主流对比**：
- Ant Design: Result（5 种状态，支持自定义图标、操作按钮）
- Element UI: Result（4 种状态）
- Material-UI: 无独立组件

**设计要求**：
- 图标：64px，对应状态色
- 标题：20px / 600 / ink-900
- 描述：14px / 400 / ink-600
- 操作按钮：primary + secondary 组合
- 状态：success / warning / error / info / 404

---

## 三、优先级排序

### P0（必须立即补充，阻塞业务）
1. **Tabs 标签页** - 内容分组核心组件
2. **Collapse 折叠面板** - 表单分组、详情页必备
3. **Descriptions 描述列表** - 详情页核心组件
4. **Layout 布局容器** - 页面结构标准化
5. **Grid 栅格系统** - 响应式布局基础
6. **Form 表单容器** - 表单布局标准化
7. **DatePicker 日期选择器** - 日期录入核心组件
8. **Upload 上传** - 文件上传核心功能
9. **Message 全局提示** - 操作反馈必备
10. **Table 高级功能** - 树形表格、可编辑表格

### P1（重要，影响体验）
1. **Tree 树形控件** - 组织架构、权限管理
2. **Transfer 穿梭框** - 权限分配场景
3. **Space 间距组件** - 快速布局
4. **TimePicker 时间选择器** - 时间录入
5. **Cascader 级联选择器** - 地区、分类选择
6. **Notification 通知提醒框** - 系统通知
7. **Progress 进度条增强** - 环形、仪表盘进度
8. **Statistic 统计数值** - 标准化数值展示

### P2（可选，锦上添花）
1. **Divider 分割线** - 内容分隔
2. **Rate 评分** - 评价场景
3. **Calendar 日历** - 排班、日程
4. **Result 结果页** - 状态页面

---

## 四、实施计划

### 第一阶段（Week 1-2）：P0 核心组件
- Day 1-2: Tabs + Collapse
- Day 3-4: Descriptions + Layout + Grid
- Day 5-6: Form + DatePicker
- Day 7-8: Upload + Message
- Day 9-10: Table 高级功能

### 第二阶段（Week 3-4）：P1 重要组件
- Day 1-2: Tree + Transfer
- Day 3-4: Space + TimePicker + Cascader
- Day 5-6: Notification + Progress 增强
- Day 7-8: Statistic 标准化

### 第三阶段（Week 5）：P2 可选组件
- Day 1-2: Divider + Rate
- Day 3-4: Calendar + Result
- Day 5: 文档整理 + 预览页更新

---

## 五、设计原则（新组件必须遵循）

### 5.1 视觉风格
- 圆角：默认 6px，pill 999px
- 边框：ink-100（卡片外描边）/ ink-200（输入框、强分隔）
- 阴影：静态无阴影，hover 才出现
- 字体：PingFang SC + Inter，数字用 JetBrains Mono
- 颜色：90% ink 灰阶，cdx-700 点缀关键元素

### 5.2 交互动效
- 缓动：cubic-bezier(0.16, 1, 0.3, 1)
- 时长：微交互 150ms，状态切换 200-250ms，面板展开 300ms
- 入场：translateY(12px) → 0，逐序延迟 90ms

### 5.3 响应式
- 断点：xs(0) / sm(640px) / md(768px) / lg(1024px) / xl(1280px) / xxl(1536px)
- 移动端：表单自动 vertical，表格横向滚动，侧边栏自动收起

### 5.4 无障碍
- 键盘导航：Tab / Enter / Esc / 方向键
- ARIA 标签：role / aria-label / aria-describedby
- 焦点管理：focus ring 使用 cdx-700 + 3px 阴影
- 颜色对比度：WCAG AA 级别（4.5:1）

---

## 六、后续维护

### 6.1 组件文档结构
每个新组件需包含：
1. 组件说明（用途、适用场景）
2. 设计规范（尺寸、颜色、间距、状态）
3. 代码示例（HTML + CSS）
4. API 参数（Props / Events / Slots）
5. 无障碍说明（键盘操作、ARIA）
6. 反模式（禁止做法）

### 6.2 预览页更新
- 每个新组件需在 `preview/docs/components/` 下新增详情页（或在现有详情页中补充实例），并在首页卡片网格中登记
- 按章节组织，保持与 DESIGN.md 一致
- 提供多种状态展示（默认/hover/active/disabled）

### 6.3 Token 更新
- 新增颜色、字号、间距需同步更新 design-tokens.json
- 新增动画需同步更新 tailwind.config.js

---

---

## 七、交互状态覆盖（2026-11 补全）

> 目标：预览页中每个可交互组件都能真实响应 hover / active / focus / disabled / 选中态，而不是静态贴图。
> 实现：`preview/assets/design-system.css` 的状态层 + `preview/assets/coss.js` 的事件委托。

### 7.1 按功能分类

| 功能分类 | 组件 | 已覆盖状态 | 交互方式 |
| --- | --- | --- | --- |
| 操作触发 | 按钮（主/次/危险/虚线/链接/分页/迷你） | hover、active、focus-visible、disabled | 自动按底色识别并补 hover；按下位移 1px |
| 选择录入 | Input、Select、Tag Input、Switch、Checkbox、Radio、Radio Button Group | focus 光环、错误态、禁用态、展开/收起、选中、回车新增标签、删除标签 | 点击 / 键盘 |
| 标签选择 | Condition Tag、Filter Chip、Badge | hover、active、多选切换、组内单选 | 点击 |
| 数据表格 | Data Table、分页、排序表头 | 行 hover、行选中、全选/反选、选中计数、升/降序、当前页 | 点击 |
| 导航 | 侧边栏、面包屑、步骤条、Tabs、折叠面板 | hover、当前项高亮、步骤点击回退/前进、Tab 切换与关闭、手风琴展开 | 点击 |
| 日期 | 日期选择器 | 日 hover、选中、非本月、快捷选项、上/下月切换并重算日历 | 点击 |
| 上传 | 拖拽上传区、文件列表 | dropzone hover / dragover、删除文件 | 点击 / 拖拽 |
| 反馈 | Toast、Alert、Modal | 点击关闭并自动恢复、弹窗打开/关闭、按钮 hover | 点击 |
| AI 对话 | 思维链、引用卡片、发送按钮 | 折叠/展开、卡片 hover、发送按钮 hover / active | 点击 |
| 数据展示 | 卡片、KPI、流水线、时间轴、头像、色板 | 卡片抬升、节点放大、流水线 hover、色板 hover + 点击复制反馈 | hover / 点击 |
| 页面示例 | 页面结构、EMR 工作台 | 侧边栏 hover / 激活、列表行 hover、checkbox 选中 | hover / 点击 |

### 7.2 统一规则

- hover：浅色底（`#F4F4F5` / cdx-50）+ 文字转 `cdx-700`，过渡 150–200ms
- active：位移 1px 或缩放 0.94–0.98，仅用于可点击元素
- focus-visible：`outline: 2px solid #185058` + 2px offset，键盘可见、鼠标不显示
- disabled：`opacity: .45` + `cursor: not-allowed`，不响应 hover
- 选中：`is-active` / `is-selected` / `is-current` 三种状态类，颜色和边框只引用 token

---

## 八、概述文档与导航（2026-11 新增）

> 目的：组件详情页在此之前只有组件本身，没有“为什么用这套系统”和“医疗项目必须遵守什么”的入口。
> 现在左侧导航最顶部新增「概述」模块，与组件章节并列。

### 8.1 页面清单

| 页面 | 路径 | 内容 | 交互 |
| --- | --- | --- | --- |
| 介绍 | `preview/docs/components/introduction.html` | 医疗软件定位、系统构成、适用范围、6 条设计原则、如何开始、版本与维护 | 纯文档，无 Preview / Code Tab |
| 使用说明 | `preview/docs/components/usage.html` | CLI 初始化（bun / npm / pnpm / yarn 命令切换）、三种接入方式（复制 HTML / Tailwind 工程 / JSON Token）、可运行的最小页面、组件复制示例、交互组件分类、文件说明、FAQ | 纯文档，命令与代码可复制 |
| 设计规范 | `preview/docs/components/guidelines.html` | 规范级别、色彩 / 排版 / 间距 / 组件规则、医疗业务规则、交互状态、可访问性、反模式、验收清单 | 纯文档，右侧 TOC 锚点跳转 |
| 更新日志 | `preview/changelog.html` | 按版本倒序记录新增 / 修复 / 重构 / 规范调整，含版本号、日期、类型标签与条目 | 与首页同壳，支持主题切换与搜索 |

### 8.2 导航规则

- 侧边栏分组顺序：概述 → 设计基础 → 通用组件 → 数据展示 → 业务场景。
- 「概述」内部顺序：介绍 → 使用说明 → 设计规范。
- 「概述」条目同样进入 ⌘K 搜索结果，路径由 `docHref()` 统一生成。
- 首页「开始使用」→ 首个组件详情页（`colors.html`）；「设计规范」→ `guidelines.html`。
- 顶部「组件」导航与 Logo 行为保持不变：组件 → `colors.html`，Logo → 首页。
- 顶部「更新日志」→ `preview/changelog.html`（首页用 `changelog.html`，详情页用 `../../changelog.html`）。

### 8.3 维护约定

- 修改 `preview/assets/coss.js` 中的 `ITEMS` / `GROUPS` 时，必须同步更新本表与 README 的目录说明。
- 新增医疗业务规则时，同时更新 `guidelines.html`、`DESIGN.md §0.5 / §28.8` 与 README 版本记录。
- 新增或重命名组件详情页时，同时检查 `bin/rundad.js` 的 `add` 能否提取 `<div class="preview-box">` 内的 `<section>`。

### 8.4 CLI（v2.7.4）

| 文件 | 说明 |
| --- | --- |
| `package.json` | 包名 `runda-design-system`，`bin.rundad → bin/rundad.js`，无第三方依赖 |
| `bin/rundad.js` | `init [目录]` / `add <组件...> [--dir 目录]` / `list`；组件清单从 `preview/assets/coss.js` 读取 |
| `preview/docs/components/usage.html` | 命令区块：bun / npm / pnpm / yarn 标签、复制按钮、新项目 / 已有项目两段命令、本地运行说明 |

- `init` 生成 `design-system/{assets,tokens,components}` 与 `example.html` / `README.md`，已存在文件默认保留，`--force` 覆盖。
- `add` 为每个组件生成 `<slug>.html`（片段）与 `<slug>.preview.html`（独立预览页），并刷新 `components/README.md`。
- 预览站命令通过 GitHub 仓库执行（`npx github:yinghao1/design-system-preview ...`），需要仓库已推送；仓库内可直接运行 `node bin/rundad.js`。
- 命令区块的标签切换与复制由 `preview/assets/coss.js` 的 `initCommandTabs()` 处理，样式在 `preview/assets/coss.css` 的 `.cmd-*`。

---

*审计完成 · 2026-05-22 · 交互状态补充 2026-11 · 概述文档补充 2026-11 · 使用说明与更新日志补充 2026-11 · CLI 补充 2026-11*
