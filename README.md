 * 💁 As our Application grows bigger, we want to split it into mulitple files, so called "Modules"
 * 💁 Modules Always use strict
 * 💁 Each module has its own top-level scope. In other words, top-level variables and functions from a module are not
 * seen in other scripts.
 * 💁 If we really need to make a window-level global variable, we can explicitly assign it to window and access as
 * window.user
 * 💁 A module code is evaluated only once.
 * If the same module is imported into multiple other places, its code is executed only the first time, then exports are
 * given to all importers
 * 💁 In a module, "this" is undefined.
 *
 * 💁 Module scripts are always deferred
 * 💁 In real-life, browser modules  are rarely used  in their "raw" form. Usually, we bundle them together with a
 * special tool such as Webpack and deploy to the production server.


