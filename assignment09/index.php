<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Basic Archery Terms</title>
    <link rel="stylesheet" type="text/css" href="styles/normalize.min.css">
    <link rel="stylesheet" type="text/css" href="styles/site.css">
    <link rel="stylesheet" type="text/css" href="styles/styles.css">
  </head>
  <body>
    <div id="title">
      <h1>Basic Archery Terms</h1>
    </div>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
    <div id="container">

      <?PHP

/** read data from csv file*/
      function readCSV($file){
        $file_handle = fopen($file, 'r');
        while (!feof($file_handle) ) {
          $line_of_text[] = fgetcsv($file_handle, 1024);
        }
        fclose($file_handle);
        return $line_of_text;
      }


/** set path to CSV and convert it to an associative learning */
      function Conversion(){
        include 'scripts/glossary.php';
        $csv = readCSV($csvFile);
        $newArray = array();
        for ($i = 0; $i < count($csv); $i++) {
          $newArray[$csv[$i][0]] = $csv[$i][1];
        }

        return $newArray;
      }


/** create a dl list */
      function dlList(){
        $a = Conversion();
        ksort($a);
        echo "<dl>";
        foreach ($a as $key => $value) {
          echo "<dt>", $key, "<dd>", $value, "<br>"."<br>";
        }
        echo "</dl>";
      }


      dlList();

      ?>

    </div>
    <footer>
      And that's the sound of sunshine...
    </footer>
  </body>
</html>
