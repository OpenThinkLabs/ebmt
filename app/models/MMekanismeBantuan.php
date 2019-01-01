<?php
namespace Ebmt\Models ;

class MMekanismeBantuan extends ModelBase
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
    protected $mekanisme_bantuan;
     
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
     * Method to set the value of field mekanisme_bantuan
     *
     * @param string $mekanisme_bantuan
     * @return $this
     */
    public function setMekanismeBantuan($mekanisme_bantuan)
    {
        $this->mekanisme_bantuan = $mekanisme_bantuan;

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
     * Returns the value of field mekanisme_bantuan
     *
     * @return string
     */
    public function getMekanismeBantuan()
    {
        return $this->mekanisme_bantuan;
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
            'mekanisme_bantuan' => 'mekanisme_bantuan', 
            'status' => 'status', 
            'created_at' => 'created_at', 
            'updated_at' => 'updated_at'
        );
    }

}
