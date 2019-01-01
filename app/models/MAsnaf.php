<?php
namespace Ebmt\Models ;

class MAsnaf extends ModelBase
{

    /**
     *
     * @var integer
     */
    public $id;

    /**
     *
     * @var string
     */
    public $asnaf;

    /**
     *
     * @var string
     */
    public $status;

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
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'id' => 'id', 
            'asnaf' => 'asnaf', 
            'status' => 'status', 
            'created_at' => 'created_at', 
            'updated_at' => 'updated_at'
        );
    }

}
