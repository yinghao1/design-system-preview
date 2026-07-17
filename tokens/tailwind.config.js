// RUNDA 极简质感设计系统配置
// 风格基调：低饱和 / 大留白 / 巨头官网 / 谈静高级
// 适用：医院信息分管院长、信息科主任高层展示
window.tailwind = window.tailwind || {};
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 主色：墨黑 + 极克制的医疗深蓝（仅用于强调与数字）
        ink: {
          50:  '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B'
        },
        // 强调色：RUNDA 品牌深青（仅用于关键数字、图表轴线、链接）
        cdx: {
          50:  '#F0F7F8',
          100: '#D9EBED',
          200: '#B0D6DB',
          300: '#7FBAC2',
          400: '#4D9CA7',
          500: '#2A7F8B',
          600: '#1D6571',
          700: '#185058',
          800: '#143F47',
          900: '#0F2F35',
          950: '#081B1F'
        },
        // 辅色：暖米白 / 浅金 用于"治理后"对比
        warm: {
          50:  '#FBF9F4',
          100: '#F5F0E4',
          200: '#E8DCC1',
          300: '#D6C396',
          400: '#C2A968',
          500: '#A88B4A',
          600: '#8A6F38',
          700: '#6E582C'
        },
        // 状态色（极克制）
        success: '#3F8F5C',
        warning: '#C28A2C',
        danger:  '#A8453B'
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Noto Sans SC"', '"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'sans-serif'],
        display: ['"Inter"', '"PingFang SC"', '"Helvetica Neue"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      fontSize: {
        // 面向 40-55 岁高层 + 投影场景：字号上调、字重加重、对比加强
        'hero':    ['clamp(4rem, 6.5vw, 6.5rem)', { lineHeight: '1.08', letterSpacing: '-0.035em', fontWeight: '400' }],
        'h1':      ['clamp(2.5rem, 4vw, 3.75rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '500' }],
        'h2':      ['clamp(1.75rem, 2.4vw, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3':      ['1.375rem', { lineHeight: '1.45', fontWeight: '600' }],
        'lead':    ['1.083rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body':    ['1.0625rem', { lineHeight: '1.75', fontWeight: '400' }],
        'caption': ['0.9375rem', { lineHeight: '1.6', fontWeight: '500', letterSpacing: '0.005em' }],
        'eyebrow': ['0.8125rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.16em' }],
        'kpi':     ['clamp(3.5rem, 5.5vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '500' }],
        // §30 工作台专用字号 token
        'brand-cn': ['14px', { lineHeight: '1.4', fontWeight: '700', letterSpacing: '0.02em' }],
        'brand-en': ['13px', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.16em' }],
        'patient-name': ['15px', { lineHeight: '1.4', fontWeight: '600' }],
        'patient-tag':  ['11px', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.04em' }]
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem',
        // §30 工作台紧凑布局
        'ws-pad': '20px',     // content padding
        'ws-gap': '10px',     // content gap
        'ws-query': '260px'   // QueryCard 宽度
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        DEFAULT: '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px'
      },
      boxShadow: {
        // 三层克制阴影（大留白风格基本不用强阴影）
        'subtle': '0 1px 2px rgba(15, 23, 42, 0.04)',
        'soft':   '0 4px 16px rgba(15, 23, 42, 0.06)',
        'lift':   '0 12px 40px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #FBF9F4 0%, #F5F0E4 100%)',
        'gradient-cdx':  'linear-gradient(135deg, #2A7F8B 0%, #185058 100%)',
        'gradient-fade': 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(250,250,250,1) 100%)'
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      animation: {
        'fade-in':   'fadeIn 800ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-up':   'fadeUp 900ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-soft':'pulseSoft 4s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(16px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        pulseSoft: { '0%,100%': { opacity: 0.6 }, '50%': { opacity: 1 } }
      },
      maxWidth: {
        'narrow': '720px',
        'reading': '880px',
        'wide': '1280px',
        'ultra': '1440px'
      }
    }
  }
};
