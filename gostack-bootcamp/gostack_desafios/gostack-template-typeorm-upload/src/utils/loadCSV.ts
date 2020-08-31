import csvParse from 'csv-parse';
import fs from 'fs';

async function loadCSV(pathFile: string): Promise<any[]> {
  const readCSVStream = fs.createReadStream(pathFile);

  const parseStream = csvParse({
    from_line: 2,
    ltrim: true,
    rtrim: true,
  });

  const parseCSV = readCSVStream.pipe(parseStream);

  const lines: any[] = [];

  parseCSV.on('data', line => {
    lines.push(line);
  });

  await new Promise(resolve => {
    parseCSV.on('end', resolve);
  });

  return lines;
}

function removeCSVFile(filePath: string): Promise<void> {
  return fs.promises.unlink(filePath);
}

export { loadCSV, removeCSVFile };
