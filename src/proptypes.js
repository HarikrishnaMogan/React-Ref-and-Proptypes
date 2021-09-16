import PropTypes from "prop-types";
function Example(props)
{
    return(
        <>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Gender:{props.gender}</p>
        <p>Country:{props.country}</p>
        </>
    );
}
//to make the props strict and throws a error when props is wrong
Example.propTypes ={
  name:PropTypes.string.isRequired,
  age:PropTypes.number.isRequired,
  gender:PropTypes.oneOf(["male","female"]),
}

//provides a default value for country,it works if the country props is not given
Example.defaultProps={
    country:"India",
}

export default Example;