// file upload

// 1.create a form to upload file

var http = require("http");
var formidable = require("formidable");
var fs = require("fs");
http
  .createServer((req, res) => {
    // 2. parse the file
    if (req.url === "/fileupload") {
      var form = new formidable.IncomingForm();

      form.parse(req, (err, field, files) => {
        // 3. save file to the new directory in the server
        var oldpath = files.upload.filepath;
        console.log(oldpath);
        var newpath = "./uploads/" + files.upload.originalFilename;
        // console.log(oldpath);
        // mv -> rename and move as well
        fs.rename(oldpath, newpath, (err) => {
          if (err) throw err;
          res.write("File uploaded successfully");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="upload"><br>');
      res.write("<br><input type='submit' />");
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8000);

// 3. Save the file to specified folder/ directory
