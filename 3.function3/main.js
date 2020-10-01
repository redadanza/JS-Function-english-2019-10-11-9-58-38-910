function alphabetSort(message){
    
    var sorted = [...message].sort();
    console.log(sorted.join(''));

  }
  alphabetSort('hello'); // should return 'ehllo'