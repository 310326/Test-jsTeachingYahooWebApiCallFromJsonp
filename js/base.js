function ShowAddress() {
	var appid = 'Your-AppId';
	var query = document.getElementById('query').value;
	var url = "http://search.olp.yahooapis.jp/OpenLocalPlatform/V1/localSearch?appid=" + appid + "&query=" + encodeURI( query ) + "&output=json&callback=ShowResult";
	CallJSONP(url);
}

function CallJSONP(url) {
	Message(url);
	var target = document.createElement('script');
	target.charset = 'utf-8';
	target.src = url;
	document.body.appendChild(target);
}

function ShowResult(result) {
	if(result.Count > 0)
	{
		Message(result.Count + "件の結果が見つかりました。¥n" + result.Item[0].Title + "の住所は" + result.Item[0].Address + "です。");
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