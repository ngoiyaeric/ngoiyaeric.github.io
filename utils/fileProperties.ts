import fs from 'fs';
import path from 'path';

interface FileProperties {
  size: number;
  createdAt: Date;
  modifiedAt: Date;
}

export function checkFileProperties(filePath: string): FileProperties | null {
  try {
    const stats = fs.statSync(filePath);
    return {
      size: stats.size,
      createdAt: stats.birthtime,
      modifiedAt: stats.mtime,
    };
  } catch (error) {
    console.error(`Error checking file properties: ${error.message}`);
    return null;
  }
}

export function checkAllFilesProperties(directoryPath: string): Record<string, FileProperties | null> {
  const filesProperties: Record<string, FileProperties | null> = {};
  try {
    const files = fs.readdirSync(directoryPath);
    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      filesProperties[file] = checkFileProperties(filePath);
    });
  } catch (error) {
    console.error(`Error checking directory properties: ${error.message}`);
  }
  return filesProperties;
}
