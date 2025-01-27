/* eslint-disable react/no-unescaped-entities */

import icon1 from "../../public/images/flux/icon1.svg"
import icon2 from "../../public/images/flux/icon2.svg"
import icon3 from "../../public/images/flux/icon3.svg"
import icon4 from "../../public/images/flux/icon3.svg"
import icon5 from "../../public/images/flux/icon5.svg"
import icon6 from "../../public/images/flux/icon6.svg"
import icon7 from "../../public/images/flux/icon7.svg"
import icon8 from "../../public/images/flux/icon8.svg"
import icon9 from "../../public/images/flux/icon9.svg"
import icon10 from "../../public/images/flux/icon10.svg"
import icon11 from "../../public/images/flux/icon11.webp"
import icon12 from "../../public/images/flux/icon12.svg"
import icon13 from "../../public/images/flux/icon13.webp"
import icon14 from "../../public/images/flux/icon14.svg"
import icon15 from "../../public/images/flux/icon15.svg"
import icon16 from "../../public/images/flux/icon16.svg"
import icon17 from "../../public/images/flux/icon17.svg"
import icon18 from "../../public/images/flux/icon18.webp"
import icon19 from "../../public/images/flux/icon19.svg"
import icon20 from "../../public/images/flux/icon20.webp"
import icon21 from "../../public/images/flux/icon21.svg"
import icon22 from "../../public/images/flux/icon22.svg"
import icon23 from "../../public/images/flux/icon23.png"
import icon24 from "../../public/images/flux/icon24.webp"
import icon25 from "../../public/images/flux/icon25.webp"
import icon26 from "../../public/images/flux/icon26.svg"
import icon27 from "../../public/images/flux/icon27.webp"
import icon28 from "../../public/images/flux/icon28.webp"
import icon29 from "../../public/images/flux/icon29.png"
import icon30 from "../../public/images/flux/icon30.svg"
import icon31 from "../../public/images/flux/icon31.svg"
import icon32 from "../../public/images/flux/icon32.svg"
import icon33 from "../../public/images/flux/icon33.svg"
import icon34 from "../../public/images/flux/icon34.svg"
import icon35 from "../../public/images/flux/icon35.png"
import icon36 from "../../public/images/flux/icon36.svg"
import icon37 from "../../public/images/flux/icon37.webp"
import icon38 from "../../public/images/flux/icon38.svg"
import icon39 from "../../public/images/flux/icon39.svg"
import icon40 from "../../public/images/flux/icon40.svg"
import icon41 from "../../public/images/flux/icon41.svg"
import icon42 from "../../public/images/flux/icon42.webp"
import icon43 from "../../public/images/flux/icon43.svg"
import icon44 from "../../public/images/flux/icon44.svg"
import icon45 from "../../public/images/flux/icon45.svg"
import icon46 from "../../public/images/flux/icon46.svg"
import icon47 from "../../public/images/flux/icon47.svg"
import icon48 from "../../public/images/flux/icon48.MENU.webp"
import icon480 from "../../public/images/flux/icon48.svg"
import icon49 from "../../public/images/flux/icon49.svg"
import icon50 from "../../public/images/flux/icon50.webp"
import icon51 from "../../public/images/flux/icon51.png"
import icon52 from "../../public/images/flux/icon52.webp"
import icon53 from "../../public/images/flux/icon53.svg"
import icon54 from "../../public/images/flux/icon54.svg"
import icon55 from "../../public/images/flux/icon55.svg"
import icon56 from "../../public/images/flux/icon56.svg"
import icon57 from "../../public/images/flux/icon57.svg"
import icon58 from "../../public/images/flux/icon58.svg"
import icon59 from "../../public/images/flux/icon59.svg"
import icon60 from "../../public/images/flux/icon60.svg"
import icon61 from "../../public/images/flux/icon61.svg"
import icon62 from "../../public/images/flux/icon62.webp"
import icon63 from "../../public/images/flux/icon63.svg"
import icon64 from "../../public/images/flux/icon64.png"
import icon65 from "../../public/images/flux/icon65.svg"
import icon66 from "../../public/images/flux/icon66.png"
import icon67 from "../../public/images/flux/icon67.webp"
import icon68 from "../../public/images/flux/icon68.svg"
// import icon69 from "../../public/images/flux/icon69.svg"


import React from "react";
import { useState, useEffect } from "react";
import styles from "./index.module.css"
import Head from "next/head";
import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";
import Modal from 'react-bootstrap/Modal';
import fluxCircle from "../../public/images/flux/Flux-Circle-Thing.svg"
import image1 from "../../public/images/flux/Volume.svg"
import image2 from "../../public/images/flux/Union.svg"
import image3 from "../../public/images/flux/Arrows.svg"
import image4 from "../../public/images/flux/algo.svg"
import image5 from "../../public/images/flux/block.svg"
import image6 from "../../public/images/flux/shield.svg"
import image7 from "../../public/images/flux/blocktime.svg"
import image8 from "../../public/images/flux/max supply.svg"
import image9 from "../../public/images/flux/halving.svg"



import lineLogos from "../../public/images/flux/logoline.svg"

import circleGraph from "../../public/images/flux/circleGraph.svg"



export function Flux() {
    let circsup = 0;
    const url = 'https://explorer.runonflux.com/api/statistics/circulating-supply';
    const url2 = 'https://api.runonflux.com/daemon/getzelnodecount';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let thedata = data;
        let roundedData = String(thedata).split('.')[0];
        circsup = parseInt(roundedData);
        move(roundedData);
      })
      .catch(function(error) {
        console.log(error);
      });

    fetch(url2)
        .then((response) => {
            return response.json();
        })
        .then((data) =>{
            let thedata = data;
            let whatweneed = "cumulus-enabled";
            let cumulus = thedata.data["cumulus-enabled"];
            let stratus = thedata.data["stratus-enabled"];
            let nimbus = thedata.data["nimbus-enabled"];
            let cumulusAmount = parseInt(cumulus) * 1000;
            let stratisAmount = parseInt(stratus) * 40000;
            let nimbusAmount = parseInt(nimbus) * 12500;
            let locked = cumulusAmount + stratisAmount + nimbusAmount;
            // stratus 40k
            // nimbus 12500
            move2(locked);
        })
        .catch(function(error) {
            console.log(error);
        });

    var i = 0;
    function move(percent) {
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var elemnum = document.getElementById("percent");
        var elemtext = document.getElementById("amount");
        var percentage = parseInt(percent)/440000000 * 100;
        percentage = Math.round(percentage)
        console.log(percent);
        var width = percentage;
        elemnum.innerHTML = width + "%";
        elem.style.width = width + "%";

        let ccnum = String(percent);
        let ccnumspaced = ccnum.match(/.{1,3}/g);
        elemtext.innerHTML = ccnumspaced.join(',') + " FLUX";
        }
      }


    var j = 0;
    function move2(percent) {
        if (j == 0) {
            j = 1;
            var elem = document.getElementById("myBar2");
            var elemnum = document.getElementById("percent2");
            var elemtext = document.getElementById("amount2");
            var percentage = parseInt(percent)/circsup * 100;
            percentage = Math.round(percentage)
            var width = percentage;
            elemnum.innerHTML = width + "%";
            elem.style.width = width + "%";

            let ccnum = String(percent);
            let ccnumspaced = ccnum.match(/.{1,3}/g);
            elemtext.innerHTML = ccnumspaced.join(',') + " FLUX";
        }
    }

    return (
        <main>
            <section className={styles.section1}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-7 col-md-6">
                        <h1>A world <br></br> powered by <span>Flux</span></h1>
                        <p>Flux cryptocurrency powers the ecosystem and is used to purchase resources, collateralize
                            nodes, and fuel transactions on FluxOS. It rewards both miners for validating transactions and FluxNode
                            operators for providing computational resources.</p>
                        <div className={styles.buttons}>
                        <a href="https://whitepaper.app.runonflux.io/" className={styles.btn2}>Whitepaper</a>
                        <a href="https://docs.runonflux.com/" className={styles.btn1}>Docs</a>
                        </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className={styles.headerImg}>
                            {/* <Image  src={fluxCircle} alt="Flux-Circle-Thing"/> */}
                            </div>  
                        </div>
                    </div>
                    <div className="row mt-5">
                    <div className="col-12">
                    <div className={styles.headerInfo}>
                    <div className={styles.infoCard}>
                        <div className={styles.iconCircle}>
                            <Image src={image1} alt=""></Image>
                        </div>
                        <div className={styles.infoCardText}>
                            <div className={styles.blue}>25.4M+</div>
                            <div className={styles.subText}>TOTAL VOLUME</div>
                            <div className={styles.blueLine}></div>
                        </div>
                    </div>
                    <div className={styles.infoCardMiddle}>
                        <div className={styles.iconCircle}>
                            <Image src={image2} alt=""></Image>
                        </div>
                        <div className={styles.infoCardText}>
                            <div className={styles.blue}>4.6M+ Ts/s</div>
                            <div className={styles.subText}>HASH RATE</div>
                            <div className={styles.blueLine}></div>
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.iconCircle}>
                            <Image src={image3} alt=""></Image>
                        </div>
                        <div className={styles.infoCardText}>
                            <div className={styles.blue}>342k+</div>
                            <div className={styles.subText}>TRANSACTIONS</div>
                            <div className={styles.blueLine}></div>
                        </div>
                    </div>
                </div>
                </div>
                    </div>
                </div>
            </section>

            <section className={styles.section2}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.assetTexts}>
                                <div>
                            <h3>The <span>Flux</span> Asset</h3>
                            <p>The total block reward on the Flux 
                            blockchain is divided equally between POW miners and FluxNode operators 
                            for every block. In addition, there is a hierarchy among the different
                            FluxNode tiers, with the most computationally heavy FluxNode entitled 
                            to the largest share of the initial 50% distribution reserved for FluxNode.</p>
                            <div className={styles.buttons}>
                            <a href="https://pouwlitepaper.app.runonflux.io/" className={styles.btn1}>FluxPoUW</a>
                            <Link className={styles.btn1} href="/nodes">FluxNode</Link>
                            </div>
                            </div></div>
                         
                         
                        </div>
                        <div className="col-lg-6 mt-5">
                            <div className={styles.img2}>
                            <Image className={styles.assetImg} src={circleGraph} alt="Flux-Circle-Graph"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.section3}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className={styles.tokenomics}>
                        <div className="row">
                            <div className="col-5">
                            <div className={styles.subTitle}><span>Flux</span> Tokenomics</div>
                            </div>
                            <div className="col-7">
                            <div className={styles.subTitle2}><span className={styles.paddingRight}>Max Supply</span> 
                             <span className={styles.blue}>440,000,000 FLUX</span></div>
                            </div>
                        <hr className={styles.border1}></hr>
                    </div>
                    
                <div className={styles.progressBar}>
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-6">
                        <div className={styles.left}>
                        <div className={styles.barTitle}>Circulating Supply</div>
                    </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-6">
                        <div className={styles.right}>
                        <div id="amount" className={styles.blue}>440,000,000 FLUX</div>
                        <div id="percent" className={styles.centerBlue}>73%</div>

                        <div className={styles.myProgress} id="myProgress">
                            <div className={styles.myBar} id="myBar"></div>
                        </div>
                    </div>
                        </div>
                    </div> 
                    <hr className={styles.border1}></hr>
                </div>

                <div className={styles.progressBar2}>
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-6">
                        <div className={styles.left}>
                        <div className={styles.barTitle}>Locked Supply <span className={styles.hidden}></span></div>
                    </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-6">
                        <div className={styles.right}>
                        
                            <div id="amount2" className={styles.blue}>123,430,000 FLUX</div>
                            <div id="percent2" className={styles.centerBlue}>42%</div>
                         
                        <div className={styles.myProgress} id="myProgress2">
                            <div className={styles.myBar2} id="myBar2"></div>
                        </div>
                    </div>
                        </div>
                    </div>
                    <hr className={styles.hidden}></hr>
                </div>
            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "50px"}}>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className={styles.statCard}>
                                <div>
                                <div className={styles.statImgContainer}>
                                <Image src={image4} className={styles.statImg} alt=""></Image>
                            </div>
                            <h5 className={styles.smallBlackText}>Hashing Algorithm</h5>
                            <h6 className={styles.subTitle02}>FLUXPOUW</h6>
                            <p className={styles.smallBottomText}>Equihash 125_4</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className={styles.statCard}>
                                <div>
                                <div className={styles.statImgContainer}>
                                <Image src={image5} className={styles.statImg} alt=""></Image>
                            </div>
                            <h5 className={styles.smallBlackText}>Block Reward</h5>
                            <h6 className={styles.subTitle02}>37.5 FLUX</h6>
                            </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4">
                                    <div className={styles.statCard}>
                                        <div>
                                        <div className={styles.statImgContainer}>
                                    <Image src={image6} className={styles.statImg} alt=""></Image>
                                </div>
                                <h5 className={styles.smallBlackText}>Reward Distribution</h5>
                                <h6 className={styles.subTitle02}>50% POW - 50% NODE</h6>
                              </div>
                                        </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4">
                                    <div className={styles.statCard}>
                                        <div>
                                        <div className={styles.statImgContainer}>
                                    <Image src={image7} className={styles.statImg} alt=""></Image>
                                </div>
                                <h5 className={styles.smallBlackText}>Block Time</h5>
                                <h6 className={styles.subTitle02}>2 MINUTES</h6>
                                    </div>
                                        </div>
                                    </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className={styles.statCard}>
                            <div>
                            <div className={styles.statImgContainer}>
                                <Image src={image8} className={styles.statImg} alt=""></Image>
                            </div>
                            <h5 className={styles.smallBlackText}>Max Supply</h5>
                            <h6 className={styles.subTitle02}>440,000,000</h6>
                            </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className={styles.statCard}>
                                    <div>
                                    <div className={styles.statImgContainer}>
                                <Image src={image9} className={styles.statImg} alt=""></Image>
                                    </div>
                                    <h5 className={styles.smallBlackText}>Halving</h5>
                                    <h6 className={styles.subTitle02}>2.5 YEARS</h6>
                                    </div>
                                
                                </div>
                            </div>
                            
                    </div>
                </div>
            </section>

            <section className={styles.section4} style={{marginTop: "50px", marginBottom: "100px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.text3}>
                                <div>
                                <h3><span>Flux</span> is a <span className={styles.blue}>Multichain</span> <br></br>Cryptocurrency</h3>
                            <p className="mb-4">With Flux's parallel assets, you can leverage the beneficial
                         features of multiple blockchains, such as access to various DeFi platforms. Flux's parallel 
                         assets are interchangeable 1:1 with native Flux through the Fusion app in Zelcore.</p>
                         <a href="/parallelMining" className={styles.btn1}>Discover assets</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.img3}>
                            {/* <Image className={styles.multiImg} src={mulitRing} alt="Flux-Circle-Graph"/> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={styles.centerImg}>
                        <Image src={lineLogos} alt=""/>
                        </div>
                </div>
                <div className="row" style={{marginTop: "100px"}}>
                    <h3 className="text-center">The<span> Flux</span> Ecosystem</h3>
                    <p className={styles.pop}>The Flux Ecosystem is a state-of-the-art blockchain network that 
                        encompasses several integral components, including parallel assets with Layer 1 blockchains like
                        Solana, AVAX, and ALGO.                    
                        <br></br>
                        <br></br>
                        Additionally, it encompasses projects that are being built in collaboration with FluxLabs, a diverse and 
                        vibrant global community, and its own self-custody wallet, Zelcore, which is renowned for its safety and 
                        decentralization. Other essential elements of the Flux Ecosystem include FluxCloud, FluxNodes, and various
                        decentralized applications (dApps) that operate on the Flux network.</p>
                </div>
                <div className="row" style={{marginTop: "100px"}}>
                    <div className={styles.ecoImg}>
                    {/* <Image src={ecosystemImg} alt=""/> */}
                    </div>
                </div>
                <div className="row" style={{marginTop: "50px"}}>
                    <h3>Exchanges</h3>
                    <p className={styles.exchanges1}>  Flux is a digital asset that is listed on several different exchanges, each of which offers various features 
                    such as buying and selling.</p>
                    <p className={styles.exchanges1}><i>Exchanges are not controlled by Flux, and in case of any issues with
                    any of these exchanges, you must address them directly with the exchange.</i></p>
                    <p className={styles.exchanges1}> For more markets see <a target="_blank" href="https://coinmarketcap.com/currencies/zel/">CoinMarketCap </a>or <a href="https://www.coingecko.com/en/coins/flux-zelcash">CoinGecko.</a></p>
                </div>
                <hr></hr>
                </div>
            </section>

            <section className={styles.section5} id="exchanges">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon1} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Coinmetro
                                <a href="https://go.coinmetro.com/exchange/FLUX/buy" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon2} alt=""></Image>
                                  
                                </div>
                                <div className={styles.extext}>
                                KuCoin
                                    <a href="https://trade.kucoin.com/FLUX-USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon3} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Binance
                                    <a href="https://www.binance.com/en/trade/FLUX_USDT?ref=GSWE4RZE" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>

                                </div>
                            </div>                       
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon4} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Binance.US
                                    <a href="https://www.binance.us/en/trade/pro/FLUX_USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon5} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                Crypto.com   
                                </div>
                                <a href="https://crypto.com/exchange/trade/spot/FLUX_USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon6} alt=""></Image>
                                  
                                </div>
                                <div className={styles.extext}>
                                HTX
                                    <a href="https://www.htx.com/trade/flux_usdt?type=spot" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon7} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Onus
                                    <a href="https://goonus.io/en/markets/FLUX/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>

                                </div>
                            </div>
                        </div>
                       
                       
                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon8} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Gate.io
                                    <a href="https://www.gate.io/trade/FLUX_USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon9} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    CoinEx
                                    <a href="https://www.coinex.com/exchange/flux-usdt" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon10} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    TRADEOGRE
                                    <a href="https://tradeogre.com/exchange/BTC-FLUX" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon62} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                   PancakeSwap
                                    <a href="https://pancakeswap.finance/swap?outputCurrency=0xaFF9084f2374585879e8B434C399E29E80ccE635" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon63} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    UNISWAP
                                    <a href="https://info.uniswap.org" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon65} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Tokok
                                    <a href="https://www.tokok.com/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon66} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    SafeTrade
                                    <a href="https://safe.trade/trading/fluxbtc" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon67} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Citex
                                    <a href="https://trade.citex.co.kr/trade/FLUX_BTC" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6"  > 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon68} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    BitForex
                                    <a href="https://www.bitforex.com/en/spot/flux_usdt" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                       
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon11} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Bitrue
                                    <a href="https://www.bitrue.com/trade/flux_usdt" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon12} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Bitkan
                                    <a href="https://bitkan.pro/trade/FLUX_USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon13} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    ZT Global
                                    <a href="https://www.ztbzh.net/exchange?coin=FLUX_USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon14} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Mandala
                                    <a href="https://trade.mandala.exchange/en/trade/basic/FLUX_BTC" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon15} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://coindcx.com/trade/FLUXUSDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon16} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.pionex.com/en-US/trade/FLUX_USDT/pionex.v2" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon17} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://stealthex.io/?from=flux&to=usdttrc20" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon18} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Attlas
                                    <a href="https://attlas.io/en/spot/FLUX_VNDC" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                      
                      
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon19} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Sevenb
                                    <a href="https://sevenb.io/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon20} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.tokocrypto.com/trade/FLUX_BTC" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon21} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://simpleswap.io/coins/flux" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon22} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    ExchangeAssets
                                    <a className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon23} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Hitbtc
                                    <a href="https://hitbtc.com/flux-to-usdt" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon24} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    LBank
                                    <a href="https://www.lbank.info/exchange/flux/usdt" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon25} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.allchainbridge.com/#/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon26} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    SerumDex
                                    <a href="https://portal.projectserum.com/#tabSection" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon27} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    BKEX
                                    <a href="https://www.bkex.com/trade/FLUX_USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                

                    <br></br>

                  
                        <div className="col-lg-4 col-md-6"> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon28} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Bolsadx
                                    <a href="https://exchange.bolsadx.lat/en/trade/FLUX_USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon29} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Coinone
                                    <a href="https://coinone.co.kr/exchange/trade/flux/krw" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image src={icon30} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    InstaSwap
                                    <a href="https://instaswap.io/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>                       
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.circle}>
                                    <Image className={styles.autoHeight} src={icon31} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    Changelly
                                    <a href="https://changelly.com/buy-crypto" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon32} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://swapspace.co/?to=flux&amount=0.1" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon33} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                </div>
                                <a href="https://www.bitpanda.com/en/prices/flux-flux#" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon34} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://atomicdex.io/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon35} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.digifinex.com/en-ww/trade/USDT/FLUX" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6"> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon36} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://swyftx.com/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                            <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon37} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://wazirx.com/exchange/FLUX-USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image  src={icon38} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.aex.com/page/new_trade.html#/?symbol=flux_usdt" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div></div>
                          
                         
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon39} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.bitget.com/en/spot/FLUXUSDT_SPBL" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                       
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon40} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://latoken.com/exchange/FLUX_USDT?utm_source=new_listing&utm_medium=new_listing&utm_campaign=FLUX_listing&shortlink=bgib6m4b&c=FLUX_listing&pid=new_listing&deep_link_value=latokenapp://trade/FLUX/USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon41} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://sunflowercorp.com/futures/flux-to-usdt" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon42} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.xt.com/trade/flux_usdt" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image  src={icon43} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://swap.kaddex.com/?token0=FLUX&token1=KDA" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon44} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.billance.com/spot/exchange/FLUX_USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon45} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://biconomy.com/exchange?coin=FLUX_USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon46} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.cointiger.com/en-us/#/trade_center?coin=flux_usdt" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon47} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.bityard.com/en-US/trade/spot/FLUXUSDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon48} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://swap.menu/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"> 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon480} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://swapzone.io/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                     
                       
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon49} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.coinmark.vip/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon50} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://spectrum.fi/dex" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon51} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://phemex.com/spot/trade/FLUXUSDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon52} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://indodax.com/market/FLUXIDR" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon53} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://wirexapp.com/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon54} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://digitalexchange.id/basic-trading/FLUXIDR" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image src={icon55} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://invest.matrixport.com/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image  src={icon56} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://changenow.io/?from=fluxmainnet&to=btc" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image  src={icon57} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://bingx.com/en-us/spot/FLUXUSDT/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image  src={icon58} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.mexc.com/ru-RU/exchange/FLUX1_USDT" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image  src={icon59} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://bitvavo.com/en/flux/price" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image  src={icon60} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://www.giottus.com/" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6"  > 
                        <div className={styles.Exchangecard}>
                                <div className={styles.rect}>
                                    <Image  src={icon61} alt=""></Image>
                                </div>
                                <div className={styles.extext}>
                                    
                                </div>
                                <a href="https://changehero.io/coins/flux?utm_source=twitter&utm_medium=blogpost&utm_campaign=smm" rel="noreferrer" target="_blank" className={styles.btn10}>Buy Now</a>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>

           

        

        

         
           


    

           


               
        </main>
    );
}
