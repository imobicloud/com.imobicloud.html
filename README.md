# Titanium UI - HTML

Webview wrapper for Titanium

assets

	- Move the folder [webview] in [com.imobicloud.html/assets] to [app/assets]
	- Remove folder [remove this - has some advanced examples]
	- Create test.jsss
	- test.jsss has a function XX
		function XX(params) {
			$('#app').html(params.id);
		}
	- test.jsss fire event YY
		UTILS.fireEvent(e, 'YY', { id: 1 });	

xml
	
	<!-- Short -->
	<Widget id="wv" src="com.imobicloud.html"/>
	
	<!-- or Full 
		- url: path to html file
		- csss: css files used in html file
		- scripts: js files used in html file
		jquery.jsss + fastclick.jsss + index.jsss are included by default
		js extension is .jsss to fix android loading js bug
		index.jsss has some utils that you may want to use :D
	-->
	<Widget id="wv" src="com.imobicloud.html" 
		url="/webview/html/index.html"
		csss="templates/stories.css,templates/comment.css"
		scripts="libs/Event.jsss,templates/stories.jsss,test.jsss"
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
	
- You have to add .jsss, .css manually		