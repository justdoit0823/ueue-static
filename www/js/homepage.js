
// support follow actions
var supactions={follow:"follow",unfollow:"unfollow"};

$(document).ready(function(){
   $(".ue-people-action").click(function(){
        var settings={
              url:"/user/action/follow",
              type:"post",
              dataType:"json",
              data:{action:supactions[$(this).attr("id")],_xsrf:$("input[name='_xsrf']").val(),flwid:$(this).attr("followid")},
              error:function(jq,data,errorThrow){
                     alert(data);
                   },
              success:function(result){
                        if(result.status){
                            alert(result.msg);
                        }
                        else{
                            alert(result.msg);
                        }
                      }
            };
        $.ajax(settings);
    });
});
