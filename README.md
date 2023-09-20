![libNyaruko_TS](favicon.ico)

# libNyaruko_TS

- 雅诗编程封装代码 libNyaruko ( TypeScript 版 )
  - 通用工具库，一些跨项目常用的代码会放在里面。
  - 分为单独的组件，可以按需引入。
  - 几乎都是 `static` 方法，可以直接用。
  - (后端: [libNyaruko_Go](https://github.com/kagurazakayashi/libNyaruko_Go) )
- 所有 UI 组件相关类已移动到 [YAUI](https://github.com/kagurazakayashi/yaui) 。

## 组件

- `animation.ts`
  - 动画相关
- `nyaargv.ts`
  - 地址栏参数相关
- `nyaas.ts`
  - 类型强制转换和创建元素相关，可和 `nyadom.ts` 配合使用
- `nyacalc.ts`
  - 计算相关
- `nyacolor.ts`
  - 色彩转换和调整
- `nyacolors.ts`
  - 色彩库，具体收录色彩目录和预览见 [nyacolors.md](nyacolors.md)
- `nyaconditionalrendering.ts`
  - 处理嵌入到网页元素属性中的指令
- `nyadom.ts`
  - 网页元素的各种获取、处理、查找、检查
- `nyaclass.ts`
  - 提供兼容并增强的 classList 处理功能
- `nyaevent.ts`
  - 事件监听
- `nyamap.ts`
  - 在一些低版本客户端环境中可能无法使用 Map，可以用这个代替
- `nyanetwork.ts`
  - 网络请求和返回信息处理
- `nyastrings.ts`
  - 字符串相关处理，包含一些特定字符串的提取、生成等功能。
- `nyatemplate.ts`
  - 网页元素模板功能，可按需载入所需网页代码替换网页局部。
- `nyavisible.ts`
  - 快捷显示或隐藏及自动显示或隐藏元素，能保持默认 display 样式
- `nyacsv.ts`
  - CSV 表格处理
- `nyadebug.ts`
  - 调试工具
- `nyacompressrle.ts`
  - 压缩：行程长度压缩 (RLE)
- `nyacompresshuffman.ts`
  - 压缩：哈夫曼编码压缩 (Huffman Coding)
- `nyacompress.ts`
  - 压缩：自有字符串压缩格式（基于哈夫曼编码和二进制转换）

## 使用

0. 建议使用 git submodule 引入以便可选编译，你可以：
   1. 直接拷贝需要的代码文件到自己的项目中。
   2. 在有 git 的项目中引用，命令: `git submodule add https://github.com/kagurazakayashi/libNyaruko_TS.git <下载路径>` 。
1. 导入所需要功能所在的文件即可。例如：
   1. 导入 `import NyaDom from "libNyaruko_TS/nyadom";`
   2. 即可使用 `NyaDom.dom('div1');`
2. 具体使用方式见 **[Wiki](https://github.com/kagurazakayashi/libNyaruko_TS/wiki)** 或源码中每个函数的注释。
   1. 可以执行 `python3 Tools/nyawiki.py . wiki` 生成 wiki 。

## 详细使用帮助

以下对其中一些较为复杂的功能进行单独解释或者演示：

- [工具脚本.md](https://github.com/kagurazakayashi/libNyaruko_TS/wiki/工具脚本)
- [模板功能.md](https://github.com/kagurazakayashi/libNyaruko_TS/wiki/模板功能)
- [动画功能.md](https://github.com/kagurazakayashi/libNyaruko_TS/wiki/动画功能)

## LICENSE

Copyright (c) 2022 KagurazakaYashi libNyaruko_TS is licensed under Mulan PSL v2. You can use this software according to the terms and conditions of the Mulan PSL v2. You may obtain a copy of Mulan PSL v2 at: http://license.coscl.org.cn/MulanPSL2 THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE. See the Mulan PSL v2 for more details.
