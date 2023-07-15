# @hirishu10/simple-date-time

> Read the Official Documentation at → [https://simpledt.netlify.app/](https://simpledt.netlify.app/)

## Changelog v.2.0.0

- Major changes for version **v.2.0.0**
- Two new **Function/Hooks** added:
  - `getCustomMonth();`
  - `getCustomYear();`
- ## Some flag has been added, deprecated and modified. [#ref](https://simpledt.netlify.app/docs/intro#method-and-props-configuration)
- Custom function/hook **`getCustomDTFormatter().format();`** introduced for better formatting.
  - `getCustomDTFormatter(dateValue?)` - If you want to use the old date please provide an unix value inside the dateValue.
  - `format(formatValue, insertCharacters?)`
    - You have to pass `formatValue` ([Please read the Method and Props Config](https://simpledt.netlify.app/docs/intro#method-and-props-configuration)), Note: **\*add** space after each char.
    - `insertCharacters` is totally optional, if you need to provide a character at the end of each **_formatValue_** character, you can add it.
