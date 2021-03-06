import { Component, OnInit, Input } from '@angular/core';
import { deleteObject } from '@syncfusion/ej2-base';
import { ExportToCsv } from 'export-to-csv';




@Component({
  selector: 'app-export-table',
  templateUrl: './export-table.component.html',
  styleUrls: ['./export-table.component.scss'],
})
export class ExportTableComponent implements OnInit {

  constructor() { }

  @Input() data: any[];
  @Input() columns: any[];
  @Input() filename: string;
  @Input() label: any[];
  @Input() showPdfBtn: boolean = false;
  @Input() showXlsBtn: boolean = false;
  @Input() showCsvBtn: boolean = false;
  exportColumns;
  cols: any[];
  ngOnInit() {

  }

  exportPdf() {
    let cols = this.data.length > 0 ? Object.keys(this.data[0]) : [];
    let rows = [];
    for (let data of this.data) {
      rows.push(Object.values(data));
    }
    import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(cols, rows);
        doc.save(this.filename + '.pdf');
      })
    })
  }

  exportCSV() {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      filename: this.filename,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      headers: Object.keys(this.data[0])
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.data);

  }
  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, this.filename);
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
    });
  }

}
