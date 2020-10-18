<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/jokes_model.php';

if($_REQUEST['action'] === 'index'){
    echo json_encode(Jokes::read());
}else if($_REQUEST['action'] === 'create'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);
    $new_joke = new Joke (null, $body_object->type, $body_object->setup, $body_object->punchline, $body_object->vote);
    $all_jokes = Jokes::create($new_joke);
    echo json_encode($all_jokes);
}else if($_REQUEST['action'] === 'update'){
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_joke = new Joke($_REQUEST['id'], $body_object->type, $body_object->setup, $body_object->punchline);
  $all_jokes = Jokes::update($updated_joke);
  echo json_encode($all_jokes);
}else if($_REQUEST['action'] === 'delete'){
  $all_jokes = Jokes::delete($_REQUEST['id']);
  echo json_encode($all_jokes);
}else if($_REQUEST['action'] === 'random'){
  $all_jokes = Jokes::random();
  echo json_encode($all_jokes);
}else if($_REQUEST['action'] === 'vote'){
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_joke = new Joke($_REQUEST['id'], $body_object->type, $body_object->setup, $body_object->punchline, $body_object->vote);
  $all_jokes = Jokes::vote($updated_joke);
  echo json_encode($all_jokes);
}

?>
