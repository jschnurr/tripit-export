# tripit-export

## Purpose
Export a simple list of trips from your account on www.tripit.com. Useful for tax
calculations or other recordkeeping.

## Pre-requsities
Requires `basic authentication` to be enabled on your account. This is `off` by default.
Contact [support@tripit.com](support@tripit.com) to have it enabled.

## Install
`git clone https://github.com/jschnurr/tripit-export`  
`npm install`

## Usage
`node server.js -u you@email.com -p secretpassword -o trips.json`  

#### Options  
- -u: Tripit username (typically your email address)  
- -p: Tripit password
- -o: output file (optional). Must be `.json` or `.csv`. Defaults to `data.csv`.

## Examples

### json
`node server.js -u you@email.com -p secretpassword -o trips.json`  

```json
[{
    "start_date": "2017-02-23",
    "end_date": "2017-02-23",
    "primary_location": "New York, NY",
    "display_name": "Trip from Toronto to New York",
    "relative_url": "https://www.tripit.com/trip/show/id/192455387"
}, {
    "start_date": "2017-01-11",
    "end_date": "2017-01-13",
    "primary_location": "Toronto, Canada",
    "display_name": "Hotel Reservation at 100 FRONT ST W, TORONTO, ON M5J 1E3, CANADA",
    "relative_url": "https://www.tripit.com/trip/show/id/357934016"
}]
```

### csv
`node server.js -u you@email.com -p secretpassword -o trips.csv`  

```csv
"start_date","end_date","primary_location","display_name","relative_url"
"2017-02-23","2017-02-23","New York, NY","Trip from Toronto to New York","https://www.tripit.com/trip/show/id/192455387"
"2017-01-11","2017-01-13","Toronto, Canada","Hotel Reservation at 100 FRONT ST W, TORONTO, ON M5J 1E3, CANADA","https://www.tripit.com/trip/show/id/357934016"
```

## License
MIT
