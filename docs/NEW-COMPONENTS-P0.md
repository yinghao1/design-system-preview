# P0 核心组件补充规范

> 本文档包含剩余 P0 优先级组件的完整设计规范  
> 创建日期：2026-05-22  
> 状态：待集成到 DESIGN.md

---

## 目录

1. [Form 表单容器](#1-form-表单容器)
2. [DatePicker 日期选择器](#2-datepicker-日期选择器)
3. [Upload 上传](#3-upload-上传)
4. [Message 全局提示](#4-message-全局提示)
5. [Table 高级功能](#5-table-高级功能)

---

## 1. Form 表单容器

### 1.1 用途

标准化表单布局、字段校验、错误提示、响应式适配

### 1.2 布局模式

- **Horizontal 水平布局**：标签在左，控件在右（默认）
- **Vertical 垂直布局**：标签在上，控件在下
- **Inline 内联布局**：标签和控件在同一行，多个字段横向排列

### 1.3 Form 容器

```css
.form {
  width: 100%;
}
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
.form--inline .form-item {
  display: inline-flex;
  align-items: center;
  margin-bottom: 0;
}
```

### 1.4 Form Item 表单项

```css
.form-item__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-700);
  line-height: 1.5;
}
/* 水平布局标签 */
.form--horizontal .form-item__label {
  width: 120px;
  text-align: right;
  padding-right: 12px;
  flex-shrink: 0;
  padding-top: 8px;
}
/* 垂直布局标签 */
.form--vertical .form-item__label {
  margin-bottom: 6px;
}
/* 内联布局标签 */
.form--inline .form-item__label {
  margin-right: 8px;
}
```

### 1.5 必填标记

```css
.form-item__label--required::before {
  content: '*';
  color: #DC2626;
  margin-right: 4px;
}
```

### 1.6 表单控件容器

```css
.form-item__control {
  flex: 1;
  min-width: 0;
}
```

### 1.7 错误提示

```css
.form-item__error {
  font-size: 12px;
  color: #DC2626;
  margin-top: 4px;
  line-height: 1.5;
}
.form-item--error .input {
  border-color: #DC2626;
}
.form-item--error .input:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}
```

### 1.8 帮助文本

```css
.form-item__help {
  font-size: 12px;
  color: var(--ink-500);
  margin-top: 4px;
  line-height: 1.5;
}
```

### 1.9 使用示例

```html
<!-- 水平布局 -->
<form class="form form--horizontal">
  <div class="form-item">
    <label class="form-item__label form-item__label--required">用户名</label>
    <div class="form-item__control">
      <input type="text" class="input" placeholder="请输入用户名" />
      <div class="form-item__help">用户名长度为 4-20 个字符</div>
    </div>
  </div>
  
  <div class="form-item form-item--error">
    <label class="form-item__label form-item__label--required">密码</label>
    <div class="form-item__control">
      <input type="password" class="input" />
      <div class="form-item__error">密码不能少于 6 位</div>
    </div>
  </div>
</form>
```

---

## 2. DatePicker 日期选择器

### 2.1 用途

日期录入、日期范围选择、月份/年份选择

### 2.2 基础输入框

```css
.datepicker {
  position: relative;
  display: inline-block;
}
.datepicker__input {
  padding: 8px 32px 8px 12px;
  border: 1px solid var(--ink-200);
  border-radius: 6px;
  font-size: 14px;
  font-family: var(--font-mono);
  letter-spacing: 0.02em;
  cursor: pointer;
  background: #fff;
  transition: border-color 200ms, box-shadow 200ms;
}
.datepicker__input:hover {
  border-color: var(--cdx-700);
}
.datepicker__input:focus {
  border-color: var(--cdx-700);
  box-shadow: 0 0 0 3px rgba(24, 80, 88, 0.08);
  outline: none;
}
.datepicker__icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: var(--ink-400);
  pointer-events: none;
}
```

### 2.3 日历面板

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

### 2.4 日历头部

```css
.datepicker__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.datepicker__nav-btn {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 150ms;
}
.datepicker__nav-btn:hover {
  background: var(--cdx-50);
}
.datepicker__title {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-900);
}
```

### 2.5 日历主体

```css
.datepicker__body {
  width: 100%;
}
.datepicker__weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 4px;
}
.datepicker__weekday {
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--ink-500);
  padding: 4px 0;
}
.datepicker__days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}
.datepicker__day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 150ms;
  color: var(--ink-900);
}
.datepicker__day:hover {
  background: var(--cdx-50);
}
.datepicker__day--today {
  border: 1px solid var(--cdx-700);
}
.datepicker__day--selected {
  background: var(--cdx-700);
  color: #fff;
}
.datepicker__day--disabled {
  color: var(--ink-300);
  cursor: not-allowed;
  pointer-events: none;
}
.datepicker__day--other-month {
  color: var(--ink-400);
}
```

### 2.6 快捷选项

```css
.datepicker__shortcuts {
  border-top: 1px solid var(--ink-100);
  padding-top: 8px;
  margin-top: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.datepicker__shortcut {
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid var(--ink-200);
  background: #fff;
  cursor: pointer;
  transition: all 150ms;
}
.datepicker__shortcut:hover {
  border-color: var(--cdx-700);
  color: var(--cdx-700);
}
```

---

## 3. Upload 上传

### 3.1 按钮上传

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

### 3.2 拖拽上传

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
.upload-dragger__icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
  color: var(--ink-400);
}
.upload-dragger__text {
  font-size: 14px;
  color: var(--ink-700);
}
.upload-dragger__hint {
  font-size: 12px;
  color: var(--ink-500);
  margin-top: 4px;
}
```

### 3.3 文件列表

```css
.upload-list {
  margin-top: 12px;
}
.upload-list__item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid var(--ink-100);
  border-radius: 4px;
  margin-bottom: 8px;
}
.upload-list__icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: var(--ink-500);
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
.upload-list__remove {
  cursor: pointer;
  color: var(--ink-400);
}
```

---

## 4. Message 全局提示

### 4.1 容器

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

### 4.2 消息项

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
  animation: messageSlideDown 200ms var(--ease-expo);
}
@keyframes messageSlideDown {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.message__icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
.message--success { color: #3F8F5C; }
.message--success .message__icon { color: #3F8F5C; }
.message--warning { color: #C28A2C; }
.message--warning .message__icon { color: #C28A2C; }
.message--error { color: #DC2626; }
.message--error .message__icon { color: #DC2626; }
.message--info { color: var(--cdx-700); }
.message--info .message__icon { color: var(--cdx-700); }
```

---

## 5. Table 高级功能

### 5.1 树形表格

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

### 5.2 可编辑表格

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

### 5.3 固定列

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

---

*文档完成 · 2026-05-22*

