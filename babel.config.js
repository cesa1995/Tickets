module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          src: './src/',
          constanst: './src/contants',
          assets: './src/assets',
          components: './src/components',
          dommy: './src/dommyData',
          pages: './src/pages',
          interfaces: './src/types',
          utils: './src/utils',
          context: './src/context',
        },
      },
    ],
  ],
};
