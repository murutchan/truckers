import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

const Alert = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Alert key={alert.id} variant={alert.alertType}>
        {alert.message}
      </Alert>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
