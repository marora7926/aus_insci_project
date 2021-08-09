import React from 'react';
import { Button } from 'react-bootstrap';

const styles = {
    h2: {
        margin: '15px 20px',
        color: 'black',
    },
    h3: {
        margin: '10px 20px',
        color: 'black'
    },
    a: {
        padding: '10px',
        fontSize: '20px',
        color: "black !important",
    },
    button: {
        margin: '15px 20px',
        background: "#e7e7e7",
        border: '1px solid #333',
        borderRadius: '4px',
    },
    table: {
        margin: '10px 20px',
        color: '#1b4332',
        width: "200"
    },
    firstRow: {
        padding: '4px',
        fontWeight: 'bold',
    },
    otherRow: {
        padding: '4px 12px',
    }
}

const HtmlData = () => {
    return (
        <>
        <h2 style={styles.h2}>National Aus-InSCI Report</h2>
        <hr></hr>
            <Button style={styles.button}>
            <a style={styles.a} 
                href="/AustraliaData.html"
                target="_blank">
              Access full descriptive report here
            </a>
            </Button>

            <div className="table-responsive">
                <h3 style={styles.h3}>Basic Summary Statistics</h3>
                <table style={styles.table} class="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th colspan="1" style={styles.firstRow}></th>
                        <th colspan="2" style={styles.firstRow}><div>SCI etiology</div></th>
                        <th colspan="2" style={styles.firstRow}><div>Injury severity</div></th>
                    </tr>
                    <tr>
                        <th style={styles.firstRow}></th>
                        <th style={styles.firstRow}>
                            <span>Total<br></br>
                                <span>(N=1579)</span>
                            </span>
                        </th>
                        <th style={styles.firstRow}>
                            <span>traumatic<br></br>
                                <span>(N=1305)</span>
                            </span>
                        </th>
                        <th style={styles.firstRow}>
                            <span>non-traumatic<br></br>
                                <span>(N=258)</span>
                            </span>
                        </th>
                        <th style={styles.firstRow}>
                            <span>tetra<br></br>
                                <span>(N=580)</span>
                            </span>
                        </th>
                        <th style={styles.firstRow}>
                            <span>para<br></br>
                                <span>(N=912)</span>
                            </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.firstRow}>Sex</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td style={styles.otherRow}>Female</td>
                            <td style={styles.otherRow}>422 (26.7 %)</td>
                            <td style={styles.otherRow}>295 (22.6 %)</td>
                            <td style={styles.otherRow}>120 (46.5 %)</td>
                            <td style={styles.otherRow}>135 (23.3 %)</td>
                            <td style={styles.otherRow}>256 (28.1 %)</td>
                        </tr>
                        <tr>
                            <td style={styles.otherRow}>Male</td>
                            <td style={styles.otherRow}>1157 (73.3 %)</td>
                            <td style={styles.otherRow}>1010 (77.4 %)</td>
                            <td style={styles.otherRow}>138 (53.5 %)</td>
                            <td style={styles.otherRow}>445 (76.7 %)</td>
                            <td style={styles.otherRow}>656 (71.9 %)</td>
                        </tr>
                        <tr>
                            <td style={styles.firstRow}>Age at time of questionnaire (years)</td>
                            <td style={styles.firstRow}></td>
                            <td style={styles.firstRow}></td>
                            <td style={styles.firstRow}></td>
                            <td style={styles.firstRow}></td>
                            <td style={styles.firstRow}></td>
                        </tr>
                        <tr>
                            <td style={styles.otherRow}>16-30</td>
                            <td style={styles.otherRow}>69 (4.4 %)</td>
                            <td style={styles.otherRow}>59 (4.6 %)</td>
                            <td style={styles.otherRow}>10 (3.9 %)</td>
                            <td style={styles.otherRow}>32 (5.6 %)</td>
                            <td style={styles.otherRow}>33 (3.7 %)</td>
                        </tr>
                        <tr>
                            <td style={styles.otherRow}>31-45</td>
                            <td style={styles.otherRow}>232 (15.0 %)</td>
                            <td style={styles.otherRow}>205 (16.0 %)</td>
                            <td style={styles.otherRow}>23 (9.0 %)</td>
                            <td style={styles.otherRow}>88 (15.4 %)</td>
                            <td style={styles.otherRow}>134 (14.9 %)</td>
                        </tr>
                        <tr>
                            <td style={styles.otherRow}>46-60</td>
                            <td style={styles.otherRow}>518 (33.4 %)</td>
                            <td style={styles.otherRow}>456 (35.6 %)</td>
                            <td style={styles.otherRow}>58 (22.7 %)</td>
                            <td style={styles.otherRow}>215 (37.7 %)</td>
                            <td style={styles.otherRow}>281 (31.3 %)</td>
                        </tr>
                        <tr>
                            <td style={styles.otherRow}>61-75</td> 
                            <td style={styles.otherRow}>588 (37.9 %)</td>
                            <td style={styles.otherRow}>452 (35.3 %)</td>
                            <td style={styles.otherRow}>131 (51.2 %)</td>
                            <td style={styles.otherRow}>209 (36.7 %)</td>
                            <td style={styles.otherRow}>348 (38.8 %)</td>
                        </tr>
                        <tr>
                            <td style={styles.otherRow}>76+</td>
                            <td style={styles.otherRow}>144 (9.3 %)</td>
                            <td style={styles.otherRow}>109 (8.5 %)</td>
                            <td style={styles.otherRow}>34 (13.3 %)</td>
                            <td style={styles.otherRow}>26 (4.6 %)</td>
                            <td style={styles.otherRow}>102 (11.4 %)</td>
                        </tr>
                        <tr>
                            <td style={styles.otherRow}>Missing</td>
                            <td style={styles.otherRow}>28 (1.8%)</td>
                            <td style={styles.otherRow}>24 (1.8%)</td>
                            <td style={styles.otherRow}>2 (0.8%)</td>
                            <td style={styles.otherRow}>10 (1.7%)</td>
                            <td style={styles.otherRow}>14 (1.5%)</td>
                        </tr>
                        <tr>
                            <td style={styles.firstRow}>Marital status</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td style={styles.otherRow}>Single</td>
                            <td style={styles.otherRow}>386 (24.5 %)</td>
                            <td style={styles.otherRow}>343 (26.3 %)</td>
                            <td style={styles.otherRow}>40 (15.5 %)</td>
                            <td style={styles.otherRow}>172 (29.7 %)</td>
                            <td style={styles.otherRow}>195 (21.4 %)</td>
                        </tr>
                        <tr>
                            <td style={styles.otherRow} >Married/partnership</td>
                            <td style={styles.otherRow}>931 (59.1 %)</td>
                            <td style={styles.otherRow}>754 (57.8 %)</td>
                            <td style={styles.otherRow}>170 (65.9 %)</td>
                            <td style={styles.otherRow}>314 (54.2 %)</td>
                            <td style={styles.otherRow}>563 (61.8 %)</td>
                        </tr>
                        <tr>
                            <td style={styles.otherRow}>Divorced/Widowed</td>
                            <td style={styles.otherRow}>257 (16.3 %)</td>
                            <td style={styles.otherRow}>207 (15.9 %)</td>
                            <td style={styles.otherRow}>48 (18.6 %)</td>
                            <td style={styles.otherRow}>93 (16.1 %)</td>
                            <td style={styles.otherRow}>153 (16.8 %)</td>
                        </tr>
                        <tr>
                            <td style={styles.otherRow}>Missing</td>
                            <td style={styles.otherRow}>5 (0.3%)</td>
                            <td style={styles.otherRow}>1 (0.1%)</td>
                            <td style={styles.otherRow}>0 (0%)</td>
                            <td style={styles.otherRow}>1 (0.2%)</td>
                            <td style={styles.otherRow}>1 (0.1%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default HtmlData;