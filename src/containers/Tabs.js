import React from 'react'
import VisibleTable from '../containers/VisibleTable'
import {Tabs, Tab} from 'material-ui/Tabs'
import { setFilter } from '../actions'
import { jump } from '../actions'
import { connect } from 'react-redux'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'SHOW_ALL',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
    let dispatch = this.props.dispatch;
    dispatch(setFilter(value));
  };

  render() {
    return (
      <div>
        <h3 className='title'>S&P/ASX</h3>
        <Tabs
          className = 'tabs'
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab className = 'tab' label="ALL" value="SHOW_ALL" />
          <Tab className = 'tab' label="TOP GAINERS" value="TOP_GAINERS" />
          <Tab className = 'tab' label="TOP LOOSER" value="TOP_LOOSER" />
        </Tabs>
      </div>
    );
  }

  componentDidMount() {
    let dispatch = this.props.dispatch;
    let change = () => dispatch(jump());
    setInterval(change, 5000)
  }
}
TabsExampleControlled = connect()(TabsExampleControlled)

export default TabsExampleControlled
