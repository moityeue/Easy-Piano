<?php
class ModelSihumain extends Model {
  public function humain_login(){
    $db = $this->getDb();
    $req = $db->query("SELECT `score_id`, `score_valeur`, `score_outil_id`, `score_humain_id`, `score_param1`, `score_param2`, `score_param3`, `score_param4`, `score_est_actif`, `score_date`, `scores`.`humain_id`, `si_humain`.`humain_id`,`scores`.`humain_login` , `si_humain`.`humain_login` FROM `scores` INNER JOIN `si_humain` ON `scores`.`humain_id` = `si_humain`.`humain_id`");
    $humains = [];
    $scores = [];
    while ($hum = $req->fetch(PDO::FETCH_ASSOC)){
      $humains[] = new Sihumain($hum);
      $scores[] = new Scores($hum);
    }   
   
    return array($humains, $scores);
  } 
  
}
