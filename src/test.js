const { Client } = require("ssh2");

const conn = new Client();

export default function Tr(){
  conn
    .on("ready", () => {
      console.log("Client :: ready");
      conn.shell((err, stream) => {
        if (err) throw err;
        stream
          .on("close", () => {
            console.log("Stream :: close");
            conn.end();
          })
          .on("data", (data) => {
            console.log("OUTPUT: " + data);
          });
        stream.end("ls -l\nexit\n");
      });
    })
    .connect({
      host: "103.177.80.200",
      port: 22,
      username: "root",
      password: "QT0x@f~XrjY,",
    });
}