clear
$originalName = Read-Host "Enter the original name"
$newName = Read-Host "Enter the new name"

$escapedOriginalName = [regex]::Escape($originalName)

$files = Get-ChildItem -Path . -Recurse -File | Where-Object { $_.Name -ne "process.ps1" }

foreach ($file in $files) {

    ####
    # Replace values
    #
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $newContent = $content -replace $escapedOriginalName, $newName

    if ($newContent -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.Encoding]::UTF8)
        [System.IO.File]::WriteAllBytes($file.FullName, [System.Text.Encoding]::UTF8.GetBytes($newContent))
    }
    ####

    ####
    # Add to (country).json list of replacements
    #
    ####

    ####
    # Add to (country).json comments
    #
    ####

    ####
    # Add to current.html list of replacements
    #
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

Write-Host "Replacement complete."
