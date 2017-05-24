$().ready(function () {
    isBusy(true);
    debugger;
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            window.location.href = "/admin/login";
        }
        else {
            loggedInUser(user);
        }
    });
});
