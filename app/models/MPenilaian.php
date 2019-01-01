<?php
namespace Ebmt\Models ;

class MPenilaian extends ModelBase
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
    protected $penilaian;
     
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
     * Method to set the value of field penilaian
     *
     * @param string $penilaian
     * @return $this
     */
    public function setPenilaian($penilaian)
    {
        $this->penilaian = $penilaian;

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
     * Returns the value of field penilaian
     *
     * @return string
     */
    public function getPenilaian()
    {
        return $this->penilaian;
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
            'penilaian' => 'penilaian', 
            'status' => 'status', 
            'created_at' => 'created_at', 
            'updated_at' => 'updated_at'
        );
    }

}
