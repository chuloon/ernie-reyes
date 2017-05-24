$().ready(() => {
    isBusy(true);
    debugger;
    firebase.auth().onAuthStateChanged(user => {
        if (!user) {
            window.location.href = "/admin/login";
        }
        else {
            loggedInUser(user);
        }
    });
});