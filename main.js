// Load Contributers
var users=["Tharindu37","BawanthaPrasad","AK4266","Navodi99","emergenitro","aayushdhakal","hiruhemapala","khushpreetsinghb","Yasanga-Nishaditha","shiva0002"];
$(document).ready(function(){
    function getUserDeails(username){
        $.ajax({
            url: "https://api.github.com/users/"+username,
            type: 'GET',
            dataType: 'json', // added data type
            success: function(res) {
                $("#contributor").append(`
                <div class="col-sm-12 col-md-4 col-lg-3">
                    <div class="contributor-wrap">
                        <img src="${res.avatar_url}" alt="" class="image-wrap">
                        <h6 class="name-wrap">${res.name==null?res.login:res.name}</h6>
                    </div>
                </div>
                `)
            }
        });
    };
    users.forEach(element => {
        getUserDeails(element)
    });
});
