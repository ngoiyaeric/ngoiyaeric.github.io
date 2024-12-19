import { checkFileProperties, checkAllFilesProperties } from '../utils/fileProperties';
import fs from 'fs';
import path from 'path';

describe('checkFileProperties', () => {
  it('should return file properties for a valid file', () => {
    const filePath = path.join(__dirname, 'testFile.txt');
    fs.writeFileSync(filePath, 'Hello, world!');
    const properties = checkFileProperties(filePath);
    expect(properties).not.toBeNull();
    expect(properties?.size).toBe(13);
    fs.unlinkSync(filePath);
  });

  it('should return null for an invalid file', () => {
    const properties = checkFileProperties('invalidFile.txt');
    expect(properties).toBeNull();
  });
});

describe('checkAllFilesProperties', () => {
  it('should return properties for all files in a directory', () => {
    const dirPath = path.join(__dirname, 'testDir');
    fs.mkdirSync(dirPath);
    const filePath1 = path.join(dirPath, 'file1.txt');
    const filePath2 = path.join(dirPath, 'file2.txt');
    fs.writeFileSync(filePath1, 'File 1');
    fs.writeFileSync(filePath2, 'File 2');
    const properties = checkAllFilesProperties(dirPath);
    expect(properties['file1.txt']).not.toBeNull();
    expect(properties['file2.txt']).not.toBeNull();
    fs.unlinkSync(filePath1);
    fs.unlinkSync(filePath2);
    fs.rmdirSync(dirPath);
  });

  it('should return an empty object for an empty directory', () => {
    const dirPath = path.join(__dirname, 'emptyDir');
    fs.mkdirSync(dirPath);
    const properties = checkAllFilesProperties(dirPath);
    expect(Object.keys(properties).length).toBe(0);
    fs.rmdirSync(dirPath);
  });
});
