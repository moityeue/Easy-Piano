<?php
class Notes_spian extends Classes {
    private $_id_notes;
    private $_note_name;

    public function getId_Notes() {
        return $this->_id_notes;
    }
    public function setId_notes($id_notes) {
        return $this->_id_notes = $id_notes;
    }
    public function getNote_name() {
        return $this->_note_name;
    }
    public function setNote_name($note_name) {
        return $this->_note_name = $note_name;;
    }
}