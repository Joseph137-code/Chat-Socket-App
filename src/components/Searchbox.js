import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const Searchbox = () => {

    const { auth, logout } = useContext( AuthContext );

    return (
        <div className="headind_srch">
            <div className="recent_heading mt-2">
                <h4>{ auth.name }</h4>
                <h4>{ auth.email }</h4>
            </div>
            <div className="srch_bar">
                <div className="stylish-input-group">
                    <button 
                        type="button" 
                        className="btn btn-outline-danger" 
                        onClick={ logout }>Salir
                    </button>
                </div>
            </div>
        </div>
    )
}
