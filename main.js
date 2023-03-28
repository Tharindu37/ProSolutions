$(document).ready(function(){
    // Load Contributers
    function appendContributor(element){
        $("#contributor").append(`
                        <div class="col-sm-12 col-md-4 col-lg-3">
                            <div class="contributor-wrap">
                                <a href="${element.html_url}" target="_blank">
                                    <img src="${element.avatar_url}" alt="" class="image-wrap">
                                    <h6 class="name-wrap">${element.name==null?element.login:res.name}</h6>
                                </a>
                            </div>
                        </div>
                    `)
    }
    $.ajax({
        url: "https://api.github.com/repos/Tharindu37/ProSolutions/contributors",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            if(res.length>8){
                for(let i=0;i<8;i++){
                    appendContributor(res[i])
                }
                $('#btnShowMore').css('display','block')
                $('#btnShowMore').click(function(){
                    for(let i=8;i<res.length;i++){
                        $('.loading-wrap').css('display','block')
                        appendContributor(res[i])
                        $('.loading-wrap').css('display','none')
                    }
                    $('#btnShowMore').css('display','none')
                })   
            }else{
                res.forEach(element => {
                    appendContributor(element);
                });
            } 
        }
    }); 
});

// Scroll up arrow
let scrollArrow=document.getElementById("scrollArrow");

window.onscroll=function(){
    showScrollArrow();
}

scrollArrow.onclick=function(){
    scrollToTop();
}

function showScrollArrow(){
    if(document.body.scrollTop>30 || document.documentElement.scrollTop>30){
        scrollArrow.style.display="block";
    }else{
        scrollArrow.style.display="none";
    }
}

function scrollToTop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}