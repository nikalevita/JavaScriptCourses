"use strict";
/* qSort */
function qSort(mainArr){

	function swap(arr, indexA, indexB) {
		var temp = arr[indexA];
		arr[indexA] = arr[indexB];
		arr[indexB] = temp;
	}
		
	function partition(mainArr, pivot, leftEl, rightEl){
		var newIndex = leftEl,
			pivotVal = mainArr[pivot];

		swap(mainArr, pivot, rightEl);

		for(var i = 0; i < rightEl - leftEl; i++){
			if(mainArr[i] <= pivotVal){
				swap(mainArr, newIndex, i);
				newIndex++;
			}
		}

		swap(mainArr, rightEl, newIndex);

		return newIndex;
	}

	var firstStep = partition(mainArr, parseInt((mainArr.length)-1 / 2), 0, mainArr.length - 1);

	/* ---------- END OK ----------- */

	/* NOT OK */
	function sort(mainArr, leftEl, rightEl) {

		/*var firstStep = partition(mainArr, parseInt((leftEl + rightEl) / 2), leftEl, rightEl);

		if (leftEl < firstStep - 1){
			sort(mainArr, leftEl, firstStep-1);
		}
		if (rightEl > firstStep){	
			sort(mainArr, firstStep, rightEl);
		}
	*/
	}
	sort(mainArr, 0, mainArr.length - 1);


	return mainArr;
}

var mainArr = [5,4,98,11,6,0,20,50,250,6,5,0,100,2];
console.log(mainArr);
console.log(qSort(mainArr));