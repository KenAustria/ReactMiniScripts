import React, { Component } from 'react';
import {GridList, GridTile } from 'material-ui/GridList';
import { connect } from 'react-redux';

class PhotoResults extends Component {
  render() {
    let photoList;
    if (this.props.photos && Array.isArray(this.props.photos[0]) && this.props.photos[0].length > 0) {
      photoList = (
        <GridList cols={3}>
          {this.props.photos[0].map(photo => (
            <GridTile title={photo.tags} key={photo.id}>
              <img src={photo.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      )
    } else {
      photoList = null;
    }
    console.log(this.props.photos);
    return (
      <div>
      	{photoList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos };
}

export default connect(mapStateToProps, null)(PhotoResults);