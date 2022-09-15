import { RowSelectedEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import * as React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

import './ag-style.css';

export interface IAppProps {
}

export function AgGridTable(props: IAppProps) {

    // never changes, so we can use useMemo
    const columnDefs = React.useMemo(() => [
        { field: 'athlete' },
        { field: 'age', },
        { field: 'country' },
        { field: 'year' },
        { field: 'date' },
        { field: 'sport' },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' }
    ], []);

    const [rowData, setRowData] = React.useState([]);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        
    })

    function onRowSelected(event: RowSelectedEvent<any>) {
        // event.data is typed as ICar | undefined
        if (event.data) {
            // Leaf row with data
            const price = event.data.price;
        } else {
            // This is a group row
        }
    }
    


    const onGridReady = React.useCallback(() => {
        fetch("http://localhost:8080/api/winners")
        .then(res => res.json())
        .then(
            (result) => {
                setRowData(result.slice(0,50))
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setError(error);
            }
        )
      }, []);
    return (
        <div  className="ag-theme-alpine-dark" style={{height: 500}}>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                onRowSelected={onRowSelected}
                onGridReady={onGridReady}
            >
            </AgGridReact>
        </div>
    );
}
