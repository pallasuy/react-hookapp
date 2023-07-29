import { memo } from "react";
import React from "react";
//Memo es una funcion que le dice a react, memoriza este componente
//Solo se recomienda cuando tengamos proceso muy pesados y se note la depreciacion del componente

export const Small = React.memo(({ value }) => {

    console.log('Me volvi a generar');
    return (
        <small>{value}</small>
    )
});
