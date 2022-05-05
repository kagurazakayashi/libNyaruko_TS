# libNyaruko_TS
- 雅诗编程封装代码 libNyaruko ( TypeScript 版 )
  - 通用工具库，一些跨项目常用的代码会放在里面。
  - 分为单独的组件，可以按需引入。
  - 全部为 `static` 方法可以直接用。
  - 包含了一些名称类似于 JQ 的方法。
  - (后端: [libNyaruko_Go](https://github.com/kagurazakayashi/libNyaruko_Go) )

## 组件

- `animation.ts`
  - 动画相关
- `nyaargv.ts`
  - 地址栏参数相关
- `nyaas.ts`
  - 类型强制转换相关
- `nyacalc.ts`
  - 计算相关
- `nyacolors.ts`
  - 色彩转换和调整
- `nyaconditionalrendering.ts`
  - 处理嵌入到网页元素属性中的指令
- `nyadom.ts`
  - 网页元素的各种获取、处理、查找、检查
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

## 使用
0. 没有发布到 npm 等地方。如果你要使用，可以：
  - 直接拷贝需要的代码文件到自己的项目中。
  - 在有 git 的项目中引用，命令: `git submodule add https://github.com/kagurazakayashi/libNyaruko_Go.git <下载路径>` 。
1. 导入所需要功能所在的文件即可。例如：
  - 导入 `import NyaDom from "libNyaruko_TS/nyadom";`
  - 即可使用 `NyaDom.dom('div1');`
2. 具体使用方式见 **[Wiki](https://github.com/kagurazakayashi/libNyaruko_TS/wiki)** 或源码中每个函数的注释。
  - 可以执行 `python3 Tools/nyawiki.py . wiki` 生成 wiki 。

## 详细使用帮助

以下对其中一些较为复杂的功能进行单独解释或者演示：

- [工具脚本.md](https://github.com/kagurazakayashi/libNyaruko_TS/wiki/工具脚本)
- [模板功能.md](https://github.com/kagurazakayashi/libNyaruko_TS/wiki/模板功能)
- [动画功能.md](https://github.com/kagurazakayashi/libNyaruko_TS/wiki/动画功能)

## LICENSE
- [木兰宽松许可证， 第2版](http://license.coscl.org.cn/MulanPSL2)
- [Mulan Permissive Software License，Version 2 (Mulan PSL v2)](http://license.coscl.org.cn/MulanPSL2)
