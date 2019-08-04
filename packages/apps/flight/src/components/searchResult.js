import React from 'react';
import SidebarSearchForm from './sidebarSearchForm';
import ResultList from './resultList';

const SearchResult = (props) =>
    <div className="row">
        <div className="col-md-12">
            <div className="list-page mt-5">

                <div className="row">
                    <div className="col-md-3 mb-3">
                        <SidebarSearchForm {...props} />
                    </div>
                    <h1>Search Result</h1>
                    <div className="col-md-9">
                        {props.isLoading ?
                            <div className="text-center mt-5">
                                <img src="/img/loading.gif" alt="Loading" />
                            </div>
                            :
                            <div className="result-tabs">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className={getTabClass(props.isDeparture) + (props.departureResult ? "" : "hide")} id="home-tab" data-toggle="tab" href="#departure" role="tab"
                                            aria-controls="departure" aria-expanded="true" onClick={() => props.searchDepartureFlights(props.request)}>
                                            <i className="fa fa-mail-forward"></i>
                                            <span>Departure</span>
                                        </a>
                                    </li>
                                    <li className={"nav-item " + (props.isRoundTrip && props.returnResult ? "" : "hide")}>
                                        <a className={getTabClass(props.isReturn)} id="profile-tab" data-toggle="tab" href="#return" role="tab"
                                            aria-controls="return" aria-expanded="false" onClick={() => props.searchReturnFlights(props.request)}>
                                            <i className="fa fa-mail-reply"></i>
                                            <span>Return</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className={getTabContentClass(props.isDeparture)} role="tabpanel" id="departure" aria-labelledby="home-tab" aria-expanded="true">
                                        <ResultList result={props.departureResult} />
                                    </div>
                                    <div className={getTabContentClass(props.isReturn)} id="return" role="tabpanel" aria-labelledby="profile-tab" aria-expanded="false">
                                        <ResultList result={props.returnResult} />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

const getTabClass = (value) => "nav-link " + (value ? "active" : "");
const getTabContentClass = (value) => "tab-pane fade " + (value ? "active show" : "");

export default SearchResult;