<?php
class ModelNotes extends Model {
    public function humain_notes() {
        $db = $this->getDb();
        $req = $db->query("SELECT `description_spian`.`note_name`,`note_name`,`id_notes` ,`description_notes`, `english_notes`,`image_notes` FROM `description_spian` ");

        $descriptions =[];
    
        while($no = $req->fetch(PDO::FETCH_ASSOC)){
            $descriptions[] = new ModelDescription($no);
              //var_dump($no);
            }
        return $descriptions;
    }  
}

