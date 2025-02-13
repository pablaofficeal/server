import logging
import psutil
from flask import Flask, render_template, jsonify

logging.basicConfig(
    filename='serverr.log',
    level=logging.ERROR,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

app = Flask(__name__)

@app.route('/api/stats')
def get_network_stats():
    net_io = psutil.net_io_counters()
    return jsonify({
        'bytes_sent': net_io.bytes_sent,
        'bytes_recv': net_io.bytes_recv,
        'packets_sent': net_io.packets_sent,
        'packets_recv': net_io.packets_recv
    })


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/error')
def error():
    return render_template('error.html')

# Обработчик ошибки 404
@app.errorhandler(404)
def page_not_found(e):
    logging.error(f"Ошибка 404: {e}")  # Логируем ошибку
    return render_template('error_404.html'), 404

# Обработчик ошибки 500
@app.errorhandler(500)
def internal_server_error(e):
    logging.error(f"Ошибка 500: {e}")  # Логируем ошибку
    return render_template('error_500.html'), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
