/**
 * @file Routes.js
 * @desc Handeling Routes of the App
 * @author AH
 */

// First-Party
import Home from "./Containers/Home";
import NotFound from "./Containers/NotFound";
import Login from "./Containers/Login";
import Game from "./Containers/Game"
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import UnauthenticatedRoute from "./Components/UnauthenticatedRoute";

// Third-Party
import React from "react";
import { Route, Switch } from "react-router-dom";

// Code
export default function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<UnauthenticatedRoute exact path="/login">
				<Login />
			</UnauthenticatedRoute>
			<AuthenticatedRoute exact path="/game">
				<Game />
			</AuthenticatedRoute>
			{/* Catch unmatched routes */}
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
}