# yup-locale-fa
Persian/Farsi locale and translation for yup default messages

## Getting Started

```sh
$ yarn add yup yup-locale-fa
# or...
$ npm i yup yup-locale-fa
```

then, set a locale object as yup's default message dictionary with `setLocale` function.

```js
import { setLocale } from "yup";
import fa from "yup-locale-fa";
setLocale(fa);
//Or use a flavor or your choice
//for now only descriptive flavor is available
import { descriptive } from "yup-locale-fa";
setLocale(descriptive);
```

For more info, see [yup's README](https://github.com/jquense/yup#using-a-custom-locale-dictionary).
