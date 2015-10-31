import React, {PropTypes} from 'react';
import Box from '../atoms/Box';
import Comments from './Comments';

export default
class Details extends React.Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
  };

  render(){
    console.log(this.props.comments);
    return (
      <Box>
        Details!
        <Comments comments={this.props.comments} />
      </Box>
    );
  }
}
