// // creating buffer

// // Method 1 :  10 octet
// // var buf = new Buffer.alloc(10);
// // console.log(buf);

// // method2 : array of value in buffer

// // var buf1 = new Buffer([10, 20, 30, 40, 50]);
// // console.log(buf1);

// // method3 - buffer of string
// // 12
// var buf2 = new Buffer("my name is tarun", "utf-8");
// console.log(buf2);
// // var buf = new Buffer(256);
// // 22
// length = buf2.write("hi there how are you", 5);
// console.log("written octet: ", length);
// console.log(buf2);

// // reading from the buffer
// // buf.toString(encoding,start, end)
// // to convert into ascii to get character out of it
// // for (var i = 0; i < 26; i++) {
// //   buf2[i] = i + 97;
// // }
// console.log(buf2.toString("ascii"));
// console.log(buf2.toJSON());
// // 00 - 0
// // 01 - 1
// // 02 - 2
// // 03 - 3
// // 04 -4
// // // ... 09 - 9
// // 0a - 10
// // 0b - 11
// // 0c - 12
// // 0d - 13
// // 0e -14
// // 0f - 15
// // 10 - 16
// // 11 - 17
// // 12 - 18
// // 13 - 19
// // 14 - 20

// // writing to buffer
// // syntax
// // buf.write(string,offset(starting), length,encoding)
// // return the length to which the values written in buffer.

// // concat two buffers
// var buffer1 = new Buffer("ABC");
// var buffer2 = new Buffer("ABCD");
// // var buffer3 = Buffer.concat([buffer1, buffer2]);
// // console.log(buffer3.toString());

// var buffer4 = buffer1.compare(buffer2);
// // console.log(buffer4.toString());

// Copy buffer
