import React from 'react';

import PrivateHeader from './PrivateHeader';

export default () => {
    return (
        <div>
            <PrivateHeader title="Meteor Template"/>
            <div className="page-content">
                <p>
                    Dashboard page Content
                </p>
            </div>
        </div>
    );
};
