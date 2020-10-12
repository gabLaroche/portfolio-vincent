import React from 'react';
import PropTypes from 'prop-types';
import { uuidv4 } from '../../utils';

const MasonryLayout = ({ columns, gap, className, children }) => {
    const columnWrapper = {};
    const result = [];

    for (let i = 0; i < columns; i++) {
        columnWrapper[`column${i}`] = [];
    }

    for (let i = 0; i < children.length; i++) {
        const columnIndex = i % columns;
        columnWrapper[`column${columnIndex}`].push(
            <div key={uuidv4()} style={{ marginBottom: `${gap}px` }}>
                {children[i]}
            </div>
        );
    }

    for (let i = 0; i < columns; i++) {
        result.push(
            <div
                key={uuidv4()}
                style={{
                    marginLeft: `${i > 0 ? gap : 0}px`,
                    flex: 1,
                }}
            >
                {columnWrapper[`column${i}`]}
            </div>
        );
    }

    return (
        <div className={className || null} style={{ display: 'flex' }}>
            {result}
        </div>
    );
};

MasonryLayout.propTypes = {
    columns: PropTypes.number,
    gap: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

MasonryLayout.defaultProps = {
    columns: 2,
    gap: 20,
    className: '',
};

export default MasonryLayout;
