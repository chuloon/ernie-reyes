(<any>$("#email-textbox")).alpaca({
    "options": {
        "placeholder": "email address",
        "focus": false
    }
});

var dayArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

$().ready(() => {
    
});

function indexViewModel() {
    this.emailText = ko.observable<string>("");
    this.firstClassTime = ko.observable<string>();
    this.firstClassTitle = ko.observable<string>();
    this.imgPath = ko.observable<string>();

    var d = new Date();
    var currentDay = dayArray[d.getDay()];
    firebase.storage().ref().child('ssmb.png').getDownloadURL().then((url) => {
        this.imgPath(url);
    })

    firebase.database().ref('/schedule/').once('value').then((result) => {
        $.each(result.val()[currentDay], (index, item) => {
            if (item.className != "") {
                if (item.altTime == undefined)
                    this.firstClassTime(index + 'pm');
                else
                    this.firstClassTime(item.altTime);
                this.firstClassTitle(item.className);
                return false;
            }
        });

    })

    this.scheduleClick = () => {
        window.location.href = "Home/Schedule";
    }

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