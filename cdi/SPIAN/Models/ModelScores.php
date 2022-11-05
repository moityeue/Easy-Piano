<?php
 class ModelScores extends Model {
    public function humain_scores() {
        $db = $this->getDb();
    $req = $db->query("SELECT `score_id`, `score_valeur`, `score_outil_id`, `score_humain_id`, `score_param1`, `score_param2`, `score_param3`, `score_param4`, `score_est_actif`, `score_date`, `scores`.`humain_id`, `si_humain`.`humain_id`,`scores`.`humain_login` , `si_humain`.`humain_login` FROM `scores` INNER JOIN `si_humain` ON `scores`.`humain_id` = `si_humain`.`humain_id`");
    
    $req2 = $db->query("SELECT `score_id`, `score_valeur`, `score_outil_id`, `score_humain_id`, `score_param1`, `score_param2`, `score_param3`, `score_param4`, `score_est_actif`, `score_date`, `scores`.`humain_id`, `si_humain`.`humain_id`,`scores`.`humain_login` , `si_humain`.`humain_login` FROM `scores` INNER JOIN `si_humain` ON `scores`.`humain_id` = `si_humain`.`humain_id`");

    $humains = [];
    $scores = [];
    while ($humain = $req->fetch(PDO::FETCH_ASSOC)){
      $humains[] = new Sihumain($humain);
    }

    while ($sco = $req2->fetch(PDO::FETCH_ASSOC)){
      $scores[] = new Scores($sco);
      $humains[] = new Sihumain($sco);
    }
    // var_dump($scores);
    // var_dump($humains);
    return $scores;
    return  $humains;
    }
}
