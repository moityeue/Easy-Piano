<?php
class ModelNotes extends Model {
    public function humain_notes() {
        $db = $this->getDb();
        $req = $db->query("SELECT `description_spian`.`note_name`,`notes_spian`.`note_name`,`notes_spian`.`id_notes` ,`description_notes`, `english_notes`, `allemand_notes`, `image_notes` FROM `description_spian` INNER JOIN `notes_spian` ON  `description_spian`.`note_name` = `notes_spian`.`note_name` ");
       
        $notes = [];
        $description = [];

        while ($note = $req->fetchAll(PDO::FETCH_ASSOC)) {
            $notes[] = new ModelNotes($note);
            
        }
         var_dump($notes);
        return array($notes);
    }
    
}