<?php
class ModelNotes extends Model {
    public function humain_notes() {
        $db = $this->getDb();
        $req = $db->query("SELECT `description_spian`.`note_name`,`notes_spian`.`note_name`,`notes_spian`.`id_notes` ,`description_notes`, `english_notes`,`image_notes` FROM `description_spian` INNER JOIN `notes_spian` ON  `description_spian`.`note_name` = `notes_spian`.`note_name` ");

        $notes =[];
        while($note = $req->fetch(PDO::FETCH_ASSOC)){
            $notes[] = new ModelNotes($note);
        }
        return array($notes);
    }  
}

