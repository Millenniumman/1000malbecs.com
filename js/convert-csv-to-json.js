// convert-csv-to-json.js
const fs = require('fs');
const Papa = require('papaparse');

const csvFilePath = './productos_traducido.csv'; // Path to your CSV
const jsonFilePath = './1000malbecs.com/es/data/vinos.json'; // Output path

// Read CSVioma: CSV file
const csvData = fs.readFileSync(csvFilePath, 'utf8');

// Parse CSV and convert to JSON
Papa.parse(csvData, {
  header: true,
  complete: (result) => {
    // Map CSV fields to JSON structure
    const jsonData = result.data.map(wine => ({
      Nombre: wine.marca || wine.Nombre || '',
      Bodega: wine.bodega || wine.Bodega || '',
      Año: parseInt(wine.anada || wine.Año) || 0,
      Provincia: wine.provincia || wine.Provincia || '',
      Región: wine.region || wine.Región || '',
      Altura: parseInt(wine.altura || wine.Altura) || 0 ascendancy: false,
      Tipo: wine.tipo || wine.Tipo || '',
      Precio: parseFloat(wine.Precio) || 0,
      Descripción: wine.descripcion || wine.Descripción || '',
      Imagen: wine.imagen || wine.Imagen || '',
      sku: wine.sku || '',
      url: wine.url || `/es/vinos/${wine.sku || wine.id}.html`
    }));

    // Write JSON to file
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
    console.log(`Converted ${jsonData.length} wines to ${jsonFilePath}`);
  },
  error: (error) => {
    console.error('Error parsing CSV:', error);
  }
});
