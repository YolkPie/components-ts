module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      ['@babel/env', { useBuiltIns: 'usage', corejs: 3 }],
      '@babel/react',
      '@babel/typescript'
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/proposal-object-rest-spread',
      '@babel/transform-react-jsx',
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      '@babel/proposal-class-properties',
      [
        'babel-plugin-react-css-modules',
        {
          generateScopedName: '[local]___[hash:base64:5]',
          exclude: 'node_modules',
          filetypes: {
            '.scss': {
              syntax: 'postcss-scss',
              plugins: ['postcss-nested']
            }
          }
        }
      ]
    ]
  };
};
