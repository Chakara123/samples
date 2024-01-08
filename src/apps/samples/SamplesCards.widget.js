module.exports = {
  entry: './src/apps/samples/index.tsx',
  shortcode: 'Samples',
  title: 'Banner Cards',
  status: 'stable',
  description: 'Incredible banner trading cards',
  preview: {
    url: `${process.env.PUBLIC_URL}/storybook/iframe.html?id=widgets-emoji-cards-components--cat&viewMode=story`,
  },
  useExternalPeerDependencies: ['react', 'react-dom', 'react-intl'],

  additionalCustomProperties: {
    availableTranslations: [
      'ar',
      'de',
      'en',
      'es',
      'fr',
      'it',
      'ja',
      'ko',
      'pl',
      'pt',
      'ru',
      'tr',
      'zh',
    ],
  },
};
