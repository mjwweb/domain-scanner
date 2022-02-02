<?php

    $domain = $_POST['domain'];
    $request = file_get_contents('https://madchecker.com/api/domain/get-information?domain='.$domain);
    $request = json_decode($request, true);

    echo json_encode($request);
    