import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
var NumberFormat =require('react-number-format');
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      cryptos:[]
    };

  }



  /*componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=IOT,ETH,DASH&tsyms=BTC,USD,EUR')
    .then(res=>{
      const cryptos=res.data;
      console.log(cryptos);
      this.setState({cryptos:cryptos})
    })
  } */

  newaxios = () => {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,IOT,EOS,NEO,XRP,BCH,TRX,BSV&tsyms=INR', )
    .then(res => {
      const cryptos = res.data;
      console.log(cryptos);
      this.setState({cryptos: cryptos});
  }) 
};

  componentDidMount() {
    this.newaxios();
  }

  componentDidUpdate() {
    setTimeout(
        function() {
            this.newaxios();
        }
        .bind(this),10000);
  }

  render() {
    return (
      <div className="App" >
      <center id="one"> CRYPTO CURRENCIES</center>
        {Object.keys(this.state.cryptos).map((key,i)=>(
        <div id="crypto-container" key={i}>
          <span  className="left">{key}</span>
          <span className="right"><NumberFormat value={this.state.cryptos[key].INR} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'₹'} /></span>
        </div>
        ))}
      </div>
    );
  }
}

export default App;
