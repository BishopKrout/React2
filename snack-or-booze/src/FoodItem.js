import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/**
 * Item Component
 * 
 * Displays detailed information of a single item.
 * 
 * @param {Object[]} items - Array of items.
 * @param {string} cantFind - URL to redirect to if the item is not found.
 * @param {string} itemType - Type of the items, used to customize the display.
 * 
 * @component
 * @example
 * const items = [{id: "1", name: "Item1", description: "Description", recipe: "Recipe", serve: "Serve"}];
 * return (
 *   <Item items={items} cantFind="/not-found" itemType="example" />
 * )
 */

function Item({ items, cantFind, itemType }) {
  const { id } = useParams();

  let item = items.find(item => item.id === id);
  if (!item) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
