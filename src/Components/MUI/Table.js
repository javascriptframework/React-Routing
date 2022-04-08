import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { RegularTable } from './RegularTable';
import { MuiTable } from './MUITable';

const userData = [{ "id": 1, "first_name": "Florinda", "last_name": "Mickelwright", "email": "fmickelwright0@canalblog.com", "country": "China", "currency": "Yuan Renminbi" },
{ "id": 2, "first_name": "Violet", "last_name": "Fibbings", "email": "vfibbings1@odnoklassniki.ru", "country": "Poland", "currency": "Zloty" },
{ "id": 3, "first_name": "Beryl", "last_name": "Skelhorn", "email": "bskelhorn2@indiatimes.com", "country": "Malaysia", "currency": "Ringgit" },
{ "id": 4, "first_name": "Linnea", "last_name": "McConigal", "email": "lmcconigal3@furl.net", "country": "South Africa", "currency": "Rand" },
{ "id": 5, "first_name": "Enrique", "last_name": "Dearell", "email": "edearell4@unesco.org", "country": "Uganda", "currency": "Shilling" },
{ "id": 6, "first_name": "Eugine", "last_name": "Blant", "email": "eblant5@hp.com", "country": "Reunion", "currency": "Euro" },
{ "id": 7, "first_name": "Steffie", "last_name": "Lakes", "email": "slakes6@admin.ch", "country": "China", "currency": "Yuan Renminbi" },
{ "id": 8, "first_name": "Vergil", "last_name": "Seward", "email": "vseward7@bluehost.com", "country": "Vietnam", "currency": "Dong" },
{ "id": 9, "first_name": "Christiana", "last_name": "Gitting", "email": "cgitting8@un.org", "country": "Russia", "currency": "Ruble" },
{ "id": 10, "first_name": "Jillayne", "last_name": "Le Blanc", "email": "jleblanc9@soundcloud.com", "country": "China", "currency": "Yuan Renminbi" },
{ "id": 11, "first_name": "Mozes", "last_name": "Frost", "email": "mfrosta@51.la", "country": "China", "currency": "Yuan Renminbi" },
{ "id": 12, "first_name": "Hercule", "last_name": "Hartright", "email": "hhartrightb@addtoany.com", "country": "Serbia", "currency": "Dinar" },
{ "id": 13, "first_name": "Philip", "last_name": "Capitano", "email": "pcapitanoc@marketwatch.com", "country": "Portugal", "currency": "Euro" },
{ "id": 14, "first_name": "Lewes", "last_name": "Franciotti", "email": "lfranciottid@privacy.gov.au", "country": "Ecuador", "currency": "Dollar" },
{ "id": 15, "first_name": "Ryan", "last_name": "Kennewell", "email": "rkennewelle@csmonitor.com", "country": "Russia", "currency": "Ruble" },
{ "id": 16, "first_name": "Doyle", "last_name": "Mickleborough", "email": "dmickleboroughf@ibm.com", "country": "Morocco", "currency": "Dirham" },
{ "id": 17, "first_name": "Maureen", "last_name": "Cradduck", "email": "mcradduckg@nps.gov", "country": "United States", "currency": "Dollar" },
{ "id": 18, "first_name": "Kamillah", "last_name": "McElhinney", "email": "kmcelhinneyh@qq.com", "country": "Poland", "currency": "Zloty" },
{ "id": 19, "first_name": "Marve", "last_name": "Runnicles", "email": "mrunniclesi@newyorker.com", "country": "Indonesia", "currency": "Rupiah" },
{ "id": 20, "first_name": "Ellis", "last_name": "Schonfelder", "email": "eschonfelderj@ehow.com", "country": "Russia", "currency": "Ruble" },
];



const Table = () => {
    return (
        <>
            <h1>New Data</h1>
             
            <div><Link to="htmltable">HTML Table</Link> </div>
            <div><Link to ="muitable">MUI Table</Link></div>
            <Routes>
                <Route path="htmltable" element={<RegularTable users={userData}/>}></Route>
                <Route path="muitable" element={<MuiTable users={userData}/>}></Route>
            </Routes>
           
        </>
    )
}

export default Table;