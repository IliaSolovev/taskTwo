import React, {useState} from "react";
import ReactPaginate from 'react-paginate';
import injectSheet from 'react-jss';
import {H3} from "../../../Fonts";
import arrow_forward from './image/arrow_forward.svg';
import {DarkShade50} from "../../../Colors";

const classes = {
  paginator: {
    display: 'flex',
    listStyleType: 'none',
  },
  page: {
    width: 40,
    height: 40,
  },
  pageLinkClassName: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    ...H3,
    color: DarkShade50,
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
  },
  active: {
    borderRadius: 22,
    background: `linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)`,
    ...H3,
    fontWeight: 'bold',
  },
  activeLink: {
    color: '#fff',
  }
};

const Paginator = ({classes, initPage = 0, total = 15, ...rest}) => {
  let [prev, setPrev] = useState(false);
  let [next, setNext] = useState(<NextButton/>);

  const onChange = (value) => {
    if (value.selected === initPage) {
      setPrev(<div/>)
    } else if (value.selected === total - 1) {
      setNext(<div/>)
    } else {
      setPrev(<PrevButton/>);
      setNext(<NextButton/>);
    }
  };
  return (
    <div>
      <ReactPaginate
        className={ classes.paginator }
        pageCount={ total }
        pageRangeDisplayed={ 2 }
        marginPagesDisplayed={ 1 }
        initialPage={ initPage }
        pageLinkClassName={ classes.pageLinkClassName }
        pageClassName={ classes.page }
        activeClassName={ classes.active }
        activeLinkClassName={ classes.activeLink }
        previousLabel={ prev }
        nextLabel={ next }
        breakLabel={ <BreakLabel/> }
        containerClassName={ classes.paginator }
        onPageChange={ (val) => onChange(val) }
      />
    </div>
  );
};

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
  borderRadius: 22,
  background: 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)',
  cursor: 'pointer',
  outline: 'none',
};

const PrevButton = ({...rest}) => {
  return <div style={ {...buttonStyle} }><img style={ {transform: 'rotate(0.5turn)'} } src={ arrow_forward } alt=""/>
  </div>
};
const NextButton = ({...rest}) => {
  return <div style={ {...buttonStyle} }><img src={ arrow_forward } alt=""/></div>
};

const BreakLabel = ({...rest}) => {
  return <div style={ {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    ...H3,

  } }>...</div>
};

export default injectSheet(classes)(Paginator)