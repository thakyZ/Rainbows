// ==UserScript==
// @name        Rainbows
// @namespace   rainbows
// @version     v0.0.01
// @icon        https://raw.githubusercontent.com/thakyZ/Rainbows/master/rainbowicon.png
// @grant       none
// @require     https://code.jquery.com/jquery-2.2.2.min.js
// ==/UserScript==

window.hue = 0;
window.setInterval(function()
{
    $("img").css("filter","hue-rotate("+(window.hue++)+"deg)");
}, 0.00001);
