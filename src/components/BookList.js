import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList  extends Component {
    static contextType = ThemeContext;
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style ={{ background: theme.ui}}>Once Minutos</li>
                    <li style ={{ background: theme.ui}}>La Divina Comedia</li>
                    <li style ={{ background: theme.ui}}>Líbranos de Libra</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;