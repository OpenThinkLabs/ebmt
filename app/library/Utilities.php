<?php
namespace Ebmt\Library ;

class Utilities  {
	/**
	 * New method done by Pete. So f.i. WA036 will increment to WA037 and so on.
	 * If $reference contains at least one group of digits,
	 * extract first didgits group and add 1, then put all together.
	 * NB. preg_match returns 1 if the regex matches completely
	 * also $result[0] holds entire string, 1 the first captured, 2 the 2nd etc.
	 *
	 * @param $reference
	 * @return string
	 */
	public static function increment($reference)
	{
		if (preg_match('/^(\D*?)(\d+)(.*)/', $reference, $result) == 1)
		{
			list($all, $prefix, $number, $postfix) = $result;
			$dig_count = strlen($number); // How many digits? eg. 0003 = 4
			$fmt = '%0' . $dig_count . 'd'; // Make a format string - leading zeroes
			$nextval =  sprintf($fmt, intval($number + 1)); // Add one on, and put prefix back on
	
			return $prefix.$nextval.$postfix;
		}
		else
			return $reference;
	}
	
}