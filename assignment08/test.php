<?php
/*
* INFO/CS 1300
* Fall 2016
*
* Assignment 8, question 1
*
*/

// variables
$i; // counter variable
$key; // holder variable for array
$value; // holder variable for array
$plain_array = array(1,2,3,"four");
$assoc_array = array("Brady"=>12, "Blount"=>29, "Garropolo"=>10);

echo 'Loop 1:'.'<br>';
for ($i = 0; $i < count($plain_array); $i++){
    echo 'i: ' ;
    echo $plain_array[$i];
    echo '<br>';
}
echo '<br>';

echo 'Loop 2:'.'<br>';
foreach ($plain_array as $value) {
    echo 'value: ' ;
    echo $value;
    echo '<br>';
}
echo '<br>';

echo 'Loop 3:'.'<br>';
for ($i = 0; $i < count($plain_array); $i++){
    if (is_numeric($plain_array[$i])){
        echo 'value: ' ;
        echo $plain_array[$i];}
    echo '<br>';
}

echo 'Loop 4:'.'<br>';
foreach ($assoc_array as $key => $value) {
    echo $key;
    echo ':';
    echo $value;
    echo '<br>';
}
?>