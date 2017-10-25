// Create list of Level names for use in Companies or Routes.
var levelList = ["LEVEL1", "LEVEL2", "OPTLEVEL1", "OPTLEVEL2", "OPTLIST", "TICKDATA", "INDEX", "LEVEL3", "OPTLEVEL3", "FUTLEVEL1", "FUTLEVEL2", "FOREXLEVEL1", "FOREXLEVEL2", "CFDLEVEL1", "CFDLEVEL2"];

// Create UUIDds for use in orders.
function createUUID() {
	// http://www.ietf.org/rfc/rfc4122.txt
	var s = [];
	var hexDigits = "0123456789abcdef";
	for ( var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	var uuid = s.join("");
	return uuid;
}

var REST = {}; // TODO: temporary added

// log everything in a div element
REST.log = function(text) {
//	console.log(text);
        /*
        $("#log-div").prepend(text+"<br/>");
     */
        //NOTE: Logging disabled.
};

// Call the right service before issuing any REST call.
function useOrderService() {
	REST.apiURL = 'http://'+origin+':8080/omsrestservices';
	return IOMSOrderManagementRESTServices;
}

// Call the right service before issuing any REST call.
function useUserService() {
	REST.apiURL = 'http://'+origin+':8080/etsdatamanagement';
	return IDataManagementRESTServices;
}

// Call the right service before issuing any REST call.
function useMarketDataService() {
	REST.apiURL = 'http://'+origin+':8080/etsmarketdata';
	return IMarketDataRESTServices;
}

function Instrument(id, type, symbol, exchangeid) {
	this.id = id;
	this.type = type;
	this.attributes = {};
	this.symbol = symbol;
	this.baseSymbol = null;
	this.exchangeid = exchangeid;
	this.underlyingid = 0;
	this.equals = function(other) {
		return this.id == other.id && this.type == other.type && this.symbol == other.symbol && this.exchangeid == other.exchangeid;
	};
}

function sortInstrumentsBySymbol(a,b){
	if (a.symbol < b.symbol)
		return -1;
	if (a.symbol > b.symbol)
		return 1;
	return 0;
}

var userInfo;
function loadUserInfo() {
    userInfo = useUserService().getCurrentUser();
    userInfo.userIDs = useOrderService().getUserIDs();
}

function addCommas(nStr,n)
{
	if(n != undefined)
		nStr = nStr.toFixed(n);
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

module.exports = {
    createUUID : createUUID
};