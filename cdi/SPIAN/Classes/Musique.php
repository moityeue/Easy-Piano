<?php
class Musique extends Classes {
    private $_id_musique;
    private $_nom_musique;
    private $_annee_musique;
    private $_compositeur_musique;

    public function getId_musique() {
        return $this->_id_musique;
    }
    public function setId_musique($id_musique) {
        return $this->_id_musique = $id_musique;
    }

    public function getNom_musique() {
        return $this->_nom_musique;
    }
    public function setNom_musique($nom_musique){
        return $this->_nom_musique = $nom_musique;
    }

    public function getAnnee_musique() {
        return $this->_annee_musique;
    }
    public function setAnnee_musique($annee_musique){
        return $this->_annee_musique = $annee_musique;
    }

    public function getCompositeur_musique(){
        return $this->_compositeur_musique;
    }
    public function setCompositeur_musique($compositeur_musique){
        return $this->_compositeur_musique = $compositeur_musique;
    }
}