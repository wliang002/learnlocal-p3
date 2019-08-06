import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({ alerts }) =>
  // make sure alert is not null
  alerts !== null &&
  alerts.length > 0 &&
  // map over each alert in alerts array
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ))

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
}

// mapping redux state to this component
const mapStateToProps = state => ({
  alerts: state.alert
})

export default connect(mapStateToProps)(Alert)
