function copySheetWithoutEmail() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sourceSheet = ss.getSheetByName('Form Responses 1'); // Replace with the name of the source sheet
  var destinationSheet = ss.getSheetByName('Responses Mirror'); // Name of the new sheet to be updated

  if (!sourceSheet || !destinationSheet) {
    console.error('One or both sheets not found.');
    return;
  }

  // Get all data from the source sheet
  var dataRange = sourceSheet.getDataRange();
  var data = dataRange.getValues();

  // Column indices for columns A, B, and C
  var columnsToCopy = [0, 1, 2]; // 0 for A, 1 for B, 2 for C

  // Filter data to include only columns A, B, and C
  var newData = data.map(function(row) {
    return columnsToCopy.map(function(index) {
      return row[index];
    });
  });

  // Clear the destination sheet first to overwrite with new data
  destinationSheet.clearContents();

  // Set the data in the new sheet from the beginning
  destinationSheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
}
