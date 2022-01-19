import React, { useState } from "react";
import { AiOutlineSearch} from "react-icons/ai";
import {GrClose} from "react-icons/gr";
import { Link } from "react-router-dom";




// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
// //   componentDidMount() {
// //     this.props.fetchVideos();
// //   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     const {videos} = this.props
//     const vd = (videos || []).map((video, key) => {
//       return (
//       video={video}, 
//       key={key}
//       );
//     });
//     return (
//       <div className="search-bar-and-icon">
//         <form className="search-bar" onSubmit={this.handleSubmit}>
//           <label>
//             <input
//               className="search-input"
//               type="text"
//               placeholder="Search"
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//           </label>
//           <button className="search-button">
//             <AiOutlineSearch className="search-icon" />{" "}
//           </button>
//           {/* <input className="search-button" type="submit" value="Submit" 
//           /> */}
//         </form>
//         <div className="loppping-video-names">{vd.title}</div>
//       </div>
//     );
//   }
// }

// export default SearchBar
 
// class SearchBar extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     changeSearch(e){
//         this.setState({filter: e.currentTarget.value})
//     }
//     render(){
//         const {videos} = this.props;
//         const names = [
//           "Introduction",
//           "Maleficent Trailer",
//           "Summer"
//         ];
//         // const vNames = (videos || []).map((vid, idx) => {
//         //     return (
//         //         <div>{vid.title}</div>
//         //     )
//         // })

//         return (
//           <div className="search-bar-and-icon">
//             <div className="search-bar">
//               <input
//                 placeholder="Search"
//                 className="search-input"
//                 type="text"
//                 onChange={(e) => this.changeSearch(e)}
//               />

//               <Link className="search-button" to="/search">
//                 <AiOutlineSearch className="search-icon" />{" "}
               
//               </Link>
//             </div>
//           </div>
//         );
//     }
// }

// export default SearchBar

function SearchBar (){

    const names = ["Introduction", "Maleficent Trailer", "Summer" ];
    const [state, setState] = useState([]);
    const [wordEntered, setWordEntered] = useState("")

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        // const name = names
        const newFilter = names.filter((value) => {
            return value.toLowerCase().includes(searchWord.toLowerCase());
        })
        if (searchWord === "") {
                setState([])
            } 
            // else if (!newFilter.includes(searchWord)) {
            //     setState([]);
            //     // setWordEntered("");  
            // }  
            else {setState(newFilter)} }
        

    const clearInput = () => {
        setState([]);
        setWordEntered("")
    };

    const handleClick = () => {
        <div>Invalid search</div>;
    }
       
    return (
      <div className="search-bar-and-icon">
        <div className="search-bar">
          <input
            placeholder="Search"
            className="search-input"
            type="text"
            value={wordEntered}
            onChange={handleFilter}
          />

          <div className="search-bar-icons">
            {state.length == 0 ? (
              <button className="search-button" onClick={handleClick}>
                <AiOutlineSearch className="search-icon" />
              </button>
            ) : (
              <div className="search-button-and-close-icon">
                <GrClose className="search-close-icon" onClick={clearInput} />
                <Link className="search-button" to="/search">
                  <AiOutlineSearch className="search-icon" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {state.length != 0 && (
          <div>
            {state.map((v, k) => {
              return (
                <div className="search-result">
                  <p className="search-result-names">{v}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
    
    
}

export default SearchBar

//  {
//    state.length != 0 && (
//      <Link className="search-button" to="/search">
//        <AiOutlineSearch className="search-icon" />
//      </Link>
//    );
//  }
