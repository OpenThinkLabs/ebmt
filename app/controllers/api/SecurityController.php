<?php

namespace Ebmt\Controllers\Api;

use Phalcon\Tag as Tag;
use Phalcon\Http\Response as Response;
use Ebmt\Models\Users as Users ;


class SecurityController extends ControllerBase
{
    public function initialize()
    {
        parent::initialize();
    }

    public function indexAction()
    {
        if (!$this->request->isPost()) {
            Tag::setDefault('email', '');
            Tag::setDefault('password', '');
        }
    }

    public function registerAction()
    {
        $request = $this->request;
        if ($request->isPost()) {

            $name = $request->getPost('name', array('string', 'striptags'));
            $username = $request->getPost('username', 'alphanum');
            $email = $request->getPost('email', 'email');
            $password = $request->getPost('password');
            $repeatPassword = $this->request->getPost('repeatPassword');

            if ($password != $repeatPassword) {
                $this->flash->error('Passwords are diferent');
                return false;
            }

            $user = new Users();
            $user->username = $username;
            $user->password = sha1($password);
            $user->name = $name;
            $user->email = $email;
            $user->created_at = new Phalcon\Db\RawValue('now()');
            $user->active = 'Y';
            if ($user->save() == false) {
                foreach ($user->getMessages() as $message) {
                    $this->flash->error((string) $message);
                }
            } else {
                Tag::setDefault('email', '');
                Tag::setDefault('password', '');
                $this->flash->success('Terimakasih telah mendaftar, silahkan login untuk memanfaatkan sistem informasi penerima manfaat.');
                return $this->forward('Security/index');
            }
        }
    }

    /**
     * Register authenticated user into session data
     *
     * @param Users $user
     */
    private function _registerSession($user)
    {
        $this->session->set('auth', array(
            'id' => $user->id,
            'name' => $user->name
        ));
    }

    /**
     * This actions receive the input from the login form
     *
     */
    public function loginAction()
    {
        if ($this->request->isPost()) {
            $username = $this->request->getPost('username', 'alphanum');
            $password = $this->request->getPost('password');
            $user     = Users::findFirst("username='$username' AND password='$password' AND active='Y'");
            if ($user != false) {
                $this->_registerSession($user);
                $response = array("success"=>true);
                echo json_encode($response);
                exit;
            }

            $response = array("success"=>false,"message"=>"Mohon maaf, username dan password Anda salah.");
            echo json_encode($response);
            exit;
        }

        return $this->forward('Security/index');
    }

    /**
     * Finishes the active session redirecting to the index
     *
     * @return unknown
     */
    public function logoutAction()
    {
        $this->session->remove('auth');
        $response = array("success"=>true);
        echo json_encode($response);
        exit;        
    }
}
