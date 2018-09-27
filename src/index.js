module.exports = function check(str, bracketsConfig) {
  // your solution

 	var temp = 0;
	var t1 = 0;
	var t2 = 0;
	var arr = [];

	while(str.length != 0) {

		arr = func1(str, bracketsConfig);
		t1 = arr[0];
		t2 = arr[1];

		temp = func(str, bracketsConfig, t1, t2);
		if(temp == true) {
			str = str.substring(0, t1) + str.substring(t1+1, t2) + str.substring(t2+1, str.length);
		} else {
			break;
		}
	}
	
	for(var j = 0; j < bracketsConfig.length; j++) {
		if(bracketsConfig[j][0] == bracketsConfig[j][1]) {
			return true;
		}
	}
	if(str.length == 0) { return true; } else {
		return false; }
}

 	function func(str, bracketsConfig, t1, t2) {

 		var flag = false;
 		if(t2 != 0) {
	 		for(var i = 0; i < bracketsConfig.length; i++) {
				if((str[t1] + str[t2]) == (bracketsConfig[i][0] + bracketsConfig[i][1])) {
					flag = true;
				}
			}
		}
		return flag;
 	}

 	function func1(str, bracketsConfig) {

 		var t1 = 0;
 		var t2 = 0;
 		var e = 1;
 		var ar = [];

 		for(var i = 0; i < str.length; i++) {
			for(var j = 0; j < bracketsConfig.length; j++) {
				if(str[i] == bracketsConfig[j][0]) {
					t1 = i;
				}
			}
		}

		for(var i = t1 + 1; i < str.length; i++) {
			if(t2 == 0) {
				for(var j = 0; j < bracketsConfig.length; j++) {
					if(str[i] == bracketsConfig[j][1]) {
						t2 = i;					
						break;
					}
				}
			}
		}
		ar.push(t1, t2);
		return ar;

 	}
