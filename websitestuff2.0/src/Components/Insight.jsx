import * as React from 'react';
// import { Dropdown, DropdownButton, Table } from 'react-bootstrap'
import { Accordion, Table } from 'react-bootstrap';



class Insight extends React.Component {
    render() {
        return (
            <div>
                <Table>
                    <img src="airpollute.jpg" alt="airpollution" height="400" className="col-12" />
                </Table>
                <Accordion defaultActiveKey="" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h5>What is Air Pollution?</h5></Accordion.Header>
                        <Accordion.Body>
                            Air pollution refers to any physical, chemical or biological change in the air. It is the contamination of air by harmful gases, dust and smoke which affects plants, animals and humans drastically.
                            There is a certain percentage of gases present in the atmosphere. An increase or decrease in the composition of these gases is harmful for survival. The gaseous composition has
                            resulted in an increase in earth’s temperature, which is known as global warming.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h5>Types of Air Pollutants?</h5></Accordion.Header>
                        <Accordion.Body>
                        <h5>Primary Pollutants:</h5> The pollutants that directly cause air pollution are known as primary pollutants. For example, Sulphur-dioxide emitted from factories is a primary pollutant.<br />
                        <h5>Secondary Pollutants:</h5> The pollutants formed by the intermingling and reaction of primary pollutants are known as secondary pollutants. For example, Smog formed by the intermingling of smoke and fog is a secondary pollutant.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><h5>What are the Causes of Air Pollution?</h5></Accordion.Header>
                        <Accordion.Body>
                                <h5>1. Burning of Fossil Fuels:</h5>
                                The combustion of fossil fuels emits a large amount of sulphur dioxide. Carbon monoxide released by incomplete combustion of fossil fuels also results in air pollution.
                                <br />
                                <h5>2. Automobiles:</h5>
                                The gases emitted from vehicles such as jeeps, trucks, cars, buses, etc. pollute the environment. These are the major sources of greenhouse gases and also result in diseases among individuals.
                                <br />
                                <h5>3. Agricultural Activities:</h5>
                                hazardous gases emitted during agricultural activities. The insecticides, pesticides and fertilizers emit harmful chemicals in the atmosphere and contaminate it.
                                <br />
                                <h5>4. Factories and Industries:</h5>
                                Factories and industries are the main source of carbon monoxide, organic compounds, hydrocarbons and chemicals. These are released into the air, degrading its quality.
                                <br />
                                <h5>5. Mining Activities:</h5>
                                In the mining process, the minerals below the earth are extracted using large pieces of equipment. The dust and chemicals released during the process not only pollute the air, but also deteriorate the health of the workers and people living in the nearby areas.
                                <br />
                                <h5>6. Domestic Sources:</h5>
                                The household cleaning products and paints contain toxic chemicals that are released in the air. The smell from the newly painted walls is the smell of the chemicals present in the paints. It not only pollutes the air but also affects breathing.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        );
    }
}

export default Insight;

//Work Cited For Now is: https://byjus.com/biology/air-pollution-control/