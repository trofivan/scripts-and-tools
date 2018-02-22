Import-Module ActiveDirectory;

$HOSTS = @{
    'SMB-CHML' = @('ООО "СПК-Чимолаи"');
    'SMB-ESKON' = @('ЗАО "Завод Энерго-Строительных Конструкций"');
    'SMB-IPS' = @('ООО Индустриальный Парк "Станкомаш"');
    'SMB-KONAR' = @('АО "КОНАР"');
    'SMB-KORNET' = @('ООО "Конар"');
    'SMB-OTHER' = @('ООО "ВЭББ"', 'ООО "Конар-Орион"', 'ООО "Уральские Уплотнительные Технологии"', 'ООО "ЭТС"', 'ЧОП "АРГУС-С"');
    'SMB-RED' = @('АО "Русские электрические двигатели"');
    'SMB-BVK' = @('ООО "БВК"');
};

$SERVER_FOLDER_PATH = "e$\ACTIVE";

$HOSTS.Keys | ForEach-Object {
    $currentHost = $_;
    
    $HOSTS[$currentHost] | ForEach-Object {
        $currentCompany = $_;
        
        Get-ADUser -Filter { Company -like $currentCompany -and Enabled -eq $true } -Properties SamAccountName | ForEach-Object {
            $currentSamAccountName = $_.SamAccountName;
            $folderPath = "\\$currentHost\$SERVER_FOLDER_PATH\$currentSamAccountName";

            if(!(Test-Path $folderPath)) {
                $newFolder = New-Item -Path $folderPath -ItemType Directory;
                
                if($newFolder) {
                    $acl = Get-Acl $folderPath;
                    $newAccessRule = New-Object System.Security.AccessControl.FileSystemAccessRule(
                        $_.SID,
                        "CreateFiles, AppendData, Delete, ReadAndExecute, Synchronize, WriteAttributes, WriteExtendedAttributes",
                        "ContainerInherit,ObjectInherit",
                        "None",
                        "Allow"
                    );
                    $acl.AddAccessRule($newAccessRule);
                    $acl | Set-Acl $folderPath;
                }
            }
            
        }
    }
}