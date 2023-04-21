import React from 'react';
import './Page404.css';
/* Import image */
import error404 from '../../assets/img/404pic.webp';
/* Import Link method */
import { Link } from 'react-router-dom';

export default function Pages404() {
  return (
    <main>
      <div className='container-error flex justify-content--center align-items--center'>
        <img
          src={error404}
          alt="Page 404"
        />
        <div>
          <Link to={"/"} className="btn--plain btn--green">
            Retour à la page d'accueil
          </Link>
        </div>
      </div>
    </main>
  )
}
