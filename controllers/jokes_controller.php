<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/jokes_model.php';

if($_REQUEST['action'] === 'index'){
    echo json_encode(Joke::all());
}else if ($_REQUEST['action'] === 'create'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);
    $new_joke = new Joke (null, $body_object->name, $body_object->age);
    $all_jokes = Joke::create($new_joke);
    echo json_encode($all_jokes);
}else if ($_REQUEST['action'] === 'update'){
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_joke = new Joke($_REQUEST['id'], $body_object->name, $body_object->age);
  $all_jokes = Joke::update($updated_joke);
  echo json_encode($all_jokes);
}else if ($_REQUEST['action'] === 'delete'){
  $all_jokes = Joke::delete($_REQUEST['id']);
  echo json_encode($all_jokes);
}

?>
