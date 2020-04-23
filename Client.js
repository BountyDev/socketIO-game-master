//Import



//Initialize
module.exports = class Client
{
    constructor(socket, server, socket_id)
    {
        this.client_list = server.client_list;
        this.socket_list = server.socket_list;
        this.socket      = socket;
        this.socket.id   = socket_id;

        this.handleSocket();
        console.log(`Client connected! [ID: ${this.socket.id}]`);
    }
    
    handleSocket()
    {
        this.socket.on("data", (data) => this.handleData(data));
        this.socket.on("disconnect", () => this.handleDisconnection());
    }

    handleData(data)
    {
        console.log(`Data received! [ID: ${data.id}]`);
    }

    handleDisconnection()
    {
        let _socket_index = this.socket_list.indexOf(this.socket),
            _client_index = this.client_list.indexOf(this);

        this.socket_list.splice(_socket_index, 1);
        this.client_list.splice(_client_index, 1);

        console.log(`Client disconnected. [ID: ${this.socket.id}]`);
    }
};