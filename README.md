# YQ

雅诗做 TS 时自用的通用工具文件。

- 没有发布到 npm 等地方。如果你要使用，可以：
  - 直接拷贝需要的代码文件到自己的项目中。
  - 在有 git 的项目中引用，命令: `git submodule add https://github.com/kagurazakayashi/yq.git 所需路径` 。

## `yq.ts`

通用工具文件，一些跨项目常用的代码会放在里面，全部为 `static` 方法可以直接用。

  - 包含了一些名称类似于 JQ 的方法。
  - 功能用法详见文件内注释。
  - 以下对其中一些较为复杂的功能进行解释：

### 模板功能

`yq.ts` 包含模板网页载入功能，可专门做一个 `html` 文件或 `css` 文件存放一个或多个模板代码。

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
1. 用 YQ.get 或 YQ.post 加载该模板，并将这些模板代码存到变量中。
2. 用 loadTemplateHtml 或 loadTemplateCss 从模板代码变量中加载所需资源。具体参数见注释。
- 范例：以上方「HTML 模板演示代码」为例：
```
YQ.get('index.template.html', undefined, (data: XMLHttpRequest | null, status: number) => {
    // ...... 一些检查返回结果的代码
    this.templateHTML = data.responseText;
}, false);
// ...... 使用时：
divs.innerHTML = YQ.loadTemplateHtml(this.templateHTML, 'subtemplate1', [
    ['var1', 'div1'],
    ['var2', 'hello'],
], false);
```

### 动画功能

- 渐变显示出来 `fadeIn` 和 渐变消失 `fadeOut` 的使用示例（具体参数解释见注释）：
```
YQ.fadeOut(div1, 1000, () => {
    div1.remove();
});
```
- 自定义动画 `animate` 的使用示例（具体参数解释见注释）：
```
YQ.animate(div1, {
    opacity: '0',
    width: '50%'
}, 1000, () => {
    console.log('END');
});
```
- 自定义动画序列 `animateList` 的使用示例（具体参数解释见注释）：
```
YQ.animateList([
    // [网页元素,动画字典,动画时长]
    [div1, { opacity: '0' }, 1000],
    [div1, { opacity: '1' }, 1000],
    [div1, { opacity: '0' }, 1000],
], () => {
    console.log('END');
});
```

## `yqmap.ts`

在一些低版本客户端环境中，可能无法使用 Map，可以用这个代替。

## `yqcss.py`

在写 CSS 时不必写一堆 `-` 开头的兼容性代码，可以将这个脚本放在编译前的批处理中（例如 `package.json` 的 `scripts` 中）来自动添加。

- 使用 : `python3 yqcss.py 源文件路径.css 处理后文件路径.css`