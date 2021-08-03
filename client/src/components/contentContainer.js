import React, { useState } from 'react';
import NavTabs from './NavTabs';

// About Aus-InSCI sub-pages
import AusInsci2018 from '../pages/about-subpages/AusInsci2018';
import AusInsci2023 from '../pages/about-subpages/AusInsci2023';
import Translation from '../pages/about-subpages/Translation';

// About Research Partners sub-pages
import Advisory from '../pages/partners-subpages/Advisory';
import Organisations from '../pages/partners-subpages/Organisations';
import Researchers from '../pages/partners-subpages/Researchers';

// About Results sub-pages
import Report from '../pages/results-subpages/Report';
import Plain from '../pages/results-subpages/Plain';
import Publications from '../pages/results-subpages/Publications';

// About Get Invovled sub-pages
import Participate from '../pages/involved-subpages/Participate';
import Ideas from '../pages/involved-subpages/Ideas';
import Contact from '../pages/involved-subpages/Contact';

export default function ContentContainer() {
    const [currentPage, setCurrentPage] = useState('AusInsci2018');
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'AusInsci2018') {
            return <AusInsci2018 />;
        }
        if (currentPage === 'AusInsci2023') {
            return <AusInsci2023 />;
        }
        if (currentPage === 'Translation') {
            return <Translation />;
        }
        if (currentPage === 'Advisory') {
            return <Advisory />;
        }
        if (currentPage === 'Organisations') {
            return <Organisations />;
        }
        if (currentPage === 'Researchers') {
            return <Researchers />;
        }
        if (currentPage === 'Report') {
            return <Report />;
        }
        if (currentPage === 'Plain') {
            return <Plain />;
        }
        if (currentPage === 'Publications') {
            return <Publications />;
        }
        if (currentPage === 'Participate') {
            return <Participate />;
        }
        if (currentPage === 'Ideas') {
            return <Ideas />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a sub-page */}
        {renderPage()}
        </div>
    );
}