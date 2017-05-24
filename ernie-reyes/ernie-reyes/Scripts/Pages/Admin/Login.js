$().ready(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = "/admin";
        }
    });
});
var loginObject = {
    userName: ko.observable("").extend({ email: true }),
    password: ko.observable("")
};
function loginViewModel() {
    this.submitClick = function () {
        var loginPromise = firebase.auth().signInWithEmailAndPassword(loginObject.userName(), loginObject.password());
        loginPromise
            .then(function (result) {
            window.location.href = "/admin/index";
        })
            .catch(function (e) {
            alert(e);
        });
    };
}
ko.applyBindings(new loginViewModel);
