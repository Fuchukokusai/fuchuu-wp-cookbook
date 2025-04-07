<?php
/**
 * PHP 脚本：解压 ZIP 文件
 *
 * 该脚本使用 PHP 的 ZipArchive 类来解压 ZIP 文件。
 * 使用方法：将 ZIP 文件路径和解压目标路径传递给 unzipFile 函数。
 *
 * 注意：确保 PHP 环境中已启用 ZipArchive 扩展。
 */

function unzipFile($zipFilePath, $extractToPath) {
    // 检查 ZIP 文件是否存在
    if (!file_exists($zipFilePath)) {
        die("ZIP 文件不存在: $zipFilePath");
    }

    // 创建解压路径（如果不存在）
    if (!is_dir($extractToPath)) {
        mkdir($extractToPath, 0777, true);
    }

    // 初始化 ZipArchive
    $zip = new ZipArchive();
    if ($zip->open($zipFilePath) === true) {
        // 解压文件到目标路径
        $zip->extractTo($extractToPath);
        $zip->close();
        echo "解压成功: $zipFilePath 到 $extractToPath\n";
    } else {
        die("无法打开 ZIP 文件: $zipFilePath");
    }
}
// 检查目标目录是否已存在且非空
if (is_dir($extractToPath) && count(scandir($extractToPath)) > 2) {
  die("目标目录已存在且非空: $extractToPath");
}
// 示例用法
$zipFilePath = './dist.zip'; // 替换为你的 ZIP 文件路径
$extractToPath = './dist/';   // 替换为解压目标路径

unzipFile($zipFilePath, $extractToPath);
