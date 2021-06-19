import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Cardp from './Cardp'

import axios from "axios";
import { FormatAlignJustifySharp } from '@material-ui/icons';


export default class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      list: [],
      filtro1:"",
      filtro2:"",
      form: {
        name: '',
        quantity: '',
        price: '',
      }

    };
  }


  componentDidMount() {
    
    this.AllProducts();

  }




  AllProducts = () => {
    axios.get('https://bakeshopbackend.herokuapp.com/products/all')
      .then(response => {
        console.log(this.props.filtro)
        console.log(this.props.filtro2)
        this.setState({
          filtro1:this.props.filtro,
          filtro2:this.props.filtro2,
        })
        let array = response.data;
        let numero=0;
        let usados=[]
        let vapalfront=false;
        console.log(array)
        let cardcomp = []
        if (this.state.filtro1 != '') {
          array = array.filter(word => word.type == this.state.filtro1);
        }

        cardcomp=array;
        switch (this.state.filtro2) {
          case 1:
            array=cardcomp;
            break;
          case 2:
            array = array.sort(function (a, b){
              return b.price - a.price;
          })
            console.log(array)
            break;
          case 3:
          array = array.sort(function (a, b){
            return a.price - b.price;
        })
            break;
        }
        if(this.props.cantidad!="todos"){
          console.log("cantidad"+this.props.cantidad);
          vapalfront=true;
          let newarray=[]
          for(var i = 0; i < 4; i++){
            numero=Math.floor(Math.random() * 20)+1;
            if(!usados.includes(numero)){
              newarray[i]=array[numero];
              usados.push(numero)
            }else{
              i=i-1
            }
          }
          array=newarray;
          console.log("array"+array)
        }
        array = array.map((user, i) => {
          return <Cardp key={i} id={array[i].id}img={"https://bakeshopbackend.herokuapp.com/" + array[i].image} titulo={array[i].name} precio={new Intl.NumberFormat("en-EN").format(array[i].price)} vapalfront={vapalfront} />
        })
        
        this.setState({
          list: array,
          products: array
        })
      });




  }


  render() {

    return (
      <div style={{ display: "flex", flexDirection: Row, flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {this.state.list}
      </div>

    )
  }
}



