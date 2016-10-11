# Titanium UI - HTML

Webview wrapper for Titanium

assets

	- Move the folder [webview] in [com.imobicloud.html/assets] to [app/assets]
	- Remove folder [remove this - has some advanced examples]
	- Create test._js
	- test._js has a function XX
		function XX(params) {
			$('#app').html(params.id);
		}
	- test._js fire event YY
		UTILS.fireEvent(e, 'YY', { id: 1 });	

xml
	
	<!-- Short -->
	<Widget id="wv" src="com.imobicloud.html"/>
	
	<!-- or Full 
		- url: path to html file
		- csss: css files used in html file
		- scripts: js files used in html file
		jquery._js + fastclick._js + index._js are included by default
		js extension is ._js to fix android loading js bug
		index._js has some utils that you may want to use :D
	-->
	<Widget id="wv" src="com.imobicloud.html" 
		url="/webview/html/index.html"
		csss="templates/stories.css,templates/comment.css"
		scripts="libs/Event._js,templates/stories._js,test._js"
		onYY="wvYY"
	/>
	
js
	
	function wvYY(e) {
		// e.id
	}
		
	// to call a js function name XX
	$.wv.run({
		callback: 'XX',
		params: { id: 1 }
	});
	
	// remove webview
	$.wv.unload();
	
Changes log:
	
- You have to add ._js, .css manually		
	<Widget id="wv" src="com.imobicloud.html" 
	    csss="test.css"
	    scripts="test._js"
	    onYY="wvYY"
	/>
