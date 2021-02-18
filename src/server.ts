import { Server as IoServer, Socket } from "socket.io";

const PORT = 3000;

class Server {
  activeClients: any[] = [];
  socket: any;
  io: IoServer = new IoServer({
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  intervalID: any;
  states: any = {};
  clientRooms: any = {};
  gameMoveSpeed: number = 1;

  constructor() {
    this.initServer();
  }

  initServer() {
    this.io.on("connection", (client: Socket) => {
      console.log("a user connected ...", client.id);
    });

    this.io.on("disconnect", (client: Socket) => {
      console.log("user disconnected", client);
    });

    this.io.listen(PORT);
    console.log("listening on port ", PORT);
  }
}

new Server();
