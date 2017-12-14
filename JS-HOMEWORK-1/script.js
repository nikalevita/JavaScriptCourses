"use strict";
/* qSort */
function qSort(mainArr){

	function swap(arr, indexA, indexB) {
		var temp = arr[indexA];
		arr[indexA] = arr[indexB];
		arr[indexB] = temp;
	}
		
	function newPivot(mainArr, pivot, leftEl, rightEl){
		var newIndex = leftEl,
			pivotVal = mainArr[pivot];

		swap(mainArr, pivot, rightEl); //  в конец	

		for(var i = 0; i < rightEl - leftEl; i++){
			if(mainArr[i] <= pivotVal){
				swap(mainArr, newIndex, i);
				newIndex++;
			}
		}

		swap(mainArr, rightEl, newIndex); //  назад	

		return newIndex;
	}

	function sort(mainArr, leftEl, rightEl) {
		if(leftEl < rightEl) {
			sort(mainArr, leftEl, newPivot(mainArr, parseInt((leftEl + rightEl) / 2), leftEl, rightEl) - 1);
			sort(mainArr, newPivot(mainArr, parseInt((leftEl + rightEl) / 2), leftEl, rightEl) + 1, rightEl);
		}
	}

	sort(mainArr, 0, mainArr.length - 1);

	return mainArr;
}

var mainArr = [5,4,98,141,3,88,45,100,51,32,98,0,200];
console.log(mainArr);
console.log(qSort(mainArr));