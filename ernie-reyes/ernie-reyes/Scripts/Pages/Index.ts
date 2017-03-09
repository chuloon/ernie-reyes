(<any>$("#email-textbox")).alpaca({
    "options": {
        "placeholder": "email address",
        "focus": false
    }
});

function indexViewModel() {
    this.emailText = ko.observable<string>("");

    this.mailingClick = () => {
        let userId = this.emailText().replace(/[^a-zA-Z1-9 ]/g, "");
        try {
            if (this.emailText() != "" && this.emailText().match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?") != null) {
                firebase.database().ref('/mailing-list/' + userId).set({
                    email: this.emailText()
                });

                this.emailText("");
                alert("You've been successfully added to our mailing list!");
            }
            else {
                alert("Invalid email. Please try again!")
            }
        }
        catch (ex) {
        }
    }
}

ko.applyBindings(new indexViewModel());