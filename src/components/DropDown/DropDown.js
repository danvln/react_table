import React, { useEffect } from 'react';
import icon from '../../assets/svg/all.svg';
import classes from './DropDown.module.css';

import Main from './Main/Main';
import SearchInput from './SearchInput/SearchInput';
import SearchValue from './SearchValue/SearchValue';
import Check from './Check/Check';

let indexOfColomn = undefined;

const hideAllDropDown = () => {
	let d = document.getElementsByClassName('drop');
	for (let item of d) {
		item.style.display = 'none';
	}
};

const hideDropDown = (id) => {
	document.getElementById(id).style.display = 'none';
};

let BTNMain = null;
let BTNSearch = null;
let BTNCheck = null;
let toRender = null;


const contentDropCheck = (allColumns, hiddenCol) => {
	BTNMain = classes.table__menu__item__btn__closed;
	BTNSearch = classes.table__menu__item__btn__closed;
	BTNCheck = classes.table__menu__item__btn__open;
	toRender = <Check columns={allColumns} hiddenCol={hiddenCol} />
};
const DropDown = (props) => {
	const displayDropDown = (id) => {
	hideAllDropDown();
	document.getElementById(`dropDown${id}`).style.display = 'block';
	indexOfColomn = id;
	contentDropMain();
};
const contentDropMain = () => {
	BTNMain = classes.table__menu__item__btn__open;
	BTNSearch = classes.table__menu__item__btn__closed;
	BTNCheck = classes.table__menu__item__btn__closed;
	toRender = <Main resetsizing={props.resetsizing}/>
};

	const menuBTNS = () => (
		<div style={{ display: 'flex' }}>
			<button
				onClick={() => {
					hideDropDown(`dropDown${props.ID}`);
				}}
				id={`dropDownInBTN${props.ID}`}
				className={BTNMain}
			>
				<svg className={classes.table__menu__item__btnIcon}>
					<use xlinkHref={`${icon}#icon-menu`} />
				</svg>
			</button>

			<button
				onClick={() => {
					contentDropSearchInput();
				}}
				id={`dropDownSearchBTN${props.ID}`}
				className={BTNSearch}
			>
				<svg className={classes.table__menu__item__btnIcon}>
					<use xlinkHref={`${icon}#icon-equalizer2`} />
				</svg>
			</button>

			<button
				onClick={() => {
					contentDropCheck(props.allColumns, props.hiddenCol);
				}}
				id={`dropDownColumnsBTN${props.ID}`}
				className={BTNCheck}
			>
				<svg className={classes.table__menu__item__btnIcon}>
					<use xlinkHref={`${icon}#icon-format_list_numbered`} />
				</svg>
			</button>
		</div>

	);

	const contentDropSearchInput = () => {
		BTNMain = classes.table__menu__item__btn__closed;
		BTNSearch = classes.table__menu__item__btn__open;
		BTNCheck = classes.table__menu__item__btn__closed;
		toRender = <SearchInput contentDropSearchValue={contentDropSearchValue}
			indexOfColomn={indexOfColomn} />
	};
	const contentDropSearchValue = () => {
		BTNMain = classes.table__menu__item__btn__closed;
		BTNSearch = classes.table__menu__item__btn__open;
		BTNCheck = classes.table__menu__item__btn__closed;
		toRender = <SearchValue
			id={props.ID}
			data={props.data}
			contentDropSearchInput={contentDropSearchInput}
		/>;
	};
	return (
		<React.Fragment>
			<button
				onClick={() => {
					displayDropDown(props.ID);
				}}
				id={`dropDownBTN${props.ID}`}
				className={classes.table__menu__item__btn}
			>
				<svg className={classes.table__menu__item__btnIcon}>
					<use xlinkHref={`${icon}#icon-menu`} />
				</svg>
			</button>
			<div
				id={`dropDown${props.ID}`}
				className={'drop'}
				style={{
					position: 'absolute',
					width: '11.5rem',
					height: '16.5rem',
					top: '0rem',
					right: "-8.45rem",
					backgroundColor: '#3f5b76',
					zIndex: '2',
					borderRadius: '0.4rem',
					display: 'none',
					overflow: 'hidden',
					fontFamily: 'unset',
				}}
			>
				{menuBTNS(props)}
				<div
					style={{
						textTransform: 'none',
						fontWeight: 'normal',
						fontSize: '1rem',
						textAlign: 'left',
						height: '100%',
					}}
				>
					{toRender}
				</div>
			</div>
		</React.Fragment>
	);
};
export default DropDown;