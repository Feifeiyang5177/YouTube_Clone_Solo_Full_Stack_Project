import React, {useState}  from "react";
import { BiVideoPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }
  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
    console.log(event.target.files[0]);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const { selectedFile } = this.state;
    formData.append("inputFile", selectedFile);
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
  };

  render() {
    //   const [sidebar, setSidebar] = useState(false);
    //   const showSidebar = () => setSidebar(!sidebar);

    //   const [sidebar, setSidebar] = useState(false);
    //   const showSidebar = () => setSidebar(!sidebar);

    return (
      <div>
        <Link to="/upload">
          {/* <BiVideoPlus onClick={showSidebar} /> */}
         <BiVideoPlus /> 
          </Link>
          <form onSubmit={this.handleSubmit}>
            <label>
              Upload a file: <br />
              <br />
              <input type="file" name="file" onChange={this.onChangeHandler} />
            </label>
            <br />
            <br />
            <button type="submit">Upload</button>
          </form>
        {/* </Link> */}
      </div>
    );
  }
}
