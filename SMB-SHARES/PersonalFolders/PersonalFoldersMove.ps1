Import-Module ActiveDirectory;

$HOSTS = @('SMB-KONAR','SMB-CHML','SMB-ESKON','SMB-IPS','SMB-KORNET','SMB-OTHER','SMB-RED','SMB-BVK');
$SERVER_FOLDER_PATH_ACTIVE = "e$\ACTIVE";
$SERVER_FOLDER_PATH_INACTIVE = "e$\INACTIVE";

function moveFolder($path, $dest) {
    $newDestFolder = "$dest\" + $path.Substring($path.LastIndexOf("\") + 1) + "_" + (Get-Date).ToString('yyyyMMddHHmmss');
    
    Move-Item -Path $path -Destination $newDestFolder;
}

$HOSTS | ForEach-Object {
    $currentHost = $_;
    $currentFolderActive = "\\$currentHost\$SERVER_FOLDER_PATH_ACTIVE";
    $currentFolderInactive = "\\$currentHost\$SERVER_FOLDER_PATH_INACTIVE";

    Get-ChildItem -Path $currentFolderActive | ForEach-Object {
        $currentFolderName = $_.Name;
        $currentFolderPath = "$currentFolderActive\$currentFolderName"

        try {
            $currentUser = Get-ADUser $currentFolderName -ErrorAction SilentlyContinue;
            
            if (!$currentUser.Enabled) {
                moveFolder $currentFolderPath $currentFolderInactive;
            }
        } catch {
            moveFolder $currentFolderPath $currentFolderInactive;
        }
    }
}