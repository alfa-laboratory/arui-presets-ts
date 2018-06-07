Alfa Laboratory TS Presets
==========================

[![npm][npm-img]][npm]
[![license][license-img]][license]

[license]:         https://opensource.org/licenses/MIT
[license-img]:     https://img.shields.io/badge/License-MIT-brightgreen.svg
[npm-img]:         https://img.shields.io/npm/v/arui-presets-ts.svg
[npm]:             https://www.npmjs.org/package/arui-presets-ts

<br />

Набор конфигурационных файлов для компиляции и валидации typescript проектов, основанных на [arui-feather](https://github.com/alfa-laboratory/arui-feather).

Установка
---------
```
npm install arui-presets-ts --save-dev
```

Или, если вы используете yarn:
```
yarn add arui-presets-ts --dev
```

Использование линтеров
----------------------


#### eslint
Для правильной работы eslint вместе с ts вы можете унаследовать конфигурацию вашего eslint от `arui-presets-ts/eslint`.

К сожалению, разработчики eslint [очень нехотят](https://github.com/eslint/eslint/issues/3458) делать полноценную систему для общих конфигураций, так что вам 
необходимо так же установить `peerDependencies`.

```
npm install eslint-plugin-typescript eslint-plugin-import typescript-eslint-parser eslint-plugin-react --save-dev
```

Эта конфигурация описывает только правила, специфичные для ts. Для полноценного линтинга рекомендуется использовать ее
совместно с `arui-presets/eslint`.


Файл `.eslintrc.js` вашего проекта:
```js
module.exports = {
    extends: [
        require.resolve('arui-presets/eslint'),
        require.resolve('arui-presets-ts/eslint')
    ]
};
```

#### Конфигурация компилятора
Вы можете унаследовать конфигурацию `tsconfig.json` от `arui-presets-ts/tsconfig`
```json
{
    "extends": "./node_modules/arui-presets-ts/tsconfig"
}
```


Использование настроек webpack
------------------------------

В пакете содержатся файл с конфигурацией webpack.

- `webpack.typescript.js` - настройки для использования typescript в проекте

Лучший способ использовать ее — объединять их пакетом [webpack-merge](https://github.com/survivejs/webpack-merge)

```js
const ARUI_TEMPLATE = require('arui-presets/webpack.base');
const ARUI_TS_TEMPLATE = require('arui-presets-ts/webpack');
const merge = require('webpack-merge');

module.exports = merge.smart(
    { entry: 'src/index.js' },
    ARUI_TEMPLATE,
    ARUI_TS_TEMPLATE
);
```


Лицензия
--------

```
The MIT License (MIT)

Copyright (c) 2017 Alfa Laboratory

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
