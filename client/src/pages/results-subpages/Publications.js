import React from 'react';
// import Paper1 from '../../assets/documents/cohort_profile_fekete.pdf';

const Publications = () => {
    return (
        // <>
        
        // </>
        <>
            <div class="container">
                {/* Trigger the modal with a button */}
                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
                {/* Modal */}
                <div id="myModal" class="modal fade" role="dialog">
                    <div class="modal-dialog modal-lg">
                        {/* Modal content */}
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Modal Header</h4>
                            </div>
                            <div class="modal-body">
                                {/* <embed src={Paper1} frameborder="0" width="100%" height="400px" /> */}
                                {/* <iframe onload="this.style.visibility = 'visible';" src={Paper1} width="100%" height="500" scrolling="yes" style="visibility:hidden;border-width:2px;border-style:dotted;border-color:#555555;" frameborder="0" allowfullscreen >TestPDF.</iframe> */}
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Publications;