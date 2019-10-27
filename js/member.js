function init() {
    // JQ

    var database = firebase.database().ref();
    //
    var user_email = '';
    firebase.auth().onAuthStateChanged(function (user) {
        var menu = document.getElementById('dynamic-email');
        var user_number = document.getElementById('user_number');
        
        if (user) {
            // firebase.database().ref('/online_user/user_number').once('value', function (snapshot) {
            //     console.log(snapshot.val());
            //     if(snapshot.val() == null) firebase.database().ref('/online_user').set({user_number:1});
            //     else firebase.database().ref('/online_user').update({user_number:snapshot.val()+1})
            //     //document.getElementById('title').textContent = snapshot.val();

            
            // })
            
            // else if ()
            // firebase.database().ref('/online_user').update({a:});
           console.log("ininininininininini")
            firebase.database().ref('/online_user/user_number').once('value').then(function(snapshot) {
                if(snapshot.val() == null) {
                    console.log("in 1")
                    firebase.database().ref('/online_user').set({user_number:1});
                    user_number.innerHTML = "<p class='navbar-text' style='position: absolute;top: 7px; margin-right: 10px;' >" + "線上人數 : "+ 1 + "</p>";
                }
                else {
                    console.log("in 2")
                    firebase.database().ref('/online_user').update({user_number:snapshot.val()})
                    var unumber = snapshot.val()+1;
                    user_number.innerHTML = "<p class='navbar-text' style='position: absolute;top: 20%; margin-left: 15%;' >" + "線上人數 : "+ unumber + "</p>";
                }
            // ...
            });
            user_email = user.email;

            menu.innerHTML = "<p class='navbar-text' style='position: absolute; top: 20%; left: 70%; margin-right: 5%; font-size: 20px;' >" + user_email + "</p>";

            var logout_button = document.getElementById('logout-btn');
            logout_button.addEventListener('click', function () {
    
                firebase.auth().signOut()
                    .then(function () {
                        console.log("logout")
                        firebase.database().ref('/online_user/user_number').once('value').then(function(snapshot) {
                            
                            firebase.database().ref('/online_user').update({user_number:snapshot.val()-1})
                            console.log(snapshot.val()-1)
                            window.location = "index.html";
                          // ...
                          });
                        

                    })
                    .catch(function (error) {
                        alert('Sign Out Error!')
                    });
            });
        }
        else {
            console.log("logout")
            alter("fail")
        }
    });

}

window.onload = function () {
    init();
}