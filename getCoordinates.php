<?php
//contries and their coordinates
//this block is retreiving lattitude
$country= $_REQUEST["country"];
//echo "<option value=>";
$coordinates = array(
 "India" => array("22.3511", "78.6677"),
 "Vancouver" => array("49.2608", "-123.1139",),
 "Toronto" => array("43.6539", "-79.3872"),
 "Japan" => array("36.5748","139.2394"),
 "New Zealand" => array("-41.5000","172.8344"),
 "Germany" => array("51.0834","10.4234"),
 "Kenya" => array("1.4419","38.4313")
 );
if(isset($country))
{
    
 if(isset($coordinates[$country]))
 {
    // echo "<p>" . ($coordinates[$country][0]) . "</p>";
    echo $coordinates[$country][0];
    
 }
}
?>