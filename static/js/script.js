// Global state
let currentTab = "dados"
let currentLab = "lab1"
let vulnerabilities = []
const computers = {}
let editingVuln = null

// Sample data
const sampleStudents = [
  {
    id: 1,
    name: "Ana Silva Santos",
    matricula: "2023001",
    birthDate: "15/03/2005",
    photo: null,
  },
  {
    id: 2,
    name: "Carlos Eduardo Lima",
    matricula: "2023002",
    birthDate: "22/07/2004",
    photo: null,
  },
  {
    id: 3,
    name: "Maria Fernanda Costa",
    matricula: "2023003",
    birthDate: "08/11/2005",
    photo: null,
  },
  {
    id: 4,
    name: "João Pedro Oliveira",
    matricula: "2023004",
    birthDate: "30/01/2004",
    photo: null,
  },
  {
    id: 5,
    name: "Beatriz Almeida",
    matricula: "2023005",
    birthDate: "12/09/2005",
    photo: null,
  },
]

const sampleVulnerabilities = [
  {
    id: 1,
    title: "SQL Injection em formulário de login",
    severity: "high",
    description: "Vulnerabilidade encontrada no sistema de autenticação que permite injeção de código SQL.",
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    title: "XSS Refletido na busca",
    severity: "medium",
    description: "Campo de busca não sanitiza adequadamente os dados de entrada.",
    createdAt: new Date().toLocaleDateString(),
  },
]

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeData()
  initializeEventListeners()
  initializeComputers()
  updateTime()
  setInterval(updateTime, 1000)
  setInterval(checkComputersStatus, 5000) // Check every 5 seconds
})

function initializeData() {
  vulnerabilities = JSON.parse(localStorage.getItem("vulnerabilities")) || sampleVulnerabilities
  renderStudents()
  renderVulnerabilities()
}

function initializeEventListeners() {
  // Tab navigation
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab))
  })

  // Lab navigation
  document.querySelectorAll(".lab-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchLab(btn.dataset.lab))
  })

  // Search
  document.getElementById("student-search").addEventListener("input", filterStudents)

  // Vulnerability modal
  document.getElementById("add-vuln-btn").addEventListener("click", openVulnModal)
  document.getElementById("close-modal").addEventListener("click", closeVulnModal)
  document.getElementById("cancel-btn").addEventListener("click", closeVulnModal)
  document.getElementById("vuln-form").addEventListener("submit", saveVulnerability)

  // Close modal on outside click
  document.getElementById("vuln-modal").addEventListener("click", (e) => {
    if (e.target.id === "vuln-modal") closeVulnModal()
  })
}

function initializeComputers() {
  const labs = ["lab1", "lab2", "outros"]

  labs.forEach((lab) => {
    computers[lab] = []
    const container = document.getElementById(`computers-${lab}`)

    for (let i = 1; i <= 40; i++) {
      const computer = {
        id: i,
        lab: lab,
        status: "offline",
        ip: `192.168.${lab === "lab1" ? "1" : lab === "lab2" ? "2" : "3"}.${i}`,
      }

      computers[lab].push(computer)

      const computerElement = createComputerElement(computer)
      container.appendChild(computerElement)
    }
  })
}

function createComputerElement(computer) {
  const div = document.createElement("div")
  div.className = `computer ${computer.status}`
  div.dataset.id = computer.id
  div.dataset.lab = computer.lab

  div.innerHTML = `
        <div class="computer-status"></div>
        <i class="fas fa-desktop computer-icon"></i>
        <span class="computer-number">${computer.id.toString().padStart(2, "0")}</span>
    `

  div.addEventListener("click", () => {
    if (computer.status === "online") {
      openComputerControl(computer)
    }
  })

  return div
}

function switchTab(tabName) {
  // Update active tab button
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName)
  })

  // Update active tab content
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.toggle("active", content.id === tabName)
  })

  currentTab = tabName
}

function switchLab(labName) {
  // Update active lab button
  document.querySelectorAll(".lab-tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lab === labName)
  })

  // Update active lab content
  document.querySelectorAll(".lab-grid").forEach((grid) => {
    grid.classList.toggle("active", grid.id === labName)
  })

  currentLab = labName
}

function renderStudents(filteredStudents = null) {
  const container = document.getElementById("students-list")
  const studentsToRender = filteredStudents || students

  container.innerHTML = studentsToRender
    .map((student) => {
      const cardContent = `
        <div class="student-avatar">
            ${student.photo
          ? `<img class="avatar-photo" src="${student.photo}" alt="${student.name}">`
          : `<i class="fas fa-user"></i>`
        }
        </div>
        <div class="student-info">
            <div class="student-field">
                <h4>Nome</h4>
                <p>${student.name}</p>
            </div>
            <div class="student-field">
                <h4>Matrícula</h4>
                <p>${student.matricula}</p>
            </div>
            <div class="student-field">
                <h4>Data de Nascimento</h4>
                <p>${student.birthDate}</p>
            </div>
        </div>`;

      // Se tiver foto, vira link clicável
      return student.photo
        ? `<a class="student-card" href="${student.photo}" target="_blank">${cardContent}</a>`
        : `<div class="student-card">${cardContent}</div>`;
    })
    .join("")
}


function filterStudents() {
  const query = document.getElementById("student-search").value.toLowerCase()
  const filtered = students.filter(
    (student) =>
      student.name.toLowerCase().includes(query) ||
      student.matricula.toLowerCase().includes(query) ||
      student.birthDate.includes(query),
  )
  renderStudents(filtered)
}

function renderVulnerabilities() {
  const container = document.getElementById("vulnerabilities-list")

  container.innerHTML = vulnerabilities
    .map(
      (vuln) => `
        <div class="vuln-card">
            <div class="vuln-header">
                <div>
                    <h3 class="vuln-title">${vuln.title}</h3>
                    <span class="vuln-severity ${vuln.severity}">${getSeverityText(vuln.severity)}</span>
                </div>
            </div>
            <p class="vuln-description">${vuln.description}</p>
            <div class="vuln-actions">
                <button class="btn-secondary" onclick="editVulnerability(${vuln.id})">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-danger" onclick="deleteVulnerability(${vuln.id})">
                    <i class="fas fa-trash"></i> Excluir
                </button>
            </div>
        </div>
    `,
    )
    .join("")
}

function getSeverityText(severity) {
  const severityMap = {
    low: "Baixa",
    medium: "Média",
    high: "Alta",
    critical: "Crítica",
  }
  return severityMap[severity] || severity
}

function openVulnModal(vuln = null) {
  const modal = document.getElementById("vuln-modal")
  const title = document.getElementById("modal-title")
  const form = document.getElementById("vuln-form")

  editingVuln = vuln

  if (vuln) {
    title.textContent = "Editar Vulnerabilidade"
    document.getElementById("vuln-title").value = vuln.title
    document.getElementById("vuln-severity").value = vuln.severity
    document.getElementById("vuln-description").value = vuln.description
  } else {
    title.textContent = "Nova Vulnerabilidade"
    form.reset()
  }

  modal.classList.add("active")
}

function closeVulnModal() {
  document.getElementById("vuln-modal").classList.remove("active")
  editingVuln = null
}

function saveVulnerability(e) {
  e.preventDefault()

  const title = document.getElementById("vuln-title").value
  const severity = document.getElementById("vuln-severity").value
  const description = document.getElementById("vuln-description").value

  if (editingVuln) {
    // Edit existing
    const index = vulnerabilities.findIndex((v) => v.id === editingVuln.id)
    vulnerabilities[index] = {
      ...editingVuln,
      title,
      severity,
      description,
    }
  } else {
    // Add new
    const newVuln = {
      id: Date.now(),
      title,
      severity,
      description,
      createdAt: new Date().toLocaleDateString(),
    }
    vulnerabilities.push(newVuln)
  }

  localStorage.setItem("vulnerabilities", JSON.stringify(vulnerabilities))
  renderVulnerabilities()
  closeVulnModal()
}

function editVulnerability(id) {
  const vuln = vulnerabilities.find((v) => v.id === id)
  openVulnModal(vuln)
}

function deleteVulnerability(id) {
  if (confirm("Tem certeza que deseja excluir esta vulnerabilidade?")) {
    vulnerabilities = vulnerabilities.filter((v) => v.id !== id)
    localStorage.setItem("vulnerabilities", JSON.stringify(vulnerabilities))
    renderVulnerabilities()
  }
}

function checkComputersStatus() {
  Object.keys(computers).forEach((lab) => {
    computers[lab].forEach((computer) => {
      // Simulate random status changes for demo
      if (Math.random() < 0.1) {
        // 10% chance to change status
        const newStatus = computer.status === "online" ? "offline" : "online"
        updateComputerStatus(computer.id, lab, newStatus)
      }
    })
  })
}

function updateComputerStatus(id, lab, status) {
  const computer = computers[lab].find((c) => c.id === id)
  if (computer) {
    computer.status = status
    const element = document.querySelector(`[data-id="${id}"][data-lab="${lab}"]`)
    if (element) {
      element.className = `computer ${status}`
    }
  }
}

function openComputerControl(computer) {
  // Create a new window for computer control
  const controlWindow = window.open("", "_blank")

  controlWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Controle - Computador ${computer.id} (${computer.lab.toUpperCase()})</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { 
                    font-family: 'Segoe UI', sans-serif; 
                    background: #0a0a0a; 
                    color: #ffffff; 
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                .header { 
                    background: #1a1a1a; 
                    padding: 1rem; 
                    border-bottom: 1px solid #333; 
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .controls { 
                    display: flex; 
                    gap: 1rem; 
                }
                .btn { 
                    padding: 0.5rem 1rem; 
                    border: none; 
                    border-radius: 4px; 
                    cursor: pointer; 
                    font-weight: 500;
                }
                .btn-danger { background: #ff4444; color: white; }
                .btn-warning { background: #ffaa00; color: white; }
                .btn-primary { background: #00ff88; color: #0a0a0a; }
                .main-content { 
                    flex: 1; 
                    display: grid; 
                    grid-template-columns: 2fr 1fr; 
                    gap: 1rem; 
                    padding: 1rem; 
                }
                .screen-area { 
                    background: #1a1a1a; 
                    border: 1px solid #333; 
                    border-radius: 8px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    font-size: 1.2rem; 
                    color: #666;
                }
                .terminal-area { 
                    background: #1a1a1a; 
                    border: 1px solid #333; 
                    border-radius: 8px; 
                    display: flex; 
                    flex-direction: column; 
                }
                .terminal-header { 
                    padding: 1rem; 
                    border-bottom: 1px solid #333; 
                    font-weight: 600; 
                }
                .terminal-output { 
                    flex: 1; 
                    padding: 1rem; 
                    font-family: 'Courier New', monospace; 
                    font-size: 0.9rem; 
                    overflow-y: auto; 
                    background: #000; 
                    color: #00ff88;
                }
                .terminal-input { 
                    display: flex; 
                    padding: 1rem; 
                    border-top: 1px solid #333; 
                }
                .terminal-input input { 
                    flex: 1; 
                    background: #000; 
                    border: none; 
                    color: #00ff88; 
                    font-family: 'Courier New', monospace; 
                    padding: 0.5rem; 
                    outline: none; 
                }
                .terminal-input button { 
                    margin-left: 0.5rem; 
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Computador ${computer.id} - ${computer.lab.toUpperCase()} (${computer.ip})</h1>
                <div class="controls">
                    <button class="btn btn-warning" onclick="restartComputer()">
                        <i class="fas fa-redo"></i> Reiniciar
                    </button>
                    <button class="btn btn-danger" onclick="shutdownComputer()">
                        <i class="fas fa-power-off"></i> Desligar
                    </button>
                    <button class="btn btn-primary" onclick="window.close()">
                        <i class="fas fa-times"></i> Fechar
                    </button>
                </div>
            </div>
            <div class="main-content">
                <div class="screen-area">
                    <div>🖥️ Streaming da Tela<br><small>Funcionalidade em desenvolvimento</small></div>
                </div>
                <div class="terminal-area">
                    <div class="terminal-header">Terminal</div>
                    <div class="terminal-output" id="terminal-output">
                        <div>Conectado ao computador ${computer.id}<br>Digite um comando e pressione Enter<br><br></div>
                    </div>
                    <div class="terminal-input">
                        <span style="color: #00ff88;">$</span>
                        <input type="text" id="command-input" placeholder="Digite um comando..." onkeypress="handleCommand(event)">
                        <button class="btn btn-primary" onclick="executeCommand()">Executar</button>
                    </div>
                </div>
            </div>
            
            <script>
                function executeCommand() {
                    const input = document.getElementById('command-input');
                    const output = document.getElementById('terminal-output');
                    const command = input.value.trim();
                    
                    if (!command) return;
                    
                    // Add command to output
                    output.innerHTML += '<div style="color: #ffffff;">$ ' + command + '</div>';
                    
                    // Send command to API
                    fetch('http://192.168.0.39:8000/set_command', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            command: command,
                            computer_id: ${computer.id}
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        // Format response: [id:11, "response: capir/aluno"]
                        if (data && data.length >= 2) {
                            const response = data[1].replace('response: ', '');
                            output.innerHTML += '<div style="color: #00ff88;">' + response + '</div><br>';
                        } else {
                            output.innerHTML += '<div style="color: #ff4444;">Erro na resposta do servidor</div><br>';
                        }
                    })
                    .catch(error => {
                        output.innerHTML += '<div style="color: #ff4444;">Erro: ' + error.message + '</div><br>';
                    });
                    
                    input.value = '';
                    output.scrollTop = output.scrollHeight;
                }
                
                function handleCommand(event) {
                    if (event.key === 'Enter') {
                        executeCommand();
                    }
                }
                
                function restartComputer() {
                    if (confirm('Tem certeza que deseja reiniciar o computador ${computer.id}?')) {
                        executeCommand('sudo reboot');
                    }
                }
                
                function shutdownComputer() {
                    if (confirm('Tem certeza que deseja desligar o computador ${computer.id}?')) {
                        executeCommand('sudo shutdown -h now');
                    }
                }
                
                // Focus on input
                document.getElementById('command-input').focus();
            </script>
        </body>
        </html>
    `)
}

function updateTime() {
  const now = new Date()
  const timeString = now.toLocaleTimeString("pt-BR")
  const dateString = now.toLocaleDateString("pt-BR")
  document.getElementById("current-time").textContent = `${dateString} ${timeString}`
}