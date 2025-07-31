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
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: computerId,
            command: command
        })
    })
    
        .then(response => response.json())
        .then(data => {
            // Expected format: [id:11, "response: capir/aluno"]
            const responseDiv = document.createElement('div');
            if (data && Array.isArray(data) && data.length >= 2) {
                const responseText = data[1].replace('response: ', '');
                responseDiv.innerHTML = `<span style="color: var(--accent-primary);">${responseText}</span>`;
            } else {
                responseDiv.innerHTML = `<span style="color: var(--danger);">Erro na resposta do servidor</span>`;
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