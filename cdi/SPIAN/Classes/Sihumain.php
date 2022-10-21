<?php
Class Sihumain extends Classes {
    private $_humain_id;
    private $_humain_login;
    private $_humain_password;

    public function getHumain_id() {
        return $this->_humain_id;
    }
    public function setHumain_id($humain_id) {
        return $this->_humain_id = $humain_id;
    }

    public function getHumain_login() {
        return $this->_humain_login;
    }
    public function setHumain_login($humain_login) {
       return $this->_humain_login = $humain_login;
    }

    public function getHumain_password() {
        return $this->_humain_password;
    }
    public function setHumain_password($humain_password) {
       return $this->_humain_password = $humain_password;
    }
}
