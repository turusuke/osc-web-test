import OSC from 'osc-js';

const osc = new OSC();
osc.open();

const sendBtn = document.getElementById('send');
sendBtn.addEventListener('click', () => {
  const message = new OSC.Message('/test/random', Math.random());
  osc.send(message);
});