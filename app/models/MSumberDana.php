<?php
namespace Ebmt\Models ;

class MSumberDana extends ModelBase
{

    /**
     *
     * @var integer
     */
    protected $id;
     
    /**
     *
     * @var string
     */
    protected $sumber_dana;
     
    /**
     *
     * @var string
     */
    protected $status;
     
    /**
     *
     * @var string
     */
    public $created_at;
     
    /**
     *
     * @var string
     */
    public $updated_at;
     
    /**
     * Method to set the value of field id
     *
     * @param integer $id
     * @return $this
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Method to set the value of field sumber_dana
     *
     * @param string $sumber_dana
     * @return $this
     */
    public function setSumberDana($sumber_dana)
    {
        $this->sumber_dana = $sumber_dana;

        return $this;
    }

    /**
     * Method to set the value of field status
     *
     * @param string $status
     * @return $this
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }



    /**
     * Returns the value of field id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Returns the value of field sumber_dana
     *
     * @return string
     */
    public function getSumberDana()
    {
        return $this->sumber_dana;
    }

    /**
     * Returns the value of field status
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Returns the value of field created_at
     *
     * @return string
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * Returns the value of field updated_at
     *
     * @return string
     */
    public function getUpdatedAt()
    {
        return $this->updated_at;
    }

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'id' => 'id', 
            'sumber_dana' => 'sumber_dana', 
            'status' => 'status', 
            'created_at' => 'created_at', 
            'updated_at' => 'updated_at'
        );
    }

}
