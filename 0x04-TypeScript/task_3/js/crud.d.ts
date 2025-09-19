// Import types from interface.ts
import { RowID, RowElement } from "./interface";

// Declare ambient types for CRUD functions
declare module "crud.js" {
    export function insertRow(row: RowElement): RowID;
    export function updateRow(id: RowID, row: RowElement): void;
    export function deleteRow(id: RowID): void;
}


/// <reference path="./crud.d.ts" />

// Import types
import { RowID, RowElement } from "./interface";
// Import the CRUD library
import * as CRUD from "./crud.js";

// Create a row object
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Insert the row and store the new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row by adding age
const updatedRow: RowElement = {
    ...row,
    age: 23
};
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

// task_3/js/crud.d.ts
import { RowID, RowElement } from './interface';

declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): void;
import { RowID, RowElement } from './interface';

declare function insertRow(row: RowElement): number;


