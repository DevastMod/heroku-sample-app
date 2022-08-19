var ip = "devast69.devast.io";
var port = "443";
var NnnNv = "1";

function SendSpamTick() {
    setTimeout(function() {
        websocketSpam = new window.WebSocket((((("ws" + ((NnnNv === 1) ? "s" : "")) + "://") + ip) + ":") + port);

        websocketSpam.onopen = function(event) {
            websocketSpam.send(window.JSON.stringify(BotData()));
        }
        SendSpamTick();
    }, 1000)
}

function BotData() {   
    var Spamdat = 30;
    var Spamtoken = "12345678901234567890"
    var Spamtokenid = "0";
    var Spamuserid = -1;
    var Spamnick = "bit.ly/devastmod";
    var SpammNVNV = 0;
    var Spamskin = 0;
    var Spampassword = 0;
    var Spamsomething;

    return [Spamdat, Spamtoken, Spamtokenid, Spamuserid, SpammNVNV, Spamnick, Spamskin, Spamsomething, Spampassword];
}

SendSpamTick();
