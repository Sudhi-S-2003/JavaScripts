let string1="The first sentence";
let string2="the second sentence"
let string3="             trim sentence          "
////length
// document.write(string1.length)//18
// document.write(string1.slice(4,9))//excluding last index
// document.write(string1.substring(4,9))//excluding last index
// document.write("slice-",string1.slice(-4,9))//excluding last index
// document.write("<br>")
//  document.write("substring-",string1.substring(-4,9))//excluding last index
// document.write(string1.toLowerCase(),' <br>',string1.toUpperCase())
// document.write(string1+" "+string2)
// document.write(string1.concat("<br>",string2))
// console.log(string3)
// console.log(string3.trim())//trim removes leading and trailing spaces
// console.log(string3.trimStart())
// console.log(string3.trimEnd())

// document.write(string1.repeat(2))
//  document.write(string1.replace("first","Main"))
// document.writeln(string1.concat(",",string2).replace("sentence","line"))
// document.write("<br>")
// document.writeln(string1.concat(",",string2).replace(/SenTence/gi,"line"))//g-global & i-case insensitive


// document.write(string1.charAt(5))//returns character at specified index
//  document.write(string1.charCodeAt(5))//returns ASCII value of character at specified index

document.write(string1.split(" "))