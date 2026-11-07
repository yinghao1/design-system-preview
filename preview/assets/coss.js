/* RUNDA Design System · 站点交互
   包含：主题切换、⌘K 搜索、移动端抽屉、文档页 Tab、代码复制。
   所有页面共用；页面通过 <html data-prefix="..."> 指定相对路径前缀。 */

(function () {
  'use strict';

  /* B 端（PC）章节 */
  var B_ITEMS = [
    { slug: 'introduction', title: '介绍',         group: '概述' },
    { slug: 'usage',        title: '使用说明',     group: '概述' },
    { slug: 'guidelines',   title: '设计规范',     group: '概述' },
    { slug: 'colors',       title: '色彩系统',     group: '设计基础' },
    { slug: 'typography',   title: '字体与排版',   group: '设计基础' },
    { slug: 'motion',       title: '动效系统',     group: '设计基础' },
    { slug: 'buttons',      title: '按钮',         group: '通用组件' },
    { slug: 'forms',        title: '表单控件',     group: '通用组件' },
    { slug: 'form',         title: '表单容器',     group: '通用组件' },
    { slug: 'tags',         title: '标签与徽章',   group: '通用组件' },
    { slug: 'cards',        title: '卡片',         group: '通用组件' },
    { slug: 'tables',       title: '表格',         group: '通用组件' },
    { slug: 'overlays',     title: '弹层与浮层',   group: '通用组件' },
    { slug: 'navigation',   title: '导航',         group: '通用组件' },
    { slug: 'tabs',         title: '标签页',       group: '通用组件' },
    { slug: 'collapse',     title: '折叠面板',     group: '通用组件' },
    { slug: 'descriptions', title: '描述列表',     group: '通用组件' },
    { slug: 'layout',       title: '布局容器',     group: '通用组件' },
    { slug: 'grid',         title: '栅格系统',     group: '通用组件' },
    { slug: 'datepicker',   title: '日期选择器',   group: '通用组件' },
    { slug: 'upload',       title: '上传',         group: '通用组件' },
    { slug: 'message',      title: '全局提示',     group: '通用组件' },
    { slug: 'avatar',       title: '头像',         group: '通用组件' },
    { slug: 'kpi',          title: 'KPI 与数字',   group: '数据展示' },
    { slug: 'status',       title: '进度与状态',   group: '数据展示' },
    { slug: 'timeline',     title: '时间轴',       group: '数据展示' },
    { slug: 'anchors',      title: '溯源与锚点',   group: '数据展示' },
    { slug: 'page',         title: '页面结构',     group: '业务场景' },
    { slug: 'medical',      title: '健康提醒卡',   group: '业务场景' },
    { slug: 'workstation',  title: 'EMR 工作台',   group: '业务场景' },
    { slug: 'chat',         title: 'AI 对话系统',  group: '业务场景' }
  ];

  /* C 端（移动）章节 */
  var C_ITEMS = [
    { slug: 'c-introduction', title: 'C 端概述',       group: '概述' },
    { slug: 'c-colors',       title: '色彩系统',       group: '设计基础' },
    { slug: 'c-typography',   title: '排版与基础规范', group: '设计基础' },
    { slug: 'c-basics',       title: '基础组件',       group: '通用组件' },
    { slug: 'c-forms',        title: '表单控件',       group: '通用组件' },
    { slug: 'c-navigation',   title: '导航',           group: '通用组件' },
    { slug: 'c-feedback',     title: '反馈',           group: '通用组件' },
    { slug: 'c-data',         title: '数据展示',       group: '数据与图表' },
    { slug: 'c-charts',       title: '图表',           group: '数据与图表' },
    { slug: 'c-business',     title: '业务组件',       group: '业务场景' }
  ];

  var B_GROUPS = ['概述', '设计基础', '通用组件', '数据展示', '业务场景'];
  var C_GROUPS = ['概述', '设计基础', '通用组件', '数据与图表', '业务场景'];

  var root = document.documentElement;
  var prefix = root.getAttribute('data-prefix') || '';
  var SET = root.getAttribute('data-set') === 'c' ? 'c' : 'b';
  var ITEMS = SET === 'c' ? C_ITEMS : B_ITEMS;
  var GROUPS = SET === 'c' ? C_GROUPS : B_GROUPS;
  var DOCS_DIR = SET === 'c' ? 'docs/c' : 'docs/components';

  function docHref(slug) {
    // 首页：docs/<dir>/x.html；文档页：同目录 x.html
    return prefix === '' ? DOCS_DIR + '/' + slug + '.html' : slug + '.html';
  }

  /* ---------- 主题 ---------- */
  function applyTheme(theme) {
    root.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('runda-theme', theme); } catch (e) {}
  }

  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('runda-theme'); } catch (e) {}
    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved);
    } else {
      // 组件目前仅提供浅色实现，首次进入默认浅色，避免演示区域与外壳主题冲突
      applyTheme('light');
    }

    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyTheme(root.classList.contains('dark') ? 'light' : 'dark');
      });
    });
  }

  /* ---------- 顶部导航的滚动阴影 ---------- */
  function initHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 搜索（含抽屉） ---------- */
  var dialog, input, list, activeIndex = 0, filtered = ITEMS;

  function buildSearch() {
    dialog = document.createElement('div');
    dialog.className = 'dialog-backdrop';
    dialog.setAttribute('role', 'presentation');
    dialog.innerHTML =
      '<div class="dialog" role="dialog" aria-modal="true" aria-label="搜索组件">' +
        '<input class="dialog-input" type="text" placeholder="搜索组件…" aria-label="搜索组件" autocomplete="off" />' +
        '<div class="dialog-list" role="listbox" aria-label="组件列表"></div>' +
        '<div class="dialog-footer">' +
          '<span><kbd>↑</kbd><kbd>↓</kbd> 选择</span>' +
          '<span><kbd>↵</kbd> 打开</span>' +
          '<span><kbd>esc</kbd> 关闭</span>' +
        '</div>' +
      '</div>';
    document.body.appendChild(dialog);

    input = dialog.querySelector('.dialog-input');
    list = dialog.querySelector('.dialog-list');

    dialog.addEventListener('mousedown', function (e) {
      if (e.target === dialog) closeSearch();
    });

    input.addEventListener('input', function () {
      renderResults(input.value);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        move(1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        move(-1);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[activeIndex]) window.location.href = docHref(filtered[activeIndex].slug);
      } else if (e.key === 'Escape') {
        closeSearch();
      }
    });

    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        dialog.classList.contains('open') ? closeSearch() : openSearch();
      }
      if (e.key === 'Escape' && dialog.classList.contains('open')) closeSearch();
    });

    document.querySelectorAll('[data-search-open]').forEach(function (btn) {
      btn.addEventListener('click', openSearch);
    });
  }

  function openSearch() {
    dialog.classList.add('open');
    input.value = '';
    renderResults('');
    setTimeout(function () { input.focus(); }, 10);
  }

  function closeSearch() {
    dialog.classList.remove('open');
  }

  function move(step) {
    if (!filtered.length) return;
    activeIndex = (activeIndex + step + filtered.length) % filtered.length;
    paintSelection();
  }

  function paintSelection() {
    var nodes = list.querySelectorAll('.dialog-item');
    nodes.forEach(function (node, i) {
      node.setAttribute('aria-selected', i === activeIndex ? 'true' : 'false');
    });
    if (nodes[activeIndex]) nodes[activeIndex].scrollIntoView({ block: 'nearest' });
  }

  function renderResults(q) {
    q = (q || '').trim().toLowerCase();
    filtered = ITEMS.filter(function (item) {
      return !q || item.title.toLowerCase().indexOf(q) > -1 || item.slug.indexOf(q) > -1;
    });
    activeIndex = 0;

    if (!filtered.length) {
      list.innerHTML = '<div class="dialog-empty">没有找到匹配的组件</div>';
      return;
    }

    list.innerHTML = filtered.map(function (item) {
      return '<a class="dialog-item" role="option" aria-selected="false" href="' + docHref(item.slug) + '">' +
        '<span>' + item.title + '</span>' +
        '<span class="path">' + item.group + '</span>' +
      '</a>';
    }).join('');

    paintSelection();
  }

  /* ---------- 移动端抽屉 ---------- */
  function buildDrawer() {
    var backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';

    var drawer = document.createElement('aside');
    drawer.className = 'drawer';
    drawer.setAttribute('aria-label', '组件导航');
    drawer.innerHTML =
      '<div class="drawer-head">' +
        '<a class="logo" href="' + prefix + 'index.html"><span>RUNDA</span><span class="logo-dim">DS</span></a>' +
        '<button class="icon-btn" data-drawer-close aria-label="关闭菜单">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>' +
        '</button>' +
      '</div>' +
      scopeSwitchHtml() +
      GROUPS.map(function (group) {
        var links = ITEMS.filter(function (i) { return i.group === group; }).map(function (item) {
          return '<a class="side-link" href="' + docHref(item.slug) + '">' + item.title + '</a>';
        }).join('');
        return '<div class="side-group"><div class="side-label">' + group + '</div>' + links + '</div>';
      }).join('');

    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    function open() {
      backdrop.classList.add('open');
      drawer.classList.add('open');
    }
    function close() {
      backdrop.classList.remove('open');
      drawer.classList.remove('open');
    }

    backdrop.addEventListener('click', close);
    drawer.querySelector('[data-drawer-close]').addEventListener('click', close);
    document.querySelectorAll('[data-drawer-open]').forEach(function (btn) {
      btn.addEventListener('click', open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* 端别切换（B 端 PC / C 端移动） */
  function scopeSwitchHtml() {
    return '<div class="side-switch" role="tablist" aria-label="端别切换">' +
      '<a class="side-switch__item' + (SET === 'b' ? ' active' : '') + '" role="tab" aria-selected="' + (SET === 'b') + '" href="' + prefix + 'index.html#b">B 端 PC</a>' +
      '<a class="side-switch__item' + (SET === 'c' ? ' active' : '') + '" role="tab" aria-selected="' + (SET === 'c') + '" href="' + prefix + 'index.html#c">C 端移动</a>' +
    '</div>';
  }

  /* ---------- 文档页侧边栏 ---------- */
  function buildSidebar() {
    var el = document.getElementById('ds-sidebar');
    if (!el) return;
    var slug = document.body.getAttribute('data-slug') || '';
    el.innerHTML = scopeSwitchHtml() + GROUPS.map(function (group) {
      var links = ITEMS.filter(function (i) { return i.group === group; }).map(function (item) {
        var active = item.slug === slug ? ' active' : '';
        var current = item.slug === slug ? ' aria-current="page"' : '';
        return '<a class="side-link' + active + '" href="' + item.slug + '.html"' + current + '>' + item.title + '</a>';
      }).join('');
      return '<div class="side-group"><div class="side-label">' + group + '</div>' + links + '</div>';
    }).join('');
  }

  /* ---------- 文档页 Tab ---------- */
  function initTabs() {
    document.querySelectorAll('[data-tabs]').forEach(function (group) {
      var tabs = group.querySelectorAll('[data-tab]');
      var root = group.closest('.doc') || document;
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) { t.classList.remove('active'); });
          tab.classList.add('active');
          root.querySelectorAll('[data-pane]').forEach(function (pane) {
            pane.classList.toggle('active', pane.getAttribute('data-pane') === tab.getAttribute('data-tab'));
          });
        });
      });
    });
  }

  /* ---------- 文档页“预览 / 代码”快捷按钮 ---------- */
  function initJumpTabs() {
    document.querySelectorAll('[data-goto-tab]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var name = btn.getAttribute('data-goto-tab');
        var group = document.querySelector('[data-tabs]');
        var tab = group && group.querySelector('[data-tab="' + name + '"]');
        if (tab) tab.click();
        var pane = document.getElementById(name);
        if (pane) pane.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---------- 代码复制 ---------- */
  function initCopy() {
    document.querySelectorAll('.code-copy').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var box = btn.closest('.code-box');
        var code = box ? box.querySelector('code') : null;
        if (!code) return;
        var text = code.textContent;
        var done = function () {
          var old = btn.innerHTML;
          btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
          setTimeout(function () { btn.innerHTML = old; }, 1400);
        };
        var fallback = function () {
          var ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); } catch (e) {}
          document.body.removeChild(ta);
          done();
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, fallback);
        } else {
          fallback();
        }
      });
    });
  }

  /* ---------- 包管理器命令切换（使用说明） ---------- */
  function initCommandTabs() {
    document.querySelectorAll('[data-cmd-tabs]').forEach(function (group) {
      var tabs = Array.prototype.slice.call(group.querySelectorAll('[data-cmd]'));
      var text = group.querySelector('[data-cmd-text]');
      var copy = group.querySelector('[data-cmd-copy]');
      if (!tabs.length || !text) return;

      function select(tab) {
        tabs.forEach(function (item) {
          var active = item === tab;
          item.classList.toggle('is-active', active);
          item.setAttribute('aria-selected', active ? 'true' : 'false');
          item.setAttribute('tabindex', active ? '0' : '-1');
        });
        text.textContent = tab.getAttribute('data-command') || '';
      }

      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () { select(tab); });
      });

      // 方向键在标签之间切换，保持键盘可用
      group.querySelector('.cmd-tabs').addEventListener('keydown', function (e) {
        var index = tabs.indexOf(document.activeElement);
        if (index === -1) return;
        var next = null;
        if (e.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
        if (e.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
        if (!next) return;
        e.preventDefault();
        next.focus();
        select(next);
      });

      if (!copy) return;
      copy.addEventListener('click', function () {
        var value = text.textContent;
        var done = function () {
          var old = copy.innerHTML;
          copy.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
          copy.classList.add('is-done');
          setTimeout(function () {
            copy.innerHTML = old;
            copy.classList.remove('is-done');
          }, 1400);
        };
        var fallback = function () {
          var ta = document.createElement('textarea');
          ta.value = value;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); } catch (e) {}
          document.body.removeChild(ta);
          done();
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(done, fallback);
        } else {
          fallback();
        }
      });
    });
  }

  /* ---------- 代码面板：由预览区自动生成，保证文档与实现始终一致 ---------- */
  function initAutoCode() {
    document.querySelectorAll('code[data-autocode]').forEach(function (code) {
      var article = code.closest('.doc') || document;
      var src = article.querySelector('[data-pane="preview"] .preview-box');
      if (!src) return;
      var node = src.querySelector('section') || src;
      code.textContent = node.outerHTML;
    });
  }

  /* ---------- 首页端别切换（B 端 PC / C 端移动） ---------- */
  function initScopeTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('[data-scope-tab]'));
    if (!tabs.length) return;
    var panes = Array.prototype.slice.call(
      document.querySelectorAll('[data-scope-pane], [data-scope-only]')
    );

    function activate(name, persist) {
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-scope-tab') === name;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.setAttribute('tabindex', on ? '0' : '-1');
      });
      panes.forEach(function (p) {
        var key = p.getAttribute('data-scope-pane') || p.getAttribute('data-scope-only');
        p.hidden = key !== name;
      });
      if (persist !== false) {
        try { localStorage.setItem('runda-scope', name); } catch (e) {}
      }
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-scope-tab'));
      });
      tab.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        e.preventDefault();
        var step = e.key === 'ArrowRight' ? 1 : tabs.length - 1;
        var next = tabs[(i + step) % tabs.length];
        next.focus();
        activate(next.getAttribute('data-scope-tab'));
      });
    });

    var initial = null;
    if (location.hash === '#c' || location.hash === '#b') initial = location.hash.slice(1);
    if (!initial) { try { initial = localStorage.getItem('runda-scope'); } catch (e) {} }
    if (initial !== 'b' && initial !== 'c') initial = 'b';
    activate(initial, false);

    window.addEventListener('hashchange', function () {
      var h = location.hash.replace('#', '');
      if (h === 'b' || h === 'c') activate(h);
    });
  }

  /* ---------- 初始化 ---------- */
  function init() {
    initTheme();
    initHeader();
    buildSearch();
    buildDrawer();
    buildSidebar();
    initTabs();
    initJumpTabs();
    initCopy();
    initCommandTabs();
    initAutoCode();
    initScopeTabs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ==========================================================================
   组件演示交互（仅供文档预览）
   覆盖：标签 / Chip、单选按钮组、下拉选择、标签输入、表格选择与排序、分页、
   Tabs、折叠面板、步骤条、侧边栏、锚点、日期选择、上传、全局提示、弹层、
   思维链、色板复制。
   ========================================================================== */
(function () {
  'use strict';

  function initDemos() {
    var scope = document.querySelector('.preview-box');
    if (!scope) return;

    /* 为未自带 hover 样式的按钮补齐基础状态 */
    var skip = '.radio-button, .demo-page, .demo-seg-item, .select-trigger, .demo-tab, .cal-nav, .cal-shortcut, .demo-modal-trigger';
    scope.querySelectorAll('.demo-box button').forEach(function (btn) {
      if (btn.matches(skip) || btn.disabled) return;
      if ((btn.className || '').indexOf('hover:') > -1) return;
      var bg = getComputedStyle(btn).backgroundColor;
      var m = bg.match(/rgba?\(([^)]+)\)/);
      var light = true;
      if (m) {
        var p = m[1].split(',').map(function (n) { return parseFloat(n); });
        var alpha = p.length > 3 ? p[3] : 1;
        light = alpha === 0 || (p[0] > 200 && p[1] > 200 && p[2] > 200);
      }
      btn.classList.add(light ? 'is-ghostable' : 'is-solidable');
    });

    /* ---------- 点击委托 ---------- */
    scope.addEventListener('click', function (e) {
      var el;

      // 标签：多选切换
      if ((el = e.target.closest('.tag'))) {
        el.classList.toggle('is-active');
        return;
      }
      // 筛选 Chip：组内单选
      if ((el = e.target.closest('.mf-chip'))) {
        var chips = el.parentElement.querySelectorAll('.mf-chip');
        chips.forEach(function (c) { c.classList.remove('is-active'); });
        el.classList.add('is-active');
        return;
      }
      // 分段控制器
      if ((el = e.target.closest('.demo-seg-item'))) {
        el.parentElement.querySelectorAll('.demo-seg-item').forEach(function (b) { b.classList.remove('is-active'); });
        el.classList.add('is-active');
        return;
      }
      // 单选按钮组
      if ((el = e.target.closest('.radio-button'))) {
        el.parentElement.querySelectorAll('.radio-button').forEach(function (b) { b.classList.remove('is-active'); });
        el.classList.add('is-active');
        return;
      }
      // 下拉选择
      if ((el = e.target.closest('.select-trigger'))) {
        var sel = el.closest('.select');
        scope.querySelectorAll('.select.is-open').forEach(function (s) { if (s !== sel) s.classList.remove('is-open'); });
        sel.classList.toggle('is-open');
        return;
      }
      if ((el = e.target.closest('.select-option'))) {
        var box = el.closest('.select');
        box.querySelectorAll('.select-option').forEach(function (o) { o.classList.remove('is-selected'); });
        el.classList.add('is-selected');
        var label = box.querySelector('.select-trigger span');
        if (label) label.textContent = el.textContent.trim();
        box.classList.remove('is-open');
        return;
      }
      // 标签输入：删除
      if ((el = e.target.closest('.tag-input-chip > span:last-child'))) {
        el.parentElement.remove();
        return;
      }
      // 分页
      if ((el = e.target.closest('.demo-page'))) {
        if (el.disabled) return;
        var pager = el.parentElement;
        var pages = pager.querySelectorAll('.demo-page[data-page]');
        var cur = -1;
        pages.forEach(function (p, i) { if (p.classList.contains('is-current')) cur = i; });
        var target = el.getAttribute('data-page');
        if (target === 'prev' && cur > 0) pages[cur - 1].click();
        else if (target === 'next' && cur > -1 && cur < pages.length - 1) pages[cur + 1].click();
        else if (target && target !== 'prev' && target !== 'next') {
          pages.forEach(function (p) { p.classList.remove('is-current'); });
          el.classList.add('is-current');
        }
        return;
      }
      // Tabs 关闭
      if ((el = e.target.closest('.demo-tab-close'))) {
        e.stopPropagation();
        var tab = el.closest('.demo-tab');
        var wasActive = tab.classList.contains('is-active');
        var prev = tab.previousElementSibling;
        tab.remove();
        if (wasActive && prev && prev.classList.contains('demo-tab')) prev.click();
        return;
      }
      // Tabs
      if ((el = e.target.closest('.demo-tab'))) {
        if (el.classList.contains('is-disabled')) return;
        var group = el.parentElement;
        group.querySelectorAll('.demo-tab').forEach(function (t) { t.classList.remove('is-active'); });
        el.classList.add('is-active');
        var demo = el.closest('.demo-box');
        var panel = demo && demo.querySelector('.demo-tab-panel');
        if (panel) {
          var name = el.getAttribute('data-label') || el.textContent.replace('×', '').trim();
          panel.textContent = '当前显示：' + name + '内容区域';
        }
        return;
      }
      // 折叠面板
      if ((el = e.target.closest('.demo-acc-head'))) {
        var item = el.closest('.demo-acc-item');
        var acc = el.closest('.demo-accordion');
        var single = acc && acc.getAttribute('data-accordion') !== 'false';
        if (single) {
          acc.querySelectorAll('.demo-acc-item').forEach(function (i) { if (i !== item) i.classList.remove('is-open'); });
        }
        item.classList.toggle('is-open');
        return;
      }
      // 步骤条
      if ((el = e.target.closest('.step'))) {
        var steps = el.parentElement.querySelectorAll('.step');
        var idx = Array.prototype.indexOf.call(steps, el);
        steps.forEach(function (s, i) {
          s.classList.toggle('is-done', i < idx);
          s.classList.toggle('is-active', i === idx);
        });
        return;
      }
      // 侧边导航示例
      if ((el = e.target.closest('.sidebar-item'))) {
        el.parentElement.querySelectorAll('.sidebar-item').forEach(function (i) { i.classList.remove('is-active'); });
        el.classList.add('is-active');
        return;
      }
      // 锚点高亮
      if ((el = e.target.closest('.anchor'))) {
        el.classList.toggle('is-hl');
        return;
      }
      // 日期选择
      if ((el = e.target.closest('.cal-day'))) {
        var cal = el.closest('.demo-box');
        cal.querySelectorAll('.cal-day').forEach(function (d) { d.classList.remove('is-selected'); });
        el.classList.add('is-selected');
        var input = cal.querySelector('input[type="text"]');
        var grid = el.closest('[data-cal-grid]');
        if (input && grid) {
          var mm = String(parseInt(grid.getAttribute('data-month'), 10)).padStart(2, '0');
          input.value = grid.getAttribute('data-year') + '-' + mm + '-' + String(el.textContent.trim()).padStart(2, '0');
        }
        return;
      }
      if ((el = e.target.closest('.cal-shortcut'))) {
        el.parentElement.querySelectorAll('.cal-shortcut').forEach(function (s) { s.classList.remove('is-active'); });
        el.classList.add('is-active');
        return;
      }
      if ((el = e.target.closest('.cal-nav'))) {
        renderCalendar(el.closest('.demo-box'), parseInt(el.getAttribute('data-delta'), 10));
        return;
      }
      // 上传：删除文件
      if ((el = e.target.closest('.demo-file-remove'))) {
        el.closest('.demo-file').remove();
        return;
      }
      // 全局提示：点击关闭（演示可在 1.6s 后恢复）
      if ((el = e.target.closest('.demo-toast-item'))) {
        el.classList.add('is-dismissed');
        window.setTimeout(function () { el.classList.remove('is-dismissed'); }, 1600);
        return;
      }
      // 弹层
      if ((el = e.target.closest('.demo-modal-trigger'))) {
        var backdrop = el.parentElement.querySelector('.modal-demo-backdrop');
        if (backdrop) {
          backdrop.classList.remove('is-hidden');
          backdrop.classList.add('is-opening');
        }
        return;
      }
      if ((el = e.target.closest('.modal-close, .modal-footer button'))) {
        var bd = el.closest('.modal-demo-backdrop');
        if (bd) {
          bd.classList.add('is-hidden');
          bd.classList.remove('is-opening');
        }
        return;
      }
      // 思维链折叠
      if ((el = e.target.closest('.think-head'))) {
        el.closest('.think-block').classList.toggle('is-open');
        return;
      }
      // 色板复制
      if ((el = e.target.closest('.swatch'))) {
        var hex = el.querySelector('.hex');
        if (!hex) return;
        var text = hex.textContent.trim();
        var done = function () {
          var old = hex.textContent;
          hex.textContent = '已复制';
          window.setTimeout(function () { hex.textContent = old; }, 1200);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, done);
        } else {
          done();
        }
        return;
      }
    });

    /* ---------- 表格行选择 ---------- */
    scope.addEventListener('change', function (e) {
      var input = e.target;
      if (!input.matches || !input.matches('input[type="checkbox"]')) return;
      var table = input.closest('.data-table');
      if (!table) return;
      var rows = table.querySelectorAll('tbody tr');
      if (input.closest('thead')) {
        rows.forEach(function (tr) {
          var cb = tr.querySelector('input[type="checkbox"]');
          if (cb) cb.checked = input.checked;
          tr.classList.toggle('is-selected', input.checked);
        });
      } else {
        var tr = input.closest('tr');
        if (tr) tr.classList.toggle('is-selected', input.checked);
      }
      var demo = table.closest('.demo-box');
      var count = demo && demo.querySelector('.demo-table-count');
      if (count) {
        var n = table.querySelectorAll('tbody input[type="checkbox"]:checked').length;
        count.textContent = '已选 ' + n + ' 项 · 共 12,847 条';
      }
    });

    /* ---------- 表格排序 ---------- */
    scope.addEventListener('click', function (e) {
      var th = e.target.closest('.th-sortable');
      if (!th) return;
      var table = th.closest('.data-table');
      table.querySelectorAll('.th-sortable').forEach(function (h) { if (h !== th) h.classList.remove('asc', 'desc'); });
      if (th.classList.contains('asc')) {
        th.classList.remove('asc');
        th.classList.add('desc');
      } else if (th.classList.contains('desc')) {
        th.classList.remove('desc');
      } else {
        th.classList.add('asc');
      }
    });

    /* ---------- 标签输入：回车添加 ---------- */
    scope.addEventListener('keydown', function (e) {
      var field = e.target;
      if (!field.classList || !field.classList.contains('tag-input-field')) return;
      if (e.key !== 'Enter') return;
      e.preventDefault();
      var value = field.value.trim();
      if (!value) return;
      var chip = document.createElement('span');
      chip.className = 'tag-input-chip';
      chip.textContent = value + ' ';
      var close = document.createElement('span');
      close.className = 'cursor-pointer opacity-60';
      close.textContent = '×';
      chip.appendChild(close);
      field.parentElement.insertBefore(chip, field);
      field.value = '';
    });

    /* ---------- 拖拽上传高亮 ---------- */
    scope.querySelectorAll('.demo-dropzone').forEach(function (zone) {
      ['dragenter', 'dragover'].forEach(function (type) {
        zone.addEventListener(type, function (e) {
          e.preventDefault();
          zone.classList.add('is-dragover');
        });
      });
      ['dragleave', 'drop'].forEach(function (type) {
        zone.addEventListener(type, function (e) {
          e.preventDefault();
          zone.classList.remove('is-dragover');
        });
      });
    });

    /* ---------- 日期：月份切换 ---------- */
    function renderCalendar(cal, delta) {
      var grid = cal.querySelector('[data-cal-grid]');
      if (!grid) return;
      var year = parseInt(grid.getAttribute('data-year'), 10);
      var month = parseInt(grid.getAttribute('data-month'), 10) + delta; // 1-12
      year += Math.floor((month - 1) / 12);
      month = ((month - 1) % 12 + 12) % 12 + 1;
      grid.setAttribute('data-year', year);
      grid.setAttribute('data-month', month);

      var label = cal.querySelector('[data-cal-label]');
      if (label) label.textContent = year + ' 年 ' + month + ' 月';

      var first = new Date(year, month - 1, 1).getDay(); // 0=周日
      var days = new Date(year, month, 0).getDate();
      var prevDays = new Date(year, month - 1, 0).getDate();
      var cells = [];
      for (var i = first - 1; i >= 0; i--) {
        cells.push({ day: prevDays - i, outside: true });
      }
      for (var d = 1; d <= days; d++) {
        cells.push({ day: d, outside: false });
      }
      var next = 1;
      while (cells.length % 7 !== 0) {
        cells.push({ day: next++, outside: true });
      }
      grid.innerHTML = cells.map(function (c) {
        return '<span class="cal-day' + (c.outside ? ' is-outside' : '') + '">' + c.day + '</span>';
      }).join('');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDemos);
  } else {
    initDemos();
  }
})();
