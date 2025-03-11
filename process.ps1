clear
$originalName = Read-Host "Enter the original name"
$newName = Read-Host "Enter the new name"
$country = Read-Host "Country code"

$escapedOriginalName = [regex]::Escape($originalName)

$files = Get-ChildItem -Path . -Recurse -File | Where-Object { $_.Name -ne "process.ps1" }

foreach ($file in $files) {

    ####
    # Replace values
    #
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $newContent = $content -replace "`"$escapedOriginalName`"", "`"$newName`""
    if ($newContent -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.Encoding]::UTF8)
        [System.IO.File]::WriteAllBytes($file.FullName, [System.Text.Encoding]::UTF8.GetBytes($newContent))
    }
    ####

    ####
    # Find all TRs and get their data into team page format
    #
    ####

    ####
    # What league are they in at the moment (if any)
    #
    ####

    ####
    # Edit the (country)/index.html page to list the club properly
    #
    ####

    ####
    # Create team page
    #
    ####

    ####
    # Find all <th scope="row"> and add a link
    #
    ####
}

####
# Add to (country).json comments
#
$jsonFile = Join-Path -Path $PSScriptRoot -ChildPath "data/countries/$country.json"
$dataJson = Get-Content $jsonFile -Raw
$replacement = "`t$originalName`t=>`t$newName`n*/"
$dataJson = $dataJson -replace "\*/", $replacement
[System.IO.File]::WriteAllText($jsonFile, $dataJson, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllBytes($jsonFile, [System.Text.Encoding]::UTF8.GetBytes($dataJson))
####

####
# Add to (country).json list of replacements
#
$jsonFile = Join-Path -Path $PSScriptRoot -ChildPath "data/countries/$country.json"
$content = Get-Content $jsonFile -Raw
$toFind = '"redirects":\['
$toReplace = '"redirects":[["' + $originalName + '","' + $newName + '"],'
$newContent = $content -replace $toFind, $toReplace
[System.IO.File]::WriteAllText($jsonFile, $newContent, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllBytes($jsonFile, [System.Text.Encoding]::UTF8.GetBytes($newContent))
####

Write-Host "Replacement complete."
