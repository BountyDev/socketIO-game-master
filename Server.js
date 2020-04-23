//Import
const Client = require("./Client");


//Initialize
module.exports = class Server
{
    constructor()
    {
        this.client_list = [];
        this.socket_list = [];
        this.socket_id   = 1;
    }

    handleConnection(socket)
    {
        this.socket_list.push(socket);
        this.client_list.push(new Client(socket, this, this.socket_id));
        this.socket_id += 1;
    }
};