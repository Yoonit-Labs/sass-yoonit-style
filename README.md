[<img src="https://raw.githubusercontent.com/Yoonit-Labs/nativescript-yoonit-camera/development/logo_cyberlabs.png" width="300">](https://cyberlabs.ai/)

# Sass Yoonit Style

![Version](https://img.shields.io/npm/v/@yoonit/nativescript-camera?color=lightgrey&style=for-the-badge&logo=npm)
![Downloads](https://img.shields.io/npm/dm/@yoonit/nativescript-camera?color=lightgrey&logo=npm&style=for-the-badge)
![SASS](https://img.shields.io/badge/SASS%20-hotpink.svg?color=lightgrey&logo=SASS&style=for-the-badge)
![MIT license](https://img.shields.io/npm/l/@yoonit/nativescript-camera?color=lightgrey&style=for-the-badge)

A SASS lib to provide:
- Diverse variables and mixins
- Responsive grid and flex system
- Diverse theme range
- Components styles
- Possibility of creating themes
- Created using BEM methodology

## Installation

```javascript
npm i -s @yoonit/style
```

## Usage

To access all the features of yoonit/style, import the theme that you want and the index.sass, in your file or globally.

```sass
@import '@yoonit/style'
@import '@yoonit/style/themes/{themeName}'
```

If you want to import somenthing especific of the project, for example, the button css, you can import that directy.

```sass
@import '@yoonit/style'
@import '@yoonit/style/atoms/YooButton'
```


## Themes

These are all the themes available for now.

[<img src="https://github.com/Yoonit-Labs/sass-yoonit-style/blob/development/public/readme-img/default.png" width="250">](https://cyberlabs.ai/)
[<img src="https://github.com/Yoonit-Labs/sass-yoonit-style/blob/development/public/readme-img/blue.png" width="250">](https://cyberlabs.ai/)
[<img src="https://github.com/Yoonit-Labs/sass-yoonit-style/blob/development/public/readme-img/brown.png" width="250">](https://cyberlabs.ai/)
[<img src="https://github.com/Yoonit-Labs/sass-yoonit-style/blob/development/public/readme-img/green.png" width="250">](https://cyberlabs.ai/)
[<img src="https://github.com/Yoonit-Labs/sass-yoonit-style/blob/development/public/readme-img/orange.png" width="250">](https://cyberlabs.ai/)
[<img src="https://github.com/Yoonit-Labs/sass-yoonit-style/blob/development/public/readme-img/purple.png" width="250">](https://cyberlabs.ai/)

## Creating themes

Create a scss file in your project, in this file, import the Yoonit Style and all the components styles you want.

Yoonit Style has 3 color objects ($primary, $danger, $grey) with 5 variables each, to change the color, declare the object and the variables and change the values as you wish.

The variables names are the name of the object + the shade range. The shade ranges are: Darkest, Dark, Base, Light, Lightest.

Example: `primaryDarkest, dangerBase, greyLightest`.

You can create other objects and other color variables, but the components will not react to them unless you change the components styles.

The project has two fonts variables, `$font-primary` and `$font-second`, to change them, just set the variable to the new value.

This is the default theme, take this as a base to construct your own:

```scss
@import '@yoonit/style';

/*==== Import Quarks ====*/

@import '@yoonit/style/quarks/YooFlexLayout.sass';
@import '@yoonit/style/quarks/YooGridLayout.sass';
@import '@yoonit/style/quarks/YooIndicator.sass';
@import '@yoonit/style/quarks/YooScrollView.sass';

/*==== Import Atoms ====*/

@import '@yoonit/style/atoms/YooAnimation.sass';
@import '@yoonit/style/atoms/YooAvatar.sass';
@import '@yoonit/style/atoms/YooButton.sass';
@import '@yoonit/style/atoms/YooCheckButton.sass';
@import '@yoonit/style/atoms/YooDropDown.sass';
@import '@yoonit/style/atoms/YooIcon.sass';
@import '@yoonit/style/atoms/YooSeparator.sass';
@import '@yoonit/style/atoms/YooStepper.sass';
@import '@yoonit/style/atoms/YooSwitch.sass';

/*==== Import Molecules ====*/

@import '@yoonit/style/molecules/YooButtonToggle.sass';
@import '@yoonit/style/molecules/YooCard.sass';
@import '@yoonit/style/molecules/YooFormGroup.sass';
@import '@yoonit/style/molecules/YooHeader.sass';
@import '@yoonit/style/molecules/YooModal.sass';
@import '@yoonit/style/molecules/YooNotify.sass';
@import '@yoonit/style/molecules/YooPagination.sass';
@import '@yoonit/style/molecules/YooPostCard.sass';
@import '@yoonit/style/molecules/YooQuizQuestion.sass';
@import '@yoonit/style/molecules/YooSegmentedBar.sass';
@import '@yoonit/style/molecules/YooSelectButton.sass';
@import '@yoonit/style/molecules/YooSwitchCard.sass';
@import '@yoonit/style/molecules/YooTableAttribute.sass';

/*==== Brand Color ====*/

$primary: (
  'primaryDarkest': #008080,
  'primaryDark': #1DBABA,
  'primaryBase': #47C8C3,
  'primaryLight': #B0E7E5,
  'primaryLightest': #C3ECEb
);

/*==== Danger Color ====*/

$danger: (
  'dangerDarkest': #CB0A22,
  'dangerDark': #E83C4B,
  'dangerBase': #F4596C,
  'dangerLight': #FF7888,
  'dangerLightest': #FF99A5
);

/*==== Neutral Color ====*/

$grey: (
  'greyDarkest': #212325,
  'greyDark': #5A5F67,
  'greyBase': #8F959F,
  'greyLight': #D6DBE2,
  'greyLightest': #F5F6F7
);

/*==== Basic Colors ====*/

$black: #000000;
$white: #FFFFFF;
$transparent: rgba(255, 255, 255, 0);

/*==== Font ====*/

$font-primary: Montserrat, sans-serif;
$font-second: Arial, sans-serif;

$font-size-tn: 8px;
$font-size-xs: 10px;
$font-size-sm: 12px;
$font-size-md: 14px;
$font-size-lg: 16px;
$font-size-xl: 20px;
$font-size-hg: 32px;

/*==== Spacing ====*/

$spacing-tn: 2px;
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;
$spacing-hg: 64px;

```

### Helpers

| Name               | Input/Format | Usage   (sass)                        | Description |
| -                  | -            | -                                            | -           |                                 
| flex               | flex-direction, flex-wrap, justify-content, align-content/align-items | `+flex($flex-direction, $flex-wrap, $justify-content, $align-content/align-items` | Helps in the spacial organization on the interface |
| durationAnimation  | 'slow' or 'normal' or 'fast' or 'very-fast' | `+durationAnimation($modifier)` | Sets the duration of the animation  |
| stateAnimation     | 'paused' or 'played' | `+stateAnimation($state)` | Sets the state of the animation |
| delayAnimation     | 'slow' or 'normal' or 'fast' | `+delayAnimation($delay)` | Sets the animation delay |
| animation          | animation-name, animation-iteration-count, animation-direction, animation-timing-function, 'slow' or 'normal' or 'fast' or 'very-fast', 'paused' or 'played', 'slow' or 'normal' or 'fast' | `+animation($animation-name, $animation-iteration-count, $animation-direction, $animation-timing-function, $animation-duration, $animation-play-state, $animation-delay` | Mixin to build an animation with all properties |
| border-radius      | 'sm' or 'md' or 'lg' or 'pill' or 'circular' or 'none' | `+border-radius($modifier)` | Defines a rounding for the bordered element |
| border             | 'xs' or 'sm' or 'md' or 'lg' or 'none', border-color, border-style, 'sm' or 'md' or 'lg' or 'pill' or 'circular' or 'none'  | `+border($border-width, $border-color, $border-style, $border-radius)` | Mixin to build a border with all properties |
| text-color         | $primary or $danger or $grey, $colorVariation | `+text-color($variation, $color)` |  Sets the color of the text with its respective variation, according to the colors of the theme. |
| background-color   | $primary or $danger or $grey, $colorVariation | `+background-color($variation, $color)` |  Sets the background color with its respective variation, according to the colors of the theme. |
| border-color       | $primary or $danger or $grey, $colorVariation | `+border-color($variation, $color)` |  Sets the color of a border with its respective variation, according to the colors of the theme. |
| box-shadow         | 'soft' or 'low' or 'mid' or 'high' or 'veryHigh' or 'none', color | `+box-shadow($level, color)` | Sets a shadow for the desired element. You can choose the intensity and color of the shadow |
| text-shadow        | 'soft' or 'low' or 'mid' or 'high' or 'veryHigh' or 'none', color | `+text-shadow($level, color)` | Sets a shadow for text. You can choose the intensity and color of the shadow |
| font-size          | 'tn' or 'tn' or 'sm' or 'md' or 'lg' or 'xl' or 'hg' | `+font-size($font-size)` | Set font size |
| font-family        | 'font-primary' or 'font-second' or font-family | `+font-family($font-family)` | Set the family to font |
| font-weight        | 'bold' or 'semi-bold' or 'medium' or 'regular' | `+font-weight($font-weight)` | Set a font weight |
| font               | font-color, 'tn' or 'tn' or 'sm' or 'md' or 'lg' or 'xl' or 'hg', 'font-primary' or 'font-second' or font-family, 'bold' or 'semi-bold' or 'medium' or 'regular' | `+font($font-color, $font-size, $font-family, $font-weight)` | Mixin to assist in the construction of the font css with all the properties |

### Classes

We have tons of classes in Yoonit Style, but let's talk about the two main ones, that can be used to set margin and padding.

The margin class `.m` and the padding class `.p` have elements and modifiers.

The elements are the position of the margin or padding (left, top, bottom or right) and the modifiers are the size of the margin or padding (extra small, small, medium, large, extra large or none).

| Param              | Input/Format | Description                                   |
| -                  | -            | -                                             |                            
| element            | 'l' or 't' or 'b' or 'r' | Position of the margin or padding |
| modifier           | 'xs' or 's' or 'm' or 'l' or 'xl' or 'none' | Size of the margin or padding |  

To use them, in your html code, set the `.m` or `.p`, then do `__element`, then `--modifier`.

Example:
```sass
.m__b--l //meaning: margin__bottom--large

.m__l--s //meaning: margin__left--small

.p__t--m //meaning: padding__top--medium

.p__r--xl //meaning: padding__right--extra-large
```


## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
