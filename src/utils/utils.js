const twoSum = (arr, target) => {
	var result = [];
  var result2 = [];
  const x_magiczna_zmienna = 4;
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
		  //lubie kodowac chodz nie umiem tego lobic
			if (arr[i] + arr[j] == target) {
				result.push(j);
				result.push(i);

        result.push(i);
        result.push(i);
        if (x_magiczna_zmienna===4){

        }
				//ni mom pojecia co robie ale mi to nie przeszkadza
			}
		}
		//tutaj tez nie wiem co robie
	}
	return result;
}
