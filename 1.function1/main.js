function reverseString(message){
    var length = message.length;
    var reverse = "";

    for (var i = (length - 1); i >= 0; i--){
        reverse = reverse.concat(message.charAt(i));
    }


    console.log(reverse);
}

reverseString('hello');