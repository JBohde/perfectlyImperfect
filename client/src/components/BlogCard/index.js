import React from "react";
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card/';
import Button from 'react-toolbox/lib/button/Button';
import theme from '../../assets/react-toolbox/theme.js'
import '../../assets/react-toolbox/theme.css'
// import ThemeProvider from '../react-toolbox/lib/ThemeProvider';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const BlogCard = (props) => (
  <Card style={{width: '350px'}}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="Avatar style title"
      subtitle="Subtitle here"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title={props.title}
      subtitle="Subtitle here"
    />
    <CardText theme={theme}>{dummyText}</CardText>
    <CardActions >
      <Button label={props.action} />
      <Button label="Action 2" />
    </CardActions>
  </Card>
);

export default BlogCard;