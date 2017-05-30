$().ready(function () {
    //isBusy(true);
    firebase.auth().onAuthStateChanged(function (user) {
        isBusy(false);
        if (!user) {
            window.location.href = "/admin/login";
        }
        else {
            loggedInUser(user);
        }
    });
    return firebase.database().ref('/galleries/').once('value').then(function (result) {
        galleries(result.val());
        $.each(galleries().main, function (index, item) {
            mainGalleryLinks.push(item);
        });
    });
});
var galleries = ko.observable();
var mainGalleryLinks = ko.observableArray();
// Get elements
var mainUploader = document.getElementById('main-gallery-uploader');
var mainFileButton = document.getElementById('main-gallery-file-button');
// Listen for file selection
mainFileButton.addEventListener('change', function (e) {
    //Get file
    var file = e.target.files[0];
    //Create a storage ref
    var storageRef = firebase.storage().ref('main-gallery/' + file.name);
    //Upload file
    var task = storageRef.put(file);
    //Update progress bar
    task.on('state_changed', function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        mainUploader.value = percentage;
    }, function error(err) {
        alert(err);
    }, function complete() {
        var postKey = firebase.database().ref('galleries/').push().key;
        var downloadURL = task.snapshot.downloadURL;
        var updates = {};
        updates['/galleries/main/' + postKey] = downloadURL;
        firebase.database().ref().update(updates);
        mainGalleryLinks.push(downloadURL);
        setTimeout(function () {
            mainUploader.value = 0;
            mainFileButton.value = "";
        }, 1000);
    });
});
function adminIndexViewModel() {
}
ko.applyBindings(new adminIndexViewModel());
