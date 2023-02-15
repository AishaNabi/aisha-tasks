import axios from 'axios';
import FileSaver from 'file-saver';
import XLSX from 'xlsx';
import fs from 'fs';

async function getData() {
  try {
    const response = await axios.get('https://api.crunchbase.com/api/v4/autocompletes?query=azerbaijan&limit=10&collection_ids=location.countries,location.cities&user_key=84087754a8f953aa93700aba5c91bac6');
    const data = response.data;
    const comp_name = data.entities.map(item => item.identifier.value)
    const comp_decrip = data.entities.map(item => item.short_description);
    
    const headers = ["Name", "Description"];
    const dataRows = comp_name.map((name, i) => [name, comp_decrip[i]]);
    const worksheetData = [headers, ...dataRows];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    worksheet['!cols'] = [{ width: 20 }, { width: 100 }];
    
    const workbook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    
    const dataBlob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    
    fs.writeFileSync('output.xlsx', new Uint8Array(await dataBlob.arrayBuffer()));


  } catch (error) {
    console.error(error);
  }
}

getData();