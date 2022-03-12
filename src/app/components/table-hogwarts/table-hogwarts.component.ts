import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BaseData, HogwartsTableHeader } from 'src/app/interfaces';

@Component({
  selector: 'app-table-hogwarts',
  templateUrl: './table-hogwarts.component.html',
  styleUrls: ['./table-hogwarts.component.css'],
})
export class TableHogwartsComponent
  implements OnInit, AfterViewInit, OnChanges
{
  //////////////
  // Atributes
  /////////////
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() columns: HogwartsTableHeader[] = [
    {
      columnDef: 'name',
      header: 'Nombre',
      textField: 'name',
    },
    {
      columnDef: 'patronus',
      header: 'Patronus',
      textField: 'patronus',
    },
    {
      columnDef: 'species',
      header: 'Species',
      textField: 'species',
    },
    {
      columnDef: 'gender',
      header: 'Gender',
      textField: 'gender',
    },
    {
      columnDef: 'age',
      header: 'Edad',
      textField: 'age',
    },
    {
      columnDef: 'image',
      header: 'Foto',
      textField: 'image',
    },
  ];
  @Input() displayedColumns: string[] = [
    'name',
    'patronus',
    'species',
    'gender',
    'age',
    'image',
  ];
  @Input() data: BaseData[] = [];

  public dataSource = new MatTableDataSource(this.data || []);
  public defaultText = '-';
  public filterValue = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }

  ngAfterViewInit(): void {
    try {
      this.initSortAndPaginator();
      this.applyFilter();
    } catch (error) {
      console.error('From ngAfterViewInit', error);
    }
  }

  ngOnChanges(change: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(change.data.currentValue);
    this.initSortAndPaginator();
    this.applyFilter();
  }
  /**
   * @function initSortAndPaginator
   * Inicializa el sort y el paginator del MatTableDataSource
   */
  public initSortAndPaginator(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public applyFilter(): void {
    try {
      if (this.filterValue || this.filterValue === '') {
        this.dataSource.filter = this.filterValue.trim().toLowerCase();
      }
    } catch (error) {
      console.error('From applyFilters', error);
    }
  }
}
