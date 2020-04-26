import React, {useState, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';

const MasonryLayout = props => {
    const [columns, setColumns] = useState(props.columns);
    const [columnWrapper] = {};
    const result = [];

    for (let i = 0; i < columns; i++) {
        columnWrapper[`column${i}`] = [];
    }

    for (let i = 0; i < props.children.length; i++) {
        const columnIndex = i % columns;
        columnWrapper[`column${columnIndex}`].push(
            <div style={{ marginBottom: `${props.gap}px`}}>
                {props.children[i]}
            </div>
        );
    }

    for (let i = 0; i < columns; i++) {
        result.push(
            <div
                style={{
                    marginLeft: `${i > 0 ? props.gap : 0}px`,
                    flex: 1,
                }}>
                {columnWrapper[`column${i}`]}
            </div>
        );
    }

    return (
        <div style={{ display: 'flex' }}>
            {result}
        </div>
    );
};

MasonryLayout.propTypes = {
    columns: PropTypes.number.isRequired,
    gap: PropTypes.number.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element),
};
MasonryLayout.defaultProps = {
    columns: 2,
    gap: 20,
};

export default MasonryLayout
