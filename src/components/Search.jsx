import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {

    const[input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input);
    };



  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
        </div>   
    </FormStyle>
  )
}

const FormStyle = styled.form`
    
    
    div{
        position: relative;
        width: 100%;
        margin: auto;
    }

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.2rem;
        font-weight: 500;
        color: #ffffff;
        padding: .5rem 3rem;
        border: none;
        border-radius: .7rem;
        outline: none;
        width: 100%;
        
       
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #ebebeb;
    }
`

export default Search