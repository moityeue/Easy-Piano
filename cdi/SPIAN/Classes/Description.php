<?php
class Description extends Classes {
    private $_note_name;
    private $_description_note;
    private $_english_notes;
    private $_allemand_notes;
    private $_image_notes;

    public function getNote_name() {
        return $this->_note_name;
    }
    public function setNote_name($note_name) {
        return $this->_note_name = $note_name;
    }

    public function getDescription_note(){
        return $this->_description_note;
    }
    public function setDescription_note($description_note) {
        return $this->_description_note = $description_note;
    }

    public function getEnglish_notes(){
        return $this->_english_notes;
    }
    public function setEnglish_notes($english_notes) {
        return $this->_english_notes = $english_notes;
    }

    public function getAllemand_notes(){
        return $this->_allemand_notes;
    }
    public function setAllemand_notes($allemand_notes) {
        return $this->_allemand_notes = $allemand_notes;
    }
    
    public function getImage_notes(){
        return $this->_image_notes;
    }
    public function setImage_notes($image_notes) {
        return $this->_image_notes = $image_notes;
    }
}