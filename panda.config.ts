import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  globalCss: {
    html: {
      bg: 'background',
      color: 'text',
      fontWeight: '500',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      gap: '50px',
      mx: 'auto',
      maxW: '1320px',
      minH: '100vh',
      paddingInline: '2rem',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      gap: '100px',
    },
    '.mask': {
      maskRepeat: 'no-repeat',
      maskSize: '100%',
    },
    '.company-logo-airbus': {
      maskImage: 'url(/companies/airbus.png)',
      width: '151px',
      height: '28px',
    },
    '.company-logo-mgs': {
      maskImage: 'url(/companies/mgs.png)',
      width: '370px',
      height: '58px',
    },
    '.company-logo-pytheas': {
      maskImage: 'url(/companies/pytheas.png)',
      width: '233px',
      height: '28px',
    },
    '.company-logo-ssg': {
      maskImage: 'url(/companies/ssg.png)',
      width: '258px',
      height: '36px',
    },
  },
  theme: {
    tokens: {
      colors: {
        black: { value: '#030A07' },
        white: { value: '#E6F8F0' },
        light: {
          '1': { value: '#FBFEFD' },
          '2': { value: '#F4FBF7' },
          '3': { value: '#E6F7ED' },
          '4': { value: '#D6F1E3' },
          '5': { value: '#C3E9D7' },
          '6': { value: '#ACDEC8' },
          '7': { value: '#8BCEB6' },
          '8': { value: '#56BA9F' },
          '9': { value: '#29A383' },
          '10': { value: '#26997B' },
          '11': { value: '#208368' },
          '12': { value: '#1D3B31' },
        },
        dark: {
          '1': { value: '#0D1512' },
          '2': { value: '#121C18' },
          '3': { value: '#0F2E22' },
          '4': { value: '#0B3B2C' },
          '5': { value: '#114837' },
          '6': { value: '#1B5745' },
          '7': { value: '#246854' },
          '8': { value: '#2A7E68' },
          '9': { value: '#29A383' },
          '10': { value: '#27B08B' },
          '11': { value: '#1FD8A4' },
          '12': { value: '#ADF0D4' },
        },
      },
      assets: {
        airbus: { value: { type: 'url', value: '/companies/airbus.png' } },
      },
    },
    semanticTokens: {
      colors: {
        background: {
          DEFAULT: {
            value: { base: '{colors.light.2}', _dark: '{colors.dark.1}' },
          },
          alt: {
            value: { base: '{colors.light.1}', _dark: '{colors.dark.2}' },
          },
        },
        interactive: {
          DEFAULT: {
            value: { base: '{colors.light.3}', _dark: '{colors.dark.3}' },
          },
          hover: {
            value: { base: '{colors.light.4}', _dark: '{colors.dark.4}' },
          },
          active: {
            value: { base: '{colors.light.5}', _dark: '{colors.dark.5}' },
          },
        },
        border: {
          value: { base: '{colors.light.7}', _dark: '{colors.dark.7}' },
        },
        focusring: {
          value: { base: '{colors.light.8}', _dark: '{colors.dark.8}' },
        },
        button: {
          DEFAULT: {
            value: { base: '{colors.light.9}', _dark: '{colors.dark.9}' },
          },
          hovered: {
            value: { base: '{colors.light.10}', _dark: '{colors.dark.10}' },
          },
        },
        links: {
          value: { base: '{colors.light.11}', _dark: '{colors.dark.11}' },
        },
        text: {
          value: { base: '{colors.light.12}', _dark: '{colors.dark.12}' },
        },
      },
    },
  },
  outdir: 'styled-system',
  jsxFramework: 'react',
});
