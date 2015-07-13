function ShowAddress() {
	var appid = 'your-appid';
	var query = document.getElementById('query').value;
	var url = "http://search.olp.yahooapis.jp/OpenLocalPlatform/V1/localSearch?appid=" + appid + "&query=" + encodeURI( query ) + "&callback=ShowResult";
//	var url = "http://placeinfo.olp.yahooapis.jp/V1/get?appid=" + appid + "&query=" + encodeURI(query) + "&callback=ShowResult";
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
	alert();
	if(result.Count > 0)
	{
		alert( result.Count + "件の結果が見つかりました。¥n" + result.Item[0].Title + "の住所は" + result.Item[0].Address + "です。");
	}
	else
	{
		alert("検索結果が見つかりませんでした。")
	}
}