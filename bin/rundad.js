#!/usr/bin/env node
/**
 * RUNDA Design System CLI
 * 无第三方依赖，Node.js >= 18。
 *
 * 用法：
 *   rundad init [目录]            初始化 design-system/（样式、字体、token、示例页）
 *   rundad add <组件...> [--dir 目录]  添加组件片段与可直接打开的预览页
 *   rundad list                   查看可用组件
 */

'use strict';

var fs = require('fs');
var path = require('path');

var PKG_ROOT = path.resolve(__dirname, '..');
var PKG = JSON.parse(fs.readFileSync(path.join(PKG_ROOT, 'package.json'), 'utf8'));

/* ---------- 终端输出 ---------- */
var isTTY = process.stdout.isTTY;
function color(code, text) {
  return isTTY ? '\u001b[' + code + 'm' + text + '\u001b[0m' : text;
}
function green(text) { return color('32', text); }
function dim(text) { return color('2', text); }
function bold(text) { return color('1', text); }
function red(text) { return color('31', text); }

function info(message) { console.log(green('✓') + ' ' + message); }
function warn(message) { console.log(color('33', '!') + ' ' + message); }
function fail(message) { console.error(red('✗') + ' ' + message); }

/* ---------- 组件清单 ----------
   与 preview/assets/coss.js 的 ITEMS 保持一致，避免两处手写。 */
var OVERVIEW_SLUGS = ['introduction', 'usage', 'guidelines'];

function readItems() {
  var source = fs.readFileSync(path.join(PKG_ROOT, 'preview/assets/coss.js'), 'utf8');
  var re = /\{\s*slug:\s*'([^']+)'\s*,\s*title:\s*'([^']+)'\s*,\s*group:\s*'([^']+)'\s*\}/g;
  var items = [];
  var match;
  while ((match = re.exec(source))) {
    items.push({ slug: match[1], title: match[2], group: match[3] });
  }
  if (!items.length) {
    throw new Error('无法读取组件清单，请确认 preview/assets/coss.js 存在。');
  }
  return items;
}

function findItem(items, slug) {
  return items.filter(function (item) { return item.slug === slug; })[0];
}

function availableSlugs(items) {
  return items.filter(function (item) {
    return OVERVIEW_SLUGS.indexOf(item.slug) === -1;
  });
}

/* ---------- 参数 ---------- */
function parseArgs(argv) {
  var positional = [];
  var options = { force: false, dir: null };
  for (var i = 0; i < argv.length; i++) {
    var arg = argv[i];
    if (arg === '--force' || arg === '-f') {
      options.force = true;
    } else if (arg === '--dir' || arg === '-d') {
      options.dir = argv[++i];
      if (!options.dir) throw new Error('--dir 后需要指定目录。');
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--version' || arg === '-v') {
      options.version = true;
    } else if (arg.charAt(0) === '-') {
      throw new Error('未知参数：' + arg);
    } else {
      positional.push(arg);
    }
  }
  return { positional: positional, options: options };
}

/* ---------- 文件操作 ---------- */
function exists(file) {
  try { fs.accessSync(file); return true; } catch (e) { return false; }
}

/* 当前目录内的路径显示为相对路径，目录外的直接显示绝对路径 */
function displayPath(file) {
  var rel = path.relative(process.cwd(), file);
  if (!rel || rel.indexOf('..') === 0) return file;
  return rel;
}

function writeIfChanged(file, content, force) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (exists(file) && !force) {
    var current = fs.readFileSync(file, 'utf8');
    if (current === content) return 'unchanged';
    return 'skipped';
  }
  fs.writeFileSync(file, content);
  return 'written';
}

function copyIfChanged(from, to, force) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  if (exists(to) && !force) {
    var a = fs.readFileSync(from);
    var b = fs.readFileSync(to);
    return a.equals(b) ? 'unchanged' : 'skipped';
  }
  fs.copyFileSync(from, to);
  return 'written';
}

/* ---------- 生成内容 ---------- */
function examplePage() {
  return [
    '<!DOCTYPE html>',
    '<html lang="zh-CN">',
    '<head>',
    '  <meta charset="UTF-8" />',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    '  <title>RUNDA DS · 初始化示例</title>',
    '  <script src="https://cdn.tailwindcss.com"><\/script>',
    '  <script src="tokens/tailwind.config.js"><\/script>',
    '  <link rel="stylesheet" href="assets/design-system.css" />',
    '</head>',
    '<body class="bg-ink-50 text-ink-900 p-8">',
    '  <main class="max-w-[880px] mx-auto">',
    '    <p class="text-[12px] text-ink-500 mb-2">RUNDA DESIGN SYSTEM · v' + PKG.version + '</p>',
    '    <h1 class="text-[24px] font-semibold text-ink-900 mb-6">设计系统已就绪</h1>',
    '',
    '    <div class="bg-white border border-ink-200 rounded p-6 mb-6">',
    '      <div class="text-[12px] text-ink-500 mb-1">在院患者总数</div>',
    '      <div class="font-num text-[40px] leading-none font-medium text-cdx-700">1,284</div>',
    '    </div>',
    '',
    '    <div class="flex flex-wrap gap-3">',
    '      <button class="px-4 py-2 bg-cdx-700 text-white text-[13px] font-medium rounded hover:bg-cdx-600 transition">新建患者</button>',
    '      <button class="px-4 py-2 bg-white border border-ink-200 text-ink-600 text-[13px] font-medium rounded hover:border-cdx-700 hover:text-cdx-700 transition">导出列表</button>',
    '    </div>',
    '  </main>',
    '</body>',
    '</html>',
    ''
  ].join('\n');
}

function usageReadme() {
  return [
    '# RUNDA Design System',
    '',
    '由 `rundad init` 生成。包含组件样式、Urbanist 数字字体与设计 token。',
    '',
    '## 目录',
    '',
    '```',
    'design-system/',
    '├── assets/',
    '│   ├── design-system.css',
    '│   └── fonts/Urbanist-Medium.ttf',
    '├── components/          # rundad add 生成',
    '├── tokens/',
    '│   ├── design-tokens.json',
    '│   └── tailwind.config.js',
    '└── example.html',
    '```',
    '',
    '## 引入顺序',
    '',
    '```html',
    '<script src="https://cdn.tailwindcss.com"></script>',
    '<script src="design-system/tokens/tailwind.config.js"></script>',
    '<link rel="stylesheet" href="design-system/assets/design-system.css" />',
    '```',
    '',
    '顺序不能颠倒：先 Tailwind，再 token，最后组件样式。',
    '',
    '## 添加组件',
    '',
    '```bash',
    'rundad add buttons tables kpi',
    '```',
    '',
    '`design-system/components/<组件>.html` 是可复制到业务页面的片段；',
    '`design-system/components/<组件>.preview.html` 是可直接在浏览器打开的预览页。',
    '',
    '## 说明',
    '',
    '- `design-system.css` 通过相对路径引用 `assets/fonts/Urbanist-Medium.ttf`，移动文件时保持两者相对位置。',
    '- 带状态的组件（Tabs、折叠面板、下拉、日期、上传、弹窗）需要自行绑定事件，可参考仓库中的 `preview/assets/coss.js`。',
    ''
  ].join('\n');
}

function componentReadme(dir) {
  var files = [];
  try {
    files = fs.readdirSync(dir).filter(function (name) {
      return /\.html$/.test(name) && !/\.preview\.html$/.test(name);
    }).sort();
  } catch (e) {}
  var lines = [
    '# 已添加组件',
    '',
    '每个组件包含两个文件：',
    '',
    '- `<组件>.html`：可复制到业务页面的片段。',
    '- `<组件>.preview.html`：带 Tailwind CDN 与 token 的独立预览页，直接用浏览器打开。',
    '',
    '| 组件 | 片段 | 预览 |',
    '| --- | --- | --- |'
  ];
  files.forEach(function (file) {
    var slug = file.replace(/\.html$/, '');
    var preview = slug + '.preview.html';
    lines.push('| ' + slug + ' | `' + file + '` | `' + (exists(path.join(dir, preview)) ? preview : '—') + '` |');
  });
  if (!files.length) lines.push('| — | — | — |');
  lines.push('');
  return lines.join('\n');
}

function previewPage(item, section) {
  return [
    '<!DOCTYPE html>',
    '<html lang="zh-CN">',
    '<head>',
    '  <meta charset="UTF-8" />',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    '  <title>' + item.title + ' · RUNDA DS</title>',
    '  <script src="https://cdn.tailwindcss.com"><\/script>',
    '  <script src="../tokens/tailwind.config.js"><\/script>',
    '  <link rel="stylesheet" href="../assets/design-system.css" />',
    '</head>',
    '<body class="bg-ink-50 text-ink-900 p-6">',
    '  <main class="max-w-[1080px] mx-auto">',
    '    <p class="text-[12px] text-ink-500 mb-4">RUNDA DS · ' + item.title + ' · 组件预览</p>',
    section,
    '  </main>',
    '</body>',
    '</html>',
    ''
  ].join('\n');
}

function extractSection(html, slug) {
  var box = html.indexOf('<div class="preview-box">');
  if (box === -1) throw new Error('页面中没有找到 .preview-box，无法提取组件。');
  var start = html.indexOf('<section', box);
  if (start === -1) throw new Error('页面中没有找到 <section> 组件片段。');
  var end = html.indexOf('</section>', start);
  if (end === -1) throw new Error('组件 <section> 没有正确闭合。');
  return html.slice(start, end + '</section>'.length);
}

/* ---------- 命令 ---------- */
function resolveTarget(dirArg) {
  return path.resolve(process.cwd(), dirArg || '.');
}

function initProject(target, options) {
  var root = path.join(target, 'design-system');
  var sources = [
    ['preview/assets/design-system.css', 'assets/design-system.css'],
    ['preview/assets/fonts/Urbanist-Medium.ttf', 'assets/fonts/Urbanist-Medium.ttf'],
    ['tokens/tailwind.config.js', 'tokens/tailwind.config.js'],
    ['tokens/design-tokens.json', 'tokens/design-tokens.json']
  ];
  var written = 0;
  var skipped = 0;

  sources.forEach(function (pair) {
    var from = path.join(PKG_ROOT, pair[0]);
    var to = path.join(root, pair[1]);
    if (!exists(from)) throw new Error('缺少模板文件：' + pair[0]);
    var result = copyIfChanged(from, to, options.force);
    if (result === 'written') written++;
    if (result === 'skipped') skipped++;
  });

  var demo = writeIfChanged(path.join(root, 'example.html'), examplePage(), options.force);
  if (demo === 'written') written++;
  if (demo === 'skipped') skipped++;

  var readme = writeIfChanged(path.join(root, 'README.md'), usageReadme(), options.force);
  if (readme === 'written') written++;
  if (readme === 'skipped') skipped++;

  fs.mkdirSync(path.join(root, 'components'), { recursive: true });

  info('已初始化 ' + displayPath(root) + '/');
  console.log('  ' + dim('assets/design-system.css · assets/fonts/Urbanist-Medium.ttf'));
  console.log('  ' + dim('tokens/tailwind.config.js · tokens/design-tokens.json'));
  console.log('  ' + dim('example.html · README.md'));
  if (skipped) {
    warn('有 ' + skipped + ' 个已存在的文件被保留（未覆盖）。如需升级，请加 --force。');
  }
  if (!written && !skipped) {
    console.log('  ' + dim('没有需要写入的文件。'));
  }
  console.log('');
  console.log(bold('下一步'));
  console.log('  1. 打开 ' + displayPath(path.join(root, 'example.html')) + ' 检查字体与 token');
  console.log('  2. 运行 ' + bold('rundad add buttons tables') + ' 添加组件');
  console.log('  3. 在页面中按顺序引入 Tailwind → tokens → design-system.css');
}

function addComponents(slugs, target, options) {
  var root = path.join(target, 'design-system');
  if (!exists(root)) {
    warn('当前目录还没有 design-system/，先执行初始化。');
    initProject(target, options);
    console.log('');
  }

  var items = readItems();
  var allowed = availableSlugs(items);
  var unknown = [];
  var installed = [];

  slugs.forEach(function (raw) {
    var slug = raw.replace(/^\.?\//, '').replace(/\.html$/, '');
    var item = findItem(items, slug);
    if (!item || OVERVIEW_SLUGS.indexOf(slug) !== -1) {
      unknown.push(raw);
      return;
    }
    var sourceFile = path.join(PKG_ROOT, 'preview/docs/components', slug + '.html');
    if (!exists(sourceFile)) {
      unknown.push(raw);
      return;
    }
    var html = fs.readFileSync(sourceFile, 'utf8');
    var section = extractSection(html, slug);
    var fragmentPath = path.join(root, 'components', slug + '.html');
    var previewPath = path.join(root, 'components', slug + '.preview.html');
    var fragment = [
      '<!-- RUNDA Design System · ' + item.title + ' (' + slug + ')',
      '     使用前请引入 Tailwind、design-system/tokens/tailwind.config.js 与 design-system/assets/design-system.css',
      '     带状态的组件需要自行绑定事件。 -->',
      section,
      ''
    ].join('\n');
    writeIfChanged(fragmentPath, fragment, true);
    writeIfChanged(previewPath, previewPage(item, section), true);
    installed.push(item);
  });

  var componentsDir = path.join(root, 'components');
  fs.mkdirSync(componentsDir, { recursive: true });
  fs.writeFileSync(path.join(componentsDir, 'README.md'), componentReadme(componentsDir));

  installed.forEach(function (item) {
    info('已添加 ' + item.title + ' (' + item.slug + ')');
    console.log('  ' + dim('片段  ' + displayPath(path.join(componentsDir, item.slug + '.html'))));
    console.log('  ' + dim('预览  ' + displayPath(path.join(componentsDir, item.slug + '.preview.html'))));
  });

  if (unknown.length) {
    fail('未知组件：' + unknown.join(', '));
    console.log('  运行 ' + bold('rundad list') + ' 查看可用组件。');
    if (!installed.length) process.exitCode = 1;
  }

  if (installed.length) {
    console.log('');
    console.log(bold('提示'));
    console.log('  · 片段用于粘贴到业务页面；预览页用于确认视觉。');
    console.log('  · 交互组件需自行绑定事件，参考 preview/assets/coss.js。');
  }
}

function listComponents() {
  var items = availableSlugs(readItems());
  var groups = [];
  items.forEach(function (item) {
    if (groups.indexOf(item.group) === -1) groups.push(item.group);
  });
  console.log(bold('RUNDA Design System · 可用组件') + dim('  (v' + PKG.version + ')'));
  groups.forEach(function (group) {
    console.log('');
    console.log(bold(group));
    items.filter(function (item) { return item.group === group; }).forEach(function (item) {
      console.log('  ' + item.slug + '  ' + dim(item.title));
    });
  });
  console.log('');
  console.log('用法：' + bold('rundad add <组件...>'));
}

function printHelp() {
  console.log('');
  console.log(bold('RUNDA Design System CLI') + dim('  v' + PKG.version));
  console.log('');
  console.log(bold('用法'));
  console.log('  rundad init [目录]                     初始化 design-system/');
  console.log('  rundad add <组件...> [--dir 目录]      添加组件片段与预览页');
  console.log('  rundad list                            查看可用组件');
  console.log('');
  console.log(bold('选项'));
  console.log('  -d, --dir <目录>   目标项目目录，默认当前目录');
  console.log('  -f, --force        覆盖已存在的 design-system 文件');
  console.log('  -v, --version      显示版本');
  console.log('  -h, --help         显示帮助');
  console.log('');
  console.log(bold('示例'));
  console.log('  rundad init');
  console.log('  rundad init ./my-hospital-app');
  console.log('  rundad add buttons tables kpi');
  console.log('');
}

/* ---------- 入口 ---------- */
function main() {
  var argv = process.argv.slice(2);
  var parsed;
  try {
    parsed = parseArgs(argv);
  } catch (e) {
    fail(e.message);
    process.exit(1);
  }

  var command = parsed.positional[0];
  var options = parsed.options;

  if (options.version) {
    console.log(PKG.version);
    return;
  }
  if (options.help || !command || command === 'help') {
    printHelp();
    return;
  }

  if (command === 'init') {
    var target = resolveTarget(options.dir || parsed.positional[1]);
    initProject(target, options);
    return;
  }

  if (command === 'add') {
    var slugs = parsed.positional.slice(1);
    if (!slugs.length) {
      fail('请指定组件，例如：rundad add buttons tables');
      console.log('  运行 ' + bold('rundad list') + ' 查看可用组件。');
      process.exitCode = 1;
      return;
    }
    addComponents(slugs, resolveTarget(options.dir), options);
    return;
  }

  if (command === 'list') {
    listComponents();
    return;
  }

  fail('未知命令：' + command);
  printHelp();
  process.exitCode = 1;
}

try {
  main();
} catch (e) {
  fail(e.message);
  process.exit(1);
}
