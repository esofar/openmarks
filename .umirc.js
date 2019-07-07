
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  history: 'browser',
  base: '/openmarks',
  publicPath: '/openmarks/',
  outputPath: './docs',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'Openmarks - 开发者优质资源导航',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
