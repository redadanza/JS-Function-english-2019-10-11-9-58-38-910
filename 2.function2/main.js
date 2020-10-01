function palindrome(message){
    var len = Math.floor(message.length / 2);
    var flag = 0;
    for (var i = 0; i < len; i++)
    {
        if (message[i] !== message[message.length - i - 1])
        {
            console.log("false");
            flag = 1;
            break;
        }
    }
    if(flag == 0){
    console.log("true");
    }
  }

palindrome('hello');
palindrome('abcba'); 