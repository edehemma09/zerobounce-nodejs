var https = require("https");
var api_key = "b34cbc33c3424ab0bf2ee2b63ebc4f69";
var email = "greylisted@example.com";
var ip_address = "";

var options = {
    hostname: 'api.zerobounce.net',
    port: 443,
    path: "/v2/validate?api_key="+api_key+"&email="+email+"&ip_address='"+ip_address+"'",
    method: 'GET',
    secureProtocol: "TLSv1_2_method"
}

https.request(options, res => {
    let body = '';
    res.on('data', d => body += d)
    res.on('end', () => {
        var result = JSON.parse(body);
	// DO SOMETHING WITH result JSON

    })
}).on('error', err => {

    //DO SOMETHING FOR ERRORS
    return;

}).end()
