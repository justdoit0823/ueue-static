
var search_urls={
    wk : "/works?lable=",
    rcd : "/records?lable=",
    usr : "/professional?lable="
}

var special_urls=["records", "works","professional"]


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
    $(".yz-meb-btn1").click(function(){//fadein post page
        $("#editor-choose").fadeIn(200);
	$("#editor-choose").nextAll().fadeOut(200);
    })
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


//show slide bar

function showSideBar(indexArray)
	{
		// alert('hide');
		if (!(Object.prototype.toString.call(indexArray) === '[object Array]')) {
			alert("余总，你用的是数组么？真替你智商捉急！！！");

			return;
		};

		var sideItems = $(".ue-main-icon").children();
		var sideCount = sideItems.length;
		var arrayLength = indexArray.length;
		var i;
		if (arrayLength > sideItems) {
			alert("余总，咱没那么多项，您减点儿...");

			return;
		};

		for (i = 0; i < arrayLength; i++) {
			if (isNaN(indexArray[i]) || indexArray[i] < 1 || indexArray[i] == undefined) {
				alert("数组非法");

				return;
			};
		};

		for (i = 0; i < sideCount; i++) {
			sideItems.eq(i).hide();
		};

		for (i =0; i < arrayLength; i++) {
			sideItems.eq(indexArray[i] - 1).show();
		};
	}



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
    $(".yz-meb-btn1").click(function(){
	if($(".ue-hdbg-editor").css("height") == "142px"){
	    $(".ue-hdbg-editor").css({"border-bottom":"none"});
	    $(".ue-hdbg-editor").animate({"height":"0"},200);
	}
	else{
	    $(".ue-hdbg-editor").css({"border-bottom":"1px solid #CCC"});
	    $(".ue-hdbg-editor").animate({"height":"142"},200);
	}
    })
})