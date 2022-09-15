import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import * as React from 'react';
import { Link, useRoutes } from 'react-router-dom';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {

    return <div className="container-fluid mt-3" >
        <div className="row">
            <div className="col-3">
            <Link to={'/ag-grid-table'}>
                <Card style={{cursor: 'pointer', maxWidth: 300}}>
                        <CardContent>
                            <Typography>AG Grid Table</Typography>
                        </CardContent>
                </Card>
            </Link>
            </div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div className="col-3"></div>
        </div>
    </div>;
};

export default Home;
