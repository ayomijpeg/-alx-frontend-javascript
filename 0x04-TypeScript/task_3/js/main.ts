import { RowElement } from './interface';

const row: RowElement = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30, // optional
};

const newRowID: RowID = CRUD.insertRow(row);

// Ensure RowElement is imported
import type { RowElement } from './interface';

// Assuming you already have a `row` object of type RowElement
const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);

import * as CRUD from './crud.js';
import { RowElement, RowID } from './interface.js';

const row: RowElement = { firstName: 'John', lastName: 'Doe', age: 30 };
const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Missing delete
CRUD.deleteRow(newRowID);


