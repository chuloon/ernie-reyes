$().ready(() => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            window.location.href = "/admin";
        }
    });
    
})

let loginObject = {
    userName: ko.observable<string>("").extend({ email: true }),
    password: ko.observable<string>("")
}

function loginViewModel() {


    this.submitClick = () => {
        let loginPromise = firebase.auth().signInWithEmailAndPassword(loginObject.userName(), loginObject.password());

        loginPromise
            .then(result => {
                window.location.href = "/admin/index";
            })
            .catch(e => {
                alert(e);
            });
    }
}

ko.applyBindings(new loginViewModel);