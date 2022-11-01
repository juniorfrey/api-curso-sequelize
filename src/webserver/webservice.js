import { Server } from "socket.io";

export const webSocketPrueba = (server) => {

    const io = new Server(server);
    io.on("connection", (socket) => {
      socket.on("chat", (msg) => {
        let mensaje = `${socket.id}: ${msg}`;
        io.emit("chat", mensaje);
      });
    });
}
