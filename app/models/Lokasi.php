<?php

namespace Ebmt\Models ;

class Lokasi extends ModelBase
{

    /**
     *
     * @var integer
     */
    protected $id;

    /**
     *
     * @var integer
     */
    protected $parent_id;

    /**
     *
     * @var string
     */
    protected $name;

    /**
     *
     * @var integer
     */
    protected $lft;

    /**
     *
     * @var integer
     */
    protected $rgt;

    /**
     *
     * @var integer
     */
    protected $root;

    /**
     *
     * @var integer
     */
    protected $lvl;

    /**
     *
     * @var string
     */
    protected $created;

    /**
     *
     * @var string
     */
    protected $updated;

    /**
     *
     * @var string
     */
    protected $createdBy;

    /**
     *
     * @var string
     */
    protected $updatedBy;

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
     * Method to set the value of field parent_id
     *
     * @param integer $parent_id
     * @return $this
     */
    public function setParentId($parent_id)
    {
        $this->parent_id = $parent_id;

        return $this;
    }

    /**
     * Method to set the value of field name
     *
     * @param string $name
     * @return $this
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Method to set the value of field lft
     *
     * @param integer $lft
     * @return $this
     */
    public function setLft($lft)
    {
        $this->lft = $lft;

        return $this;
    }

    /**
     * Method to set the value of field rgt
     *
     * @param integer $rgt
     * @return $this
     */
    public function setRgt($rgt)
    {
        $this->rgt = $rgt;

        return $this;
    }

    /**
     * Method to set the value of field root
     *
     * @param integer $root
     * @return $this
     */
    public function setRoot($root)
    {
        $this->root = $root;

        return $this;
    }

    /**
     * Method to set the value of field lvl
     *
     * @param integer $lvl
     * @return $this
     */
    public function setLvl($lvl)
    {
        $this->lvl = $lvl;

        return $this;
    }

    /**
     * Method to set the value of field created
     *
     * @param string $created
     * @return $this
     */
    public function setCreated($created)
    {
        $this->created = $created;

        return $this;
    }

    /**
     * Method to set the value of field updated
     *
     * @param string $updated
     * @return $this
     */
    public function setUpdated($updated)
    {
        $this->updated = $updated;

        return $this;
    }

    /**
     * Method to set the value of field createdBy
     *
     * @param string $createdBy
     * @return $this
     */
    public function setCreatedby($createdBy)
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    /**
     * Method to set the value of field updatedBy
     *
     * @param string $updatedBy
     * @return $this
     */
    public function setUpdatedby($updatedBy)
    {
        $this->updatedBy = $updatedBy;

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
     * Returns the value of field parent_id
     *
     * @return integer
     */
    public function getParentId()
    {
        return $this->parent_id;
    }

    /**
     * Returns the value of field name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Returns the value of field lft
     *
     * @return integer
     */
    public function getLft()
    {
        return $this->lft;
    }

    /**
     * Returns the value of field rgt
     *
     * @return integer
     */
    public function getRgt()
    {
        return $this->rgt;
    }

    /**
     * Returns the value of field root
     *
     * @return integer
     */
    public function getRoot()
    {
        return $this->root;
    }

    /**
     * Returns the value of field lvl
     *
     * @return integer
     */
    public function getLvl()
    {
        return $this->lvl;
    }

    /**
     * Returns the value of field created
     *
     * @return string
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * Returns the value of field updated
     *
     * @return string
     */
    public function getUpdated()
    {
        return $this->updated;
    }

    /**
     * Returns the value of field createdBy
     *
     * @return string
     */
    public function getCreatedby()
    {
        return $this->createdBy;
    }

    /**
     * Returns the value of field updatedBy
     *
     * @return string
     */
    public function getUpdatedby()
    {
        return $this->updatedBy;
    }

    public function getSource()
    {
        return 'lokasi';
    }

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'id' => 'id', 
            'parent_id' => 'parent_id', 
            'name' => 'name', 
            'lft' => 'lft', 
            'rgt' => 'rgt', 
            'root' => 'root', 
            'lvl' => 'lvl', 
            'created' => 'created', 
            'updated' => 'updated', 
            'createdBy' => 'createdBy', 
            'updatedBy' => 'updatedBy'
        );
    }

}
