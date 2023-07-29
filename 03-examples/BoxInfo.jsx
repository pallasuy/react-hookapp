import PropTypes from 'prop-types'
import { useLayoutEffect, useRef, useState } from 'react'

export const BoxInfo = ({ name, id }) => {


    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        // pRef.current;  esto es para tomar el valor actual
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [id])

    return (
        <>
            <blockquote className="blockquote text-end"
                style={{ display: 'flex' }}>
                <p className="mb-1" ref={pRef}>{name}</p>
                <footer className="blockquote-footer"> {`ID:${id}`} </footer>
            </blockquote>



            <code>{JSON.stringify(boxSize)}</code>
            <hr />
        </>

    )
}

BoxInfo.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,

}


