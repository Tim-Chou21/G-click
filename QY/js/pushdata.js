var $content = $('#content'),
        $btn = $('#btn');
 var $join =$('#join');
 var $result=$('#result')
    
$btn.on('click', function(){
            if ($content.val() != '') {
                content_value = $('#content').val()
                    //push to database //old method
                firebase.database().ref('/vote/'+content_value).set({Y:0,N:0});
                //clear the content
                $content.val('');
            }

        });
        
        var database = firebase.database().ref('vote');
        // var join= document.getElementById("join")
        database.once('value', function (snapshot) {
        
            
            for (var i in snapshot.val()) {
                // alert(i);
                unumber = 0
                // $join.append("<div class = 'option' >"+i +"</div>")
                firebase.database().ref('/online_user/'+i).once('value').then(function(snapshot) {
                    if(snapshot.val() == null) { unumber = 0}
                    else {
    
                         unumber = snapshot.val();
                        // user_number.innerHTML = "<p class='navbar-text' style='position: absolute;top: 20%; margin-left: 15%;' >" + "線上人數 : "+ unumber + "</p>";
                    }
                // ...
                });
                unumber = unumber + 1 ;
                // $join.append("<li class='col-md-25 col-sm-4 col-lg-25'><a href='#unique' class='active'><div class='list-item' style='background:rgba(26, 22, 22, 0.8);'><div class='icon'><h4 >"+i+"</h4> <button id='btn' type='button' class='btn btn-success' style='padding: 15px ;display:inline-block;'>YES</button> <button id='btn' type='button' class='btn btn-success' style='padding: 15px'>NO</button></div></a></li>")
                $join.append("<li class='col-md-25 col-sm-4 col-lg-25'><a href='#unique' class='active'><div class='list-item' style='background:rgba(26, 22, 22, 0.8);'><div class='icon'><h4 >"+i+"</h4> <button onclick='myFunction("+i+")'  id ='btn_y_"+i+" type='button' class='btn btn-success' style='padding: 15px ;display:inline-block;'>YES</button> <button id='btn' type='button' class='btn btn-success' style='padding: 15px'>NO</button></div></a></li>")
                $result.append("<li class='col-md-25 col-sm-4 col-lg-25'><a href='#unique' class='active'><div class='list-item' style='background:rgba(26, 22, 22, 0.8);'><div class='icon'><h4 >"+i+"</h4><p style = 'color:white;'>Yes : 4</p><p style = 'color:white;'>No : 4</p></div></a></li>")
                
                // $join.append("")
                
                // <div class='icon'><img src='QY/img/first-list-icon.png' alt=''></div>
            }
            // $show.scrollTop($show[0].scrollHeight);
        });
        

        // <button onclick='function(){ firebase.database().ref('/vote/"+i+"').update({N:"+unumber+"})}'  type='button' class='btn btn-success' style='padding: 15px ;display:inline-block;'>

        function myFunction(ii) {
            alert(ii);
            unumber = 0
                // $join.append("<div class = 'option' >"+i +"</div>")
                firebase.database().ref('/online_user/'+ii).once('value').then(function(snapshot) {
                    if(snapshot.val() == null) { unumber = 0}
                    else {
    
                         unumber = snapshot.val();
                        // user_number.innerHTML = "<p class='navbar-text' style='position: absolute;top: 20%; margin-left: 15%;' >" + "線上人數 : "+ unumber + "</p>";
                    }
                // ...
                });
                unumber = unumber + 1 ;
            

            firebase.database().ref("/vote/").update({Y:unumber})
          }
    