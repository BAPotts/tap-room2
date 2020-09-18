import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import { connect } from 'react-redux';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: null,
      decriment: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleDecrementingKeg = (kegToDecrement) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pintsLeft } = kegToDecrement;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsLeft: pintsLeft,
    }
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }
  

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pintsLeft } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsLeft: pintsLeft
    }
    dispatch(action); 
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);   
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
      keg = {this.state.selectedKeg}
      onClickingDecrement = {this.handleDecrementingKeg} />
      buttonText = "Return to Keg List";
      
    }else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState} 
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;