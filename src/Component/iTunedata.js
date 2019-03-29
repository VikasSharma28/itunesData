import React, { Component } from 'react';
import Data from './../Data/itunedata.json'
class Itunes extends Component {

    constructor(props){
        super(props)
        this.state = {
            width : "600px"
        }
        
    }
    render() {
     

        

        return (
            <div className="container">
                <div className="row">
                    {Data && Data.feed && Data.feed.entry.map((data, index) => {
                        return <div className="col-md-3 col-sm-2 col-6">
                            <div className="card">
                                <a href={data.link.attributes.href} target="_blank">
                                    <div className="card__image">
                                        {/* <img src={data["im:image"][0].label}  className="col-12"/>
                                   <img src={data["im:image"][1].label} className="col-sm-12"/>  */}
                                        <img src={data["im:image"][2].label} className="col-md-12" />
                                    </div>
                                    <label>{data["im:name"].label}</label>
                                    <div class="card__favourite" favourite="">
                                        <label class="count ">
                                            {data["im:itemCount"].label}

                                        </label>
                                    </div>
                                    <hr class="margin-reset"></hr>
                                    <div className="card__description">
                                        <div class="margin-top-s">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="card__artist ">
                                                        <p class="h5 text-left artist-name">{data["im:artist"].label}</p>

                                                    </div>
                                                </div>
                                                <div class="col-6">

                                                    <p class="h5 txt-brand-secondary font-weight-semibold text-right actual-price">{data["im:price"].label}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    })}
                </div>
                <template><ul className="dataList margin-reset padding-reset ">
                    {Data && Data.feed && Data.feed.entry.map((data, index) => {
                        return <li>
                            <div className="card">
                                <a href={data.link.attributes.href} target="_blank">
                                    <div className="row">
                                        <div className="col-2">
                                            <img src={data["im:image"][0].label}/>
                                        </div>
                                        <div className="col-10">
                                            <label className="text-left title">{data["im:name"].label}</label>
                                            <div class="card__favourite" favourite="">
                                                <label class="count ">
                                                    {data["im:itemCount"].label}

                                                </label>
                                            </div>
                                            <div className="card__description padding-reset padding-left-xs padding-top-xs">
                                                <div>
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <div class="card__artist ">
                                                                <p class="h5 text-left artist-name margin-reset padding-reset">{data["im:artist"].label}</p>

                                                            </div>
                                                        </div>
                                                        <div class="col-6">

                                                            <p class="h5 txt-brand-secondary font-weight-semibold text-right actual-price margin-reset padding-reset ">{data["im:price"].label}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </li>

                    })}
                </ul>
                </template>
            </div>
        );
    }
}

export default Itunes;
