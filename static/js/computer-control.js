const urlParams = new URLSearchParams(window.location.search);
const computerId = urlParams.get('id') || '01';
const computerLab = urlParams.get('lab') || 'lab1';

document.getElementById('computer-title').textContent =
    `Computador ${computerId} - ${computerLab.toUpperCase()}`;

function executeCommand() {
    const input = document.getElementById('command-input');
    const output = document.getElementById('terminal-output');
    const command = input.value.trim();

    if (!command) return;

    // Add command to output
    const commandDiv = document.createElement('div');
    commandDiv.innerHTML = `<span style="color: #ffffff;">$ ${command}</span>`;
    output.appendChild(commandDiv);

    // Simulate API call
    fetch('https://hihat.onrender.com/set_command', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          command: command,
          clientId: computerId  // enviando o id do cliente alvo
        })
      })
      
    
        .then(response => response.json())
        .then(data => {
            const responseDiv = document.createElement('div');
            if (data && typeof data.result === 'string') {
                // Exemplo: pode conter o texto vindo do cliente
                responseDiv.innerHTML = `<span style="color: var(--accent-primary);">${data.result}</span>`;
            } else if (data && data.error) {
                responseDiv.innerHTML = `<span style="color: var(--danger);">Erro: ${data.error}</span>`;
            } else {
                responseDiv.innerHTML = `<span style="color: var(--danger);">Resposta inesperada do servidor</span>`;
            }
            output.appendChild(responseDiv);
        })
        
        .catch(error => {
            const errorDiv = document.createElement('div');
            errorDiv.innerHTML = `<span style="color: var(--danger);">Erro: ${error.message}</span>`;
            output.appendChild(errorDiv);
        })
        .finally(() => {
            const breakDiv = document.createElement('div');
            breakDiv.innerHTML = '<br>';
            output.appendChild(breakDiv);

            input.value = '';
            output.scrollTop = output.scrollHeight;
        });
}

function handleCommand(event) {
    if (event.key === 'Enter') {
        executeCommand();
    }
}

function restartComputer() {
    if (confirm(`Tem certeza que deseja reiniciar o computador ${computerId}?`)) {
        document.getElementById('command-input').value = 'sudo reboot';
        executeCommand();
    }
}

function shutdownComputer() {
    if (confirm(`Tem certeza que deseja desligar o computador ${computerId}?`)) {
        document.getElementById('command-input').value = 'sudo shutdown -h now';
        executeCommand();
    }
}

// Focus on input when page loads
document.getElementById('command-input').focus();