/* RUNDA Design System · 共享 Tailwind 配置
   用法：<script src="https://cdn.tailwindcss.com"></script> 之后引入本文件。
   色值与 B 端 tokens/design-tokens.json 保持一致；C 端组件另有 c-mobile.css 语义类。 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#FAFAFA', 100: '#F4F4F5', 200: '#E4E4E7', 300: '#D4D4D8', 400: '#A1A1AA',
          500: '#71717A', 600: '#52525B', 700: '#3F3F46', 800: '#27272A', 900: '#18181B', 950: '#09090B'
        },
        cdx: {
          50: '#F0F7F8', 100: '#D9EBED', 200: '#B0D6DB', 300: '#7FBAC2', 400: '#4D9CA7',
          500: '#2A7F8B', 600: '#1D6571', 700: '#185058', 800: '#143F47', 900: '#0F2F35'
        },
        warm: { 50: '#FBF9F4', 100: '#F5F0E4', 200: '#E8DCC1', 300: '#D6C396', 700: '#6E582C' }
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Noto Sans SC"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Inter"', '"PingFang SC"', 'sans-serif'],
        numeric: ['"Urbanist"', '"PingFang SC"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace']
      },
      fontSize: {
        eyebrow: ['0.8125rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.16em' }]
      },
      maxWidth: { ultra: '1440px' }
    }
  }
};
