<?php
Class Arbustes_outil extends Classes {
    private $_outil_id;
    private $_outil_est_actif;
    private $_outil_nom;
    private $_outil_type;

    public function getOutil_id() {
        return $this->_outil_id;
    }
    public function setOutil_id($outil_id) {
        return $this->_outil_id = $outil_id;
    }

    public function getOutil_est_actif() {
        return $this->_outil_est_ctif;
    }
    public function setOutil_est_actif($outil_est_ctif) {
        return $this->_outil_est_actif = $outil_est_ctif;
    }

    public function getOutil_nom() {
        return $this->_outil_nom;
    }
    public function setOutil_nom($outil_nom) {
        return $this->_outil_nom = $outil_nom;
    }

    public function getOutil_type() {
        return $this->_outil_type;
    }
    public function setOutil_type($outil_type) {
        return $this->_outil_type = $outil_type;
    }
}