<?php
	function compress($img){
		$image=imagecreatefromjpeg($img);
		$src=explode('.', $img);
		imagejpeg($image, 'miniatures/' . $src[0] . 'min.jpg' , 70);
		imagedestroy($image);
	}
	$parts = parse_url($_SERVER['REQUEST_URI']);
	parse_str($parts['query'], $query);
	if(!file_exists('miniatures/' . $query['fn'] . 'min.jpg')){
		compress($query['fn'] . '.jpg');
	}
	header('Content-Type: image/jpeg');
	readfile('miniatures/' . $query['fn'] . 'min.jpg');
?>
