import React from 'react';

const Advisory = () => {
    return (
        <>
            <header>Advisory Committee Members</header>
            <div class="table-responsive">
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Member name</th>
                        <th scope="col">Member role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    );
};

export default Advisory;