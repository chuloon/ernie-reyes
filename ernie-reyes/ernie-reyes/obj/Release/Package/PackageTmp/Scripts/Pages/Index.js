$("#email-textbox").alpaca({
    "options": {
        "placeholder": "email address",
        "focus": false
    }
});
var dayArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
$().ready(function () {
});
function indexViewModel() {
    var _this = this;
    this.emailText = ko.observable("");
    this.firstClassTime = ko.observable();
    this.firstClassTitle = ko.observable();
    var d = new Date();
    var currentDay = dayArray[d.getDay()];
    firebase.database().ref('/schedule/').once('value').then(function (result) {
        $.each(result.val()[currentDay], function (index, item) {
            if (item.className != "") {
                if (item.altTime == undefined)
                    _this.firstClassTime(index + 'pm');
                else
                    _this.firstClassTime(item.altTime);
                _this.firstClassTitle(item.className);
                return false;
            }
        });
    });
    this.scheduleClick = function () {
        window.location.href = "Home/Schedule";
    };
    this.mailingClick = function () {
        var userId = _this.emailText().replace(/[^a-zA-Z1-9 ]/g, "");
        try {
            if (_this.emailText() != "" && _this.emailText().match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?") != null) {
                firebase.database().ref('/mailing-list/' + userId).set({
                    email: _this.emailText()
                });
                _this.emailText("");
                alert("You've been successfully added to our mailing list!");
            }
            else {
                alert("Invalid email. Please try again!");
            }
        }
        catch (ex) {
        }
    };
}
ko.applyBindings(new indexViewModel());
//# sourceMappingURL=Index.js.map