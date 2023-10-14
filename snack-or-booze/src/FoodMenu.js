import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

/** 
 * Menu Component: Displays list of items as a menu. 
 * 
 * @param {Object[]} items - Array of items to be displayed.
 * @param {string} title - Title to be displayed at top of Menu.
 * @param {string} itemType - Type of items, used to build the URL in links. 
 * 
 * @component
 * @example
 * const items = [{id: '1', name: 'Item1'}, {id: '2', name: 'Item2'}];
 * return (
 * <Menu items={items} title='Example Menu' itemType='example' />
 * )
*/

function Menu({ items = [], title, itemType }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            { title || 'Menu'}
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${itemType}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
