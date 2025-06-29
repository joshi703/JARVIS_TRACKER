import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';

interface Location {
  phone: string;
  latitude: number;
  longitude: number;
  timestamp: string;
}

const locations: Record<string, Location> = {};

export function setupRealtime(server: HttpServer) {
  const io = new Server(server, {
    cors: { origin: '*' }
  });

  io.on('connection', (socket) => {
    socket.emit('all-locations', Object.values(locations));

    socket.on('share-location', (data: Location) => {
      locations[data.phone] = data;
      io.emit('location-update', data);
    });
  });
}
