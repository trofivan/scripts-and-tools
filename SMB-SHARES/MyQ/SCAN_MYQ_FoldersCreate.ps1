Import-Module ActiveDirectory;

# CONSTS
$FOLDER_ROOT = 'D:\SCAN_MyQ\';
$SEARCH_BASE = "OU=Пользователи,DC=adinfra,DC=local";

# Main
Get-ADUser -F {Enabled -eq $true} -SearchBase $SEARCH_BASE | ForEach-Object {
    # generate string with path for folder
    $folderPath = $FOLDER_ROOT + $_.SamAccountName;

    if (!(Test-Path $folderPath)) {
        # create new folder
        New-Item -Path $folderPath -ItemType Directory

        #change access rules for new folder
        $acl = Get-Acl $folderPath

        $accessRule = New-Object System.Security.AccessControl.FileSystemAccessRule(
            $_.SID, 
            "CreateFiles, AppendData, Delete, ReadAndExecute, Synchronize, WriteAttributes, WriteExtendedAttributes", 
            "ContainerInherit,ObjectInherit",
            "None",
            "Allow"
        )

        $acl.AddAccessRule($accessRule)

        $acl | Set-Acl $folderPath            
    }
}