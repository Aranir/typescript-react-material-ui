import * as React from 'react';
import withStyles from "material-ui/styles/withStyles";
import {default as Typography, TypographyProps} from "material-ui/Typography";
import {WithStyles} from "material-ui";
import Button from "material-ui/Button";

const decorate = withStyles((theme) => (
  {
  root: {
    padding: theme.spacing.unit,
    background: "#ff72f3",
  },
  h1: {
  }
}));

interface Props {
}

const TestComponent = decorate(
  class extends React.Component<Props & WithStyles<'root' | 'h1'>> {

    render() {

      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <h1 className={classes.h1}>
          This Is A Testing Component
          </h1>
          <Button raised className={classes.h1} onClick={this.onClick.bind(this)}>
            Testing
          </Button>
        </div>
      )
    }
    onClick() {
      console.log("You Clicked Me");
    }
  }
);

export default TestComponent;