<?php
class ModelDescription_spian extends Model {
    public function humain_descriptions() {
        $db = $this->getDb();
        $req = ("SELECT `note_name`, `description_notes`, `english_notes`, `allemand_notes`, `image_notes` FROM `description_spian`");
        var_dump($req);
    }
}