$files = 1..6 | ForEach-Object { "$_.jpg" }
$data = @{}
foreach ($f in $files) {
    if (Test-Path $f) {
        $bytes = [System.IO.File]::ReadAllBytes((Resolve-Path $f))
        $b64 = [Convert]::ToBase64String($bytes)
        $key = $f.Replace('.jpg','')
        $data[$key] = 'data:image/jpeg;base64,' + $b64
    }
}
$json = ConvertTo-Json $data -Compress
[System.IO.File]::WriteAllText('photos_data.js', 'window.PHOTOS_DATA = ' + $json + ';', [System.Text.Encoding]::UTF8)
Write-Host "Da cap nhat photos_data.js thanh cong!"