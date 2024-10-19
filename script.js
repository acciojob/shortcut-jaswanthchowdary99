function shortcut(s1, s2) {
  // your code here
    let letter1 = s1[0];
	let letter2 = s2[0];
	
	let newLetter = letter1 + letter2;
return newLetter
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
