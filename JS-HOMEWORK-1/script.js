"use strict";
/* qSort */
function qSort(mainArr){

	/* swap */
	function swap(arr, indexA, indexB) {
		var temp = arr[indexA];
		arr[indexA] = arr[indexB];
		arr[indexB] = temp;
	}
	
	/* partition */
	function partition(mainArr, pivot, leftEl, rightEl){
		
		var newIndex = leftEl,
			pivotVal = mainArr[pivot];

		swap(mainArr, pivot, rightEl);

		for(var i = leftEl; i < rightEl; i++){
			if(mainArr[i] < pivotVal){
				swap(mainArr, i, newIndex);
				newIndex++;
			}
		}

		swap(mainArr, rightEl, newIndex);

		return newIndex;
	}

	/* sort */
	function sort(mainArr, leftEl, rightEl) {  
		if(leftEl < rightEl){
			var firstStep = partition(mainArr, parseInt((leftEl + rightEl) / 2), leftEl, rightEl);
			sort(mainArr, leftEl, firstStep - 1);
			sort(mainArr, firstStep + 1, rightEl);
		}
	}
	
	sort(mainArr, 0, mainArr.length - 1);

	return mainArr;
}

var mainArr = [5,4,98,11,6,0,20,50,250,6,5,0,100,2,0];
console.log(mainArr);
console.log(qSort(mainArr));