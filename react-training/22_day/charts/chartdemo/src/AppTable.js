import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getFilteredRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
    getSortedRowModel,
    sortingFns

} from '@tanstack/react-table'

import {
    RankingInfo,
    rankItem,
    compareItems,
} from '@tanstack/match-sorter-utils'

import { useEffect, useState } from 'react'

const sty = {
    display: 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'marginTop': '3em'
}

const data = [
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
]

const fuzzyFilter = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value)

    // Store the itemRank info
    addMeta({
        itemRank,
    })

    // Return if the item should be filtered in/out
    return itemRank.passed
}

const fuzzySort = (rowA, rowB, columnId) => {
    let dir = 0

    // Only sort by rank if the column has ranking information
    if (rowA.columnFiltersMeta[columnId]) {
        dir = compareItems(
            rowA.columnFiltersMeta[columnId].itemRank,
            rowB.columnFiltersMeta[columnId].itemRank
        )
    }

    // Provide an alphanumeric fallback for when the item ranks are equal
    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}

const columnHelper = createColumnHelper()

const columns = [
    columnHelper.accessor('firstName', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
        header: () => <span style={{ padding: '1em' }}>First Name</span>,
        filterFn: 'fuzzy',
    }),
    columnHelper.accessor(row => row.lastName, {
        id: 'lastName',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
        footer: info => info.column.id,
        filterFn: 'fuzzy',
        sortingFn: fuzzySort,
    }),
    columnHelper.accessor('age', {
        header: () => <span>Age</span>,
        cell: info => info.renderValue(),
        footer: info => info.column.id,
        filterFn: 'fuzzy',
        sortingFn: fuzzySort,

    }),
    columnHelper.accessor('visits', {
        header: () => <span>Visits</span>,
        footer: info => info.column.id,
        filterFn: 'fuzzy',
        sortingFn: fuzzySort,
    }),
    columnHelper.accessor('status', {
        header: <span>'Status'</span>,
        footer: info => info.column.id,
        filterFn: 'fuzzy',
        sortingFn: fuzzySort,
    }),
    columnHelper.accessor('progress', {
        header: <span>Profile Progress</span>,
        footer: info => info.column.id,
        filterFn: 'fuzzy',
        sortingFn: fuzzySort,
    }),
]

export function AppTable() {

    const [columnFilters, setColumnFilters] = useState([])

    const table = useReactTable({
        data,
        columns,
        state: {
            columnFilters
        },
        filterFns: {
            fuzzy: fuzzyFilter
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        onColumnFiltersChange: setColumnFilters,
    })

    return (
        <div style={sty} >
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    {header.column.getCanFilter() ? (
                                        <div>
                                            <Filter column={header.column} />
                                        </div>
                                    ) : null}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {
                                        flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export function Filter({ column }) {
    return (
        <>
            <input type='text' onChange={ch => column.setFilterValue([ch.target.value])} />
        </>
    )
}