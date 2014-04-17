
var search_urls={
    wk : "/works?lable=",
    rcd : "/records?lable=",
    usr : "/professional?lable="
};

var special_urls=["records", "works","professional"] ;


var defult_search_tip="- 搜搜你感兴趣的标签 -";


function search_type_scroll (){
                $(this).unbind("click");
                $(".yz-search-type li").each(function(index){
                   if(index){
                         $(this).animate({top:'-=30'},200);
                   }else{
                         $(this).animate({top:'-=30'},200,function(){
                          $(".yz-search-type li").first().css("top",60);
                          $(".yz-search-type li").first().appendTo(".yz-search-type");
                          $(".yz-search-type li").first().bind("click",search_type_scroll);
                        })
                   }
                })
           }

function search_type_go(){
    var lable=$(".yz-search-text").val();
    if(!lable || lable == defult_search_tip) alert("请输入你要搜索的内容");
    else{
        lable=encodeURIComponent(lable);
        var url="";
        var select=$(".yz-search-type li").first().find("a").attr("class").match("([^-][a-zA-Z]+)$")[0];
        for(key in special_urls){
            if(location.href.match(special_urls[key])){
                if(search_urls[select].indexOf(key) != -1){
                    if(location.href.indexOf("?") == -1) url=location.href+"?lable="+lable;
                    else{
                        if(location.href.indexOf("lable") != -1) url=location.href.replace(/lable=([a-zA-Z0-9%]+)$/,"lable="+lable);
                        else url=location.href+"lable="+lable;
                    }
                    location.href=url;
                }
                break;
            }
        }
        url=search_urls[select]+lable;
        window.open(url);
    }
}

function enter_key_go(e){
    if(e.keyCode == 13){
        $(".yz-search-sub").trigger("click");
    }
}

$(document).ready(function(){
    
    $(".yz-search-type li").first().bind("click",search_type_scroll);
    $(".yz-search-sub").bind("click",search_type_go);
    $(".yz-search-text").bind("keydown",enter_key_go);
    $("img").error(function(){
	//$(this).attr("src","/static/img/hdbg.jpg");
    })


//input text change
    

    $(".inputtxtnum").keyup(function(e){
        var txt=$(this).val();
        var leftnum=140;
        var txtnum=0;
        for(i in txt){
            if(txt[i].match(/[u00-uff]/)) txtnum+=1;
            else txtnum+=2;
        }
        leftnum-=txtnum;
        $(this).parent().next().find("i").text(leftnum);
    })

})



//get the cookie
function get_cookie(cookie)
{
    var value=document.cookie.match("\\b"+cookie+"=([^;]*)\\b");
    if(value) return value=value[1];
    else return undefined; 
}

//choose item on

function select_item_on(jqobj,index,classname){
    if($.type(jqobj) != "object"){
	alert("undefined object type!");
	return -1;
    }
    jqobj.removeClass(classname);
    jqobj.eq(index).addClass(classname);
}

$(document).ready(function(){
    $(".yz-meb-btn1").bind('click', function(){
	$(".ue-post").show();
	$(".ue-post-close").bind('click', function(){
	    $(".ue-post").hide();
	});
    });
    $(".search-tag").bind('click', function(){
	$(".ue-stag").show();
	$(".ue-stag-close").bind('click', function(){
	    $(".ue-stag").hide();
	});
    });
});