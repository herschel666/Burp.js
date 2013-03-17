# Burp.js #

Burp.js is a small `navigator.vibrate`-wrapper, that takes a rhythm represented by a string of asterisks, dashs and middots and translates this into vibrations. The duration of a single vibration can be defined in milliseconds by an optional second parameter.

## Example ##


	Burp('**·**·*--*', 250);

This leads to 500ms-vibration, a short break, another 500ms-vibration, another short break, a 250ms-vibration, a 500ms-pause and another 250ms-vibration.

With the notation you can define vibration beats as long as you want.

## Browser support ##

In the moment the Vibration-API is only supported by Firefox Mobile and Android. For more information visit [MDN](https://developer.mozilla.org/en-US/docs/DOM/window.navigate.vibrate).

## Meta ##


twitter: [Herschel_R](http://twitter.com/Herschel_R)<br>
website: [www.emanuel-kluge.de](http://www.emanuel-kluge.de/)


## License ##

Copyright (c) 2013 Emanuel Kluge

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.