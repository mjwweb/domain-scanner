<?php
curl -u 'username:token' 'https://api.dev.name.com/v4/domains:checkAvailability';
-X POST -H 'Content-Type: application/json' --data '{"domainNames":["example.org"]}';
?>