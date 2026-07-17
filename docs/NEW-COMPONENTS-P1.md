# P1 重要组件补充规范

> 本文档包含 P1 优先级组件的完整设计规范  
> 创建日期：2026-05-22  
> 状态：待集成到 DESIGN.md

---

## 目录

1. [Tree 树形控件](#1-tree-树形控件)
2. [Transfer 穿梭框](#2-transfer-穿梭框)
3. [Space 间距组件](#3-space-间距组件)
4. [TimePicker 时间选择器](#4-timepicker-时间选择器)
5. [Cascader 级联选择器](#5-cascader-级联选择器)
6. [Notification 通知提醒框](#6-notification-通知提醒框)
7. [Progress 进度条增强](#7-progress-进度条增强)
8. [Statistic 统计数值](#8-statistic-统计数值)

---

## 1. Tree 树形控件

### 1.1 用途

组织架构展示、文件目录浏览、权限管理、分类选择

### 1.2 基础结构

```css
.tree {
  font-size: 14px;
  color: var(--ink-900);
}
.tree-node {
  display: flex;
  align-items: center;
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 150ms;
}
.tree-node:hover {
  background: var(--cdx-50);
}
.tree-node--active {
  background: var(--cdx-50);
  color: var(--cdx-700);
}
```

### 1.3 缩进与连接线

```css
.tree-node__indent {
  display: inline-flex;
  width: 24px;
  flex-shrink: 0;
}
.tree--show-line .tree-node__indent::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 0;
  bottom: 0;
  width: 1px;
  border-left: 1px dashed var(--ink-200);
}
```

### 1.4 展开图标

```css
.tree-node__expand {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
  color: var(--ink-500);
}
.tree-node--expanded .tree-node__expand {
  transform: rotate(90deg);
}
```

### 1.5 复选框（可选）

```css
.tree-node__checkbox {
  width: 16px;
  height: 16px;
  border: 1px solid var(--ink-300);
  border-radius: 3px;
  margin-right: 8px;
  transition: all 200ms;
}
.tree-node__checkbox--checked {
  background: var(--cdx-700);
  border-color: var(--cdx-700);
}
.tree-node__checkbox--indeterminate {
  background: var(--cdx-700);
  border-color: var(--cdx-700);
}
```

### 1.6 搜索高亮

- 匹配文字使用 `hl` 琥珀金背景（`#FEF3C7` + `#C28A2C`）
- 搜索时自动展开匹配节点的父级

### 1.7 键盘操作

- 方向键上/下：在节点间移动焦点
- 方向键左：收起当前节点 / 移动到父节点
- 方向键右：展开当前节点 / 移动到第一个子节点
- Enter：选中当前节点
- Space：切换复选框状态

---

## 2. Transfer 穿梭框

### 2.1 用途

权限分配、数据筛选、列表项目在两个集合间移动

### 2.2 整体布局

```css
.transfer {
  display: flex;
  align-items: stretch;
  gap: 16px;
}
.transfer__panel {
  width: 240px;
  border: 1px solid var(--ink-200);
  border-radius: 6px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.transfer__header {
  padding: 12px 16px;
  border-bottom: 1px solid var(--ink-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-900);
}
.transfer__count {
  font-size: 12px;
  color: var(--ink-500);
  font-family: var(--font-mono);
}
```

### 2.3 搜索框

```css
.transfer__search {
  padding: 8px 12px;
  border-bottom: 1px solid var(--ink-100);
}
.transfer__search-input {
  width: 100%;
  padding: 6px 10px;
  border: 1px solid var(--ink-200);
  border-radius: 4px;
  font-size: 13px;
}
```

### 2.4 列表项

```css
.transfer__item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 13px;
  color: var(--ink-900);
  cursor: pointer;
  transition: background 150ms;
}
.transfer__item:hover {
  background: var(--cdx-50);
}
.transfer__item--checked {
  color: var(--cdx-700);
}
```

### 2.5 操作按钮

```css
.transfer__actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}
.transfer__btn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--ink-200);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 200ms;
  background: #fff;
}
.transfer__btn:hover {
  border-color: var(--cdx-700);
  color: var(--cdx-700);
}
.transfer__btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
```

---

## 3. Space 间距组件

### 3.1 用途

快速设置子元素间距，替代手动 margin/gap

### 3.2 基础样式

```css
.space {
  display: inline-flex;
  align-items: center;
}
.space--vertical {
  flex-direction: column;
  align-items: flex-start;
}
.space--wrap {
  flex-wrap: wrap;
}
```

### 3.3 尺寸

| 尺寸 | 间距值 | 使用场景 |
|------|--------|----------|
| small | 8px | 紧凑排列（标签、徽章） |
| medium | 12px | 默认间距（按钮组、表单项） |
| large | 16px | 宽松排列（卡片间、段落间） |

### 3.4 对齐方式

```css
.space--start { align-items: flex-start; }
.space--center { align-items: center; }
.space--end { align-items: flex-end; }
.space--baseline { align-items: baseline; }
```

---

## 4. TimePicker 时间选择器

### 4.1 用途

时间录入、时间范围选择

### 4.2 输入框

```css
.timepicker__input {
  padding: 8px 32px 8px 12px;
  border: 1px solid var(--ink-200);
  border-radius: 6px;
  font-size: 14px;
  font-family: var(--font-mono);
  letter-spacing: 0.02em;
  width: 120px;
}
.timepicker__input:focus {
  border-color: var(--cdx-700);
  box-shadow: 0 0 0 3px rgba(24, 80, 88, 0.08);
}
```

### 4.3 时间面板

```css
.timepicker__panel {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1000;
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 8px;
  display: flex;
  gap: 4px;
}
.timepicker__column {
  width: 56px;
  max-height: 224px;
  overflow-y: auto;
}
.timepicker__cell {
  padding: 6px 0;
  text-align: center;
  font-size: 13px;
  font-family: var(--font-mono);
  border-radius: 4px;
  cursor: pointer;
  transition: all 150ms;
}
.timepicker__cell:hover {
  background: var(--cdx-50);
}
.timepicker__cell--selected {
  background: var(--cdx-700);
  color: #fff;
}
.timepicker__cell--disabled {
  color: var(--ink-300);
  cursor: not-allowed;
}
```

### 4.4 配置

- 12/24 小时制：默认 24 小时制
- 步长：1 / 5 / 10 / 15 / 30 分钟
- 禁用时间：支持函数判断

---

## 5. Cascader 级联选择器

### 5.1 用途

地区选择、分类选择、组织架构选择

### 5.2 触发器

```css
.cascader__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border: 1px solid var(--ink-200);
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  min-width: 200px;
  background: #fff;
  transition: border-color 200ms;
}
.cascader__trigger:hover {
  border-color: var(--cdx-700);
}
.cascader__trigger--active {
  border-color: var(--cdx-700);
  box-shadow: 0 0 0 3px rgba(24, 80, 88, 0.08);
}
```

### 5.3 下拉面板

```css
.cascader__panel {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1000;
  display: flex;
  background: #fff;
  border: 1px solid var(--ink-100);
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.cascader__column {
  width: 180px;
  max-height: 280px;
  overflow-y: auto;
  border-right: 1px solid var(--ink-100);
}
.cascader__column:last-child {
  border-right: none;
}
```

### 5.4 选项

```css
.cascader__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  font-size: 13px;
  color: var(--ink-900);
  cursor: pointer;
  transition: background 150ms;
}
.cascader__option:hover {
  background: var(--cdx-50);
}
.cascader__option--active {
  background: var(--cdx-50);
  color: var(--cdx-700);
  font-weight: 500;
}
```

---

## 6. Notification 通知提醒框

### 6.1 用途

系统通知、操作结果反馈（比 Message 更重要的信息）

### 6.2 容器

```css
.notification-container {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;
}
```

### 6.3 通知项

```css
.notification {
  width: 384px;
  padding: 16px 20px;
  background: #fff;
  border-radius: 6px;
  border: 1px solid var(--ink-100);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  pointer-events: auto;
  animation: notificationSlideIn 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes notificationSlideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### 6.4 内部结构

```css
.notification__header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.notification__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}
.notification__title {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-900);
  margin-bottom: 4px;
}
.notification__content {
  font-size: 13px;
  color: var(--ink-600);
  line-height: 1.6;
}
.notification__close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-400);
  cursor: pointer;
  border-radius: 4px;
  transition: all 150ms;
}
.notification__close:hover {
  background: var(--ink-100);
  color: var(--ink-700);
}
```

### 6.5 状态色

| 状态 | 图标色 | 左边框色 |
|------|--------|----------|
| success | #3F8F5C | #3F8F5C |
| warning | #C28A2C | #C28A2C |
| error | #DC2626 | #DC2626 |
| info | #185058 | #185058 |

### 6.6 行为规范

- 自动关闭：默认 4.5 秒（可配置）
- 位置：右上角（可配置四角）
- 多个通知：垂直堆叠，间距 12px
- 关闭按钮：始终显示

---

## 7. Progress 进度条增强

### 7.1 环形进度

```css
.progress-circle {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.progress-circle__svg {
  transform: rotate(-90deg);
}
.progress-circle__track {
  fill: none;
  stroke: var(--ink-100);
  stroke-width: 6;
}
.progress-circle__bar {
  fill: none;
  stroke: var(--cdx-700);
  stroke-width: 6;
  stroke-linecap: round;
  transition: stroke-dashoffset 500ms cubic-bezier(0.16, 1, 0.3, 1);
}
.progress-circle__text {
  position: absolute;
  font-size: 16px;
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--ink-900);
}
```

### 7.2 仪表盘进度

```css
.progress-dashboard {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.progress-dashboard__svg {
  transform: rotate(135deg);
}
.progress-dashboard__track {
  fill: none;
  stroke: var(--ink-100);
  stroke-width: 8;
  stroke-linecap: round;
}
.progress-dashboard__bar {
  fill: none;
  stroke: var(--cdx-700);
  stroke-width: 8;
  stroke-linecap: round;
  transition: stroke-dashoffset 500ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

### 7.3 步骤进度

```css
.progress-steps {
  display: flex;
  height: 8px;
  gap: 4px;
  border-radius: 999px;
  overflow: hidden;
}
.progress-steps__segment {
  flex: 1;
  background: var(--ink-100);
  border-radius: 999px;
  transition: background 300ms;
}
.progress-steps__segment--active {
  background: var(--cdx-700);
}
.progress-steps__segment--done {
  background: #3F8F5C;
}
```

### 7.4 尺寸

| 尺寸 | 线形高度 | 环形直径 | 仪表盘直径 |
|------|----------|----------|------------|
| small | 4px | 48px | 80px |
| default | 6px | 80px | 120px |
| large | 8px | 120px | 160px |

---

## 8. Statistic 统计数值

### 8.1 用途

标准化数值展示，替代零散的 KPI 数字样式

### 8.2 基础结构

```css
.statistic {
  display: flex;
  flex-direction: column;
}
.statistic__title {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--ink-500);
  margin-bottom: 8px;
}
.statistic__value {
  font-size: 28px;
  font-weight: 500;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  color: var(--ink-900);
  line-height: 1.2;
}
```

### 8.3 前缀与后缀

```css
.statistic__prefix {
  font-size: 16px;
  color: var(--ink-600);
  margin-right: 4px;
}
.statistic__suffix {
  font-size: 14px;
  color: var(--ink-600);
  margin-left: 4px;
}
```

### 8.4 趋势指示

```css
.statistic__trend {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
  font-size: 13px;
  font-weight: 500;
}
.statistic__trend--up {
  color: #3F8F5C;
}
.statistic__trend--down {
  color: #DC2626;
}
```

### 8.5 倒计时

```css
.statistic__countdown {
  font-size: 28px;
  font-weight: 500;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  color: var(--cdx-700);
}
.statistic__countdown-label {
  font-size: 11px;
  color: var(--ink-500);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
```

### 8.6 尺寸变体

| 尺寸 | 数值字号 | 标题字号 | 适用场景 |
|------|----------|----------|----------|
| small | 20px | 12px | 卡片内嵌 |
| default | 28px | 13px | 独立统计 |
| large | 36px | 14px | 页面 Hero |

---

*文档完成 · 2026-05-22*
