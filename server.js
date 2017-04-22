var request = require('request');
var _ = require('underscore');
var argv = require('minimist')(process.argv.slice(2));
var ex = require('./src/exporter');

var params = {};
var trips = [];

function _getTripItData(page, callback) {
    let options = {
        url: `https://api.tripit.com/v1/list/trip/past/true/traveler/all/page_size/10/format/json/page_num/${page}`,
        json: true,
        auth: {
            user: params.username,
            pass: params.password,
            sendImmediately: true
        }
    };
    console.log(`${options.url}`);
    request.get(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            _.each(body.Trip, function(trip) {
                trips.push({
                    start_date: trip.start_date,
                    end_date: trip.end_date,
                    primary_location: trip.primary_location,
                    display_name: trip.display_name,
                    relative_url: `https://www.tripit.com${trip.relative_url}`,
                });
            });
            if (parseInt(body.page_num) < parseInt(body.max_page)) {
                _getTripItData(parseInt(body.page_num) + 1, callback);
            } else {
                callback(); //finished
            }
        } else {
            console.log(error);
            throw error;
        }
    });
}

function _setParams() {
    params = {
        username: argv.u,
        password: argv.p,
        outputFile: argv.o || 'data.csv',
    }
}

function _exportToFile() {
    console.log(`done.  Writing ${params.outputFile}.`);
    ex.exportToFile(trips, params.outputFile);
};

_setParams();
_getTripItData(1, _exportToFile);
