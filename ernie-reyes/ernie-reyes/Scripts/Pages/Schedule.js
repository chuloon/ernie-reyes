ko.applyBindings(new scheduleViewModel());
function scheduleViewModel() {
    var _this = this;
    this.addClassSchedule = function () {
        firebase.database().ref('/schedule/').set(schedule);
    };
    this.dayArray = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.timeArray = ["4:00", "4:30", "5:00", "5:45", "6:30", "7:15", "8:00"];
    this.scheduleData = ko.observable();
    firebase.database().ref('/schedule/').once('value').then(function (result) {
        _this.scheduleData(result.val());
    });
}
var schedule = {
    "monday": {
        "4:00": {
            "className": "",
            "ageGroup": ""
        },
        "4:30": {
            "className": "Lil' Dragons",
            "ageGroup": "4 to 8"
        },
        "5:00": {
            "className": "White to Blue-1",
            "ageGroup": "Juniors, 12 & Under"
        },
        "5:45": {
            "className": "Brown to Black",
            "ageGroup": "Juniors, 12 & Under"
        },
        "6:30": {
            "className": "Lil' Dragons",
            "ageGroup": "4 to 8"
        },
        "7:15": {
            "className": "White to Blue-1",
            "ageGroup": "13 & Up"
        },
        "8:00": {
            "className": "Brown to Black",
            "ageGroup": "Mixed 13 & Up"
        }
    },
    "tuesday": {
        "4:00": {
            "className": "XPT",
            "ageGroup": "9 to 12"
        },
        "4:30": {
            "className": "Lil' Dragons",
            "ageGroup": "4 to 8"
        },
        "5:00": {
            "className": "Brown to Black",
            "ageGroup": "Juniors, 12 & Under"
        },
        "5:45": {
            "className": "White to Blue-1",
            "ageGroup": "Juniors, 12 & Under"
        },
        "6:30": {
            "className": "XPT Gold to Blue-1",
            "ageGroup": "Junior, 13 & Up"
        },
        "7:15": {
            "className": "XTP Brown to Black",
            "ageGroup": "Mixed 13 & Up"
        },
        "8:00": {
            "className": "",
            "ageGroup": ""
        }
    },
    "wednesday": {
        "4:00": {
            "className": "",
            "ageGroup": ""
        },
        "4:30": {
            "className": "White to Blue-1",
            "ageGroup": "Juniors, 12 & Under"
        },
        "5:00": {
            "className": "XPT Green to Black",
            "ageGroup": "Juniors, Ages 12 & Under"
        },
        "5:45": {
            "className": "Brown to Black",
            "ageGroup": "Juniors, 12 & Under"
        },
        "6:30": {
            "className": "Lil' Dragons",
            "ageGroup": "4 to 8"
        },
        "7:15": {
            "className": "All Belts",
            "ageGroup": "13 & Up"
        },
        "8:00": {
            "className": "BLACK BELTS ONLY",
            "ageGroup": ""
        }
    },
    "thursday": {
        "4:00": {
            "className": "",
            "ageGroup": ""
        },
        "4:30": {
            "className": "Lil' Dragons",
            "ageGroup": "4 to 8"
        },
        "5:00": {
            "className": "White to Blue-1",
            "ageGroup": "Juniors, 12 & Under"
        },
        "5:45": {
            "className": "Brown to Black",
            "ageGroup": "Juniors, 12 & Under"
        },
        "6:30": {
            "className": "XPT",
            "ageGroup": "9 to 12"
        },
        "7:15": {
            "className": "XPT",
            "ageGroup": "13 & Up"
        },
        "8:00": {
            "className": "",
            "ageGroup": ""
        }
    },
    "friday": {
        "4:00": {
            "className": "",
            "ageGroup": ""
        },
        "4:30": {
            "className": "Lil' Dragons",
            "ageGroup": "4 to 8"
        },
        "5:00": {
            "className": "Brown to Black",
            "ageGroup": "Juniors, 12 & Under"
        },
        "5:45": {
            "className": "Green to Blue-1",
            "ageGroup": "12 & Under"
        },
        "6:30": {
            "className": "All Belts",
            "ageGroup": "13 & Up"
        },
        "7:15": {
            "className": "",
            "ageGroup": ""
        },
        "8:00": {
            "className": "",
            "ageGroup": ""
        }
    },
    "saturday": {
        "4:00": {
            "className": "",
            "ageGroup": ""
        },
        "4:30": {
            "className": "All Belts",
            "ageGroup": "Juniors, 13 & Up"
        },
        "5:00": {
            "className": "XPT",
            "ageGroup": "9 to 12"
        },
        "5:45": {
            "className": "Lil' Dragons",
            "ageGroup": "4 to 8"
        },
        "6:30": {
            "className": "SWAT MEETING",
            "ageGroup": ""
        },
        "7:15": {
            "className": "",
            "ageGroup": ""
        },
        "8:00": {
            "className": "",
            "ageGroup": ""
        }
    },
};
