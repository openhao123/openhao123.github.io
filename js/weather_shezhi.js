var HaoForecast=null,setWeather={init:function($){setWeather.buildSelect(G("prov"),$);setTimeout(function(){G("prov").options[0].selected=true},0);setWeather.changeSelect();G("prov").onchange=setWeather.changeSelect;G("setBtn").onclick=setWeather.update;loadXSAjax({t:1,onsuccess:function(){if(typeof HaoForecast=="undefined"||HaoForecast==null)setWeather.error();else{G("weatherSetTip").innerHTML="";setWeather.show(HaoForecast)}},onerror:function(){}})},changeSelect:function(){var $=G("prov").options[G("prov").selectedIndex].value;setWeather.buildSelect(G("city"),cities[$])},buildSelect:function(B,$){var A=document.createDocumentFragment();for(var D in $){var _=document.createElement("option"),C=Object.prototype.toString.call($)==="[object Array]";D=C?$[D]:D;_.value=D;_.appendChild(document.createTextNode(D));A.appendChild(_)}B.style.zoom="";B.options.length=0;B.appendChild(A);B.style.zoom="1";A=null},show:function(B){var C=G("forecast_content"),$=G("default_city"),E=B.forecast,D=E.length,A=~~(100/D)+"%",_="";for(var F=0;F<D;F++){_+='<ul style="width:'+A+'">';if(F==0&&D>3)_+='<li class="today">'+E[F].Date+"\uff08"+getWeek(E[F].Date)+'\uff09\u665a</li><li><a target="_blank" href="'+B.URL+'"><img src="'+E[F].Pic_1+'"></a></li><li>'+E[F].Weather+'</li><li class="temp"><span class="max">'+E[F].Tmax+"\u2103</span></li>";else _+="<li>"+E[F].Date+"\uff08"+getWeek(E[F].Date)+'\uff09</li><li><a target="_blank" href="'+B.URL+'"><img src="'+E[F].Pic_1+'"></a>&nbsp;<a target="_blank" href="'+B.URL+'"><img src="'+E[F].Pic_2+'"></a></li><li>'+E[F].Weather+'</li><li class="temp"><span class="max">'+E[F].Tmax+'\u2103</span>&nbsp;~&nbsp;<span class="min">'+E[F].Tmin+"\u2103</span></li>";_+="<li>"+E[F].Wind+"</li></ul>"}$.innerHTML=B.Name;G("weatherReleaseTime").innerHTML=B.Provider;G("moreWeather1").href=B.Link_1;G("moreWeather2").href=B.Link_2;G("moreWeather1").innerHTML=B.Link_content_1;G("moreWeather2").innerHTML=B.Link_content_2;C.innerHTML=_;_=null;HaoForecast=null},update:function(){if(G("prov").selectedIndex>0)if(navigator.cookieEnabled){G("weatherSetTip").innerHTML='<span style="color:#666;">\u6b63\u5728\u52a0\u8f7d\u5929\u6c14\u4fe1\u606f...\u8bf7\u7a0d\u5019</span>';loadXSAjax({t:2,prov:encodeURIComponent(G("prov").value),city:encodeURIComponent(G("city").value),onsuccess:function(){if(typeof HaoForecast=="undefined"||HaoForecast==null)setWeather.error();else{G("weatherSetTip").innerHTML="\u60a8\u9009\u62e9\u7684\u57ce\u5e02\u5df2\u7ecf\u5b9a\u5236\u6210\u529f\uff01<strong>\u5237\u65b0\u9996\u9875\u663e\u793a</strong>\u5929\u6c14\u9884\u62a5";setWeather.show(HaoForecast)}},onerror:function(){G("weatherSetTip").innerHTML='<a href="javascript:void(0)" onclick="setWeather.init(cities)">\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\uff0c\u5929\u6c14\u52a0\u8f7d\u5931\u8d25...<b>\u70b9\u6b64\u91cd\u8bd5</b></a>'}})}else G("weatherSetTip").innerHTML='\u63d0\u793a\uff1a\u60a8\u7684\u6d4f\u89c8\u5668\u672a\u5f00\u542fcookies\uff0c\u4e0d\u80fd\u5b9a\u5236\u57ce\u5e02\uff01<a href="redian/scookie.htm" target="_blank">\u5982\u4f55\u5f00\u542fcookies\u529f\u80fd</a>'}}