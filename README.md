# 🌙 Moon

fork自： git@github.com:ulissesferreira/moon.git

## 运行npm run build:library然后找到moon.umd.js拿到预编译后的umd格式XX组件

- 原地格式化UMD文件，在第七行删除".moon={}"
- 在倒数第4行确认组件的名字，如t.Piechart = KB，那这个组件名就是Piechart
- 重命名moon.umd.js文件为"组件名.umd.js（如Piechart.umd.js),注意区分大消息！
- copy到weblock的/public/comp目录下，并在weblock项目中添加该组件的元数据
- 

[![npm (scoped)](https://img.shields.io/npm/v/@ulissesferreira/moon)](https://www.npmjs.com/package/@ulissesferreira/moon)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@ulissesferreira/moon)](https://bundlephobia.com/result?p=@ulissesferreira/moon@latest)
[![NPM](https://img.shields.io/npm/l/@ulissesferreira/moon)](https://github.com/ulissesferreira/moon/blob/main/LICENSE)

A lightweight Vue 3 component library.

When you are starting a new prototype you want to be able to develop features fast. We created this component library as a way for us to build products quickly without having to deal with complicated packages and a huge bundle sizes.

## Usage

First install the library using your prefered package manager

```bash
yarn add @ulissesferreira/moon
```

then you can import the available components like so

```vue
import { Button } from '@ulissesferreira/moon'
```

## Available commands

Here is a list of all available npm commands.

**Starting the dev environment**
We use Vue Press to hold our component documentation and examples

```bash
yarn dev
```

**Building the documentation**

```bash
yarn build
```

**Serving the documentation**

```bash
yarn serve
```

**Building the library bundles**

```bash
yarn build:library
```

**Analyzing bundle sizes with [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)**

```bash
yarn analyze
```

**Lint all files**

```bash
yarn lint
```

**Format all files**
```bash
yarn format
```
