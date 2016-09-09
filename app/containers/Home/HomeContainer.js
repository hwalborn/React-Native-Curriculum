import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Home } from '~/components'

class HomeContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired,
  }
  state = {
  }
  handleNewPoll = () => {
    this.props.navigator.push({
      newPoll: true
    })
  }
  render () {
    return (
      <Home
        handleNewPoll={this.handleNewPoll}
        openDrawer={this.props.openDrawer} />
    )
  }
}

function mapStateToProps () {
  return {

  }
}

export default connect(
  mapStateToProps
)(HomeContainer)