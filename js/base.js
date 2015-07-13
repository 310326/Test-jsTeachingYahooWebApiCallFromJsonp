function ShowAddress() {
	var appid = '';
	var query = document.getElementById('query').value;
	var url = "http://map.yahooapis.jp/LocalSearchService/V1/LocalSearch?appid=" + appid + "&p=" + encodeURI( query ) + "&o=json&callback=showResult";
	CallJSONP(url);
}

function CallJSONP(url) {
	alert(url);
	var target = document.createElement('script');
	target.charset = utf-8;
	target.src = url;
	document.body.appendChild(target);
}

function ShowResult(result) {
	if(result.Count > 0)
	{
		alert( result.Count + "件の結果が見つかりました。¥n" + result.Item[0].Title + "の住所は" + result.Item[0].Address + "です。");
	}
	else
	{
		alert("検索結果が見つかりませんでした。")
	}
}