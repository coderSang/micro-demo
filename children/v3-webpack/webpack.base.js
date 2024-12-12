/* eslint-disable no-undef */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const { resolve: _resolve } = path
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require('copy-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const stylesHandler = 'vue-style-loader'
module.exports = {
  entry: './src/main.ts',
  output: {
    path: _resolve(__dirname, 'dist'),
    publicPath: '/micro/children1',
    filename: 'js/[contenthash].bundle.js',
    clean: true,
    compareBeforeEmit: false,
    assetModuleFilename: 'images/[hash][ext][query]', // 指定输出的图片资源目录和文件名的格式
    sourcePrefix: ''
  },
  plugins: [
    AutoImport({
      eslintrc: {
        enabled: true
      },
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: '@kazupon/vue-i18n-loader'
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [stylesHandler, 'css-loader', 'less-loader']
      },
      {
        test: /\.pdf$/i,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve(__dirname, './src/assets/images/trans'),
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        exclude: path.resolve(__dirname, './src/assets/images/trans'),
        test: /\.(eot|ttf|woff|woff2|png|jpg|gif|svg)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[hash][ext][query]' // 针对于图片文件定义输出路径和名称，'images/' 是你想要的特定文件夹
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': _resolve(__dirname, 'src/')
    },
    mainFiles: ['index'],
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.vue', '...']
  }
}
