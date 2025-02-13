const button = document.querySelector('button');
const bytesSent = document.querySelector('#bytes-sent');
const bytesRecv = document.querySelector('#bytes-recv');
const packetsSent = document.querySelector('#packets-sent');
const packetsRecv = document.querySelector('#packets-recv');

button.addEventListener('click', async () => {
    const response = await fetch('/api/traffic');
    const data = await response.json();

    bytesSent.textContent = data.bytes_sent;
    bytesRecv.textContent = data.bytes_recv;
    packetsSent.textContent = data.packets_sent;
    packetsRecv.textContent = data.packets_recv;
});
button.addEventListener('click', async () => {
    data = {
        "bytes_sent": 100,
        "bytes_recv": 200,
        "packets_sent": 300,
        "packets_recv": 400
    }
    bytesSent.textContent = data.bytes_sent;
    bytesRecv.textContent = data.bytes_recv;
    packetsSent.textContent = data.packets_sent;
    packetsRecv.textContent = data.packets_recv;
    GainNode.log(data);
    
});