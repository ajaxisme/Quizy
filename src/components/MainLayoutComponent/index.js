import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class MainLayout extends Component {
	render() {
		return (
			<Grid>
				<Row>
					{/* Header component */}
				</Row>
				<Row>
					<Col md={4}>
						{/* Scoreboard Component */}
					</Col>
					<Col md={8}>
						{/* PlayArea Component */}
					</Col>
				</Row>
				<Row>
					{/*Footer component */}
				</Row>
			</Grid>
		);
	}
}

export default MainLayout;