$("#email-textbox").alpaca({
    "options": {
        "placeholder": "email address",
        "focus": false
    }
});
function indexViewModel() {
    var _this = this;
    this.emailText = ko.observable("");
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