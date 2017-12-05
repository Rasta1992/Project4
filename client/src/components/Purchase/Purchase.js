import React from "react";
import {Container , Row, Col} from "../Grid";


 const Purchase = props =>	
 	<div>
 		<Row>
 			<Col size="xs-10">
 				<Container>
 					<h1 className="text-center" style={{color:"green"}}>Business Management Software</h1>
 					<h2 className="text-center">Our Mission</h2>
 					<h3 className="text-center">
 					 	Let us take a look at your business model, input your business info into our specially made algorithim.
 						This will give us data that will shed more light on harmfull practices that hurt growth.
						Our algorithim learns overtime and will adapt to new market condtions using information from the Watson API to catch trends
						 early. Your inventory and staff workload will be managed to ensure efficiency.
					</h3>
 				 </Container>
 			</Col>
 		</Row>
 	</div>

export default Purchase;