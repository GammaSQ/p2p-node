var fs = require('fs')

module.exports={
  useTLS:true,
  TLS_server_options: {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    rejectUnauthorized:false,
    requestCert:true
  },
  TLS_connection_options: {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    rejectUnauthorized:false
  }
}