import React from "react";

const linkStyle = {
    color: "black",
}

// This component lets us use a bootstrap input element without worrying about class names or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const Input = props => (
    <div className="form-group row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input className="form-control" type="text" {...props} style={linkStyle} />
        </div>
    </div>
);

export default Input;