import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from '@material-ui/core';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import WebIcon from '@material-ui/icons/Web';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useDispatch, useSelector } from "react-redux";
import {setNav} from '../Action/navAction'

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		flexgrow: 1
	}
}));

function NavTabs() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const timeNav = useSelector(state => state.curNav);

	const handleChange = (event,newValue) => {
		dispatch(setNav(newValue));
		console.log(timeNav);
	};

	return (
		<div className={classes.root}>
		<AppBar position="static" color="default">
			<Tabs
				value={timeNav}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				variant="fullWidth"
			>
				<Tab icon={<WebIcon />} label="Posts" to='/posts' component={Link}/>
				<Tab icon={<PersonOutlineIcon />} label="Profile" to='/info' component={Link}/>
			</Tabs>
		</AppBar>
		</div>
  );
}

export default NavTabs;