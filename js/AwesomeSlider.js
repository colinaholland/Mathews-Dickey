/*
Awesome Slider demo, 4th of March, 2010
Copyright (C) 2010 Bogdan Pop of WebRaptor (R) (http://www.webraptor.eu, visit http://www.webia.info)
Released under Creative Commons Attribution 3.0 (http://creativecommons.org/licenses/by/3.0)
If you modify this source codes and use it in your own projects you must not modify or remove the above credits. However, you may add your own below this line.
*/

function AwesomeSlider(selector,xml)
{

	function Slide2Next(selector,count,content,items,slideID)
	{	
		if(slideID>0) count = slideID;
		else if(count<items) count++;
		else count = 1; // reached the last slide, get back to first

		$(selector+' .splash-content').animate({opacity:0},1000, function(){
			// faded out, changing content
			$(selector+ ' .splash-content').html(content[count]);

			// animating
			$(selector+' .splash-content').animate({},1000, function(){
				// change style of controls
				$(selector+' .splash-controls a.selected').removeAttr("class");
				$(selector+' .splash-controls a[rel='+count+']').attr("class","selected");
				// fading back in
				$(selector+' .splash-content').animate({}, 1000, function(){
					$(selector+' .splash-content').animate({opacity:1},1000);
				});
			});
		});
		
		return count;
	}
	
	// slider
	var items = 0;
	var content = new Array(10);
	var control = '';
	var count = 1;
	
	$.get(xml, function(data)
	{ // get contents from xml

		$(data).find('slide').each(function()
		{
			// populate array
			items++;
			var $slide = $(this); 
			content[items] = $slide.find('content').text();
			// create controls
			if(items==1) control = control + '<a href="#" class="selected" rel="'+items+'">'+items+'</a>';
			else control = control + '<a href="#" rel="'+items+'">'+items+'</a>';
		});
		
		$(selector+' .splash-content').html(content[count]);
	
		// add controls
		
		$(selector+' .splash-controls').html(control);
	});
	
	// control is clicked
	$(selector+' .splash-controls a').live('click',function (){
		var slideID = $(this).attr('rel');
		count = Slide2Next(selector,count,content,items,slideID);
		clearInterval(slideInterval);
		slideInterval = setInterval(function() {count = Slide2Next(selector,count,content,items)}, 8000 );
		return false;
	});
	
 	var slideInterval = setInterval(function() {count = Slide2Next(selector,count,content,items)}, 8000 );
}