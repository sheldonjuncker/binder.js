# binder.js
binder.js is a small JS library that binds HTML elements to variables.

## Usage
Using binder.js to map HTML elements to variables is very straightforward.

First, you will need to include binder.js:
```html
<script src="binder.js"></script>
```
Second, you will need to add the "binder" HTML attribute to any element that you want to be bound. The value of the binder attribute will be the name by which you access the element in binde.js.
```html
<input type="text" name="username" binder="userName">
```
Third, once the page loads, you will be able to access the element in binder.js' object of bound elements.
```javascript
var user = Bound.userName;

console.log(user.value);
```
It's as simple as that!

## Dependencies
binder.js does not have any dependencies.

## Notes
1. Elements are bound by reference. If the original element is modified, the bound value will reflect those modifications.
