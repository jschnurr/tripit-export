var json2csv = require('json2csv');
var fs = require('fs');

function exportToFile(data, path) {
    var format = path.match(/\.([^/.]+)$/)[1]; // file extension is format
    var result = _buildOutput(data, format);

    fs.writeFile(path, result, function(err) {
        if (err) throw err;
    });
}

function _buildOutput(data, format) {
    var output = '';
    switch (format.toLowerCase()) {
        case 'json':
            return JSON.stringify(data);
            break;
        case 'csv':
            return json2csv({
                data: data
            });
            break;
        default:
            throw `Invalid format specified: ${format}.  Must be csv or json.`;
    }
}

module.exports = {
    exportToFile: exportToFile,
}
