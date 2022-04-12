import React from 'react';
import classes from './Table.module.scss'


interface TableItem {
    id: string | number;
    title?: string;
    customRender?: (item: any, index?: number) => React.ReactElement;
}


interface TableProps<T extends TableItem> {
    columns: T[];
    data: Array<any>;
    renderFooter?: () => React.ReactElement
}

export default function Table<T extends TableItem>({ columns, data, renderFooter }: TableProps<T>) {

    const renderRow = (item: any, index: number) => {
        return columns.map(column => <td key={column.id} style={{ border: '1px solid black', textAlign: 'center', }}>{column.customRender ? column.customRender(item) : item[column.id]}</td>)
    }

    const renderHeaders = (item: T) => {
        return <th key={item.id} className="w-44" style={{ border: '1px solid black' }} >
            {item.title}
        </th>
    }

    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    {columns.map(renderHeaders)}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => <tr key={item.id} style={{ height: 80 }}>{renderRow(item, index)}</tr>)}
            </tbody>
            <tfoot>
                {renderFooter?.()}
            </tfoot>
        </table>
    );
}