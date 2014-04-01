/*
 * AD.log
 *
 * A set of utilities for printing to the console.
 *
 */
var colog = require('colog');



/**
 * @function AD.log
 *
 * print out a log entry on the console.  This is a wrapper around colog
 * which enables colored output.
 *
 * @codestart
 *
 * AD.log('<red><bold>Error!</bold>  That didn\'t go well!</red>'
 *         + '<yellow> but this is in yellow. </yellow>');
 * @codeend
 *
 *
 */
var Log = function() {

    colog.format('    '+argsToString(arguments));
};

module.exports = Log;




/**
 * @function AD.log.error
 *
 * a default error log entry. auto formats the entry with red text.
 *
 * @codestart
 *
 * AD.log.error('<bold>Error!</bold>  That didn\'t go well!');
 * @codeend
 *
 *
 */
Log.error = function() {

    Log('<red>*** '+argsToString(arguments)+'</red>');
};





//----------------------------------------------------------------------------
// Helper Routines
//----------------------------------------------------------------------------





/**
 * @function argsToString
 *
 * a helper fn designed to give better (deeper) object dumping display,
 * than the standard console.log()
 *
 * @codestart
 * AD.log.error('<bold>Error!</bold>  That didn\'t go well!');
 * @codeend
 */
var argsToString = function (args) {

    var all = [];
    for (var a in args) {

        if (typeof args[a] == 'object')  all.push(JSON.stringify(args[a],null, 4));
        else all.push(args[a]);
    }

    return all.join('');
};

