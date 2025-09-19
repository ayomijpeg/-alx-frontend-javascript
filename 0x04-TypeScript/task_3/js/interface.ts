// task_3/js/types.ts

// Define RowID as a number
export type RowID = number;

// Define RowElement interface
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // optional
}

// task_3/js/main.ts
import { insertRow, deleteRow, updateRow } from './crud';
import type { RowID, RowElement } from './types';

// Example row
const newRow: RowElement = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 28,
};

// Insert row
const id: RowID = insertRow(newRow);
console.log('Inserted row ID:', id);

// Update row
const updatedRow: RowElement = { ...newRow, age: 29 };
updateRow(id, updatedRow);

// Delete row
deleteRow(id);
