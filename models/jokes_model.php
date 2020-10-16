<?php
  	$dbconn = pg_connect("host=localhost dbname=jokez");




  class Joke{
    public $id;
    public $type;
    public $setup;
    public $punchline;
    public $vote;


    public function __construct($id, $type, $setup, $punchline, $vote) {
      $this->id = $id;
      $this->type = $type;
      $this->setup = $setup;
      $this->punchline = $punchline;
      $this->vote = $vote;
    }
  }



  class Jokes{
    static function create($joke){
      $query = "INSERT INTO jokes (type, setup, punchline, vote) VALUES ($1, $2, $3, 0)";
      $query_params = array($joke->type, $joke->setup, $joke->punchline);
      pg_query_params($query, $query_params);
      return self::read();
      }

    static function read(){
      $jokes = array();
      $results = pg_query("SELECT * FROM jokes");
      $row_object = pg_fetch_object($results);

      while($row_object){
        $new_joke = new Joke(
          intval($row_object->id),
          $row_object->type,
          $row_object->setup,
          $row_object->punchline,
          intval($row_object->vote)
        );
        $jokes[]= $new_joke;
        $row_object = pg_fetch_object($results);
      }
      return $jokes;
    } 

    static function update($updated_joke){
      $query = "UPDATE jokes SET type = $1, setup=$2, punchline = $3 WHERE id = $4";
      $query_params = array($updated_joke->type, $updated_joke->setup, $updated_joke->punchline, $updated_joke->id);
      pg_query_params($query, $query_params);

      return self::read();
    }

    static function delete($id){
      $query = "DELETE FROM jokes WHERE id = $1";
      $query_params = array($id);
      pg_query_params($query, $query_params);

      return self::read();
    }

    static function random(){
      $jokes = self::read();
      $randomJoke = $jokes[array_rand($jokes)];
      return $randomJoke;
    }

  }



 ?>
