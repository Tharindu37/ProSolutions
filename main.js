// Load Contributers
$(document).ready(function(){
    $.ajax({
        url: "https://api.github.com/repos/Tharindu37/ProSolutions/contributors",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            res.forEach(element => {
                $("#contributor").append(`
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <div class="contributor-wrap">
                            <img src="${element.avatar_url}" alt="" class="image-wrap">
                            <h6 class="name-wrap">${element.name==null?element.login:res.name}</h6>
                        </div>
                    </div>
                `)
            });
        }
    }); 
});
