var fs = require('fs'),
    fd;

module.exports = {
    "pages": {
        "include": [
            "index.html"
        ]
    },
    "css": [
        "style.css"
    ],
    "whitelist": [".fpf", ".lt-ie9", ".closed", ".opened"],
    "output": {
        "logger": function(response, originalUrl, loggedIn) {
            // Do some logging here, e.g. using console.log.
        },
        "result": function(result) {
            // Do something with the result object, e.g. print every rule
            // found, together with positions in CSS file:
            fs.open('ut_proload_ucsslist.md', 'a+', function(err, fdt) {
                if (err) {
                    console.log('create file fail');
                } else {
                    fd = fdt;
                    for (var s in result.selectors) {
                        // Only unused rules:
                        if (result.selectors[s].matches_html === 0) {
                            // Print position(s), given it's only one CSS file:
                            var pos_css = result.selectors[s].pos_css;
                            var key = Object.keys(pos_css)[0];
                            // var results = s + ": " + pos_css[key] + '\r\n';
                            var results = s + '\r\n';

                            if (!isIgnoreRules(s)) {
                                fs.write(fd, results, 0, 'utf8', function(e) {
                                    if (e) throw e;
                                })
                            }
                        }
                    }
                }
            });
        }
    }
};

function isIgnoreRules(selectors) {
    var whitelistRE = ["\\.fpf[\\.,#,\\s]?\\b",
                "\\.lt-ie9[\\.,#,\\s]?\\b",
                "\\.closed[\\.,#,\\s]?\\b",
                "\\.opened[\\.,#,\\s]?\\b",
                "@"];

    for (var i = 0, length = whitelistRE.length; i < length; i++) {

        var ignoreRulesRE = new RegExp(whitelistRE[i]);
        if (ignoreRulesRE.test(selectors)) {
            return true;
        }
    }

    return false;
}