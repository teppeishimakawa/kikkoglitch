var multiparty = require("multiparty");
var http = require("http");
var util = require("util");
var fs = require("fs");
var term1;
var term2;
var term3;
var term4;
var term5;
var term6;
var term11;
var term12;
var term13;
var term14;
var term15;
var term16;
var flg;
var item1_num,item2,num;

const ALLOWED_METHODS = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'HEAD',
    'OPTIONS'
];





  // Logic for other than OPTIONS from here - eg. handling POST, etc.





var server=http.createServer(function(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Methods', ALLOWED_METHODS.join(','));
  res.setHeader('Access-Control-Allow-Headers', '*')
        if (req.url.indexOf('/cros-with-credentials/') > -1) {
            res.setHeader('Access-Control-Allow-Credentials', 'true');
        }
  
  
  


    var url = req.url;
    console.log(url);
    console.log(req.method);
    console.log(req.headers['content-type']);

   /*
    var target = '';

  switch (url) {
    case '/':
      target = './index2.html';
      break;
    case '/index.html':
      target = './index.html';
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('bad request');
      return;
  }*/

  
        //html
      if("/index_top.html?t=t1" == url)
      {
          fs.readFile("./index_top.html?t=t1", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
         });
      }else if("/img/KLK_top.png" == url)
      { 
          fs.readFile("./img/KLK_top.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }
  
  
  
          //html
      if("/index_top.html?t=t2" == url)
      {
          fs.readFile("./index_top.html?t=t2", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
         });
      }


      //html
      if("/index.html" == url)
      {
          fs.readFile("./index.html", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
         });
      }else if("/img/KLK_01.png" == url)
      { 
          fs.readFile("./img/KLK_01.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/next.png" == url)
      { 
          fs.readFile("./img/next.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }


  
    //clientからのデータ受信
    if (req.method === "POST") {
      var form = new multiparty.Form();

      form.parse(req, function(err, fields, files) {
        if (err) {
          res.end("invalid request " + err.message, 400);
          return;
        }

        //res.writeHead(200, {'content-type': 'text/plain'});
        //res.end(util.inspect({fields: fields, files: files}));
        //console.log(fields);
        console.log(fields);
        
        if(fields["t1_order"])
        {
        term1 = Object.assign(fields["t1_order"]);
        }
        if(fields["t1_item1"])
        {
        term2 = Object.assign(fields["t1_item1"]);
        }
        if(fields["t1_item2"])
        {
        term3 = Object.assign(fields["t1_item2"]);
        }
        if(fields["t1_vote"])
        {
        term4 = Object.assign(fields["t1_vote"]);
        }
        if(fields["t1_radio"])
        {
        term5 = Object.assign(fields["t1_radio"]);
        }
        if(fields["t1_check"])
        {
        term6 = Object.assign(fields["t1_check"]);
        }
        //console.log(term3);
        
        //table2のオーダー
        if(fields["t2_order"])
        {
        term11 = Object.assign(fields["t2_order"]);
        }
        if(fields["t2_item1"])
        {
        term12 = Object.assign(fields["t2_item1"]);
        }
        if(fields["t2_item2"])
        {
        term13 = Object.assign(fields["t2_item2"]);
        }
        if(fields["t2_vote"])
        {
        term14 = Object.assign(fields["t2_vote"]);
        }
        if(fields["t2_radio"])
        {
        term15 = Object.assign(fields["t2_radio"]);
        }
        if(fields["t2_check"])
        {
        term16 = Object.assign(fields["t2_check"]);
        }
      });
    }
  
  
  //options付いちゃう時はこれ！！
  const cors = require('cors')({ origin: true });
  
    if (req.method == "OPTIONS") 
  {
      cors(req, res, () => {
        res.status(200).send()
      });
      return
  }
  



   //html2
    if ("/" == url && req.method === "GET")
    {
      fs.readFile("./index2.html", "utf-8", function(err, data)
      {
        if (err) {
          res.end("invalid request " + err.message, 400);
          return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });

        res.write(
         data.replace(
            "<script></script>",
            "<script>" +
              "if(" +
              "'" +
              term1 +
              "'" +
              " !== 'undefined'){document.getElementById('line1').value=" +
              "'" +
              term1 +
              "'" +
              "}else{document.getElementById('line1').value='noOrder'};" +
              "if(" +
              "'" + 
              term2 +
              "'" +
              " !== 'undefined'){document.getElementById('line2').value=" +
              "'" +
              term2 +
              "'" +
              "}else{document.getElementById('line2').value=''};" +
              "if(" +
              "'" +
              term3 +
              "'" +
              " !== 'undefined'){document.getElementById('line3').value=" +
              "'" +
              term3 +
              "'" +
              "}else{document.getElementById('line3').value=''};" +
              "if(" +
              "'" +
              term4 +
              "'" +
              " !== 'undefined'){document.getElementById('line4').value=" +
              "'" +
              term4 +
              "'" +
              "}else{document.getElementById('line4').value='noVote'};" +
              "if(" +
              "'" +
              term5 +
              "'" +
              " !== 'undefined'){document.getElementById('line5').value=" +
              "'" +
              term5 +
              "'" +
              "}else{document.getElementById('line5').value=''};" +
              "if(" +
              "'" +
              term6 +
              "'" +
              " !== 'undefined'){document.getElementById('line6').value=" +
              "'" +
              term6 +
              "'" +
              "}else{document.getElementById('line6').value=''};" +
           
              "if(" +
              "'" +
              term11 +
              "'" +
              " !== 'undefined'){document.getElementById('line11').value=" +
              "'" +
              term11 +
              "'" +
              "}else{document.getElementById('line11').value='noOrder'};" +
              "if(" +
              "'" + 
              term12 +
              "'" +
              " !== 'undefined'){document.getElementById('line12').value=" +
              "'" +
              term12 +
              "'" +
              "}else{document.getElementById('line12').value=''};" +
              "if(" +
              "'" +
              term13 +
              "'" +
              " !== 'undefined'){document.getElementById('line13').value=" +
              "'" +
              term13 +
              "'" +
              "}else{document.getElementById('line13').value=''};" +
              "if(" +
              "'" +
              term14 +
              "'" +
              " !== 'undefined'){document.getElementById('line14').value=" +
              "'" +
              term14 +
              "'" +
              "}else{document.getElementById('line14').value='noVote'};" +
              "if(" +
              "'" +
              term15 +
              "'" +
              " !== 'undefined'){document.getElementById('line15').value=" +
              "'" +
              term15 +
              "'" +
              "}else{document.getElementById('line15').value=''};" +
              "if(" +
              "'" +
              term16 +
              "'" +
              " !== 'undefined'){document.getElementById('line16').value=" +
              "'" +
              term16 +
              "'" +
              "}else{document.getElementById('line16').value=''};" +
              "</script>"
          )
        );
        res.end();
      });
      //html2
    }





     //html_page2.html
      if("/index_page2.html" == url)
      {
          fs.readFile("./index_page2.html", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);

      res.end();
         });
      }
      //html






     //html_page2_bunsyo.html
      if("/index_page2_bunsyo.html" == url)
      {
          fs.readFile("./index_page2_bunsyo.html", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
         });
      //html
      }else if("/img/KLK_02.png" == url)
      {
          fs.readFile("./img/KLK_02.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         });
      }else if("/img/return.png" == url)
      { 
          fs.readFile("./img/return.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }








     //index3_page1.html
      if("/index3_page1.html" == url)
      {
          fs.readFile("./index3_page1.html", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
         });
      //html
      }else if("/kikko.js" == url)
      {
          fs.readFile("./kikko.js", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/plain"});
      if(flg == 1){res.write(data.replace("var flg;","first()"));}else
       {
      res.write(data);
       }
      res.end();
         });
      }else if("/img/KLK_03.png" == url)
      { 
          fs.readFile("./img/KLK_03.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/buy1.png" == url)
      { 
          fs.readFile("./img/buy1.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/buy2.png" == url)
      { 
          fs.readFile("./img/buy2.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/sina1.png" == url)
      { 
          fs.readFile("./img/sina1.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }
  
  
  
     //index3.html
      if("/index3.html" == url)
      {
          fs.readFile("./index3.html", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
         });
      }
  
  
       //index3_page2.html
      if("/index3_page2.html" == url)
      {
          fs.readFile("./index3_page2.html", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
         });
      }else if("/img/KLK_06.png" == url)
      { 
          fs.readFile("./img/KLK_06.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/vote.png" == url)
      { 
          fs.readFile("./img/vote.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }
  
  
         //index3_page3.html
      if("/index3_page3.html" == url)
      {
          fs.readFile("./index3_page3.html", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(
      data.replace(
      "var term2=0;","var term2=" + parseInt(term2)
      ).replace("var term3=0;","var term3=" + parseInt(term3)
      ).replace("var term12=0;","var term12=" + parseInt(term12)
      ).replace("var term13=0;","var term13=" + parseInt(term13)
      )
      )
      res.end();
         });
      }else if("/img/KLK_07.png" == url)
      { 
          fs.readFile("./img/KLK_07.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/check.png" == url)
      { 
          fs.readFile("./img/check.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/item1.png" == url)
      { 
          fs.readFile("./img/item1.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/item2.png" == url)
      { 
          fs.readFile("./img/item2.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }
  
/*
      else if("/img/next.png" == url)
      { 
          fs.readFile("./img/next.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/return.png" == url)
      { 
          fs.readFile("./img/return.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }
*/


    /*
    if ("/" == url)
  {
    fs.readFile("./index.html", "UTF-8", function (err, data)
    {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    });
  } else if ("/kikko.js" == url)
  {
    fs.readFile("./kikko.js", "UTF-8", function (err, data)
    {
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.write(data);
      res.end();
    });
  }
  */


     

  
  //制御pcからのstart信号
      if (req.headers["content-type"] == "application/json") 
    {
          req.setEncoding("utf-8");
    req.on("data", function(chunk)
        {
        var data = JSON.parse(chunk);
        console.log(data.flg);
        flg = Object.assign(data.flg);
        });     
    }  
  
  
  /*
        fs.readFile("./index2.html", "utf-8", function(err, data) 
        {
        if (err) 
        　{
          res.end("invalid request " + err.message, 400);
          return;
        　}
        res.end("./index2.html",data.replace("<script></script>","<p>aaaaaaa</p>"));             
        });
  */
  
  })
  .listen(8080);



//poling
//clientに向けてstart:flg 1,stop:flg 0送信
var socketio = require('socket.io');
var io = socketio.listen(server);
io.sockets.on('connection', function(socket)
{
    socket.on('client_to_server', function(data) {
      //on:受信、emit:送信
      //サーバログに受信データ表示
        console.log("rxdata" + data);
        io.sockets.emit('server_to_client',flg);
    });
});