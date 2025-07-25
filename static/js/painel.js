// Sample data
let students = [
    { id: 1, name: "Ana Silva", matricula: "2024001", nascimento: "15/03/2000", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnz3ly-BkxhOiBoeHm05o9OHUfhT6HWkako_vXrgwIqBkdUQAIiWfjdD-GFGbD-uUNvsgXo1aEZdKOFT1bWv-n4WCyL4VJ6fD1i6SMo8d" },
    { id: 2, name: "Bruno Santos", matricula: "2024002", nascimento: "22/07/1999", foto: "BS" },
    { id: 3, name: "Carlos Lima", matricula: "2024003", nascimento: "08/11/2001", foto: "CL" },
    { id: 4, name: "Diana Costa", matricula: "2024004", nascimento: "30/05/2000", foto: "DC" },
    { id: 5, name: "Eduardo Pereira", matricula: "2024005", nascimento: "12/09/1998", foto: "EP" },
    { id: 6, name: "Fernanda Oliveira", matricula: "2024006", nascimento: "25/01/2002", foto: "FO" }
];

let vulnerabilities = [
    { id: 1, name: "SQL Injection", severity: "high", description: "Vulnerabilidade de injeção SQL encontrada no sistema de login", solution: "Implementar prepared statements" },
    { id: 2, name: "XSS Refletido", severity: "medium", description: "Cross-site scripting na página de busca", solution: "Sanitizar inputs do usuário" },
    { id: 3, name: "Senha Fraca", severity: "low", description: "Política de senhas muito permissiva", solution: "Implementar política de senhas mais rigorosa" }
];

let computers = {
    lab1: [],
    lab2: []
};

let currentVulnId = null;
let currentComputer = null;

// Initialize computers
function initializeComputers() {
    for (let lab of ['lab1', 'lab2']) {
        computers[lab] = [];
        for (let i = 1; i <= 40; i++) {
            computers[lab].push({
                id: i,
                status: Math.random() > 0.3 ? 'online' : 'offline'
            });
        }
    }
}

// Tab functions
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

function showLab(labName) {
    document.querySelectorAll('.lab-content').forEach(lab => {
        lab.style.display = 'none';
    });
    document.querySelectorAll('.lab-tab').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(labName).style.display = 'block';
    event.target.classList.add('active');
}

// Substituir a função renderStudents() no JavaScript:
function renderStudents() {
    const list = document.getElementById('studentsList');
    list.innerHTML = students.map(student => `
        <div class="student-item" onclick="openStudentModal('${student.foto}', '${student.name}', '${student.matricula}')" 
             data-name="${student.name.toLowerCase()}" 
             data-matricula="${student.matricula}" 
             data-nascimento="${student.nascimento}">
            <img src="${student.foto}" class="student-avatar"></img>
            <div class="student-details">
                <div>
                    <div class="student-name">${student.name}</div>
                </div>
                <div>
                    <div class="student-matricula">
                        <span>MATRÍCULA:</span><br>
                        ${student.matricula}
                    </div>
                </div>
                <div>
                    <div class="student-birth">
                        <span>NASCIMENTO:</span><br>
                        ${student.nascimento}
                    </div>
                </div>
            </div>
            <div class="student-status">ATIVO</div>
        </div>
    `).join('');
}

function openStudentModal(foto, nome, matricula) {
    const modal = document.getElementById('studentModal');
    document.getElementById('modalPhoto').src = foto;
    document.getElementById('modalName').textContent = nome;
    document.getElementById('modalMatricula').textContent = matricula;
    modal.style.display = 'flex';
}

function closeStudentModal() {
    document.getElementById('studentModal').style.display = 'none';
}

window.addEventListener('click', function (e) {
    const modal = document.getElementById('studentModal');
    if (e.target === modal) {
        closeStudentModal();
    }
});


function renderVulnerabilities() {
    const list = document.getElementById('vulnList');
    list.innerHTML = vulnerabilities.map(vuln => `
                <div class="vuln-item">
                    <div class="vuln-info">
                        <h4>${vuln.name}</h4>
                        <span class="vuln-severity severity-${vuln.severity}">
                            ${vuln.severity === 'high' ? 'Alta' : vuln.severity === 'medium' ? 'Média' : 'Baixa'}
                        </span>
                        <p>${vuln.description}</p>
                        ${vuln.solution ? `<p><strong>Solução:</strong> ${vuln.solution}</p>` : ''}
                    </div>
                    <div class="vuln-actions">
                        <button class="btn btn-small" onclick="editVulnerability(${vuln.id})">Editar</button>
                        <button class="btn btn-small btn-danger" onclick="deleteVulnerability(${vuln.id})">Excluir</button>
                    </div>
                </div>
            `).join('');
}

function renderComputers(lab) {
    const grid = document.getElementById(lab + 'Grid');
    grid.innerHTML = computers[lab].map(computer => `
                <div class="computer ${computer.status}" onclick="openComputer('${lab}', ${computer.id})">
                    <div class="status-indicator ${computer.status}"></div>
                    <div class="computer-number">${computer.id.toString().padStart(2, '0')}</div>
                    <div class="computer-status">${computer.status === 'online' ? 'ONLINE' : 'OFFLINE'}</div>
                </div>
            `).join('');
}

// Vulnerability functions
function openVulnModal(vulnId = null) {
    currentVulnId = vulnId;
    const modal = document.getElementById('vulnModal');
    const title = document.getElementById('vulnModalTitle');
    const form = document.getElementById('vulnForm');

    if (vulnId) {
        const vuln = vulnerabilities.find(v => v.id === vulnId);
        title.textContent = 'Editar Vulnerabilidade';
        document.getElementById('vulnName').value = vuln.name;
        document.getElementById('vulnSeverity').value = vuln.severity;
        document.getElementById('vulnDescription').value = vuln.description;
        document.getElementById('vulnSolution').value = vuln.solution || '';
    } else {
        title.textContent = 'Nova Vulnerabilidade';
        form.reset();
    }

    modal.style.display = 'block';
}

function closeVulnModal() {
    document.getElementById('vulnModal').style.display = 'none';
    currentVulnId = null;
}

function editVulnerability(id) {
    openVulnModal(id);
}

function deleteVulnerability(id) {
    if (confirm('Tem certeza que deseja excluir esta vulnerabilidade?')) {
        vulnerabilities = vulnerabilities.filter(v => v.id !== id);
        renderVulnerabilities();
    }
}

function filterVulnerabilities() {
    const search = document.getElementById('vulnSearch').value.toLowerCase();
    const items = document.querySelectorAll('.vuln-item');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(search) ? 'flex' : 'none';
    });
}

// Computer functions
function openComputer(lab, computerId) {
    const computer = computers[lab].find(c => c.id === computerId);
    if (computer.status === 'offline') {
        alert('Computador offline. Não é possível conectar.');
        return;
    }

    currentComputer = { lab, id: computerId };
    document.getElementById('computerModalTitle').textContent = `${lab.toUpperCase()} - Computador ${computerId.toString().padStart(2, '0')}`;
    document.getElementById('computerModal').style.display = 'block';
    document.getElementById('terminalInput').focus();
}

function closeComputerModal() {
    document.getElementById('computerModal').style.display = 'none';
    currentComputer = null;
    // Clear terminal
    const terminal = document.getElementById('terminal');
    terminal.innerHTML = `
                <div class="terminal-output">Sistema conectado. Digite 'help' para ver comandos disponíveis.</div>
                <div class="terminal-input">
                    <span class="terminal-prompt">root@lab:~$</span>
                    <input type="text" class="terminal-command" id="terminalInput" onkeypress="handleTerminalInput(event)">
                </div>
            `;
}

function handleTerminalInput(event) {
    if (event.key === 'Enter') {
        const input = event.target;
        const command = input.value.trim();
        if (command) {
            executeCommand(command);
            input.value = '';
        }
    }
}

function executeCommand(command) {
    const terminal = document.getElementById('terminal');
    const output = document.createElement('div');
    output.className = 'terminal-output';

    // Add command to terminal
    if (!['reboot', 'shutdown', 'status'].includes(command)) {
        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-output';
        commandLine.innerHTML = `<span style="color: #00ff41;">root@lab:~$</span> ${command}`;
        terminal.insertBefore(commandLine, terminal.lastElementChild);
    }

    // Process command
    switch (command.toLowerCase()) {
        case 'help':
            output.innerHTML = `
                        Comandos disponíveis:<br>
                        - help: mostra esta ajuda<br>
                        - ls: lista arquivos<br>
                        - ps: processos em execução<br>
                        - top: monitor de sistema<br>
                        - whoami: usuário atual<br>
                        - date: data e hora<br>
                        - clear: limpa o terminal
                    `;
            break;
        case 'ls':
            output.textContent = 'Desktop  Documents  Downloads  Pictures  Videos';
            break;
        case 'ps':
            output.innerHTML = `
                        PID  COMMAND<br>
                        1    systemd<br>
                        123  sshd<br>
                        456  bash<br>
                        789  firefox
                    `;
            break;
        case 'top':
            output.innerHTML = `
                        CPU: 15.2%  MEM: 2.1GB/8GB<br>
                        PID  %CPU  %MEM  COMMAND<br>
                        789  12.5  15.2  firefox<br>
                        456   2.1   3.4  bash
                    `;
            break;
        case 'whoami':
            output.textContent = 'root';
            break;
        case 'date':
            output.textContent = new Date().toLocaleString('pt-BR');
            break;
        case 'clear':
            terminal.innerHTML = `
                        <div class="terminal-output">Terminal limpo.</div>
                        <div class="terminal-input">
                            <span class="terminal-prompt">root@lab:~$</span>
                            <input type="text" class="terminal-command" id="terminalInput" onkeypress="handleTerminalInput(event)">
                        </div>
                    `;
            document.getElementById('terminalInput').focus();
            return;
        case 'reboot':
            output.innerHTML = '<span style="color: #ffaa00;">Sistema reiniciando...</span>';
            setTimeout(() => {
                alert('Computador reiniciado com sucesso!');
                closeComputerModal();
            }, 2000);
            break;
        case 'shutdown':
            output.innerHTML = '<span style="color: #ff4444;">Sistema desligando...</span>';
            setTimeout(() => {
                if (currentComputer) {
                    computers[currentComputer.lab].find(c => c.id === currentComputer.id).status = 'offline';
                    renderComputers(currentComputer.lab);
                }
                alert('Computador desligado!');
                closeComputerModal();
            }, 2000);
            break;
        case 'status':
            output.innerHTML = `
                        <span style="color: #00ff41;">Sistema Online</span><br>
                        Uptime: 2 dias, 14 horas<br>
                        IP: 192.168.1.${currentComputer ? currentComputer.id + 100 : '101'}<br>
                        Status: Operacional
                    `;
            break;
        default:
            output.innerHTML = `<span style="color: #ff4444;">Comando não encontrado: ${command}</span>`;
    }

    terminal.insertBefore(output, terminal.lastElementChild);
    terminal.scrollTop = terminal.scrollHeight;

    // Refocus input
    setTimeout(() => {
        const input = document.getElementById('terminalInput');
        if (input) input.focus();
    }, 100);
}

// Form submission
document.getElementById('vulnForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('vulnName').value,
        severity: document.getElementById('vulnSeverity').value,
        description: document.getElementById('vulnDescription').value,
        solution: document.getElementById('vulnSolution').value
    };

    if (currentVulnId) {
        // Edit existing
        const index = vulnerabilities.findIndex(v => v.id === currentVulnId);
        vulnerabilities[index] = { ...vulnerabilities[index], ...formData };
    } else {
        // Add new
        const newId = Math.max(...vulnerabilities.map(v => v.id)) + 1;
        vulnerabilities.push({ id: newId, ...formData });
    }

    renderVulnerabilities();
    closeVulnModal();
});

// Adicionar a função de filtro de estudantes no JavaScript:
function filterStudents() {
    const search = document.getElementById('studentsSearch').value.toLowerCase();
    const items = document.querySelectorAll('.student-item');

    items.forEach(item => {
        const name = item.dataset.name;
        const matricula = item.dataset.matricula.toLowerCase();
        const nascimento = item.dataset.nascimento.toLowerCase();

        const matches = name.includes(search) ||
            matricula.includes(search) ||
            nascimento.includes(search);

        item.style.display = matches ? 'flex' : 'none';
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    initializeComputers();
    renderStudents();
    renderVulnerabilities();
    renderComputers('lab1');
    renderComputers('lab2');
});

// Close modals when clicking outside
window.addEventListener('click', function (e) {
    const vulnModal = document.getElementById('vulnModal');
    const computerModal = document.getElementById('computerModal');

    if (e.target === vulnModal) {
        closeVulnModal();
    }
    if (e.target === computerModal) {
        closeComputerModal();
    }
});