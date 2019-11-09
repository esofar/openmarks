
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  history: 'hash',
  base: '/',
  publicPath: './',
  outputPath: './build',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'Openmarks - A high-quality resource navigation, built for developers.',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
