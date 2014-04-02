<?php include "inc/header.php";


	
	$videos = array ( 
	
		array (
			"youtube_id" => "JQeqbl2CQvs",
			"title" => "Mathews-Dickey Intro",
			"thumb" => "mqdefault_034.jpg"
        ),
		array("youtube_id" => "jWcGXvg-1A0",
			"title" => "Mathews-Dickey Three R's Rap ",
			"thumb" => "mqdefault_030.jpg"
		),
		array("youtube_id" => "I-vuxVauCt0",
			"title" => "Mathews-Dickey Happy Campers",
			"thumb" => "mqdefault_004.jpg"
        ), 
		array("youtube_id" => "OZnUsOdMS2k",
			"title" => "The Martin Luther Mathews Story",
			"thumb" => "mqdefault_033.jpg"
		),
		array("youtube_id" => "6HgwRUcLGOg",
			"title" => "Joe Biden's Visit on KMOV News",
			"thumb" => "mqdefault_011.jpg"
		),
		array("youtube_id" => "pkMfPyNy8QQ",
			"title" => "Joe Biden Visit",
			"thumb" => "mqdefault_007.jpg"
		),
		array("youtube_id" => "zj4JJHRKkrU",
			"title" => "President Reagan Welcome",
			"thumb" => "mqdefault_018.jpg"
		),
		array("youtube_id" => "jjhknsDS7w",
			"title" => "President Reagan Speech",
			"thumb" => "mqdefault_016.jpg"
		),
		array("youtube_id" => "rr6H3yEQqLQ",
			"title" => "Patrick Murphey/Living St. Louis/President Reagan's Visit",
			"thumb" => "mqdefault_021.jpg"
		),
		array("youtube_id" => "uayx4rKHY4U",
			"title" => "The Sky's the Limit - Part 1",
			"thumb" => "mqdefault_002.jpg"
		),
		array("youtube_id" => "sy9RiKQevYI",
			"title" => "The Sky's the Limit - Part 2",
			"thumb" => "mqdefault_032.jpg"
		),
		array("youtube_id" => "E7Xtdny2YuE",
			"title" => "The Sky's the Limit - Part 3",
			"thumb" => "mqdefault_003.jpg"
		),
		array("youtube_id" => "tnRr9G1bruE",
			"title" => "Mathews-Dickey 2010 Women in Careers Workshop - Part 1",
			"thumb" => "mqdefault_020.jpg"
		),
		array("youtube_id" => "-aZGqGQdsJY",
			"title" => "Mathews-Dickey 2010 Women in Careers Workshop - Part 2",
			"thumb" => "mqdefault_024.jpg"
		),
		array("youtube_id" => "Ee98LRlOeq0",
			"title" => "Mathews-Dickey 2010 Women in Careers Workshop - Part 3",
			"thumb" => "mqdefault_031.jpg"
		),
		array("youtube_id" => "C6PHsl70WNg",
			"title" => "Mathews-Dickey 2010 Women in Careers Workshop - Part 4",
			"thumb" => "mqdefault_027.jpg"
		),
		array("youtube_id" => "xxFdtoqQLIE",
			"title" => "Mathews-Dickey 2010 Women in Careers Workshop - Part 5",
			"thumb" => "mqdefault_006.jpg"
		),
		array("youtube_id" => "TMS30ncFliM",
			"title" => "Mathews-Dickey 2010 Women in Careers Workshop - Part 6",
			"thumb" => "mqdefault_008.jpg"
		),
		array("youtube_id" => "I4lx7Vp_fLY",
			"title" => "United Way",
			"thumb" => "mqdefault_023.jpg"
		),
		array("youtube_id" => "vzkLrc5VVZk",
			"title" => "Say Amen Gala",
			"thumb" => "mqdefault_028.jpg"
		),
		array("youtube_id" => "o5D-lLxUT_0",
			"title" => "Introduction of Precious Williams",
			"thumb" => "mqdefault_015.jpg"
		),
		array("youtube_id" => "mpjIZh4R6PI",
			"title" => "Michael Jackson Tribute by Clifton Davis",
			"thumb" => "mqdefault_019.jpg"
		),
		array("youtube_id" => "IvNl5K2xbTc",
			"title" => "Say Amen Banquet Again",
			"thumb" => "mqdefault_022.jpg"
		),
		array("youtube_id" => "dg0Bbn9atSg",
			"title" => "Welcome Remarks",
			"thumb" => "mqdefault_013.jpg"
		),
		array("youtube_id" => "cvWe8v0iUC8",
			"title" => "Elder Christopher Brown et al",
			"thumb" => "mqdefault.jpg"
		),
		array("youtube_id" => "GOMOW4ZlqdI",
			"title" => "Rev. William G. Gillespie",
			"thumb" => "mqdefault_025.jpg"
		),
		array("youtube_id" => "RMIBH5BoT_Q",
			"title" => "Rapper King James Performs O is for Oprah",
			"thumb" => "mqdefault_014.jpg"
		),
		array("youtube_id" => "gK1BsBZv7GM",
			"title" => "Sheer Elegance Fashion Show 2008",
			"thumb" => "mqdefault_010.jpg"
		),
		array("youtube_id" => "gNYlCHSqtpw",
			"title" => "Sheer Elegance Fashion Show 2009",
			"thumb" => "mqdefault_009.jpg"
		),
		array("youtube_id" => "pgp6WH8EGnk",
			"title" => "Sheer Elegance Fashion Show 2010",
			"thumb" => "mqdefault_017.jpg"
		),
		array("youtube_id" => "cZqsLpWlplc",
			"title" => "Sheer Elegance Fashion Show 2011",
			"thumb" => "mqdefault_026.jpg"
		),
		array("youtube_id" => "IM0stzNFRCY",
			"title" => "Then NewsChannel 5 Broadcaster Cordell Whitlock",
			"thumb" => "mqdefault_005.jpg"
		),
		array("youtube_id" => "FztZ0HVbqUI",
			"title" => "Reach Out St. Louis",
			"thumb" => "mqdefault_012.jpg"
		)
									 
                  
   );
?>				
	
<?php
    foreach($videos as $key => $value){
	//everything happens in here
?>

	<div class="videoThumbnail">
 	   <a class='youtube' href="http://www.youtube.com/embed/<?=$value['youtube_id']?>?rel=0&autoplay=1&amp;wmode=transparent" title="<?=$value['title']?>"><img src="images/video-thumbnails/<?=$value['thumb']?>" /><br /><?=$value['title']?></a>

    </div>

<?php 

	}

include "inc/footer.php" ?>