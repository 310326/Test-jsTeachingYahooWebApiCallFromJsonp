function ShowAddress() {
	var appid = 'Your-AppId';
	var query = document.getElementById('query').value;
	var url = "http://search.olp.yahooapis.jp/OpenLocalPlatform/V1/localSearch?appid=" + appid + "&cid=d8a23e9e64a4c817227ab09858bc1330" + "&query=" + encodeURI( query ) + "&output=json&callback=ShowResult";
	CallJSONP(url);
}

function CallJSONP(url) {
	Message("JSONP response: " + url);
	var target = document.createElement('script');
	target.charset = 'utf-8';
	target.src = url;
	document.body.appendChild(target);
}

function ShowResult(result) {
	if(result.ResultInfo.Count > 0)
	{
		Message(result.ResultInfo.Count + "件の結果が見つかりました。\n" + result.Feature[0].Name + "の住所は" + result.Feature[0].Property.Address + "です。");
	}
	else
	{
		Message("検索結果が見つかりませんでした。")
	}
}

function Message(message_string, type) {
	if(type === "alert")
	{
		alert(message_string);
	}
	else
	{
		console.log(message_string);
	}
}