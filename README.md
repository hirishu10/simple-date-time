# @hirishu10/simple-date-time · ![Version](https://img.shields.io/npm/v/@hirishu10/simple-date-time?label=version) <a href="https://img.shields.io/npm/l/react-native">![License](https://img.shields.io/npm/l/@hirishu10/simple-date-time)</a> <a href="https://img.shields.io/readthedocs/react">![Downloads](https://img.shields.io/npm/dw/@hirishu10/simple-date-time)</a> <a href="https://img.shields.io/badge/Github-hirishu10-lightgrey">![DocsPassing](https://img.shields.io/badge/Github-hirishu10-lightgrey)</a>

<!--  -->

Simple and very helpful package to get the Date Time functionality.

Now everyone can create full fletched `Clock` and `Date` `Time` service using this package hope you like this Thank You 🙂

<!-- Contents -->

# Content

- [Getting started](#getting-started)
- [Overview](#overview)
- [Method and Props Configuration](#method-and-props-configuration)
- [Author](#author)
- [License](#license)
<!-- Contents -->

<!-- Getting Started -->

## Prerequisites

- Node (version 16 or greater).
- Yarn (version 1.5 or greater).
- A fork of the repo (for any contributions).
- Please read the docs carefully Thanks

## Installation

> Using NPM

```bash
npm i @hirishu10/simple-date-time
```

> Using Yarn

```bash
yarn add @hirishu10/simple-date-time
```

# Getting started

##### Simple and Customized Date-Time Functionality

```javaScript
import {
  getCustomDayNameFull,
  getCustomDayNameShort,
  getCustomMonthNameFull,
  getCustomMonthNameShort,
  getCustomDate,
  getCustomHour,
  getCustomMinute,
  getCustomSecond,
  getCustomAmPm,
  getCustomFullDateAndTimeWithAmPm,
  getCustomFullDateAndTimeWithAmPmIncludingSeconds
} from "@hirishu10/simple-date-time";
```

```javaScript
  const fullDay = getCustomDayNameFull();
  const shortDay = getCustomDayNameShort();
  const fullMonth = getCustomMonthNameFull();
  const shortMonth = getCustomMonthNameShort();
  const toDate = getCustomDate();
  const hour = getCustomHour();
  const minute = getCustomMinute();
  const second = getCustomSecond();
  const amPm = getCustomAmPm();
  const timestampLower = getCustomFullDateAndTimeWithAmPm();
  const timestampwithSeconds = getCustomFullDateAndTimeWithAmPmIncludingSeconds();
```

##### Done 🙂 you don't need to write any further code to get the Date-Time Functionality just calling the simple function and you can good to go

<!-- Getting Started -->

<!-- overview -->

# Overview

#### 📖 Below we provide examples with code how to use!

- getCustomDayNameFull();

```javaScript
const fullDay = getCustomDayNameFull();
Output: Friday
```

- getCustomDayNameShort();

```javaScript
const shortDay = getCustomDayNameShort();
Output: Fri
```

- getCustomMonthNameFull();

```javaScript
const fullMonth = getCustomMonthNameFull();
Output: October
```

- getCustomMonthNameShort();

```javaScript
const shortMonth = getCustomMonthNameShort();
Output: Oct
```

- getCustomDate();

```javaScript
const toDate = getCustomDate();
Output: 10 // todate
```

- getCustomHour();

```javaScript
const hour = getCustomHour();
Output: 10 // current hour
```

- getCustomMinute();

```javaScript
const minute = getCustomMinute();
Output: 10 // current minute
```

- getCustomSecond();

```javaScript
const second = getCustomSecond();
Output: 10 // current seconds
```

- getCustomAmPm();

```javaScript
const amPm = getCustomAmPm();
Output: am/pm
```

- getCustomFullDateAndTimeWithAmPm();

```javaScript
const timestampLower = getCustomFullDateAndTimeWithAmPm();
```

```bash
Output: 10 October Friday 10:00am
```

- getCustomFullDateAndTimeWithAmPmIncludingSeconds();

```javaScript
const timestampwithSeconds = getCustomFullDateAndTimeWithAmPmIncludingSeconds();
```

```bash
Output: 10 October Friday 10:00:00am
```

<!--  -->

# Method and Props Configuration

🔧 Below are the props which you can use to customized the date-time style

| Method               |  Type   | Description                                                                                      |
| :------------------- | :-----: | :----------------------------------------------------------------------------------------------- |
| `capsOnFlag`         | boolean | By default False If Provide True then return the String in UpperCase else in LowerCase           |
| `properCaseFlag`     | boolean | By default True Providing this the String will return in Proper structure else all in lower case |
| `changeToStringFlag` | boolean | Totally Optional if you need in String make true the flag else ignore                            |
| `shortOrFullFlag`    | boolean | By Default False which return the Day, Month in Short else Make True to return in Full           |
| `lowerOrUpperFlag`   | boolean | By Default False which return the Day, Month in lowerCase else Make True to return in UpperCase  |

<!-- method and props  -->

<!-- author  -->

# Author

#### Thank You All 🙏🏻

Made with 🖤 by

**Author** : [Rishu Chowdhary](https://github.com/hirishu10)

**Email** : hi.10rishu@gmail.com

<!-- author  -->

<!-- licesnce  -->

# License

#### MIT License 📄

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/hirishu10/simple-date-time/blob/main/LICENSE) file for details

<!-- licesnce  -->
