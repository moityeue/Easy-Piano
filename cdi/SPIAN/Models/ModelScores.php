<?php
 class ModelScores extends Model {
    public function humain_scores($id) {
        $db = $this->getDb();
    $req = $db->query("SELECT `score_id`, `score_valeur`, `score_outil_id`, `score_humain_id`, `score_param1`, `score_param2`, `score_param3`, `score_param4`, `score_est_actif`, `score_date`, `scores_spian`.`humain_id`, `si_humain`.`humain_id`,`scores_spian`.`humain_login` , `si_humain`.`humain_login` FROM `scores_spian` INNER JOIN `si_humain` ON `scores_spian`.`humain_id` = `si_humain`.`humain_id`");
    
    $req2 = $db->query("SELECT `score_id`, `score_valeur`, `score_outil_id`, `score_humain_id`, `score_param1`, `score_param2`, `score_param3`, `score_param4`, `score_est_actif`, `score_date`, `scores_spian`.`humain_id`, `si_humain`.`humain_id`,`scores_spian`.`humain_login` , `si_humain`.`humain_login` FROM `scores_spian` INNER JOIN `si_humain` ON `scores_spian`.`humain_id` = `si_humain`.`humain_id`");


    $humains = [];
    $scores = [];
    while ($humain = $req->fetch(PDO::FETCH_ASSOC)){
      $humains[] = new Sihumain($humain);
    }

    while ($score = $req2->fetch(PDO::FETCH_ASSOC)){
      $scores[] = new Scores($score);
    }
    return array($humains);
    return array($scores);
    }
}
