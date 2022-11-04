<?php
class ModelDescription extends Model {
    public function humain_descriptions() { 
        $db = $this->getDb();
        $req =$db->query("SELECT `note_name`, `description_notes`, `english_notes`,`image_notes` FROM `description_spian`");
        
        $descriptions = [];

        while ($desc = $req->fetch(PDO::FETCH_ASSOC)) {{
            $descriptions[] = new ModelDescription($desc);
            var_dump($desc);
            }  
        }
       return $descriptions;
    }
}
