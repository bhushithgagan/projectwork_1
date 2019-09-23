<?php
    $db = mysqli_connect('localhost','root','');
    if(!db)
    exit "Error!";
    print "Connection Succesful!";
    $a = $_POST['stname'];
    $b = $_POST['stage'];
    $c = $_POST['stusn'];
    echo '$a',$b,'$c';
    $d = mysqli_select_db($db,"index");
    $query = "insert into index values ('$a',$b,'$c')";
    mysqli_e($db,$query);
    echo"<p>".$stname.$stage.$stusn."</php>";
    if(!d)
    exit("Database Error!");
    print "Databse Selected";
?>
</body>
</html>