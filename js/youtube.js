$(document).ready(function(){
	//Examples of how to assign the ColorBox event to elements
				
	$(".youtube").colorbox({iframe:true, innerWidth:720, innerHeight:510});
				
	});
	
	$videos = array ( 
		/* these arrays contain the 3 pieces of info (youtube_id, title, thumb) you need for each video <br>
		You can add as many as you want, in the order you want. Just copy/paste. Remember, the last one does not have a comma after it.
		
*/
		array (
			"youtube_id" => "FztZ0HVbqUI",
			"title" => "Reach Out St. Louis launch with Tony Dungy, Issac Bruce and Ozzie Smith.",
			"thumb" => "reachout-launch-ksdk.jpg"
        ),//YOU NEED A COMMA AFTER EACH ARRAY, EXCEPT FOR THE LAST.
		array("youtube_id" => "IM0stzNFRCY",
			"title" => "Then NewsChannel 5 Broadcaster Cordell Whitlock",
			"thumb" => "cordell-whitlock.jpg"
		),
		/* THESE NEXT FOUR ARE COPIES OF THE ABOVE TWO*/
		array (
			"youtube_id" => "FztZ0HVbqUI",
			"title" => "Reach Out St. Louis launch with Tony Dungy, Issac Bruce and Ozzie Smith.",
			"thumb" => "reachout-launch-ksdk.jpg"
        ), 
		array("youtube_id" => "IM0stzNFRCY",
			"title" => "Then NewsChannel 5 Broadcaster Cordell Whitlock",
			"thumb" => "cordell-whitlock.jpg"
		),array (
			"youtube_id" => "FztZ0HVbqUI",
			"title" => "Reach Out St. Louis launch with Tony Dungy, Issac Bruce and Ozzie Smith.",
			"thumb" => "reachout-launch-ksdk.jpg"
        ), 
		array("youtube_id" => "IM0stzNFRCY",
			"title" => "Then NewsChannel 5 Broadcaster Cordell Whitlock",
			"thumb" => "cordell-whitlock.jpg"
		)//NOTE THE LAST ONE DOES NOT HAVE A COMMA!!!
									 
                  
   );
