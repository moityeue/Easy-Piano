<?php
class ModelMusique extends Model{
    public function musique_quiz(){
        $db = $this->getDb();
        
        $req = $db->query("SELECT `id_musique`, `nom_musique`, `annee_musique`, `compositeur_musique` FROM `musique` WHERE `id_musique` ");
        $musiques = [];
        while($musique = $req->fetch(PDO::FETCH_ASSOC)){
            $musiques[] = new ModelMusique($musique);
            // var_dump($musique);
        }
        return array ($musiques);
    }
}
