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
- `nyamap.ts`
  - 在一些低版本客户端环境中可能无法使用 Map，可以用这个代替。
- `nyanetwork.ts`
  - 网络请求和返回信息处理
- `nyastrings.ts`
  - 字符串相关处理，包含一些特定字符串的提取、生成等功能。
- `nyatemplate.ts`
  - 网页元素模板功能，可按需载入所需网页代码替换网页局部。
- `nyavisible.ts`
  - 快捷显示或隐藏及自动显示或隐藏元素，能保持默认 display 样式。

## 使用
0. 没有发布到 npm 等地方。如果你要使用，可以：
  - 直接拷贝需要的代码文件到自己的项目中。
  - 在有 git 的项目中引用，命令: `git submodule add https://github.com/kagurazakayashi/libNyaruko_Go.git <下载路径>` 。
1. 导入所需要功能所在的文件即可。例如：
  - 导入 `import NyaDom from "libNyaruko_TS/nyadom";`
  - 即可使用 `NyaDom.dom('div1');`
2. 具体使用方式见 Wiki 或源码中每个函数的注释。

## 详细使用帮助
参考 [Wiki](https://github.com/kagurazakayashi/libNyaruko_TS/wiki) ，在 Wiki 右侧的 Pages 点相关文件名即可了解。

## 以下对其中一些较为复杂的功能进行单独解释：

### 模板功能

`nyatemplate.ts` 包含模板网页载入功能，可专门做一个 `html` 文件或 `css` 文件存放一个或多个模板代码。

- HTML 模板演示代码：
```
<template id="subtemplate1">
  <div id="{{ var1 }}">{{ var2 }}</div>
</template>
```
- CSS 模板演示代码
```
@-template-subtemplate1 {
  div {
    display: {{ var1 }}
  }
  #{{ var2 }} {
    display: none;
  }
}
```

- 使用时：
1. 用 `NyaNetwork.get` 或 `NyaNetwork.post` 加载该模板，并将这些模板代码存到变量中。
2. 用 `NyaTemplate.loadTemplateHtml` 或 `NyaTemplate.loadTemplateCss` 从模板代码变量中加载所需资源。具体参数见注释。
- 范例：以上方「HTML 模板演示代码」为例：
```
NyaNetwork.get('index.template.html', undefined, (data: XMLHttpRequest | null, status: number) => {
    // ...... 一些检查返回结果的代码
    this.templateHTML = data.responseText;
}, false);
// ...... 使用时：
divs.innerHTML = NyaTemplate.loadTemplateHtml(this.templateHTML, 'subtemplate1', [
    ['var1', 'div1'],
    ['var2', 'hello'],
], false);
```

### 动画功能

- 渐变显示出来 `NyaAnimation.fadeIn` 和 渐变消失 `NyaAnimation.fadeOut` 的使用示例（具体参数解释见注释）：
```
NyaAnimation.fadeOut(div1, 1000, () => {
    div1.remove();
});
```
- 自定义动画 `NyaAnimation.animate` 的使用示例（具体参数解释见注释）：
```
NyaAnimation.animate(div1, {
    opacity: '0',
    width: '50%'
}, 1000, () => {
    console.log('END');
});
```
- 自定义动画序列 `NyaAnimation.animateList` 的使用示例（具体参数解释见注释）：
```
NyaAnimation.animateList([
    // [网页元素,动画字典,动画时长]
    [div1, { opacity: '0' }, 1000],
    [div1, { opacity: '1' }, 1000],
    [div1, { opacity: '0' }, 1000],
], () => {
    console.log('END');
});
```

### `nyacss.py`

在写 CSS 时不必写一堆 `-` 开头的兼容性代码，可以将这个脚本放在编译前的批处理中（例如 `package.json` 的 `scripts` 中）来自动添加。

- 使用 : `python3 nyacss.py 源文件路径.css 处理后文件路径.css`

## LICENSE
- [木兰宽松许可证， 第2版](http://license.coscl.org.cn/MulanPSL2)
- [Mulan Permissive Software License，Version 2 (Mulan PSL v2)](http://license.coscl.org.cn/MulanPSL2)
