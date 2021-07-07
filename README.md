# YQ

雅诗做 TS 时自用的通用工具文件。

- 没有发布到 npm 等地方。如果你要使用，可以：
  - 直接拷贝需要的代码文件到自己的项目中。
  - 在有 git 的项目中引用，命令: `git submodule add https://github.com/kagurazakayashi/yq.git 所需路径` 。

## `yq.ts`

通用工具文件，一些跨项目常用的代码会放在里面，全部为 `static` 方法可以直接用。

  - 包含了一些名称类似于 JQ 的方法。
  - 包含一个模板网页载入功能，可专门做一个 html 文件里面包含 `<template id="模板名称">其他网页代码和变量{{ 变量名称 }}</template>` 来进行模板网页的加载。
  - 其他详见文件内注释。

## `yqmap.ts`

在一些低版本客户端环境中，可能无法使用 Map，可以用这个代替。

## `yqcss.py`

在写 CSS 时不必写一堆 `-` 开头的兼容性代码，可以将这个脚本放在编译前的批处理中（例如 `package.json` 的 `scripts` 中）来自动添加。

- 使用 : `python3 yqcss.py 源文件路径.css 处理后文件路径.css`