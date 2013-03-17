/*
 * Burp.js
 *
 * Navigator.Vibrate-wrapper
 *
 * https://github.com/herschel666/Burp.js
 *
 * Usage:
 *
 * Burp('*·*·*·*-*-*-*·*·*·*-*-*', 250);
 *
 * Description:
 *
 * The first parameter is the beat. Asterisks
 * represent vibrations, middots are short breaks
 * and dashs are pauses with the same duration
 * as the asterisks.
 * The second parameter is optional and defines the
 * duration of a vibration and a pause. Standard
 * value is 300ms.
 * Multiple asterisks and pauses are summed up.
 *
 * Copyright (c) 2013 http://www.emanuel-kluge.de/
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
**/

(function (win, nav) {

	var types = {
		'*' : 'burp',
		'-' : 'pause',
		'\u00b7' : 'break'
	};

	var prefixes = ['moz', 'webkit'],
		i = 0,
		prefix;

	for ( ; prefix = prefixes[i]; i += 1 ) {
		nav.vibrate = nav.vibrate || nav[prefix + 'Navigate'];
	}

	nav.vibrate = nav.vibrate || function () {};

	function addToLast(arr, val) {

		var last = arr.length - 1;

		arr[last] += val;

	}

	function Burp(pattern, duration) {

		var duration = ~~duration || 300,
			rhythm = [],
			before,
			current;

		pattern.replace(/(\*|-|\u00b7)/g, function (type, i) {

			var tmp;

			if ( i ) {
				before = current;
			}

			current = types[type];

			tmp = current === 'break'
				? 60
				: duration;

			if ( i && current === before ) {
				if ( current != 'break' ) {
					addToLast(rhythm, tmp);
				}
			} else {
				rhythm.push(tmp);
			}

		});

		/*
		 * Catch thrown exceptions.
		**/
		try {
			nav.vibrate(rhythm);
		} catch (e) {}

	}

	win.Burp = Burp;

})(window, navigator);