import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Panel } from 'muicss/react';
import MDSpinner from 'react-md-spinner';
import './Solution.css';
import citrus_bg from '../assets/images/citrus-bg.jpg';
import berry_bg from '../assets/images/berry-bg.jpg';
import cotton_bg from '../assets/images/cotton-bg.jpg';
import { CROPS } from '../shared/constants'

const bg = [citrus_bg, berry_bg, cotton_bg];

export function Solution(props) {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoader(false), 3000);
    });
    function onChange(i, value, tab, ev) {

    }

    function onActive(tab) {

    }

    return (

        loader ? (
            <div style={ { margin: 20 } }>
                <MDSpinner color1="#00897B" color2="#C0CA33" color3="#7CB342" color4="#43A047" />
            </div>
        ) : (<Panel>
            <div>
                <img className="Solution-bg" src={ bg[props.id] } alt="" />
                <h2>{ props.type }</h2>
                <Tabs  onChange={ onChange } defaultSelectedIndex={ parseInt(props.file[0]) }>
                    { CROPS[props.id].diseases.map((disease, i) =>
                        <Tab className='Solution-Tab' key={ i } value={ `${i}` } label={ disease.name } onActive={ onActive }>
                            <img className='Solution-img' src={ CROPS[props.id].solution[i].image } alt=''/>
                            <p className='Solution-description'>{ CROPS[props.id].solution[i].description }</p>
                            <div className='Solution-cure'>{ CROPS[props.id].solution[i].cure }</div>
                        </Tab>) }
                </Tabs>
            </div>
        </Panel>
            )

    );
}
