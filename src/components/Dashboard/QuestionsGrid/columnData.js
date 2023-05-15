import React from 'react'
import { mapApiCategoriesToSelectView } from "../../../mappers/categoriesMapper";

const columnsProvider = (props) => {
    const { categories } = props

    return (
    [
        {
            field: "id",
            width: 50,
        },
        {
            field: "dateCreated",
            headerName: "Date",
            width: 200,
        },
        {
            field: "categoryName",
            headerName: "Category",
            width: 150,
            editable: true,
            type: 'singleSelect',
            valueOptions: mapApiCategoriesToSelectView(categories),
        },
        {
            field: "body",
            width: 450,
            headerName: "Question",
            editable: true,
        },
        {
            field: "correctAnswer",
            width: 350,
            headerName: "✔️ Answer",
            editable: true,
        },
        {
            field: "incorrectAnswer1",
            width: 350,
            headerName: "❌ Answer",
            editable: true,
        },
        {
            field: "incorrectAnswer2",
            width: 350,
            headerName: "❌ Answer",
            editable: true,
        },
        {
            field: 'photoUrl',
            width: 150,
            headerName: 'Image URL',
            editable: true,
        },
        // {
        //     field: 'imagePreview',
        //     headerName: 'Image',
        //     width: 150,
        //     editable: true,
        //     renderCell: (params) => <img src={params.value} />, // renderCell will render the component
        // },
    ]
    )
}

export default columnsProvider