<?php
class ModelMusique extends Model{
    public function musique_quiz(){

        $db = $this->getDb();
        $req = $db->query("SELECT `id_musique`, `nom_musique`, `annee_musique`, `compositeur_musique` FROM `musique` WHERE `id_musique`");

    $musiques = [];

        while($mus = $req->fetch(PDO::FETCH_ASSOC)){
            $musiques[] = new Musique($mus);
         //var_dump($mus);
        }
        return $musiques;
    }
}
