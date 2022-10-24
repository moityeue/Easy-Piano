<?php
class ModelNotes_spian extends Model {
    public function humain_notes() {
        $db = $this->getDb();
        $req = $db->query("SELECT `description`.`note_name`,`notes`.`note_name`,`notes`.`id_notes` ,`description_notes`, `english_notes`, `allemand_notes`, `image_notes` FROM `description` INNER JOIN `notes` ON  `description`.`note_name` = `notes`.`note_name` ");
    }
}