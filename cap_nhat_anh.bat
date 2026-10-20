@echo off
node update_photos.js 2>nul || powershell -NoProfile -ExecutionPolicy Bypass -File update_photos.ps1
pause