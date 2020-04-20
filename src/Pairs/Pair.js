import React from 'react';
import {Card, Typography} from '@material-ui/core';

const Pair = (props) => {
    return(
        <Card>
            <Card.Content>
                <Typography>
                    {props.candidates}
                </Typography>
            </Card.Content>
        </Card>
    );
}

export default Pair;