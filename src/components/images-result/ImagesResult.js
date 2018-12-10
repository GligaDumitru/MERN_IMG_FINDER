import React, { Component } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import IconButton from '@material-ui/core/IconButton';
import ZoomIcon from '@material-ui/icons/StarBorder';

class ImagesResult extends Component {

    render() {

        let imageListContent;
        const { images } = this.props;

        if (images)
            imageListContent = (

                <GridList cols={3} xs={12}>
                    {images.map(img => (
                        <GridListTile key={img.img} cols={1} rows={2}>
                            <img src={img.largeImageURL} alt={img.tags} />
                            <GridListTileBar
                                title={img.tags}

                                actionIcon={
                                    <IconButton >
                                        <ZoomIcon />
                                    </IconButton>
                                }
                                actionPosition="left"

                            />
                        </GridListTile>
                    ))}
                </GridList>
            )
        else
            imageListContent = null
        return (
            <div>
                {imageListContent}
            </div>
        );
    }
}

export default ImagesResult;