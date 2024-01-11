// Strings are use to hold the data which is in the text form.

// #Creating the String

    const first = new String("Sudhanshu");

// #Accessing the String

//     There are 2 ways to access the String
//         1.String.chartAt():
        
            console.log(first.charAt(1));// u
        
        // 2.Using string as array like Object
            console.log(first[1]); // u

//Instance properties:

    //String.prototype.at() :
        //It returns the character at specifix index .Also if the we provide the negative it index
        //it counts the string from the last character of the string

        console.log(first.at(1));// u
        console.log(first.at(-2));// h

    //String.prototype.charCodeAt():
        //returns character between the o to 65535
        console.log(first.charCodeAt(-2)); //NaN because there is not value at particular index
    
    //String.prototype.codePointAt():
        //returns non-negative integer that is the unicode point value of the character at particular index
        console.log(first.codePointAt(1));// 117

    //String.prototype.concat();
        //take another string as args and return a new string which is formed by combination of two
        const second = new String("Malhan")
        console.log(first.concat(second));// SudhanshuMalhan

    //String.protoype.endsWith()
        //return either true or false if the string ends with provided characters
        console.log(first.endsWith("shu"));// true

    //String.fromCharCode()
        //is static method that returns a string made from special sequence of utf-16
        console.log(String.fromCharCode(12,22,456));// ǈ

    //String.fromCodePoint()
        //is a static method that returns a string from special sequence of code points
        console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));// ☃★♲你

    //String.prototype.include
        //return true or false is that given string is with the string
        console.log(first.includes("dhans")); // true

    //String.protoype.indexOf();
        //it returns the index first of occurence of the given substring in a string
        console.log(first.indexOf("an")); // 4

    //String.prototype.padEnd();
        //return a string with a length(at end) being provided in the args , also those spaces can
        //be altered by providing any type of single char
        // (totalLengthofString-padLength=EmptySpaces)
        console.log(first.padEnd(15,'$'));//Sudhanshu$$$$$$

    //String.prototype.padEnd();
        //return a string with a length(at Start) being provided in the args , also those spaces can
        //be altered by providing any type of single char
        console.log(first.padStart(15,'$'));//$$$$$$Sudhanshu

    //String.prototype.repeat():
        //return specific number of strings as passed and concatinate them
        console.log(first.repeat(3));//SudhanshuSudhanshuSudhanshu

    //String.prototype.replace():
        //replace(pattern : Regx, replacement : String , Function())
        // return a new string with a replacemnet provided when it matches the pattern
        // $$ : Inserts s "$"
        console.log(first.replace(/(Sudh)/,'$Pri'));//$Prianshu
        // $& : Inserts the matched substring
        // $` : Inserts the portion of string that precedes the matched substring
        // $' : Inserts the portion of the string that follows the matched substring
        // $n : Indserts the char at particular but it should less it should be less than 100

        

    
    



    

