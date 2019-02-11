import OSC from 'osc-js';

interface Imessage {
  offset: number;
  address: string;
  types: string;
  args: [];
}

const options = {
  udpServer: {
    port: 9912
  },
  udpClient: {
    port: 12000
  },
  wsServer: {
    port: 8080
  }
};

const osc = new OSC({ plugin: new OSC.BridgePlugin(options) });

osc.on('*', (message: Imessage) => {
  console.log(message);
});

osc.on('open', () => {
  setInterval(() => {
    osc.send(
      new OSC.Message('/mouse/position', (Math.random() * 100 >> 0), (Math.random() * 100 >> 0)),
      { receiver: 'udp' }
    );
  }, 1000);
});

osc.open();
