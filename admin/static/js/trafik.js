async function updateTrafficStats() {
    const response = await fetch('/api/stats');
    const stats = await response.json();

    document.getElementById('bytes-sent').textContent = stats.bytes_sent;
    document.getElementById('bytes-recv').textContent = stats.bytes_recv;
    document.getElementById('packets-sent').textContent = stats.packets_sent;
    document.getElementById('packets-recv').textContent = stats.packets_recv;
}

setInterval(updateTrafficStats, 1000);