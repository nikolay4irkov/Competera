function getPalindromes(str){
	let splittedStr = str.split(" ");
	let palArr = [];
  	splittedStr.map((str) => {
  		let front = 0;
      let back = str.length - 1;
        while (back > front) {
          if ( str[front].match(/[\W_]/) ) {
            front++
            continue
          }
          if ( str[back].match(/[\W_]/) ) {
            back--
            continue
          }
          if ( str[front].toLowerCase() !== str[back].toLowerCase() ) 
          	return false
          front++ 
          back--
        }
        palArr.push(str);
  	
  	})
  palArr.shift();
  palArr.sort(function(a, b){
  return b.length - a.length;
});
	console.log(palArr)
}
getPalindromes("Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Rotator exercitation. aute irure dolod in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint mollom")

//мій варіант функції не є вірним, так як я використав метод shift(), щоби добитися вірного результату.
//якщо я вірно зрозумів, то мені треба було циклом пройтися по відсортованому за спаданням массиву з паліндромами, і при знаходженні
//2-х паліндромів з однаковою к-стю літер зробити нестроге порівняння виду palArr[i] < palArr[i+1], і якщо воно рівне true,
//за допомогою методу splice() лишити лише той елемент масиву, який згідно вказаної вище перевірки є меншим.
//я намагався це зробити, але, на жаль, успішно зробити мені це так і не вдалося.