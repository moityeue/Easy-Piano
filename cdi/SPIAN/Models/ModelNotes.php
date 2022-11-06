<?php
class ModelNotes extends Model {
    public function humain_notes() {
        $db = $this->getDb();
        $req = $db->query("SELECT `description_spian`.`note_name`,`note_name`,`id_notes` ,`description_notes`, `english_notes`,`image_notes` FROM `description_spian` ");

        $notes =[];
    
        while($no = $req->fetch(PDO::FETCH_ASSOC)){
            $notes[] = new Notes_spian($no);
             // var_dump($no);
            }
        return $no;
    }  
}
