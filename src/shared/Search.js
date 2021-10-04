import React from "react";
import _ from "lodash"; // lodash 부르기

const Search = () => {

    const [text, setText] = React.useState("");


    const onChange = (e) => {
        setText(e.target.value);
        keyPress(e);
      };

      const debounce = _.debounce((e) => {
          console.log(e.target.value);
        }, 1000);

      const throttle = _.throttle((e) => {
        console.log(e.target.value);
      }, 1000);

      const keyPress = React.useCallback(debounce, []);
    return (
        <div>
            <input type="text" onChange={onChange}/>
        </div>

    )
}

export default Search;