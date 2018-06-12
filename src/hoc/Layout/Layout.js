import React, {Component} from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SIdeDrawer/SideDrawer';

class Layout  extends Component {
  state = {
      showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer:false
    })
  };


  sideDraweToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    })
  };

  render() {
    return(
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDraweToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
         />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}
export default Layout;