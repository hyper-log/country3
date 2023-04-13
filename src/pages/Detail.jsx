import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Detail(props) {

  const {data} = props;
  const params = useParams();

  const history = useNavigate();

  const handleHistory = () => {
    navigate(-1);
  }

  return (
      <>
      <Navbar />
      <Link to={`/`}><button className='back'>Back</button></Link>
      <div className='container'>
      <div className='title'>
          <h2>{data[params.id].cca2}</h2>
        </div>
      <ul className="country-detail">
          <li className='item'>
            <img src={data[params.id].flags.svg}/>
        </li>
        <li className='detail_text'> 
          <h4>{data[params.id].name.common} {data[params.id].translations.kor.official}</h4>
          <b>Popultaion: </b>{data[params.id].population} <br/>
          <b>Region: </b>{data[params.id].region}<br/>
          <b>Capital:  </b>{data[params.id].capital}<br/>
          <b>Sub Resion: </b>{data[params.id].subregion}<br/>
          <b>Top Level Domain: </b>{data[params.id].cca2}<br/>
          <b>Languages: </b>{data[params.id].languages.eng}
        </li>
      </ul>
      </div>
      </>
  )
}

export default Detail