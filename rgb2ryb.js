/**
 * Original Work
 * Author: Arah J. Leonard
 * Copyright 01AUG09
 * Original source:
 * http://www.insanit.net/computer-programming/red-green-blue-to-red-yellow-blue-part-2/
 * Distributed under the LGPL - http://www.gnu.org/copyleft/lesser.html
 * ALSO distributed under the The MIT License from the Open Source Initiative
 * (OSI) - http://www.opensource.org/licenses/mit-license.php
 * You may use EITHER of these licenses to work with / distribute this source code.
 * Enjoy!
 *
 * Modified by Dave Eddy <dave@daveeddy.com>
 *  * ported to JS
 */

if (typeof module !== 'undefined') {
  module.exports = rgb2ryb;
  module.exports.rgb2ryb = rgb2ryb;
  module.exports.ryb2rgb = ryb2rgb;
  module.exports.complimentary = complimentary;
}

/**
 * Convert a red-green-blue system to a red-yellow-blue system.
 */
function rgb2ryb(color) {
    var r = color[0], g = color[1], b = color[2];
    // Remove the whiteness from the color.
    var w = Math.min(r, g, b);
    r -= w;
    g -= w;
    b -= w;

    var mg = Math.max(r, g, b);

    // Get the yellow out of the red+green.
    var y = Math.min(r, g);
    r -= y;
    g -= y;

    // If this unfortunate conversion combines blue and green, then cut each in
    // half to preserve the value's maximum range.
    if (b && g) {
        b /= 2.0;
        g /= 2.0;
    }

    // Redistribute the remaining green.
    y += g;
    b += g;

    // Normalize to values.
    var my = Math.max(r, y, b);
    if (my) {
        var n = mg / my;
        r *= n;
        y *= n;
        b *= n;
    }

    // Add the white back in.
    r += w;
    y += w;
    b += w;

    // And return back the ryb typed accordingly.
    return [r, y, b];
}

/**
 * Convert a red-yellow-blue system to a red-green-blue system.
 */
function ryb2rgb(color) {
    var r = color[0], y = color[1], b = color[2];
    // Remove the whiteness from the color.
    var w = Math.min(r, y, b);
    r -= w;
    y -= w;
    b -= w;

    var my = Math.max(r, y, b);

    // Get the green out of the yellow and blue
    var g = Math.min(y, b);
    y -= g;
    b -= g;

    if (b && g) {
        b *= 2.0;
        g *= 2.0;
    }

    // Redistribute the remaining yellow.
    r += y;
    g += y;

    // Normalize to values.
    var mg = Math.max(r, g, b);
    if (mg) {
        var n = my / mg;
        r *= n;
        g *= n;
        b *= n;
    }

    // Add the white back in.
    r += w;
    g += w;
    b += w;

    // And return back the ryb typed accordingly.
    return [r, g, b];
}

/**
 * Return the complementary color values for a given color.
 * You must also give it the upper limit of the color values, typically 255 for
 * GUIs, 1.0 for OpenGL.
 */
function complimentary(color, limit) {
    var r = color[0], g = color[1], b = color[2];
    limit = limit || 255;
    return [limit - r, limit - g, limit - b];
}
