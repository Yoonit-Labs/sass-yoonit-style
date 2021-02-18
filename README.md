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
- Free fontawesome icons


## Installation

```javascript
npm i -s @yoonit/style
```


## Usage

To access all the features of yoonit/style, import the theme that you want in your file or globally.

```sass
@import '@yoonit/style/src/themes/{themeName}'
```

## Themes

These are all the themes available for now.

[<img src="https://github.com/Yoonit-Labs/sass-yoonit-style/blob/development/public/readme-img/default.PNG" width="470">](https://cyberlabs.ai/)
[<img src="https://github.com/Yoonit-Labs/sass-yoonit-style/blob/development/public/readme-img/blue.PNG" width="470">](https://cyberlabs.ai/)
[<img src="https://github.com/Yoonit-Labs/sass-yoonit-style/blob/development/public/readme-img/brown.png" width="470">](https://cyberlabs.ai/)
[<img src="https://github.com/Yoonit-Labs/sass-yoonit-style/blob/development/public/readme-img/green.png" width="470">](https://cyberlabs.ai/)
[<img src="https://github.com/Yoonit-Labs/sass-yoonit-style/blob/development/public/readme-img/orange.png" width="470">](https://cyberlabs.ai/)
[<img src="https://github.com/Yoonit-Labs/sass-yoonit-style/blob/development/public/readme-img/purple.png" width="470">](https://cyberlabs.ai/)

## Creating themes

Create a scss file inside the themes folder that imports the '/quarks/index' file and all the other features that you want.
To import the other features, such as the helpers, import then after the quarks.

After that, create an object called $primary with the colors variables: 'primaryDarkest', 'primaryDark', 'primaryBase', 'primaryLight', 'primaryLightest' and set these variables to the colors that you wish.

```scss
/*==== Import Quarks ====*/

@import '../quarks/index';

/*==== Import Bosons ====*/

@import '../bosons/index';

/*==== Import Atoms ====*/

@import '../atoms/YooAnimation.sass';
@import '../atoms/YooAvatar.sass';
@import '../atoms/YooButton.sass';
@import '../atoms/YooCheckButton.sass';

/*==== Colors ====*/

$primary: (
  'primaryDarkest': #1e5425,
  'primaryDark': #4f7e54,
  'primaryBase': #81a884,
  'primaryLight': #b3d2b4,
  'primaryLightest': #e5fde4
);
```
### Fonts

The project has two fonts variables.

```
font-primary: Montserrat, sans-serif
font-second: Arial, sans-serif
```

To change the fonts variables, in the same file that was imported the '/quarks/index' file, set the variable to the new value.

```scss
/*==== Import Quarks ====*/

@import '../quarks/index';

/*==== Fonts ====*/

$font-primary: Fira Code, arial
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

| Name               | Input/Format | Usage   (sass)                        | Description |
| -                  | -            | -                                            | -           |                                 
| margin             | 'l' or 't' or 'b' or 'r', 'xs' or 's' or 'm' or 'l' or 'xl' or 'none' | `.m__$$position--$$modifier` | Class that adds margin based on the position (left, top, bottom or right) and the size (small, medium, large, extra large) |
| padding            | 'l' or 't' or 'b' or 'r', 'xs' or 's' or 'm' or 'l' or 'xl' or 'none' | `.p__$$position--$$modifier` | Class that adds padding based on the position (left, top, bottom or right) and the size (small, medium, large, extra large) |

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
  
