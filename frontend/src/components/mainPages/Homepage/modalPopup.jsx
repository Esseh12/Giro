import PropTypes from "prop-types";
import "../../../styles/top.css";

const Modal = ({ trigger, onClose, children }) => {
  return trigger ? (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-subcontent">
          {children}
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  trigger: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired, // Ensure this prop is required
  children: PropTypes.node.isRequired,
};

export default Modal;
