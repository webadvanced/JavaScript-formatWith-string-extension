#What is it#

FormatWith is a simple string formatter for JavaScript that removes the need to ever concatenate strings again!

#How to use it#

1. Download the lib/formatWith.min.js file and add it to your project. You now have a .formatWith() function on all strings!

##Examples##

**Using it with sequential indexes**

Without formatWith:

```javascript
var cartItemCount = 4;
var cartItemsText = 'Cart(' + cartItemCount + ')';
```

Using formatWith:

```javascript
var cartItemCount = 4;
var cartItemsText = 'Cart({0})'.formatWith(cartItemCount);
```
--

```javascript
var linkTemplate = '<a href="{0}" id="{1}">{2}</a>';
var link = linkTemplate.formatWith('http://github.com', 'linkId', 'GitHub is awesome!');
document.getElementById('contentDiv').innerHTML(link);
```

Check out the fiddle for the above example : http://jsfiddle.net/GYCsQ/

**Using it with objects**

```javascript
var chuck= {
    firstName: 'Chuck',
    lastName: 'Norris',
    occupation: 'Bad ass',
    aspirations: 'Jon Skeet'
};
var personTemplate = 'Name: {firstName} {lastName}<br />occupation: {occupation}<br />Wants to be {aspirations} when he grows up.';
document.getElementById('contentDiv').innerHTML = personTemplate.formatWith(chuck);
```

Check out the fiddle for the above example : http://jsfiddle.net/DLet7/