import React from 'react';
// import BootstrapTable from 'react-bootstrap-table-next';

const styles = {
    h3: {
        margin: '10px 20px',
        color: '#6a040f'
    },
    table: {
        margin: '10px 20px',
        color: '#1b4332',
        width: "200"
    },
    content: {
        display: 'inline-block',
    },
    p: {
      margin: '10px 20px',
      color: '#343a40'
    },
}

const Advisory = () => {
    return (
        <>
            <h3 style={styles.h3}>National Steering Committee</h3>
            <div style={styles.content}>
                <div className="table-responsive">
                    <table style={styles.table} class="table table-hover table-bordered">
                        <thead>
                            <tr style={styles.table}>
                                <th width='50' scope="col">#</th>
                                <th width='200' scope="col">Name</th>
                                <th width='350' scope="col">Role</th>
                                <th width='400' scope="col">Organisation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Prof James Middleton</td>
                            <td>Chief Investigator - Australia</td>
                            <td>The University of Sydney</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Dr Mohit Arora</td>
                            <td>Postdoctoral Fellow and Manager</td>
                            <td>The University of Sydney</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Prof Ian Cameron</td>
                            <td>Investigator - NSW</td>
                            <td>The University of Sydney</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>Prof Ashley Craig</td>
                            <td>Investigator - NSW</td>
                            <td>The University of Sydney</td>
                            </tr>
                            <tr>
                            <th scope="row">5</th>
                            <td>Prof Tim Geraghty</td>
                            <td>Principal Investigator - QLD</td>
                            <td>Princess Alexandra Hospital</td>
                            </tr>
                            <tr>
                            <th scope="row">6</th>
                            <td>Dr Andrew Nunn</td>
                            <td>Principal Investigator - VIC</td>
                            <td>Austin Health</td>
                            </tr>
                            <tr>
                            <th scope="row">7</th>
                            <td>A/Prof Ruth Marshall</td>
                            <td>Principal Investigator - SA</td>
                            <td>Hampstead Rehabilitation Centre</td>
                            </tr>
                            <tr>
                            <th scope="row">8</th>
                            <td>Adjunct Prof John Walsh</td>
                            <td>Peer Reviewer and Consultant</td>
                            <td>Consumer Representative</td>
                            </tr>
                            <tr>
                            <th scope="row">9</th>
                            <td>Ms Suzanne Lulham</td>
                            <td>Insurer Perspective - NSW</td>
                            <td>icare NSW</td>
                            </tr>
                            <tr>
                            <th scope="row">10</th>
                            <td>Ms Jacqueline Scott</td>
                            <td>Insurer Perspective - NSW</td>
                            <td>icare NSW</td>
                            </tr>
                            <tr>
                            <th scope="row">11</th>
                            <td>Ms Dianne Lucas</td>
                            <td>Consumer Organisation - NSW</td>
                            <td>Spinal Cord Injuries Australia</td>
                            </tr>
                            <tr>
                            <th scope="row">12</th>
                            <td>Ms Kylie Wicks</td>
                            <td>Consumer Organisation - NSW</td>
                            <td>Paraplegic & Quadriplegic Association of NSW</td>
                            </tr>
                            <tr>
                            <th scope="row">13</th>
                            <td>Mr Peter Stewart</td>
                            <td>Consumer Organisation - SA</td>
                            <td>The Paraplegic & Quadriplegic Association of SA</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr></hr>
                <h3 style={styles.h3}>National Translation Sub-Committee</h3>
                <div class="table-responsive">
                    <table style={styles.table} class="table table-hover table-bordered">
                        <thead>
                            <tr style={styles.table}>
                                <th width='50' scope="col">#</th>
                                <th width='175' scope="col">Name</th>
                                <th width='250' scope="col">Role</th>
                                <th width='250' scope="col">Organisation</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Prof Tim Geraghty</td>
                            <td>Chief Investigator - Australia</td>
                            <td>Princess Alexandra Hospital</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Prof James Middleton</td>
                            <td>Principal Investigator - NSW</td>
                            <td>The University of Sydney</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Dr Delena Amsters</td>
                            <td>Project Lead & Adjunct Research Fellow</td>
                            <td>Griffith University</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>Dr Mohit Arora</td>
                            <td>Postdoctoral Fellow</td>
                            <td>The University of Sydney</td>
                            </tr>

                            <tr>
                            <th scope="row">5</th>
                            <td>Ms Samantha Borg</td>
                            <td>Research Assistant - QLD</td>
                            <td>Griffith University</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Advisory;