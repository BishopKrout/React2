import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

/**
 * Displays a welcome msg and counts available snacks & drinks.
 * 
 * @param {Object[]} snacks - Array of snack items.
 * @param {Object[]} drinks - Array of drink items.
 * 
 * @component
 * @example
 * const snacks = [{}, {}, {}];
 * const drinks = [{}. {}];
 * return (
 *  <Home snacks={snacks} drinks={drinks} />
 * )
 */

function Home({ snacks = [], drinks = [] }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bold">
              Welcome to Snack or Booze
            </p>
            <p>{snacks.length} Snacks Available</p>
            <p>{drinks.length} Drinks Available</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
