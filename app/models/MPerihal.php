<?php
namespace Ebmt\Models ;

class MPerihal extends ModelBase
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
    protected $perihal;
     
    /**
     *
     * @var string
     */
    protected $status;
     
    /**
     *
     * @var string
     */
    public  $created_at;
     
    /**
     *
     * @var string
     */
    public  $updated_at;
     
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
     * Method to set the value of field perihal
     *
     * @param string $perihal
     * @return $this
     */
    public function setPerihal($perihal)
    {
        $this->perihal = $perihal;

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
     * Returns the value of field perihal
     *
     * @return string
     */
    public function getPerihal()
    {
        return $this->perihal;
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
            'perihal' => 'perihal', 
            'status' => 'status', 
            'created_at' => 'created_at', 
            'updated_at' => 'updated_at'
        );
    }

}
